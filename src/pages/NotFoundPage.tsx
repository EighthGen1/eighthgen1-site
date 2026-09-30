import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <p className="not-found-code">404</p>

          <h1>Page not found</h1>

          <p className="not-found-description">
            The page you are looking for doesn't exist or may have been moved.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="button button-primary">
              Back to Home
            </Link>

            <Link to="/contact" className="button button-secondary">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage