import { Link } from "react-router-dom"

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            EIGHTGENONE · SOFTWARE &amp; E-COMMERCE ENGINEERING
          </p>

          <h1>
            We build the storefronts your growth depends on.
          </h1>

          <p className="lead">
            EightGenOne designs and ships high-performance
            e-commerce platforms for founders and retailers
            who can’t afford a slow checkout — and we’re
            building our own products next.
          </p>

          <div className="cta-row">
            <Link
              to="/contact"
              className="button button-primary"
            >
              Get a Quote
            </Link>

            <a
              href="#work"
              className="button button-ghost"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div
            className="traffic-dots"
            aria-hidden="true"
          >
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

              <svg
                viewBox="0 0 300 60"
                aria-hidden="true"
              >
                <polyline
                  points="0,50 40,42 80,44 120,30 160,32 200,18 240,20 300,6"
                  fill="none"
                  stroke="url(#chartGradient)"
                  strokeWidth="3"
                />

                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="1"
                  >
                    <stop
                      offset="0"
                      stopColor="#4F7CFF"
                    />
                    <stop
                      offset="1"
                      stopColor="#7B61FF"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero