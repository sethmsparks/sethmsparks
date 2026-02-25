import './Portfolio.css'

const projects = [
  {
    title: 'Member Experience Network',
    tags: ['UX Design', 'Research'],
    year: '2020',
    slug: 'member-experience-network',
  },
  {
    title: 'Sharon Public Library Redesign',
    tags: ['UX Design', 'IA'],
    year: '2020',
    slug: 'sharon-public-library',
  },
  {
    title: '10-Foot Interface: Streaming Media',
    tags: ['Interaction Design', 'TV/OTT'],
    year: '2019',
    slug: '10ft-interface-streaming',
  },
  {
    title: 'ReminderX Productivity App',
    tags: ['Mobile', 'UX Design'],
    year: '2019',
    slug: 'reminderx',
  },
  {
    title: 'Papa John\'s Usability Study',
    tags: ['Usability', 'Research'],
    year: '2020',
    slug: 'papa-johns-usability',
  },
  {
    title: 'GameTogether: Find Friends to Game With',
    tags: ['Interaction Design', 'Social'],
    year: '2021',
    slug: 'gametogether',
  },
]

export default function Portfolio() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">Work</span>
        <h1 className="page-title">Portfolio</h1>
        <p className="page-subtitle">
          A selection of UX and product design work spanning research, interaction design, and usability.
        </p>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <article key={p.slug} className="portfolio__card">
              <div className="portfolio__card-num">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="portfolio__card-content">
                <div className="portfolio__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="portfolio__tag">{t}</span>
                  ))}
                </div>
                <h2>{p.title}</h2>
                <span className="portfolio__year">{p.year}</span>
              </div>
              <a
                href={`https://sethmsparks.com/professional/portfolio/`}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__link"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
