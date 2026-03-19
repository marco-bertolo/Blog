import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Menu,
  NotebookPen,
  Phone,
} from 'lucide-react';
import './styles/global.css';
import './i18n';

const languages = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
  { value: 'fr', label: 'FR' },
];

function App() {
  const { t, i18n } = useTranslation();
  const metrics = t('hero.metrics', { returnObjects: true });
  const highlights = t('profile.highlights', { returnObjects: true });
  const experience = t('experience.items', { returnObjects: true });
  const projects = t('projects.items', { returnObjects: true });
  const skillGroups = t('skills.groups', { returnObjects: true });
  const education = t('education.items', { returnObjects: true });
  const certificates = t('education.certificates', { returnObjects: true });

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#top" aria-label="Marco Bértolo portfolio">
            <span className="brand-mark">MB</span>
            <span className="brand-text">
              <strong>Marco Bértolo</strong>
              <span>{t('hero.subtitle')}</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#profile">{t('nav.about')}</a>
            <a href="#experience">{t('nav.experience')}</a>
            <a href="#projects">{t('nav.projects')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </nav>

          <div className="lang-switcher">
            <Languages size={14} />
            <select
              aria-label={t('nav.language')}
              onChange={(event) => i18n.changeLanguage(event.target.value)}
              value={i18n.resolvedLanguage || i18n.language}
            >
              {languages.map((language) => (
                <option key={language.value} value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
            <Menu size={14} className="lang-switcher-menu" />
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-orbit hero-orbit-left" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-right" aria-hidden="true" />

          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">{t('hero.eyebrow')}</p>
              <h1>{t('hero.title')}</h1>
              <p className="hero-lead">{t('hero.description')}</p>

              <div className="hero-meta">
                <span><MapPin size={16} /> {t('hero.location')}</span>
                <span><GraduationCap size={16} /> {t('hero.educationBadge')}</span>
                <span><BriefcaseBusiness size={16} /> {t('hero.availability')}</span>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="mailto:marcobertolo2005@outlook.pt">
                  <Mail size={18} />
                  {t('hero.ctaPrimary')}
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/marco-b%C3%A9rtolo-6831b4340/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('hero.ctaSecondary')}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <aside className="hero-panel">
              <p className="panel-kicker">{t('hero.panelKicker')}</p>
              <div className="metric-grid">
                {metrics.map((metric) => (
                  <article className="metric-card" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>

              <div className="signal-card">
                <p>{t('hero.focusTitle')}</p>
                <ul>
                  {t('hero.focusList', { returnObjects: true }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="profile-section section-frame" id="profile">
          <div className="container profile-layout">
            <div className="section-heading">
              <p className="eyebrow">{t('profile.eyebrow')}</p>
              <h2>{t('profile.title')}</h2>
            </div>

            <div className="profile-copy">
              <p className="profile-intro">{t('profile.intro')}</p>
              <p>{t('profile.body')}</p>
            </div>

            <div className="highlight-grid">
              {highlights.map((highlight) => (
                <article className="highlight-card" key={highlight.title}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="container">
            <div className="section-heading section-heading-inline">
              <div>
                <p className="eyebrow">{t('experience.eyebrow')}</p>
                <h2>{t('experience.title')}</h2>
              </div>
              <p className="section-note">{t('experience.note')}</p>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.title}-${item.period}`}>
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                  <div className="timeline-body">
                    <h3>{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-frame" id="projects">
          <div className="container">
            <div className="section-heading section-heading-inline">
              <div>
                <p className="eyebrow">{t('projects.eyebrow')}</p>
                <h2>{t('projects.title')}</h2>
              </div>
              <p className="section-note">{t('projects.note')}</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-topline">
                    <span>{project.period}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="project-points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities-section">
          <div className="container capability-layout">
            <div className="skills-column">
              <div className="section-heading">
                <p className="eyebrow">{t('skills.eyebrow')}</p>
                <h2>{t('skills.title')}</h2>
              </div>

              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <article className="skill-group" key={group.title}>
                    <div className="skill-group-header">
                      <Code2 size={18} />
                      <h3>{group.title}</h3>
                    </div>
                    <div className="tag-list">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="education-column">
              <div className="section-heading">
                <p className="eyebrow">{t('education.eyebrow')}</p>
                <h2>{t('education.title')}</h2>
              </div>

              <div className="education-stack">
                {education.map((item) => (
                  <article className="education-card" key={`${item.degree}-${item.period}`}>
                    <div className="education-icon">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="education-period">{item.period}</p>
                      <h3>{item.degree}</h3>
                      <p>{item.school}</p>
                      {item.details ? <p className="education-detail">{item.details}</p> : null}
                    </div>
                  </article>
                ))}
              </div>

              <div className="certificate-panel">
                <div className="skill-group-header">
                  <NotebookPen size={18} />
                  <h3>{t('education.certificatesTitle')}</h3>
                </div>
                <ul>
                  {certificates.map((certificate) => (
                    <li key={`${certificate.name}-${certificate.year}`}>
                      <span>{certificate.year}</span>
                      <strong>{certificate.name}</strong>
                      <em>{certificate.issuer}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-layout">
          <div>
            <p className="eyebrow">{t('footer.eyebrow')}</p>
            <h2>{t('footer.title')}</h2>
            <p className="footer-copy">{t('footer.description')}</p>
          </div>

          <div className="contact-panel">
            <a href="mailto:marcobertolo2005@outlook.pt">
              <Mail size={16} />
              marcobertolo2005@outlook.pt
            </a>
            <a href="tel:+351914136321">
              <Phone size={16} />
              +351 914 136 321
            </a>
            <a
              href="https://www.linkedin.com/in/marco-b%C3%A9rtolo-6831b4340/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
