import './Voice.css'

const styles = [
  {
    label: 'Commercial',
    desc: 'Warm, trustworthy reads for brand spots, radio, and digital ads.',
  },
  {
    label: 'Narration',
    desc: 'Clear, engaging delivery for e-learning, documentaries, and corporate video.',
  },
  {
    label: 'Character',
    desc: 'Range and versatility for animation, games, and audiobooks.',
  },
  {
    label: 'Conversational',
    desc: 'Natural, authentic tone for podcasts, explainers, and IVR.',
  },
]

// Placeholder samples — replace src with your actual audio files
const samples = [
  {
    title: 'Commercial — Tech Brand',
    style: 'Commercial',
    duration: '0:30',
    src: null, // Replace with: '/audio/sample-commercial.mp3'
  },
  {
    title: 'Narration — E-Learning Module',
    style: 'Narration',
    duration: '1:00',
    src: null, // Replace with: '/audio/sample-narration.mp3'
  },
  {
    title: 'Character — Animation Demo',
    style: 'Character',
    duration: '0:45',
    src: null, // Replace with: '/audio/sample-character.mp3'
  },
  {
    title: 'Conversational — Podcast Promo',
    style: 'Conversational',
    duration: '0:30',
    src: null, // Replace with: '/audio/sample-conversational.mp3'
  },
]

export default function Voice() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">Voice Acting</span>
        <h1 className="page-title">A voice that<br />works for you.</h1>
        <p className="page-subtitle">
          Warm, versatile, and professional. I bring your script to life — whether it's a national spot,
          an e-learning module, or a character that needs to feel real.
        </p>

        <div className="voice__ctas">
          <a href="mailto:seth@sethmsparks.com" className="btn btn-filled">Request a Quote</a>
          <a href="mailto:seth@sethmsparks.com?subject=Custom Demo Request" className="btn">
            Request Custom Demo
          </a>
        </div>

        <hr className="divider" />

        {/* Styles */}
        <section>
          <span className="section-label">What I Do</span>
          <h2 className="voice__section-title">Voice Styles</h2>
          <div className="grid-2" style={{ marginTop: '32px' }}>
            {styles.map((s) => (
              <div key={s.label} className="card">
                <span className="section-label">{s.label}</span>
                <p style={{ marginTop: '8px', maxWidth: 'none' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Samples */}
        <section>
          <span className="section-label">Demo Reel</span>
          <h2 className="voice__section-title">Audio Samples</h2>
          <p style={{ marginBottom: '40px' }}>
            Replace the placeholders below with your actual audio files in <code>/public/audio/</code>.
          </p>

          <div className="voice__samples">
            {samples.map((s) => (
              <article key={s.title} className="voice__sample">
                <div className="voice__sample-info">
                  <span className="voice__sample-style">{s.style}</span>
                  <h3>{s.title}</h3>
                  <span className="voice__sample-duration">{s.duration}</span>
                </div>
                <div className="voice__player">
                  {s.src ? (
                    <audio controls preload="none">
                      <source src={s.src} type="audio/mpeg" />
                      Your browser does not support audio playback.
                    </audio>
                  ) : (
                    <div className="voice__placeholder">
                      <span>▶</span>
                      <span className="voice__placeholder-text">
                        Add your audio file to <code>/public/audio/</code> and update the <code>src</code> in Voice.jsx
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* Hire */}
        <section className="voice__hire">
          <span className="section-label">Hire Me</span>
          <h2>Let's make something great.</h2>
          <p>
            I work with agencies, production companies, and direct clients. Turnaround is typically
            24–72 hours depending on project scope. Home studio with professional-grade recording.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <a href="mailto:seth@sethmsparks.com" className="btn btn-filled">Get in Touch</a>
          </div>
        </section>
      </div>
    </main>
  )
}
