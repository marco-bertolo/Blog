import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt calculation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-container"
      style={styles.perspectiveWrapper}
    >
      <div 
        className="card"
        style={{
          ...styles.card,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        <div style={styles.imgBox}>
          <img src={project.image} alt={project.name} style={styles.image} />
          <span style={styles.year}>{project.year}</span>
        </div>
        <div style={styles.body}>
          <h3 style={styles.projectTitle}>{project.name}</h3>
          <p style={styles.desc}>{project.desc}</p>
          <div style={styles.tags}>
            {project.tech.map((tag, i) => (
              <span key={i} style={styles.tag}>{tag}</span>
            ))}
          </div>
          <a href="#" style={styles.link}>
            {useTranslation().t('projects.view_more')} <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const projectList = [
    {
      name: "3D Surface Interpretation",
      desc: "Creating complex STL/3DM files for CNC machining.",
      tech: ["Rhino 7", "CAD/CAM"],
      year: "2026",
      image: "https://picsum.photos/seed/3d/800/600"
    },
    {
      name: "CNC Bridge Saw Setup",
      desc: "Specialized configuration for 5-axis machines.",
      tech: ["CNC", "Industrial SW"],
      year: "2025",
      image: "https://picsum.photos/seed/cnc/800/600"
    },
    {
      name: "Marchigno Vision",
      desc: "Artistic 3D models for natural stone.",
      tech: ["3D Design", "Art"],
      year: "2024",
      image: "https://picsum.photos/seed/stone/800/600"
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.bgPattern}></div>
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>{t('projects.title')}</h2>
          <p>Selected professional highlights and creative ventures.</p>
        </div>
        
        <div style={styles.grid}>
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg)',
    borderTop: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
    position: 'relative',
    overflow: 'hidden',
    padding: 'var(--space-xl) 0'
  },
  bgPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(45deg, var(--primary-subtle) 25%, transparent 25%),
      linear-gradient(-45deg, var(--primary-subtle) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--primary-subtle) 75%),
      linear-gradient(-45deg, transparent 75%, var(--primary-subtle) 75%)
    `,
    backgroundSize: '100px 100px',
    opacity: 0.15,
    pointerEvents: 'none',
    zIndex: 0
  },
  container: {
    position: 'relative',
    zIndex: 1
  },
  header: {
    marginBottom: '4rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: '3rem'
  },
  perspectiveWrapper: {
    width: '100%'
  },
  card: {
    padding: '0',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.1s ease-out',
    height: '100%'
  },
  imgBox: {
    height: '240px',
    backgroundColor: 'var(--primary-subtle)',
    position: 'relative',
    borderBottom: '1px solid var(--border)',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  year: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'oklch(99% 0 0)',
    backgroundColor: 'oklch(0% 0 0 / 0.6)',
    backdropFilter: 'blur(4px)',
    padding: '0.4rem 1rem',
    borderRadius: 'var(--radius-pill)',
  },
  body: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  projectTitle: {
    marginBottom: '0.75rem',
    fontSize: '1.5rem'
  },
  desc: {
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
    flex: 1
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem'
  },
  tag: {
    fontSize: '0.75rem',
    fontWeight: '500',
    padding: '0.3rem 0.75rem',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-muted)',
    borderRadius: '4px',
    border: '1px solid var(--border)'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--primary)',
    fontWeight: '600',
    fontSize: '0.9rem',
    textDecoration: 'none',
    marginTop: 'auto'
  }
};

export default Projects;
