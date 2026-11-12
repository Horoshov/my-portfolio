import fs from 'fs';
import path from 'path';
import { allProjects } from '../src/data/projects.js';
import { routesMeta } from '../src/data/routesMeta.js';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');

function cleanDescription(html) {
  if (!html) return 'Портфолио UX/UI дизайнера и разработчика';
  const text = html.replace(/<[^>]*>?/gm, '').trim();
  return text.length > 160 ? text.slice(0, 157) + '...' : text;
}

// Исправленная утилита: не трогаем, если уже есть слэш или в самом конце указано расширение файла (.html, .xml и т.д.)
function ensureSlash(url) {
  if (!url) return url;
  if (url.endsWith('/') || /\.[a-z0-9]+$/i.test(url)) return url;
  return `${url}/`;
}

function updateHtmlTags(html, { title, description, canonical, ogImage }) {
  let output = html;
  const imageToUse = ogImage ? (ogImage.startsWith('http') ? ogImage : `https://horoshov.ru${ogImage}`) : 'https://horoshov.ru/alex-profile.jpg';

  if (output.includes('<title>')) {
    output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  } else {
    output = output.replace('</head>', `  <title>${title}</title>\n  </head>`);
  }

  if (output.includes('name="description"')) {
    output = output.replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`);
  } else {
    output = output.replace('</head>', `  <meta name="description" content="${description}" />\n  </head>`);
  }

  if (output.includes('rel="canonical"')) {
    output = output.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);
  } else {
    output = output.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n  </head>`);
  }

  if (output.includes('property="og:title"')) {
    output = output.replace(/<meta property="og:title" content="[^"]*"[^>]*>/, `<meta property="og:title" content="${title}" />`);
  } else {
    output = output.replace('</head>', `  <meta property="og:title" content="${title}" />\n  </head>`);
  }

  if (output.includes('property="og:description"')) {
    output = output.replace(/<meta property="og:description" content="[^"]*"[^>]*>/, `<meta property="og:description" content="${description}" />`);
  } else {
    output = output.replace('</head>', `  <meta property="og:description" content="${description}" />\n  </head>`);
  }

  if (output.includes('property="og:url"')) {
    output = output.replace(/<meta property="og:url" content="[^"]*"[^>]*>/, `<meta property="og:url" content="${canonical}" />`);
  } else {
    output = output.replace('</head>', `  <meta property="og:url" content="${canonical}" />\n  </head>`);
  }

  if (output.includes('property="og:image"')) {
    output = output.replace(/<meta property="og:image" content="[^"]*"[^>]*>/, `<meta property="og:image" content="${imageToUse}" />`);
  } else {
    output = output.replace('</head>', `  <meta property="og:image" content="${imageToUse}" />\n  </head>`);
  }

  if (output.includes('name="twitter:title"')) {
    output = output.replace(/<meta name="twitter:title" content="[^"]*"[^>]*>/, `<meta name="twitter:title" content="${title}" />`);
  } else {
    output = output.replace('</head>', `  <meta name="twitter:title" content="${title}" />\n  </head>`);
  }

  if (output.includes('name="twitter:description"')) {
    output = output.replace(/<meta name="twitter:description" content="[^"]*"[^>]*>/, `<meta name="twitter:description" content="${description}" />`);
  } else {
    output = output.replace('</head>', `  <meta name="twitter:description" content="${description}" />\n  </head>`);
  }

  if (output.includes('name="twitter:image"')) {
    output = output.replace(/<meta name="twitter:image" content="[^"]*"[^>]*>/, `<meta name="twitter:image" content="${imageToUse}" />`);
  } else {
    output = output.replace('</head>', `  <meta name="twitter:image" content="${imageToUse}" />\n  </head>`);
  }

  if (output.includes('name="twitter:card"')) {
    output = output.replace(/<meta name="twitter:card" content="[^"]*"[^>]*>/, `<meta name="twitter:card" content="summary_large_image" />`);
  } else {
    output = output.replace('</head>', `  <meta name="twitter:card" content="summary_large_image" />\n  </head>`);
  }

  return output;
}

const sitemapUrls = [];
const generatedRoutes = new Set();

for (const [routePath, meta] of Object.entries(routesMeta)) {
  const cleanPath = routePath === '/' ? '' : routePath.startsWith('/') ? routePath.slice(1) : routePath;
  const targetDir = cleanPath ? path.join(distDir, cleanPath) : distDir;
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonical = ensureSlash(meta.canonical);

  const updatedHtml = updateHtmlTags(template, {
    title: meta.title,
    description: meta.description,
    canonical,
  });

  const outPath = cleanPath ? path.join(targetDir, 'index.html') : indexPath;
  fs.writeFileSync(outPath, updatedHtml, 'utf-8');
  generatedRoutes.add(routePath);

  if (!['/privacy', '/terms', '/work'].includes(routePath)) {
    sitemapUrls.push(canonical);
  }
}

for (const project of allProjects) {
  const routePath = `/project/${project.id}`;
  const targetDir = path.join(distDir, 'project', String(project.id));
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const title = `${project.title} — Horoshov`;
  const description = cleanDescription(project.description);
  const canonical = ensureSlash(`https://horoshov.ru/project/${project.id}`);
  const ogImage = project.ogImage || project.image;

  let updatedHtml = updateHtmlTags(template, {
    title,
    description,
    canonical,
    ogImage,
  });

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": description,
    "url": canonical,
    "image": ogImage ? `https://horoshov.ru${ogImage}` : undefined,
    "author": {
      "@type": "Person",
      "name": "Alex Horoshov"
    }
  });

  updatedHtml = updatedHtml.replace('</head>', `  <script type="application/ld+json" id="schema-creative-work">${jsonLd}</script>\n  </head>`);

  const outPath = path.join(targetDir, 'index.html');
  fs.writeFileSync(outPath, updatedHtml, 'utf-8');
  generatedRoutes.add(routePath);
  sitemapUrls.push(canonical);
}

const notFoundHtml = updateHtmlTags(template, {
  title: 'Страница не найдена — Horoshov',
  description: 'Запрашиваемая страница не найдена.',
  canonical: 'https://horoshov.ru/404.html',
});
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');

const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(loc => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${loc === 'https://horoshov.ru/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

console.log(`Postbuild completed successfully. Generated ${generatedRoutes.size} static routes and sitemap.xml.`);