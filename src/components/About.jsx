import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.textSide}>
            <h2 style={styles.title}>{t('about.title')}</h2>
            <p style={styles.paragraph}>{t('about.p1')}</p>
            <p style={styles.paragraph}>{t('about.p2')}</p>
            
            <div style={styles.metrics}>
              <div style={styles.metric}>
                <span style={styles.metricNum}>26+</span>
                <span style={styles.metricLabel}>Years Exp.</span>
              </div>
              <div style={styles.metric}>
                <span style={styles.metricNum}>5-Axis</span>
                <span style={styles.metricLabel}>CNC Expert</span>
              </div>
            </div>
          </div>
          
          <div style={styles.imageSide}>
            <img 
              src="https://picsum.photos/seed/workspace/800/1000" 
              alt="3D Design and Engineering workspace" 
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--surface)',
    borderTop: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: 'var(--space-xl)',
    alignItems: 'center'
  },
  textSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  title: {
    marginBottom: '0.5rem'
  },
  paragraph: {
    lineHeight: '1.8'
  },
  metrics: {
    display: 'flex',
    gap: '3rem',
    marginTop: '1.5rem',
    paddingTop: '2rem',
    borderTop: '1px solid var(--border)'
  },
  metric: {
    display: 'flex',
    flexDirection: 'column'
  },
  metricNum: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--primary)'
  },
  metricLabel: {
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)'
  },
  imageSide: {
    position: 'relative',
    height: '450px',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-soft)'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  }
};

export default About;
