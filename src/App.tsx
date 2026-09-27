import { type ChangeEvent, type FormEvent, useState } from 'react'
import './App.css'

type BudgetMap = Record<string, string[]>

type ContactForm = {
  name: string
  email: string
  details: string
}

type FormSubmitResponse = {
  success?: boolean | string
  message?: string
}

const services = [
  {
    title: 'Shopify Development',
    description: 'Custom themes, headless builds, and app integrations tuned for conversion.',
    tags: ['Liquid', 'Hydrogen'],
  },
  {
    title: 'Custom Full-Stack',
    description: 'Bespoke storefronts and back-office tooling when off-the-shelf is not enough.',
    tags: ['Next.js', 'Node'],
  },
  {
    title: 'Web Applications',
    description: 'Dashboards, portals, and internal tools built to your workflow.',
    tags: ['React', 'Postgres'],
  },
  {
    title: 'Maintenance & Optimization',
    description: 'Performance audits, uptime monitoring, and ongoing feature work.',
    tags: ['Core Web Vitals'],
  },
]

const portfolioItems = [
  {
    label: 'SELF-BUILT DEMO',
    title: 'Headless Shopify Storefront',
    text: 'A sample DTC storefront built on Hydrogen to show checkout speed and mobile UX.',
    tags: ['Hydrogen', 'Tailwind'],
  },
  {
    label: 'SELF-BUILT DEMO',
    title: 'Custom Full-Stack Storefront',
    text: 'A Next.js + Postgres storefront with a custom admin, built to show what “off the shelf isn’t enough” looks like.',
    tags: ['Next.js', 'Postgres'],
  },
  {
    label: 'SELF-BUILT DEMO',
    title: 'Ops Dashboard',
    text: 'An internal tool concept: order tracking, inventory alerts, and revenue views in one place.',
    tags: ['React', 'Recharts'],
  },
]

const trustStats = [
  { value: '24hr', label: 'Response time on new inquiries' },
  { value: '99.9%', label: 'Uptime on monitored client sites' },
  { value: 'Weekly', label: 'Progress updates during every build' },
  { value: 'Fixed-fee', label: 'Quotes — no surprise invoices' },
]

const processSteps = [
  { number: '01', title: 'Discovery', text: 'Scope, stack, and success metrics agreed before any code is written.' },
  { number: '02', title: 'Build', text: 'Weekly demos so you are never surprised at launch.' },
  { number: '03', title: 'Launch', text: 'Performance and payment-flow testing before go-live.' },
  { number: '04', title: 'Support', text: 'Monitoring and fixes covered after launch.' },
]

const budgetRanges: BudgetMap = {
  USD: ['$5k–15k', '$15k–40k', '$40k+', 'Not sure yet'],
  EUR: ['€5k–14k', '€14k–37k', '€37k+', 'Not sure yet'],
  GBP: ['£4k–12k', '£12k–32k', '£32k+', 'Not sure yet'],
  INR: ['₹4L–12L', '₹12L–35L', '₹35L+', 'Not sure yet'],
}

const defaultForm: ContactForm = {
  name: '',
  email: '',
  details: '',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [selectedBudget, setSelectedBudget] = useState('$15k–40k')
  const [formData, setFormData] = useState<ContactForm>(defaultForm)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  const budgetOptions = budgetRanges[currency] ?? budgetRanges.USD

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target
    setFormData((current) => ({ ...current, [id]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionError('')

    try {
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'contact@eighthgen1.com'
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project_details: formData.details,
          budget: selectedBudget,
          _subject: 'New EightGen1 project inquiry',
          _template: 'table',
        }),
      })
      const result = (await response.json()) as FormSubmitResponse

      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error(result.message || 'The inquiry could not be sent.')
      }

      setIsSubmitted(true)
    } catch {
      setSubmissionError('We could not send your inquiry. Please try again or email contact@eighthgen1.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextCurrency = event.target.value
    setCurrency(nextCurrency)
    const nextBudget = budgetRanges[nextCurrency]?.[1] ?? '$15k–40k'
    setSelectedBudget(nextBudget)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-row">
          <a href="#top" className="brand" aria-label="EightGen1 home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
                <path d="M16 3C10.5 3 6.5 6 6.5 9.6c0 2.6 1.9 4.4 3.9 5.4-3.1 1.1-5.9 3.5-5.9 7 0 4.7 5.1 7.6 11.5 7.6s11.5-2.9 11.5-7.6c0-3.5-2.8-5.9-5.9-7 2-1 3.9-2.8 3.9-5.4C25.5 6 21.5 3 16 3z" stroke="url(#brandGradient)" strokeWidth="2.2" fill="none" />
                <defs>
                  <linearGradient id="brandGradient" x1="4" y1="3" x2="28" y2="29">
                    <stop stopColor="#4F7CFF" />
                    <stop offset="1" stopColor="#7B61FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="brand-text">
              Eight<span>Gen</span>1
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#vision">Vision</a>
            <a href="#trust">Why Us</a>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="button button-primary button-inline">
              Get a Quote
            </a>
            <button
              type="button"
              className="button button-ghost nav-toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#vision" onClick={() => setMenuOpen(false)}>Vision</a>
            <a href="#trust" onClick={() => setMenuOpen(false)}>Why Us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote →</a>
          </nav>
        ) : null}
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">EIGHTGEN1 · SOFTWARE &amp; E-COMMERCE ENGINEERING</p>
              <h1>We build the storefronts your growth depends on.</h1>
              <p className="lead">
                EightGen1 designs and ships high-performance e-commerce platforms for founders and retailers who can’t afford a slow checkout — and we’re building our own products next.
              </p>
              <div className="cta-row">
                <a href="#contact" className="button button-primary">Get a Quote</a>
                <a href="#work" className="button button-ghost">View Our Work</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="traffic-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-metrics">
                <div className="metric-panel">
                  <p>CONVERSION RATE</p>
                  <strong>4.8%</strong>
                </div>
                <div className="metric-panel">
                  <p>PAGE LOAD</p>
                  <strong>0.9s</strong>
                </div>
                <div className="metric-panel metric-panel-wide">
                  <p>MONTHLY REVENUE</p>
                  <svg viewBox="0 0 300 60" aria-hidden="true">
                    <polyline points="0,50 40,42 80,44 120,30 160,32 200,18 240,20 300,6" fill="none" stroke="url(#chartGradient)" strokeWidth="3" />
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="1">
                        <stop offset="0" stopColor="#4F7CFF" />
                        <stop offset="1" stopColor="#7B61FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-shell">
          <div className="container two-column">
            <h2>Built by engineers who’ve shipped checkouts under pressure.</h2>
            <div className="copy-block">
              <p>
                EightGen1 started as a small team of full-stack engineers tired of watching agencies hand clients slow, unmaintainable storefronts. Today we build e-commerce platforms that survive traffic spikes, real payment edge cases, and the launch day itself.
              </p>
              <p>
                Client work funds what’s next: a line of in-house SaaS products for the merchants and founders we already work with — built from problems we’ve seen firsthand, not guessed at.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-shell">
          <div className="container">
            <h2>Services</h2>
            <div className="services-list">
              {services.map((service) => (
                <article key={service.title} className="service-row">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tags-row">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag mono">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="portfolio-section section-shell">
          <div className="container">
            <h2>What we can build</h2>
            <p className="section-subtitle">
              We’re a new studio — these are demo builds we made ourselves, not client work. Real case studies go here as we ship them.
            </p>

            <div className="portfolio-grid">
              {portfolioItems.map((item) => (
                <article key={item.title} className="portfolio-card">
                  <span className="tag mono tag-inline">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="tags-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag mono">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="pilot-banner">
              <div>
                <p className="banner-title">Be our first case study</p>
                <p>We’re onboarding our first clients now — early projects get a discounted rate in exchange for a detailed case study.</p>
              </div>
              <a href="#contact" className="button button-primary">
                Claim a pilot slot
              </a>
            </div>
          </div>
        </section>

        <section id="vision" className="vision-section section-shell">
          <div className="container vision-banner">
            <span className="tag mono tag-inline">COMING FROM EIGHTGEN1</span>
            <h2>Client work today. Our own products next.</h2>
            <p>
              We’re quietly building SaaS tools drawn from the same e-commerce problems we solve for clients every week. Get on the list to hear first.
            </p>
          </div>
        </section>

        <section id="trust" className="trust-section section-shell">
          <div className="container">
            <h2>Why teams choose EightGen1</h2>
            <p className="section-subtitle">Track record you can verify — not just take our word for.</p>

            <div className="stats-grid">
              {trustStats.map((stat) => (
                <div key={stat.value} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="process-panel">
              <p className="panel-label mono">HOW WE WORK</p>
              <div className="process-grid">
                {processSteps.map((step) => (
                  <div key={step.number} className="process-step">
                    <p className="step-title">{step.number} · {step.title}</p>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="tags-row tags-wrap">
              <span className="tag mono">Next.js</span>
              <span className="tag mono">React</span>
              <span className="tag mono">Shopify Hydrogen</span>
              <span className="tag mono">Node</span>
              <span className="tag mono">Postgres</span>
              <span className="tag mono">Stripe</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell">
          <div className="container contact-wrap">
            <h2>Tell us about your project</h2>
            <p className="contact-note">
              We reply within one business day. Prefer to talk first? <a href="#">Book a call →</a>
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    required
                  />
                </div>
              </div>

              <div className="budget-block">
                <div className="budget-label-row">
                  <label htmlFor="budgetSelect">Budget range</label>
                  <select
                    id="budgetSelect"
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="currency-select mono"
                  >
                    <option value="USD">USD $</option>
                    <option value="EUR">EUR €</option>
                    <option value="GBP">GBP £</option>
                    <option value="INR">INR ₹</option>
                  </select>
                </div>

                <div className="budget-group" aria-label="Budget options">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      className="chip tag mono"
                      aria-pressed={selectedBudget === budget}
                      onClick={() => setSelectedBudget(budget)}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="details">Project details</label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleFieldChange}
                  required
                />
              </div>

              <button type="submit" className="button button-primary submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send inquiry'}
              </button>

              {isSubmitted ? (
                <p className="form-status mono" role="status">Thanks — we&apos;ll be in touch within one business day.</p>
              ) : null}
              {submissionError ? <p className="form-status mono" role="alert">{submissionError}</p> : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="mono">© 2026 EightGen1. Built for founders who ship.</p>
      </footer>
    </div>
  )
}

export default App
