import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const ToolCard = ({ tool }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Magnetic Pull calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (x - centerX) / 8;
    const moveY = (y - centerY) / 8;
    
    setPosition({ x: moveX, y: moveY });
    
    // Spotlight variables
    cardRef.current.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className="card spotlight-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        ...styles.card,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div className="spotlight-glow" />
      <div style={styles.iconBox}>
        <Check size={18} color="var(--primary)" />
      </div>
      <h3 style={styles.toolName}>{tool}</h3>
    </div>
  );
};

const Tools = () => {
  const { t } = useTranslation();
  const toolList = t('tools.list', { returnObjects: true });

  return (
    <section id="tools" style={styles.section}>
      <div className="mesh-blob" style={styles.blob}></div>
      <div style={styles.bgDots}></div>
      
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>{t('tools.title')}</h2>
          <p style={styles.subtitle}>A comprehensive suite of technologies and software.</p>
        </div>
        
        <div style={styles.grid}>
          {toolList.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: 'var(--space-xl) 0',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'var(--surface)'
  },
  blob: {
    width: '1000px',
    height: '1000px',
    bottom: '-30%',
    left: '-20%',
    backgroundColor: 'oklch(85% 0.1 80)',
    opacity: 0.15,
    animationDuration: '50s'
  },
  bgDots: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
    backgroundSize: '30px 30px',
    opacity: 0.5,
    pointerEvents: 'none',
    zIndex: 1
  },
  container: {
    position: 'relative',
    zIndex: 2
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  title: {
    marginBottom: '1rem'
  },
  subtitle: {
    maxWidth: '40ch',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    padding: '1.5rem 2rem',
    backgroundColor: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1
  },
  iconBox: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    backgroundColor: 'var(--primary-subtle)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2
  },
  toolName: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '1.1rem',
    fontWeight: '600',
    position: 'relative',
    zIndex: 2
  }
};

export default Tools;
