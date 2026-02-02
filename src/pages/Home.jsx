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
    img: null, 
    tags: ['Analytics', 'CJM', 'User Testing', 'JTBD'] 
  },
  { 
    id: '02', 
    title: 'Complex Interfaces', 
    img: null, 
    tags: ['FinTech', 'BI Systems', 'Dashboard', 'SaaS'] 
  },
  { 
    id: '03', 
    title: 'Scalable Design Systems', 
    img: null, 
    tags: ['Components', 'Design Tokens', 'Documentation'] 
  },
  { 
    id: '04', 
    title: ' Frontend Focus (Engineering)', 
    img: null, 
    tags: ['Frontend-friendly', 'Technical Audit', 'Analytics'] 
  },
  { 
    id: '05', 
    title: 'End-to-End Product Design', 
    img: null, 
    tags: ['Visual Language', 'Web', 'iOS / Android'] 
  }
];

const howIWorkSteps = [
  {
    category: 'Discovery',
    duration: '1-2 недели',
    title: 'Глубокое погружение в продуктовые цели',
    description: 'Провожу интервью со стейкхолдерами и конкурентный анализ для определения KPI проекта. На этом этапе мы фокусируемся на согласовании стратегии продукта с потребностями пользователей через исследования и позиционирование на рынке.'
  },
  {
    category: 'Design',
    duration: '2-3 недели',
    title: 'Создание эффективных сценариев',
    description: 'Разработка масштабируемых дизайн-систем и детализированных прототипов с акцентом на интуитивно понятную информационную архитектуру (IA). Приоритет отдается UI, ориентированному на конверсию, и стандартам доступности.'
  },
  {
    category: 'Build',
    duration: '1-3 недели',
    title: 'Разработка с использованием мощных инструментов',
    description: 'Перенос дизайн-токенов в функциональный фронтенд. Использую современные фреймворки и no-code архитектуру для создания адаптивных модульных компонентов, обеспечивающих техническую стабильность и легкость масштабирования.'
  },
  {
    category: 'Launch',
    duration: '1-2 недели',
    title: 'Запуск оптимизированного продукта для реальных результатов',
    description: 'Финальная настройка технического SEO, аудит производительности и QA-тестирование. Гарантирую полную оптимизацию продукта по показателям Core Web Vitals, обеспечивая высокую скорость работы и готовность к рыночной конкуренции.'
  }
];

const featuredProjects = allProjects.slice(0, 5);

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const homeStats = [
    { value: '10', label: 'Years of Experience', title: 'Expertise' },
    { value: '80+', label: 'Completed Successfully', title: 'Projects' },
    { value: '96', label: 'Customer Satisfaction', title: 'Percent' }
  ];

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
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
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-item" 
                onMouseEnter={() => setHoveredService(service.id)} 
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-row">
                  <span className="service-number">({service.id})</span>
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
                        <img src={service.img} alt={service.title} />
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
              </div>
            ))}
          </div>
        </section>

        <section className="how-i-work-section">
          <PageHeader title="Решения" />
          <div className="work-steps-grid">
            {howIWorkSteps.map((step, index) => (
              <div key={index} className="work-step-card">
                <div className="step-card-header">
                  <span className="step-badge">{step.category}</span>
                  <span className="step-duration">{step.duration}</span>
                </div>
                <div className="step-card-content">
                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-description">{step.description}</p>
                </div>
              </div>
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