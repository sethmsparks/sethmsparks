import './Resume.css'

const certifications = [
  { name: 'Google UX Design Certificate', issuer: 'Google', year: '2021' },
  { name: 'HubSpot Marketing Certification', issuer: 'HubSpot', year: '' },
  { name: 'Nielsen Norman UX Research', issuer: 'Nielsen Norman Group', year: '' },
]

const experience = [
  {
    role: 'Senior UX Designer / Marketing Strategist',
    org: 'Current Role',
    period: 'Present',
    bullets: [
      'Led UX strategy and design across B2B and B2C product initiatives',
      'Developed and executed multi-channel marketing campaigns',
      'Built and facilitated workshops on design thinking and user research',
    ],
  },
]

export default function Resume() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">Resume</span>
        <h1 className="page-title">CV</h1>
        <p className="page-subtitle">
          15+ years designing products, marketing experiences, and leading creative teams.
        </p>

        <div className="resume__actions">
          {/* Replace href with your actual PDF path */}
          <a href="/seth-sparks-resume.pdf" download className="btn btn-filled">Download PDF</a>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>

        <hr className="divider" />

        <section>
          <span className="section-label">Experience</span>
          <p className="resume__note">
            Full work history available on{' '}
            <a href="https://linkedin.com/in/sethmsparks" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{' '}
            or in the downloadable PDF above. Add your roles to <code>Resume.jsx</code> to display them here.
          </p>
        </section>

        <hr className="divider" />

        <section>
          <span className="section-label">Certifications</span>
          <div className="resume__certs">
            {certifications.map((c) => (
              <div key={c.name} className="resume__cert">
                <div>
                  <strong>{c.name}</strong>
                  <span className="resume__cert-issuer">{c.issuer}</span>
                </div>
                {c.year && <span className="resume__cert-year">{c.year}</span>}
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        <section>
          <span className="section-label">Skills</span>
          <div className="resume__skills">
            {[
              'User Research', 'Interaction Design', 'Usability Testing', 'Information Architecture',
              'Marketing Strategy', 'Campaign Development', 'Brand Strategy', 'Content Strategy',
              'Workshop Facilitation', 'Leadership', 'Figma', 'Adobe Creative Suite',
            ].map((s) => (
              <span key={s} className="resume__skill">{s}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
