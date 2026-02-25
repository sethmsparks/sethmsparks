import './Elsewhere.css'

const channels = [
  {
    name: 'vlogwithseth',
    platform: 'YouTube',
    desc: 'A personal vlog documenting life, family, and whatever else feels worth recording.',
    url: 'https://www.youtube.com/@vlogwithseth',
    icon: '▶',
  },
  {
    name: 'PresentShock',
    platform: 'YouTube',
    desc: 'A channel about tech, entertainment, and culture — reviews, commentary, and deep dives.',
    url: 'https://www.youtube.com/@presentshock',
    icon: '▶',
  },
]

const social = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sethmsparks' },
  { label: 'Twitter / X', url: 'https://twitter.com/sethmsparks' },
  { label: 'Instagram', url: 'https://instagram.com/sethmsparks' },
]

export default function Elsewhere() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">Me Elsewhere</span>
        <h1 className="page-title">Elsewhere</h1>
        <p className="page-subtitle">
          The side projects, channels, and profiles you'll find when you go looking.
        </p>

        <div className="elsewhere__channels">
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="elsewhere__channel"
            >
              <div className="elsewhere__icon">{c.icon}</div>
              <div>
                <div className="elsewhere__platform">{c.platform}</div>
                <h2>{c.name}</h2>
                <p>{c.desc}</p>
              </div>
              <span className="elsewhere__arrow">→</span>
            </a>
          ))}
        </div>

        <hr className="divider" />

        <section>
          <span className="section-label">Social</span>
          <div className="elsewhere__social">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="elsewhere__social-link"
              >
                {s.label} →
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
