import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './StatsCardsSection.css';

const StatsCardsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    {
      id: 1,
      gridArea: '1 / 1 / 7 / 9',
      bgColor: '#D6F0FF',
      title: '<b>GenAi</b> ускоряет процессы увеличивая эффективность',
      value: 'х10',
      layout: 'top-group', 
      iconType: 'icon1',
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
      title: '<b>Design tokens</b> — оптимизация на уровне кода, плюс к <b>Performance</b>',
      value: 'kWh',
      layout: 'bottom-group',
      iconType: 'icon3',
      iconBg: '#FFFFFF',
      iconPosition: 'top-right'
    },
    {
      id: 4,
      gridArea: '7 / 1 / 11 / 9',
      bgColor: '#F8F8F8',
      title: 'Синхронизация с продуктом',
      value: '100%',
      layout: 'bottom-group',
      iconType: 'icon4',
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
      iconType: 'icon5',
      iconBg: '#FFFFFF',
      iconPosition: 'top-right'
    },
    {
      id: 6,
      gridArea: '6 / 17 / 11 / 25',
      bgColor: '#F8F8F8',
      title: ' <b>UX/UI</b> архитектура не просто набор экранов, это прямая трансляция бизнес-логики в визуальный язык коммуникаций',
      value: '$',
      layout: 'spread-center',
      iconType: 'icon6',
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {type === 'icon1' && (
        <><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></>
      )}
      {type === 'icon3' && (
        <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>
      )}
      {type === 'icon4' && (
        <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>
      )}
      {type === 'icon5' && (
        <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>
      )}
      {type === 'icon6' && (
        <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>
      )}
    </svg>
  );

  const renderCard = (card, index) => (
    <motion.div
      key={card.id}
      className={`stats-card stats-card-${card.id} layout-${card.layout || 'spread'} ${card.isVideo ? 'card-video-mode' : ''}`}
      style={{ gridArea: !isMobile ? card.gridArea : 'auto' }}
      custom={index}
      initial={!isMobile ? "hidden" : false}
      whileInView={!isMobile ? "visible" : false}
      viewport={!isMobile ? { once: true, amount: 0.15 } : undefined}
      variants={!isMobile ? cardVariants : undefined}
      whileHover={!isMobile ? { 
        y: -8, 
        scale: 1.015,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } 
      } : undefined}
    >
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
                initial={!isMobile ? "hidden" : false}
                whileInView={!isMobile ? "visible" : false}
                viewport={!isMobile ? { once: true, amount: 0.15 } : undefined}
                variants={!isMobile ? valueVariants : undefined}
              >
                {card.value}
              </motion.div>
            </>
          )}
        </div>
      )}

      {card.hasIcon !== false && (
        <motion.div 
          className={`stats-card-icon icon-${card.iconPosition}`} 
          style={{ backgroundColor: card.iconBg }}
          initial={!isMobile ? "hidden" : false}
          whileInView={!isMobile ? "visible" : false}
          viewport={!isMobile ? { once: true, amount: 0.15 } : undefined}
          variants={!isMobile ? iconVariants : undefined}
        >
          {renderIcon(card.iconType)}
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <section className="stats-cards-section">
      <div className="stats-container">
        <div className={`stats-cards-grid ${isMobile ? 'mobile-hidden' : ''}`}>
          {cards.map((card, index) => renderCard(card, index))}
        </div>

        {isMobile && (
          <div className="stats-cards-carousel" ref={carouselRef}>
            <div className="stats-cards-carousel-track">
              {cards.map((card, index) => renderCard(card, index))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsCardsSection;