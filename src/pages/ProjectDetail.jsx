import React, { useEffect, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';

const PostmanTrackerLayout = lazy(() => import('./layouts/PostmanTrackerLayout'));

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!project) return;

    const pageTitle = `${project.title} — Horoshov`;
    const plainDesc = project.description ? project.description.replace(/<[^>]*>?/gm, '') : 'Портфолио UX/UI дизайнера и разработчика';
    const pageUrl = `https://horoshov.ru/project/${id}`;
    const pageImage = project.ogImage || project.image ? `https://horoshov.ru${project.ogImage || project.image}` : 'https://horoshov.ru/favicon.svg';

    document.title = pageTitle;

    const updateMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    updateMeta('meta[name="description"]', 'content', plainDesc);
    updateMeta('meta[property="og:title"]', 'content', pageTitle);
    updateMeta('meta[property="og:description"]', 'content', plainDesc);
    updateMeta('meta[property="og:url"]', 'content', pageUrl);
    updateMeta('meta[property="og:image"]', 'content', pageImage);
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'content', pageTitle);
    updateMeta('meta[name="twitter:description"]', 'content', plainDesc);
    updateMeta('meta[name="twitter:image"]', 'content', pageImage);
    updateMeta('link[rel="canonical"]', 'href', pageUrl);

    // JSON-LD CreativeWork Schema.org
    let scriptEl = document.querySelector('#schema-creative-work');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'schema-creative-work';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": plainDesc,
      "url": pageUrl,
      "image": pageImage,
      "author": {
        "@type": "Person",
        "name": "Alex Horoshov"
      }
    });

    return () => {
      const existingScript = document.querySelector('#schema-creative-work');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [project, id]);

  // Обработка случая когда проект не найден
  if (!project) {
    return (
      <PageContainer>
        <div className="pd-not-found">
          <h1>Project not found</h1>
          <Link to="/projects" className="pd-back-link">
            ← Back to Projects
          </Link>
        </div>
      </PageContainer>
    );
  }

  // Проверка ID для переключения на кастомный макет
  // Добавлена проверка и на строковый ID 'postman-tracker' и на числовой '107' из твоего файла данных
  const isPostman = String(id) === 'postman-tracker' || String(id) === '107';

  return (
    <motion.div 
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isPostman ? (
        // Для Postman используется полностью кастомный layout БЕЗ PageContainer
        <Suspense fallback={null}>
          <PostmanTrackerLayout project={project} />
        </Suspense>
      ) : (
        // ДЛЯ ВСЕХ ОСТАЛЬНЫХ ПРОЕКТОВ ОСТАВЛЯЕМ ВСЕ В ТОЧНОСТИ КАК БЫЛО
        <PageContainer>
          <PageHeader title={project.title} category={project.cat} />

          <section className="pd-info-grid">
            <div className="pd-description-col">
              <div 
                className="project-description" 
                dangerouslySetInnerHTML={{ __html: project.description }} 
              />
              {project.descriptionSecondary && (
                <div 
                  className="pd-desc-secondary"
                  dangerouslySetInnerHTML={{ __html: project.descriptionSecondary }} 
                />
              )}
            </div>
            
            <div className="pd-details-col">
              {project.details && project.details.map((detail, idx) => (
                <div key={idx} className="pd-detail-item">
                  <span className="pd-detail-label">{detail.label}</span>
                  <span className="pd-detail-value">
                    {detail.label === "Link" ? (
                      <a 
                        href={detail.value.startsWith('http') ? detail.value : `https://${detail.value}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="pd-hero-section">
            <img src={project.image} alt={project.title} className="pd-hero-img" fetchPriority="high" decoding="async" />
          </section>

          {project.sectionText && (
            <section className="pd-text-block-new">
              {project.sectionTitle && (
                <h2 className="section-subtitle">{project.sectionTitle}</h2>
              )}
              <div 
                className="section-description" 
                dangerouslySetInnerHTML={{ __html: project.sectionText }} 
              />
            </section>
          )}

          {project.imageFooter && (
            <section className="pd-footer-image-section">
              <img 
                src={project.imageFooter} 
                alt={`${project.title} detailed view`} 
                className="pd-hero-img" 
                loading="lazy"
                decoding="async"
              />
            </section>
          )}

          <footer className="pd-back-footer">
            <Link to="/projects" className="pd-back-link">
              ← Back to Projects
            </Link>
          </footer>
        </PageContainer>
      )}
    </motion.div>
  );
};

export default ProjectDetail;