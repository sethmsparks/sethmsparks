import { Link } from 'react-router-dom'
import './Speaking.css'

const talks = [
  {
    title: 'The Empathy Gap: Why Most Products Fail Their Users',
    topics: ['UX Design', 'Product Strategy'],
    formats: ['Keynote', 'Workshop'],
    length: '45–90 min',
    desc: 'A deep dive into why organizations build products that miss the mark, and a practical framework for designing from genuine user understanding.',
  },
  {
    title: 'Marketing in the Age of Experience',
    topics: ['Marketing', 'Customer Experience'],
    formats: ['Keynote', 'Panel'],
    length: '30–60 min',
    desc: 'How modern marketing strategy must evolve from campaign-first thinking to experience-first thinking, with real-world examples and tactical takeaways.',
  },
  {
    title: 'The Four Most Basic Leadership Fundamentals',
    topics: ['Leadership', 'Management'],
    formats: ['Workshop', 'Breakout Session'],
    length: '60–90 min',
    desc: 'A no-nonsense breakdown of the leadership behaviors that matter most, drawn from years of leading creative and product teams.',
  },
  {
    title: 'UX Research on a Budget',
    topics: ['UX Design', 'Research'],
    formats: ['Workshop', 'Webinar'],
    length: '60 min',
    desc: 'Practical methods for gathering real user insights when you don\'t have an enterprise research budget. Hands-on exercises included.',
  },
  {
    title: 'Common Sense Isn\'t Common: Rethinking Merit',
    topics: ['Culture', 'Leadership', 'DEI'],
    formats: ['Keynote', 'Discussion'],
    length: '30–45 min',
    desc: 'Challenging assumptions about meritocracy and common sense in professional settings — and what leaders can do differently.',
  },
]

const audiences = [
  'Corporate teams & departments',
  'Marketing & design conferences',
  'University programs',
  'Industry associations',
  'Leadership offsites',
]

export default function Speaking() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">Public Speaking</span>
        <h1 className="page-title">Let's talk<br />to your team.</h1>
        <p className="page-subtitle">
          I speak on UX design, marketing strategy, and leadership — with a direct, conversational style
          and practical takeaways your audience can use immediately.
        </p>

        <div className="speaking__ctas">
          <a href="/contact" className="btn btn-filled">Book a Talk</a>
          <a href="mailto:seth@sethmsparks.com" className="btn">Email Seth</a>
        </div>

        <hr className="divider" />

        {/* Audiences */}
        <section className="speaking__audiences">
          <span className="section-label">Who I Speak To</span>
          <div className="speaking__audience-list">
            {audiences.map((a) => (
              <span key={a} className="speaking__audience-pill">{a}</span>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Talks */}
        <section>
          <span className="section-label">Presentations</span>
          <h2 className="speaking__section-title">Current Talks</h2>
          <p style={{ marginBottom: '40px', color: 'var(--text2)' }}>
            All presentations can be customized for your audience and format. Custom topics available on request.
          </p>

          <div className="speaking__talks">
            {talks.map((t) => (
              <article key={t.title} className="speaking__talk">
                <div className="speaking__talk-meta">
                  <div className="speaking__talk-tags">
                    {t.topics.map((topic) => (
                      <span key={topic} className="speaking__tag">{topic}</span>
                    ))}
                  </div>
                  <span className="speaking__length">{t.length}</span>
                </div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <div className="speaking__formats">
                  {t.formats.map((f) => (
                    <span key={f} className="speaking__format">{f}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Booking CTA */}
        <section className="speaking__booking">
          <span className="section-label">Booking</span>
          <h2>Ready to book?</h2>
          <p>
            Reach out with your event details — date, audience, format, and any specific topics you'd
            like covered. I'll respond within 48 hours.
          </p>
          <a href="mailto:seth@sethmsparks.com" className="btn btn-filled" style={{ marginTop: '28px' }}>
            seth@sethmsparks.com
          </a>
        </section>
      </div>
    </main>
  )
}
