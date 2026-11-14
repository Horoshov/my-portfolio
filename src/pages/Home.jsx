<section 
        className="home-hero-section"
        style={{ 
          position: 'relative', 
          minHeight: '100vh', 
          height: '100dvh',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-end', 
          // На мобильных уменьшаем отступ снизу, чтобы поднять HOROSHOV к заголовку
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
            boxSizing: 'border-box'
          }}
        >
          <motion.h1 
            className="home-hero-title"
            style={{ 
              margin: 0, 
              // На десктопе опускаем заголовок ближе к логотипу (уменьшаем зазор)
              marginTop: isMobile ? '0px' : '40px' 
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: -5 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Исследования, дизайн<br />
            и разработка без агентских нагрузок
          </motion.h1>
          
          <div id="home-logo-slot" style={{ height: `${largeLogoHeight}px` }} />
        </div>
      </section>