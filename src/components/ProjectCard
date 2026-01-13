const ProjectCard = ({ project }) => (
  <motion.div 
    className="project-card" 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}
    variants={cardVariants}
  >
    <Link to={`/project/${project.id}`} className="project-link">
      <div className="project-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
        />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="label">{project.cat}</span>
          <span className="label">2025</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
      </div>
    </Link>
  </motion.div>
);