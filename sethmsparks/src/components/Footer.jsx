import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Seth M. Sparks</Link>
          <p>Designing Products, Experiences, and Marketing</p>
        </div>
        <nav className="footer__nav">
          <div className="footer__col">
            <span className="footer__col-label">Work</span>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/speaking">Speaking</Link>
            <Link to="/voice">Voice Acting</Link>
            <Link to="/resume">Resume</Link>
          </div>
          <div className="footer__col">
            <span className="footer__col-label">More</span>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/elsewhere">Elsewhere</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Seth M. Sparks</span>
        <div className="footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}
