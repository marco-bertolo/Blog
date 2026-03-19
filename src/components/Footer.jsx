import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.top}>
          <div style={styles.brandSide}>
            <div style={styles.logo}>M.B.</div>
            <p style={styles.tagline}>Precision in 3D & Software Engineering.</p>
          </div>
          
          <div style={styles.socialSide}>
            <a href="https://www.linkedin.com/in/marco-b%C3%A9rtolo-6831b4340/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@marcob.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div style={styles.bottom}>
          <div style={styles.copy}>
            {t('footer.rights')}
          </div>
          <button onClick={scrollToTop} style={styles.topBtn} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: 'var(--space-xl) 0 var(--space-md)',
    backgroundColor: 'var(--surface)',
    borderTop: '1px solid var(--border)'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '2rem'
  },
  brandSide: {
    maxWidth: '300px'
  },
  logo: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2rem',
    fontWeight: '800',
    marginBottom: '1rem'
  },
  tagline: {
    fontSize: '1rem',
    color: 'var(--text-muted)'
  },
  socialSide: {
    display: 'flex',
    gap: '1rem'
  },
  socialLink: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg)',
    color: 'var(--text)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    border: '1px solid var(--border)'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2.5rem',
    borderTop: '1px solid var(--border)'
  },
  copy: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  },
  topBtn: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'var(--primary)',
    color: 'var(--surface)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 10px 20px oklch(45% 0.15 250 / 0.15)'
  }
};

export default Footer;
