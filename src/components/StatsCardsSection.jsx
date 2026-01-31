import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './StatsCardsSection.css';

const StatsCardsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

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
      isVideo: true,
      videoUrl: '/assets/videos/Frame_Lane_Anim.mp4',
      hasIcon: false
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
    hidden: { opacity: 0, y: 50, scale: 0.92, filter: 'blur(4px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        type: 'spring', 
        stiffness: 60, 
        damping: 18, 
        delay: i * 0.09,
        mass: 0.8
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -60, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 180, 
        damping: 12, 
        delay: 0.25 
      }
    }
  };

  const valueVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 80, 
        damping: 14, 
        delay: i * 0.09 + 0.2 
      }
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
              whileHover={{ 
                y: -8, 
                scale: 1.015,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } 
              }}
            >
              {/* Видео */}
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
                      <motion.div 
                        className="stats-card-value"
                        custom={index}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={valueVariants}
                      >
                        {card.value}
                      </motion.div>
                    </>
                  )}
                </div>
              )}

              {/* Иконка — не рендеряется на карточке с видео */}
              {card.hasIcon !== false && (
                <motion.div 
                  className={`stats-card-icon icon-${card.iconPosition}`} 
                  style={{ backgroundColor: card.iconBg }}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={iconVariants}
                >
                  {renderIcon(card.iconType)}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardsSection;