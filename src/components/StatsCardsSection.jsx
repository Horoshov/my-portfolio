import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './StatsCardsSection.css';

const StatsCardsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const cards = [
    {
      id: 1,
      gridArea: '1 / 1 / 7 / 9',
      bgColor: '#D6F0FF',
      title: 'Использование <b>GenAi</b> пушит процессы и дает прирост производительности',
      value: '5x',
      layout: 'top-group', 
      iconType: 'cube',
      iconBg: '#8BD3FF',
      iconPosition: 'bottom-right'
    },
    {
      id: 2,
      gridArea: '1 / 9 / 6 / 16',
      bgColor: '#000',
      isVideo: true, // Изменено: используем локальное видео
      videoUrl: '/assets/videos/Frame_Lane_Anim.mp4', // Путь к файлу в public/assets/videos/
      iconType: 'layout',
      iconBg: 'rgba(255, 255, 255, 0.2)',
      iconPosition: 'top-right'
    },
    {
      id: 3,
      gridArea: '1 / 16 / 6 / 25',
      bgColor: '#F5F0EB',
      title: 'Оптимизированные решения на уровне кода, плюс к <b>Performance</b>',
      value: 'kWh',
      layout: 'spread',
      iconType: 'layout',
      iconBg: '#FFFFFF',
      iconPosition: 'top-right'
    },
    {
      id: 4,
      gridArea: '7 / 1 / 11 / 9',
      bgColor: '#F8F8F8',
      title: 'Синхронизация с продуктом',
      value: '100%',
      layout: 'spread',
      iconType: 'layout',
      iconBg: '#FFD4A8',
      iconPosition: 'bottom-right'
    },
    {
      id: 5,
      gridArea: '6 / 9 / 11 / 17',
      bgColor: '#E0D9FF',
      title: '<b>Storybook</b>, документация',
      value: 'А — Я',
      layout: 'bottom-group',
      iconType: 'layout',
      iconBg: '#FFFFFF',
      iconPosition: 'top-right'
    },
    {
      id: 6,
      gridArea: '6 / 17 / 11 / 25',
      bgColor: '#F8F8F8',
      title: 'Консистентная <b>UX/UI</b> архитектура не просто набор экранов, это прямая трансляция бизнес-логики в визуальный язык коммуникаций',
      value: '$',
      layout: 'spread-center',
      iconType: 'layout',
      iconBg: '#FFFFFF',
      iconPosition: 'top-right'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15, delay: i * 0.1 }
    })
  };

  const renderIcon = (type) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
      {type === 'cube' ? (
        <><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M12 22V12"/><path d="M3 8l9 4 9-4"/></>
      ) : (
        <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>
      )}
    </svg>
  );

return (
    <section className="stats-cards-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-cards-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`stats-card layout-${card.layout || 'spread'} ${card.isVideo ? 'card-video-mode' : ''}`}
              style={{ gridArea: card.gridArea, backgroundColor: card.bgColor }}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Рендеринг видео mp4 без отступов */}
              {card.isVideo ? (
                <div className="stats-card-video-full">
                  <video 
                    src={card.videoUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                </div>
              ) : (
                <div className="stats-card-content">
                   {card.hasImage ? (
                      <div className="stats-card-image">
                        <img src={card.imageUrl} alt="" />
                      </div>
                    ) : (
                      <>
                        <p className="stats-card-title" dangerouslySetInnerHTML={{ __html: card.title }} />
                        <div className="stats-card-value">{card.value}</div>
                      </>
                    )}
                </div>
              )}

              <div className={`stats-card-icon icon-${card.iconPosition}`} style={{ backgroundColor: card.iconBg }}>
                {renderIcon(card.iconType)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardsSection;