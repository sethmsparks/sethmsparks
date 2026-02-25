import './Contact.css'

const inquiries = [
  { label: 'Speaking Bookings', email: 'seth@sethmsparks.com', subject: 'Speaking Inquiry' },
  { label: 'Voice Acting', email: 'seth@sethmsparks.com', subject: 'Voice Acting Inquiry' },
  { label: 'UX & Design Work', email: 'seth@sethmsparks.com', subject: 'Design Inquiry' },
  { label: 'General', email: 'seth@sethmsparks.com', subject: 'Hello' },
]

export default function Contact() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">Contact</span>
        <h1 className="page-title">Let's talk.</h1>
        <p className="page-subtitle">
          Whether you're booking a speaker, looking for voice talent, or have a design project in mind —
          reach out. I respond within 48 hours.
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__detail">
              <span className="section-label">Email</span>
              <a href="mailto:seth@sethmsparks.com" className="contact__value">
                seth@sethmsparks.com
              </a>
            </div>
            <div className="contact__detail">
              <span className="section-label">Phone</span>
              <a href="tel:5152576257" className="contact__value">
                515-257-6257
              </a>
            </div>
            <div className="contact__detail">
              <span className="section-label">Location</span>
              <span className="contact__value contact__value--plain">Ankeny, Iowa</span>
            </div>
          </div>

          <div className="contact__quick">
            <span className="section-label">Quick Inquiries</span>
            <p style={{ marginBottom: '20px', marginTop: '4px' }}>Jump straight to the right conversation:</p>
            <div className="contact__links">
              {inquiries.map((i) => (
                <a
                  key={i.label}
                  href={`mailto:${i.email}?subject=${encodeURIComponent(i.subject)}`}
                  className="contact__inquiry"
                >
                  <span>{i.label}</span>
                  <span className="contact__inquiry-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
