import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import StatsCardsSection from '../components/StatsCardsSection';
import StatList from '../components/StatList'; 
import ProjectCard from '../components/ProjectCard'; 
import ProjectsGrid from '../components/ProjectsGrid';
import Button from '../components/Button';
import macbookMockup from '../assets/MacBookPro.webp';
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
    duration: '1-3 недели',
    title: 'Погружение в продуктовые цели',
    description: 'Провожу интервью со стейкхолдерами и конкурентный анализ для определения KPI проекта. На этом этапе мы фокусируемся на согласовании стратегии продукта с потребностями пользователей через исследования и позиционирование на рынке.'
  },
  {
    category: 'Design',
    duration: '1-3 месяца',
    title: 'Создание эффективных сценариев и решений',
    description: 'Разработка масштабируемых дизайн-систем и детализированных прототипов с акцентом на интуитивно понятную информационную архитектуру (IA). Приоритет отдается UI, ориентированному на конверсию, и стандартам доступности.'
  },
  {
    category: 'Build',
    duration: '2-3 месяца',
    title: 'Разработка сервисов с использованием мощных инструментов',
    description: 'Перенос дизайн-токенов в функциональный фронтенд. Использую современные фреймворки и архитектуру для создания адаптивных модульных компонентов, обеспечивающих техническую стабильность и легкость масштабирования.'
  },
  {
    category: 'Launch',
    duration: '1-4 недели',
    title: 'Запуск оптимизированного продукта для реальных результатов',
    description: 'Финальная настройка технического SEO, аудит производительности и QA-тестирование. Гарантирую полную оптимизацию продукта по показателям Core Web Vitals, обеспечивая высокую скорость работы и готовность к рыночной конкуренции.'
  }
];

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const heroContainerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);

  // Скролл-анимация: отзывчивый старт с последующим динамичным ускорением
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"]
  });

  // Кастомная функция: стартует сразу без задержки, но динамично набирает разгон
  const customEase = (t) => t * 0.35 + (t * t) * 0.65;

  const mockupScale = useTransform(
    scrollYProgress, 
    [0, 1], 
    [1, 1.50], 
    { ease: customEase }
  );
  
  const mockupX = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, 130], 
    { ease: customEase }
  );

  const mockupOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.1]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (heroContainerRef.current) {
        const w = heroContainerRef.current.clientWidth;
        if (w > 0) setContainerWidth(w);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    const timer = setTimeout(updateWidth, 50);
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  const largeLogoHeight = (containerWidth * 136) / 1000;

  const homeStats = [
    { value: '15+', label: 'Years of Experience', title: 'Expertise' },
    { value: '20+', label: 'Completed Successfully', title: 'Projects' },
    { value: '96', label: 'Customer Satisfaction', title: 'Percent' }
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
    >
      <section 
        ref={heroSectionRef}
        className="home-hero-section"
        style={{ 
          position: 'relative', 
          minHeight: '100vh', 
          height: '100dvh',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-end', 
          paddingBottom: isMobile ? '24vh' : '40px', 
          boxSizing: 'border-box',
          overflow: 'hidden' 
        }}
      >
        <div 
          ref={heroContainerRef}
          className="home-hero-container"
          style={{ 
            width: '100%', 
            maxWidth: '1728px', 
            margin: '0 auto', 
            paddingLeft: '0px', 
            paddingRight: 'var(--container-padding)',
            boxSizing: 'border-box',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%'
          }}
        >
          {/* Блок с заголовком и ноутбуком */}
          <div style={{ position: 'relative', width: '100%', marginTop: 'auto' }}>
            {/* Ноутбук под текстом (z-index: 1), масштабируется с отзывчивым стартом */}
            <motion.div 
              style={{
                position: 'absolute',
                right: '0%',
                bottom: isMobile ? '140px' : '140px',
                width: isMobile ? '95%' : '48%',
                maxWidth: '750px',
                zIndex: 1, 
                pointerEvents: 'none',
                scale: mockupScale,
                x: mockupX,
                opacity: mockupOpacity,
                transformOrigin: 'bottom left'
              }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img 
                src={macbookMockup} 
                alt="MacBook Mockup" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </motion.div>

            {/* Заголовок поверх ноутбука (z-index: 3) */}
            <motion.h1 
              className="home-hero-title"
              style={{ 
                margin: 0, 
                paddingLeft: '4px',
                position: 'relative',
                zIndex: 3
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: -5 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              исследования, дизайн<br />
              и разработка без агентских нагрузок
            </motion.h1>
          </div>

          {/* Слот для логотипа HOROSHOV в самом низу */}
          <div id="home-logo-slot" style={{ height: `${largeLogoHeight}px`, width: '100%', flexShrink: 0 }} />
        </div>
      </section>

      <section className="home-text-block-section">
        <div className="home-text-block-container">
          <div className="home-text-block-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '0.5fr 1fr 1fr 1fr', 
            gap: isMobile ? '16px' : '24px' 
          }}>
            {!isMobile && <div className="home-text-block-item" style={{ gridColumn: 'span 1' }}></div>}
            <div className="home-text-block-item" style={{ gridColumn: 'span 1' }}>
              <p>Принимаю решения на основе данных и исследований, чтобы растить метрики вашего продукта.</p>
            </div>
            <div className="home-text-block-item" style={{ gridColumn: 'span 1' }}>
              <p>Проектирую интуитивно понятные интерфейсы и продуманные сценарии взаимодействия.</p>
            </div>
            <div className="home-text-block-item" style={{ gridColumn: 'span 1' }}>
              <p>Реализую дизайн в чистом коде, обеспечивая техническую надежность и масштабируемость.</p>
            </div>
          </div>
        </div>
      </section>

      <StatsCardsSection />

      <PageContainer noPaddingTop>
        <PageHeader title="Продуктовые кейсы" />
        <section className="projects-section">
          <ProjectsGrid>
            {allProjects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </ProjectsGrid>
          {visibleCount < allProjects.length && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Button onClick={handleShowMore} variant="secondary" icon={false}>
                Показать больше
              </Button>
            </div>
          )}
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