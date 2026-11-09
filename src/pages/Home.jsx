import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import StatsCardsSection from '../components/StatsCardsSection';
import StatList from '../components/StatList'; 
import ProjectCard from '../components/ProjectCard'; 
import ProjectsGrid from '../components/ProjectsGrid';
import { allProjects } from '../data/projects';

const services = [
  { 
    id: '01', 
    title: 'Data-Driven UX & Analytics', 
    img: '/assets/projects/Postman.webp', 
    tags: ['Analytics', 'CJM', 'User Testing', 'JTBD'] 
  },
  { 
    id: '02', 
    title: 'Complex Interfaces', 
    img: '/assets/projects/Polymatica.webp', 
    tags: ['FinTech', 'BI Systems', 'Dashboard', 'SaaS'] 
  },
  { 
    id: '03', 
    title: 'Scalable Design Systems', 
    img: '/assets/projects/Horoshov.webp', 
    tags: ['Components', 'Design Tokens', 'Documentation'] 
  },
  { 
    id: '04', 
    title: ' Frontend Focus (Engineering)', 
    img: '/assets/projects/MVideo.webp', 
    tags: ['Frontend-friendly', 'Technical Audit', 'Analytics'] 
  },
  { 
    id: '05', 
    title: 'End-to-End Product Design', 
    img: '/assets/projects/Domilend.webp', 
    tags: ['Visual Language', 'Web', 'iOS / Android'] 
  }
];

const howIWorkSteps = [
  {
    category: 'Discovery',
    duration: '1-2 недели',
    title: 'Погружение в продуктовые цели',
    description: 'Провожу интервью со стейкхолдерами и конкурентный анализ для определения KPI проекта. На этом этапе мы фокусируемся на согласовании стратегии продукта с потребностями пользователей через исследования и позиционирование на рынке.'
  },
  {
    category: 'Design',
    duration: '2-3 недели',
    title: 'Создание эффективных сценариев и решений',
    description: 'Разработка масштабируемых дизайн-систем и детализированных прототипов с акцентом на интуитивно понятную информационную архитектуру (IA). Приоритет отдается UI, ориентированному на конверсию, и стандартам доступности.'
  },
  {
    category: 'Build',
    duration: '1-3 недели',
    title: 'Разработка сервисов с использованием мощных инструментов',
    description: 'Перенос дизайн-токенов в функциональный фронтенд. Использую современные фреймворки и архитектуру для создания адаптивных модульных компонентов, обеспечивающих техническую стабильность и легкость масштабирования.'
  },
  {
    category: 'Launch',
    duration: '1-2 недели',
    title: 'Запуск оптимизированного продукта для реальных результатов',
    description: 'Финальная настройка технического SEO, аудит производительности и QA-тестирование. Гарантирую полную оптимизацию продукта по показателям Core Web Vitals, обеспечивая высокую скорость работы и готовность к рыночной конкуренции.'
  }
];

const featuredProjects = allProjects.slice(0, 6);

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const homeStats = [
    { value: '15+', label: 'Years of Experience', title: 'Expertise' },
    { value: '20+', label: 'Completed Successfully', title: 'Projects' },
    { value: '96', label: 'Customer Satisfaction', title: 'Percent' }
  ];

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <section className="home-hero-section">
        <div className="home-hero-container">
          <motion.h1 
            className="home-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Исследования, дизайн<br />
            и разработка без агентских нагрузок
          </motion.h1>
        </div>
      </section>

      <section className="home-text-block-section">
        <div className="home-text-block-container">
          <div className="home-text-block-grid">
            <div className="home-text-block-left">
              <div className="home-text-with-dot">
                <p>Готовность к любым экспериментам ради крутого результата. От исследований и разработки до брендинга и поддержки готового продукта.</p>
              </div>
            </div>
            <div className="home-text-block-right">
              <h2 className="home-text-block-heading">
                Полный цикл создания цифровых продуктов с уникальной экспертизой
              </h2>
            </div>
          </div>
        </div>
      </section>

      <StatsCardsSection />

      <PageContainer noPaddingTop>
        <PageHeader title="Продуктовые кейсы" />

        <section className="projects-section">
          <ProjectsGrid>
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectsGrid>
        </section>

        <section className="services-section">
          <PageHeader title="Технологии" />
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                className="service-item" 
                onMouseEnter={() => setHoveredService(service.id)} 
                onMouseLeave={() => setHoveredService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="service-row">
                  <h3 className="service-title">{service.title}</h3>
                  <motion.div 
                    className="service-details" 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ 
                      opacity: hoveredService === service.id ? 1 : 0, 
                      x: hoveredService === service.id ? 0 : -10 
                    }} 
                    transition={{ duration: 0.3 }}
                  >
                    <div className="service-image-preview">
                      {service.img ? (
                        <img src={service.img} alt={service.title} loading="lazy" decoding="async" />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'var(--photo-bg)' }} />
                      )}
                    </div>
                    <div className="service-tags">
                      {service.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </motion.div>
                  <div className="service-arrow">
                    <div className={`arrow-circle ${hoveredService === service.id ? 'active' : ''}`}>
                      <span>↗</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="how-i-work-section">
          <PageHeader title="Решения" />
          <div className="work-steps-grid">
            {howIWorkSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="work-step-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="step-card-header">
                  <span className="step-badge">{step.category}</span>
                  <span className="step-duration">{step.duration}</span>
                </div>
                <div className="step-card-content">
                  <h4 className="step-card-title">{step.title}</h4>
                  <p className="step-card-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="stats-section">
          <StatList stats={homeStats} />
        </section>
      </PageContainer>
    </motion.div>
  );
};

export default Home;