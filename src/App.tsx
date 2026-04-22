import { useState, useEffect } from 'react';
import './App.css';
import DataFlowDiagram from './DataFlowDiagram';
import ContactForm from './ContactForm';

const SERVICES = [
  {
    icon: '🔍',
    title: 'Ethical Data Scraping',
    desc: 'Compliant web scraping that respects robots.txt, rate limits, and terms of service. We extract the data you need - responsibly and transparently.',
  },
  {
    icon: '⚙️',
    title: 'Data Engineering',
    desc: 'End-to-end data pipelines, ETL workflows, and data warehousing solutions designed to scale with your business.',
  },
  {
    icon: '📄',
    title: 'Data Extraction',
    desc: 'Transform unstructured content - PDFs, web pages, documents, APIs - into clean, structured datasets ready for analysis.',
  },
  {
    icon: '🤖',
    title: 'AI & LLM Integration',
    desc: 'Custom RAG systems, intelligent chatbots, and AI-powered workflows built on the latest large language models.',
  },
  {
    icon: '🔧',
    title: 'Automation & Bots',
    desc: 'Smart automation for repetitive data tasks - from targeted collection bots to complex multi-step workflow pipelines.',
  },
  {
    icon: '📡',
    title: 'Real-Time Data Feeds',
    desc: 'Live data streams and monitoring systems that keep your products, dashboards, and decisions continuously up to date.',
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We analyse your data needs, sources, and goals to define the right approach for your use case.' },
  { step: '02', title: 'Architecture', desc: 'We design a compliant, scalable solution tailored to your stack, volume, and delivery requirements.' },
  { step: '03', title: 'Delivery', desc: 'Clean, structured data - delivered via API, database, file exports, or any format you prefer.' },
  { step: '04', title: 'Support', desc: 'Ongoing maintenance, monitoring, and iteration as your data requirements grow and evolve.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log(
    '%cWelcome, curious developer 👋\nIf you like what you see - we\'re hiring!\nContact us at hr@datatogo.uk',
    'color: #38bdf8; font-size: 14px; font-family: monospace;'
  );

  return (
    <div className="app">
      <div className="scanlines" aria-hidden="true" />

      {/* NAV */}
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <span className="nav-prompt">&gt;_</span> DataToGo
          </a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#clients" onClick={() => setMenuOpen(false)}>Who We Serve</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <button
            className={`burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-prompt" aria-hidden="true">
              <span className="prompt-user">root</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">datatogo</span>
              <span className="prompt-sep">:</span>
              <span className="prompt-dir">~/collect</span>
              <span className="prompt-char">$</span>
              <span className="prompt-cmd">./extract --target=web --ethics=strict --fmt=any</span>
            </div>
            <div className="hero-badge">Data Infrastructure for the Modern Stack</div>
            <h1>
              Your data.<br />
              <span className="accent glitch" data-text="On demand.">On demand.</span>
              <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="hero-sub">
              We extract, engineer, and deliver clean data at scale - so startups and
              enterprises can build faster, decide smarter, and grow with confidence.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Start a Project</a>
              <a href="#services" className="btn-ghost">Explore Services</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Ethical Compliance</span>
              </div>
              <div className="stat">
                <span className="stat-num">24h</span>
                <span className="stat-label">Avg. First Delivery</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <DataFlowDiagram />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services">
        <div className="section-inner">
          <div className="section-label">What We Do</div>
          <h2>Data services built<br />for real-world scale</h2>
          <p className="section-sub">
            From one-off extractions to continuous data pipelines - we have you covered.
          </p>
          <div className="services-grid">
            {SERVICES.map(s => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why">
        <div className="section-inner why-inner">
          <div className="why-text">
            <div className="section-label">Why DataToGo</div>
            <h2>Ethical by design.<br />Fast by default.</h2>
            <p>
              We believe data collection should be transparent, legal, and respectful.
              Every project we take on follows industry best practices - robots.txt
              compliance, rate-limiting, GDPR awareness, and full audit trails.
            </p>
            <p>
              No black-box scrapers. No grey-area tactics. Just clean, reliable data
              your team can trust and your legal team won't flag.
            </p>
            <a href="#contact" className="btn-primary">Talk to Us</a>
          </div>
          <div className="why-cards">
            {[
              'Robots.txt & ToS Compliant',
              'GDPR-Aware Practices',
              'Full Audit Logs',
              'Rate-Limit Respectful',
              'No Data Brokering',
              'Source Attribution',
            ].map(item => (
              <div className="why-card" key={item}>
                <span className="why-icon">[+]</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section process">
        <div className="section-inner">
          <div className="section-label">How It Works</div>
          <h2>From brief to data<br />in days, not months</h2>
          <div className="process-steps">
            {PROCESS.map(p => (
              <div className="process-step" key={p.step}>
                <div className="step-number">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="clients" className="section clients">
        <div className="section-inner">
          <div className="section-label">Who We Serve</div>
          <h2>Built for startups.<br />Scaled for enterprises.</h2>
          <div className="client-grid">
            <div className="client-card">
              <h3>Startups</h3>
              <p>
                Move fast with production-ready data pipelines from day one. No need
                to build an in-house data team - we become your data infrastructure.
              </p>
              <ul>
                <li>Rapid prototyping & quick turnarounds</li>
                <li>Cost-efficient, right-sized pipelines</li>
                <li>AI-ready, structured datasets</li>
                <li>Flexible engagement model</li>
              </ul>
            </div>
            <div className="client-card featured">
              <h3>Corporates</h3>
              <p>
                Enterprise-grade data extraction and engineering with the reliability,
                compliance, and scale your operations demand.
              </p>
              <ul>
                <li>High-volume data ingestion</li>
                <li>SLA-backed delivery</li>
                <li>Compliance-first approach</li>
                <li>Dedicated long-term support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <div className="section-inner contact-inner">
          <div className="section-label">Get In Touch</div>
          <h2>Ready to get your data?</h2>
          <p className="section-sub">
            Tell us what you need. We'll respond within 24 hours with a plan.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="nav-logo">DataToGo<span className="accent">.</span></span>
          <span className="footer-copy">
            © {new Date().getFullYear()} DataToGo. All rights reserved.
          </span>
          <div className="footer-links">
            <a href="mailto:hr@datatogo.uk">Careers → hr@datatogo.uk</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
