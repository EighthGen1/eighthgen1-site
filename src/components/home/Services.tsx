import { services } from '../../data/services'

function Services() {
  return (
    <section
      id="services"
      className="services-section section-shell"
    >
      <div className="container">
        <h2>Services</h2>

        <div className="services-list">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-row"
            >
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="tags-row">
                {service.tags.map((tag) => (
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
      </div>
    </section>
  )
}

export default Services