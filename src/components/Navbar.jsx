import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{...styles.nav, ...(scrolled ? styles.navScrolled : {})}}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>
          M<span style={{color: 'var(--primary)', fontStyle: 'italic'}}>B</span>
        </div>
        
        <div style={styles.links}>
          <a href="#about" style={styles.link}>{t('nav.about')}</a>
          <a href="#tools" style={styles.link}>{t('nav.tools')}</a>
          <a href="#projects" style={styles.link}>{t('nav.projects')}</a>
        </div>

        <div style={styles.langSelector}>
          <Languages size={16} color="var(--primary)" />
          <select 
            onChange={(e) => i18n.changeLanguage(e.target.value)} 
            value={i18n.language}
            style={styles.select}
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
          <ChevronDown size={14} style={styles.chevron} />
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '1.5rem 0',
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  navScrolled: {
    padding: '1rem 0',
    backgroundColor: 'oklch(100% 0 0 / 0.85)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border)',
    boxShadow: '0 4px 30px oklch(0% 0 0 / 0.03)'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--text)',
    letterSpacing: '-0.02em'
  },
  links: {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text)',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  langSelector: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius-pill)',
    backgroundColor: 'oklch(0% 0 0 / 0.03)',
  },
  select: {
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text)',
    cursor: 'pointer',
    outline: 'none',
    paddingRight: '1rem'
  },
  chevron: {
    position: 'absolute',
    right: '0.75rem',
    pointerEvents: 'none',
    opacity: 0.5
  }
};

export default Navbar;
