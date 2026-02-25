import { Link } from 'react-router-dom'
import './Home.css'

const highlights = [
  {
    label: 'UX & Product Design',
    desc: '15+ years designing experiences for B2B and B2C',
    to: '/portfolio',
    cta: 'View Portfolio',
  },
  {
    label: 'Public Speaking',
    desc: 'Keynotes and workshops on UX, marketing, and leadership',
    to: '/speaking',
    cta: 'Book a Talk',
  },
  {
    label: 'Voice Acting',
    desc: 'Warm, versatile reads for commercial, narration & character work',
    to: '/voice',
    cta: 'Hear Samples',
  },
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="container">
          <div className="home__eyebrow">
            <span className="section-label">Ankeny, Iowa</span>
          </div>
          <h1 className="home__name">Seth M.<br />Sparks</h1>
          <p className="home__tagline">
            I help teams think more clearly about people — through design, marketing, speaking, and storytelling.
          </p>
          <div className="home__ctas">
            <Link to="/portfolio" className="btn btn-filled">View Portfolio</Link>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>
        <div className="home__hero-decoration" aria-hidden="true">
          <span>UX</span><span>MBA</span><span>MFA</span><span>VO</span>
        </div>
      </section>

      {/* Highlights */}
      <section className="home__highlights">
        <div className="container">
          <div className="home__highlight-grid">
            {highlights.map((h) => (
              <Link to={h.to} key={h.label} className="home__highlight-card">
                <span className="section-label">{h.label}</span>
                <p>{h.desc}</p>
                <span className="home__card-cta">{h.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bio strip */}
      <section className="home__bio">
        <div className="container home__bio-inner">
          <div className="home__bio-text">
            <span className="section-label">About Me</span>
            <h2>Designing for humans.<br />Speaking to teams.<br />Giving voice to ideas.</h2>
            <p>
              I hold an MBA from Iowa State and a Master's in UX Design from Kent State.
              I've spent 15+ years at the intersection of marketing and product design,
              and I love talking about it just as much as doing it.
            </p>
            <Link to="/about" className="btn" style={{ marginTop: '32px' }}>Full Bio</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
