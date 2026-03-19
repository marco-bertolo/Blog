import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Linkedin } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section style={styles.hero}>
      {/* ⚡ OVERDRIVE: Animated Mesh Background */}
      <div style={styles.meshContainer}>
        <div className="mesh-blob" style={{...styles.blob, ...styles.blob1}}></div>
        <div className="mesh-blob" style={{...styles.blob, ...styles.blob2}}></div>
        <div className="mesh-blob" style={{...styles.blob, ...styles.blob3}}></div>
        <div style={styles.gridOverlay}></div>
      </div>

      <div className="container" style={styles.container}>
        <div style={styles.badge}>
          Digital Craftsmanship
        </div>
        <h1 style={styles.title}>
          {t('hero.title')}
        </h1>
        <h2 style={styles.subtitle}>
          {t('hero.subtitle')}
        </h2>
        <p style={styles.description}>
          {t('hero.description')}
        </p>
        
        <div style={styles.actions}>
          <a href="#projects" className="btn-primary">
            {t('nav.projects')} <ArrowRight size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/marco-b%C3%A9rtolo-6831b4340/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.secondaryBtn}
          >
            <Linkedin size={18} />
            Connect
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '100px',
    backgroundColor: 'var(--bg)',
    position: 'relative',
    overflow: 'hidden'
  },
  meshContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none'
  },
  blob: {
    width: '600px',
    height: '600px',
    opacity: 0.3
  },
  blob1: {
    top: '-10%',
    right: '-10%',
    backgroundColor: 'var(--primary)',
    animationDuration: '25s'
  },
  blob2: {
    bottom: '-20%',
    left: '-10%',
    backgroundColor: 'oklch(65% 0.15 250)', // Subtle Indigo
    animationDuration: '30s',
    animationDelay: '-5s'
  },
  blob3: {
    top: '20%',
    left: '20%',
    width: '400px',
    height: '400px',
    backgroundColor: 'oklch(85% 0.1 80)', // Bright Oatmeal
    animationDuration: '20s',
    animationDelay: '-10s'
  },
  gridOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(to right, var(--border) 1px, transparent 1px),
      linear-gradient(to bottom, var(--border) 1px, transparent 1px)
    `,
    backgroundSize: '100px 100px',
    opacity: 0.3
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
  },
  badge: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--primary)',
    marginBottom: '1.5rem',
    padding: '0.5rem 1.25rem',
    backgroundColor: 'var(--primary-subtle)',
    borderRadius: 'var(--radius-pill)',
    backdropFilter: 'blur(4px)'
  },
  title: {
    marginBottom: '1rem',
    maxWidth: '12ch'
  },
  subtitle: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '400',
    color: 'var(--text-muted)',
    marginBottom: '2rem',
    maxWidth: '30ch'
  },
  description: {
    marginBottom: '3rem',
    maxWidth: '50ch'
  },
  actions: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  secondaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    backgroundColor: 'rgba(255,255,255,0.5)',
    backdropFilter: 'blur(8px)',
    color: 'var(--text)',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid var(--border)',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.2s'
  }
};

export default Hero;
