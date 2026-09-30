import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="topbar">
      <div className="container nav-row">
        {/* Logo */}
        <Link
          to="/"
          className="brand"
          aria-label="EightGenOne home"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
              <path
                d="M16 3C10.5 3 6.5 6 6.5 9.6c0 2.6 1.9 4.4 3.9 5.4-3.1 1.1-5.9 3.5-5.9 7 0 4.7 5.1 7.6 11.5 7.6s11.5-2.9 11.5-7.6c0-3.5-2.8-5.9-5.9-7 2-1 3.9-2.8 3.9-5.4C25.5 6 21.5 3 16 3z"
                stroke="url(#brandGradient)"
                strokeWidth="2.2"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="brandGradient"
                  x1="4"
                  y1="3"
                  x2="28"
                  y2="29"
                >
                  <stop stopColor="#4F7CFF" />
                  <stop offset="1" stopColor="#7B61FF" />
                </linearGradient>
              </defs>
            </svg>
           {/* <img src="src/assets/images/logo_black_bg_white.svg" alt="eighthgenonelogo" /> */}
          </span>

          <span className="brand-text">
            Eight<span>Gen</span>One
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="main-nav"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className="nav-link"
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className="nav-link"
          >
            Services
          </NavLink>

          <NavLink
            to="/work"
            className="nav-link"
          >
            Work
          </NavLink>

          <NavLink
            to="/vision"
            className="nav-link"
          >
            Vision
          </NavLink>

          <NavLink
            to="/why-us"
            className="nav-link"
          >
            Why Us
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <Link
            to="/contact"
            className="button button-primary button-inline"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            className="button button-ghost nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen ? (
        <nav
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Services
          </NavLink>

          <NavLink
            to="/work"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Work
          </NavLink>

          <NavLink
            to="/vision"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Vision
          </NavLink>

          <NavLink
            to="/why-us"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Why Us
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Get a Quote →
          </NavLink>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
