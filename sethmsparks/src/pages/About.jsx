import './About.css'

const education = [
  {
    degree: 'MS, User Experience Design',
    school: 'Kent State University',
    year: '2021',
  },
  {
    degree: 'MBA, Technology & Innovation',
    school: 'Iowa State University',
    year: '',
  },
  {
    degree: 'BA, Business & Marketing',
    school: 'Central College',
    year: '',
  },
  {
    degree: 'High School Diploma',
    school: 'Moravia High School, Iowa',
    year: '',
  },
]

const traits = [
  { label: 'Myers-Briggs', value: 'ENFJ' },
  { label: 'Enneagram', value: 'Type 3' },
  { label: 'Strengths', value: 'Strategic, Learner, Ideation' },
  { label: 'Work Style', value: 'Collaborative, Iterative, Outcome-focused' },
]

export default function About() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">About</span>
        <h1 className="page-title">Hi, I'm Seth.</h1>
        <p className="page-subtitle">
          I've spent 15+ years helping organizations communicate better, design smarter, and connect more
          meaningfully with the people they serve.
        </p>

        <div className="about__bio">
          <p>
            I'm a UX designer, marketer, speaker, and voice actor based in Ankeny, Iowa. My career has lived
            at the intersection of creative strategy and user experience — I've led campaign refreshes,
            designed dozens of experience journeys for B2B and B2C initiatives, and spent a lot of time
            thinking about how people actually interact with the things we make.
          </p>
          <p>
            I hold an MBA focused on Technology and Innovation from Iowa State University and a Master's in
            User Experience Design from Kent State. Outside of design work, I speak on UX, marketing, and
            leadership topics, and I do voice acting for commercial, narration, and character work.
          </p>
          <p>
            I'm an active participant in local design and marketing communities, and I write a blog that
            ranges from professional topics to books, movies, and the occasional rant about bad UX.
          </p>
        </div>

        <hr className="divider" />

        {/* Education */}
        <section>
          <span className="section-label">Education</span>
          <h2 className="about__section-title">Academic Background</h2>
          <div className="about__edu-list">
            {education.map((e) => (
              <div key={e.degree} className="about__edu-item">
                <div>
                  <h3>{e.degree}</h3>
                  <span className="about__school">{e.school}</span>
                </div>
                {e.year && <span className="about__year">{e.year}</span>}
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Personality */}
        <section>
          <span className="section-label">Work Style</span>
          <h2 className="about__section-title">How I work</h2>
          <div className="grid-2" style={{ marginTop: '32px' }}>
            {traits.map((t) => (
              <div key={t.label} className="card">
                <span className="section-label">{t.label}</span>
                <p style={{ color: 'var(--text)', fontSize: '18px', marginTop: '8px', maxWidth: 'none' }}>
                  {t.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
