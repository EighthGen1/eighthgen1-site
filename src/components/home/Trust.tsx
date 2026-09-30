import {
  processSteps,
  technologyStack,
  trustStats,
} from '../../data/process'

function Trust() {
  return (
    <section
      id="trust"
      className="trust-section section-shell"
    >
      <div className="container">
        <h2>Why teams choose EightGenOne</h2>

        <p className="section-subtitle">
          Track record you can verify — not just take our word
          for.
        </p>

        <div className="stats-grid">
          {trustStats.map((stat) => (
            <div
              key={stat.value}
              className="stat-card"
            >
              <p className="stat-value">
                {stat.value}
              </p>

              <p className="stat-label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="process-panel">
          <p className="panel-label mono">
            HOW WE WORK
          </p>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="process-step"
              >
                <p className="step-title">
                  {step.number} · {step.title}
                </p>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tags-row tags-wrap">
          {technologyStack.map((technology) => (
            <span
              key={technology}
              className="tag mono"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust