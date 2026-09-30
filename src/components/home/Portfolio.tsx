import { portfolioItems } from '../../data/portfolio'
import { Link } from 'react-router-dom'
function Portfolio() {
  return (
    <section
      id="work"
      className="portfolio-section section-shell"
    >
      <div className="container">
        <h2>What we can build</h2>

        <p className="section-subtitle">
          We’re a new studio — these are demo builds we made
          ourselves, not client work. Real case studies go here
          as we ship them.
        </p>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="portfolio-card"
            >
              <span className="tag mono tag-inline">
                {item.label}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="tags-row">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="pilot-banner">
          <div>
            <p className="banner-title">
              Be our first case study
            </p>

            <p>
              We’re onboarding our first clients now — early
              projects get a discounted rate in exchange for a
              detailed case study.
            </p>
          </div>

          <Link
            to="/contact"
            className="button button-primary"
          >
            Claim a pilot slot
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio