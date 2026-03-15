const steps = [
  { num: '01', title: 'Discovery', body: 'Deep dive into your brand, audience, and market. We ask the questions most agencies skip.', connector: true },
  { num: '02', title: 'Strategy & Direction', body: 'Creative territories and visual direction agreed before any design begins. No surprises at presentation.', connector: true },
  { num: '03', title: 'Design & Refinement', body: 'Three focused rounds of refinement. Each one more precise than the last.', connector: true },
  { num: '04', title: 'Delivery & Launch', body: 'Print-ready files, developer specs, brand guides, and templates. Everything you need to launch.', connector: false },
]

export default function Process() {
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="process" style={{ padding: '112px 56px', borderBottom: `1px solid ${rule}` }}>
      <p className="sec-label flex items-center gap-4" style={{ fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase', color: accent, marginBottom: 48 }}>
        03 · How We Work
      </p>
      <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,5vw,64px)', letterSpacing: -2, lineHeight: .95, color: '#F5F0E8', maxWidth: 640, marginBottom: 8 }}>
        Clear process.<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>No surprises.</em>
      </h2>
      <p className="reveal rd1" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 0 }}>
        Every engagement follows the same four-phase approach — refined across 180+ projects.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: rule, marginTop: 56 }}>
        {steps.map((s, i) => (
          <div key={s.num} className={`proc-step reveal rd${i + 1} cursor-none transition-colors duration-300`}
            style={{ background: '#080808', padding: '48px 36px', position: 'relative' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#111111'; (e.currentTarget.querySelector('.ps-num') as HTMLElement).style.color = accent }}
            onMouseLeave={e => { e.currentTarget.style.background = '#080808'; (e.currentTarget.querySelector('.ps-num') as HTMLElement).style.color = 'rgba(255,107,53,.4)' }}
          >
            <span className="ps-num" style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 3, color: 'rgba(255,107,53,.4)', marginBottom: 28, display: 'block', transition: 'color .3s' }}>{s.num}</span>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#F5F0E8', marginBottom: 14, letterSpacing: -.3 }}>{s.title}</div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: muted }}>{s.body}</p>
            {s.connector && <div className="ps-connector" />}
          </div>
        ))}
      </div>
    </section>
  )
}
