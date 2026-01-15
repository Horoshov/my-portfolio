import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import Counter from '../components/Counter'; 
import StatList from '../components/StatList'; 
import ProjectCard from '../components/ProjectCard'; // Импорт общего компонента
import profileImg from '../assets/alex-profile.jpg';
import { allProjects } from '../data/projects';

const services = [
  { id: '01', title: 'Motion Graphics & Animations', img: 'https://picsum.photos/seed/serv1/600/400', tags: ['UI Motion Design', 'Brand Animations', 'Animated Ads'] },
  { id: '02', title: 'Web design and development', img: 'https://picsum.photos/seed/serv2/600/400', tags: ['React / Next.js', 'Webflow', 'UI/UX Design'] },
  { id: '03', title: 'SEO and content marketing', img: 'https://picsum.photos/seed/serv3/600/400', tags: ['Strategy', 'Copywriting', 'Analytics'] },
  { id: '04', title: 'Branding and Identity', img: 'https://picsum.photos/seed/serv4/600/400', tags: ['Logotype', 'Visual Language', 'Brand Books'] }
];

const featuredProjects = allProjects.slice(0, 5);

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <motion.div className="home-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="hero-grid">
        <div className="hero-col left">
          <span className="label">Focus</span>
          <p className="hero-text">Digital product designer and developer with 10 years of experience. I bridge the gap between complex UX systems and functional frontend implementation.</p>
          <Link to="/contact" className="contact-button">Get in touch <span>→</span></Link>
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

      <div className="giant-title-wrapper">
        <h1 className="giant-title">UX UI PRODUCT DESIGNER</h1>
      </div>

      <PageHeader title="Recent Works" />

      <section className="projects-section">
        <div className="projects-grid-custom">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="services-section">
        <PageHeader title="What I Offer" />
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-item" onMouseEnter={() => setHoveredService(service.id)} onMouseLeave={() => setHoveredService(null)}>
              <div className="service-row">
                <span className="service-number">({service.id})</span>
                <h3 className="service-title">{service.title}</h3>
                <motion.div className="service-details" initial={{ opacity: 0, x: -10 }} animate={{ opacity: hoveredService === service.id ? 1 : 0, x: hoveredService === service.id ? 0 : -10 }} transition={{ duration: 0.3 }}>
                  <div className="service-image-preview"><img src={service.img} alt={service.title} /></div>
                  <div className="service-tags">{service.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
                </motion.div>
                <div className="service-arrow"><div className={`arrow-circle ${hoveredService === service.id ? 'active' : ''}`}><span>↗</span></div></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <StatList />
    </motion.div>
  );
};

export default Home;