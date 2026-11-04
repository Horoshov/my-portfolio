import fs from 'fs';
import path from 'path';
import { allProjects } from '../src/data/projects.js';
import { routesMeta } from '../src/data/routesMeta.js';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory not found.');
  process.exit(1);
}

let errors = 0;

function checkFile(filePath, desc) {
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] Missing ${desc}: ${filePath}`);
    errors++;
  }
}

// 1. Check 404.html
checkFile(path.join(distDir, '404.html'), '404 page');

// 2. Check static routes & project routes
const allRoutes = [...Object.keys(routesMeta), ...allProjects.map(p => `/project/${p.id}`)];

for (const route of allRoutes) {
  const cleanPath = route === '/' ? '' : route.startsWith('/') ? route.slice(1) : route;
  const htmlPath = cleanPath ? path.join(distDir, cleanPath, 'index.html') : path.join(distDir, 'index.html');
  checkFile(htmlPath, `HTML for route ${route}`);

  if (fs.existsSync(htmlPath)) {
    const content = fs.readFileSync(htmlPath, 'utf-8');
    
    // Exactly one <title>
    const titleMatches = content.match(/<title>[\s\S]*?<\/title>/g);
    if (!titleMatches || titleMatches.length !== 1) {
      console.error(`[FAIL] Route ${route} has ${titleMatches ? titleMatches.length : 0} <title> tags (expected 1).`);
      errors++;
    }

    // Exactly one canonical
    const canonicalMatches = content.match(/<link rel="canonical" href="[^"]*"\s*\/?>/g);
    if (!canonicalMatches || canonicalMatches.length !== 1) {
      console.error(`[FAIL] Route ${route} has ${canonicalMatches ? canonicalMatches.length : 0} canonical tags (expected 1).`);
      errors++;
    }

    // Matching og:url
    const expectedCanonical = route === '/' ? 'https://horoshov.ru/' : route.startsWith('/project/') ? `https://horoshov.ru${route}` : routesMeta[route]?.canonical;
    if (expectedCanonical && !content.includes(`property="og:url" content="${expectedCanonical}"`)) {
      console.error(`[FAIL] Route ${route} missing or mismatched og:url (expected ${expectedCanonical}).`);
      errors++;
    }
  }
}

// 3. Check sitemap.xml
checkFile(path.join(distDir, 'sitemap.xml'), 'sitemap.xml');

if (errors > 0) {
  console.error(`\nCheck build failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('Check build passed successfully: all routes and assets verified.');
  process.exit(0);
}
