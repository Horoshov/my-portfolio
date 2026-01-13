import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import profileImg from '../assets/alex-profile.jpg';

// =========================================
// 1. DATA
// =========================================
const services = [
  {
    id: '01',
    title: 'Motion Graphics & Animations',
    img: 'https://picsum.photos/seed/serv1/600/400',
    tags: ['UI Motion Design', 'Brand Animations', 'Animated Ads', 'Logo Animations']
  },
  {
    id: '02',
    title: 'Web design and development',
    img: 'https://picsum.photos/seed/serv2/600/400',
    tags: ['React / Next.js', 'Webflow', 'UI/UX Design', 'E-commerce']
  },
  {
    id: '03',
    title: 'SEO and content marketing',
    img: 'https://picsum.photos/seed/serv3/600/400',
    tags: ['Strategy', 'Copywriting', 'Analytics']
  },
  {
    id: '04',
    title: 'Branding and Identity',
    img: 'https://picsum.photos/seed/serv4/600/400',
    tags: ['Logotype', 'Visual Language', 'Brand Books']
  }
];

const projectsTop = [
  { id: 101, title: 'Nexora', cat: '{Mobile App}', desc: 'BI systems dashboards.' },
  { id: 102, title: 'Lunex', cat: '{PropTech}', desc: 'Real estate platforms.' }
];

const projectsBottom = [
  { id: 103, title: 'Morphin', cat: '{Industrial}', desc: 'Manufacturing tools.' },
  { id: 104, title: 'Lumora', cat: '{E-commerce}', desc: 'Retail experiences.' },
  { id: 105, title: 'Nexa', cat: '{SaaS}', desc: 'Software platforms.' }
];

// =========================================
// 2. ANIMATION VARIANTS
// =========================================
const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
  }
};

// =========================================
// 3. SUB-COMPONENTS
// =========================================
const ProjectCard = ({ project, imgSize }) => (
  <motion.div 
    className="project-card" 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariants}
  >
    <div className="project-image-wrapper">
      <img src={`https://picsum.photos/seed/${project.id}/${imgSize}`} alt={project.title} loading="lazy" />
    </div>
    <div className="project-info">
      <div className="project-meta">
        <span>{project.cat}</span> <span>2025</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
    </div>
  </motion.div>
);

// =========================================
// 4. MAIN COMPONENT
// =========================================
const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-col left">
          <span className="label">Focus</span>
          <p className="hero-text">
            Digital product designer and developer with 10 years of experience. 
            I bridge the gap between complex UX systems and functional frontend implementation.
          </p>
          <Link to="/contact" className="contact-button">
            Get in touch <span>→</span>
          </Link>
        </div>

        <div className="hero-col center">
          <img src={profileImg} alt="Alex Horoshov" className="profile-photo" />
        </div>

        <div className="hero-col right">
          <span className="label">Expertise</span>
          <ul className="expertise-list">
            <li>Product Design & UX/UI</li>
            <li>Frontend Development</li>
            <li>Design Management</li>
            <li>BI & Industrial Systems</li>
          </ul>
        </div>
      </section>

      {/* Giant Decorative Title */}
      <div className="giant-title-wrapper">
        <h1 className="giant-title">UX UI PRODUCT DESIGNER</h1>
      </div>

      {/* Recent Works Header */}
      <PageHeader title="Recent Works" />

      {/* Projects Section */}
      <section className="projects-grid">
        <div className="projects-row two-cols">
          {projectsTop.map(project => (
            <ProjectCard key={project.id} project={project} imgSize="1200/825" />
          ))}
        </div>

        <div className="projects-row three-cols">
          {projectsBottom.map(project => (
            <ProjectCard key={project.id} project={project} imgSize="800/550" />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        {/* Заменили h2 на PageHeader для консистентности заголовков */}
        <PageHeader title="What I Offer" />
        
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
                >
                  <div className="service-image-preview">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="service-tags">
                    <div className="tags-container">
                      {service.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
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
      
    </motion.div>
  );
};

export default Home;