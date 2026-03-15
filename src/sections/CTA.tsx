export default function CTA() {
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="contact" style={{ padding: 0, borderBottom: 'none' }}>
      <div style={{ padding: '140px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%,#1a0a00,#080808)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="reveal" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: muted, marginBottom: 24 }}>Ready when you are</p>
          <h2 className="reveal rd1" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px,8vw,110px)', fontWeight: 800, letterSpacing: -4, lineHeight: .88, color: '#F5F0E8', marginBottom: 48 }}>
            Let's build<br />something <em style={{ color: accent, fontStyle: 'normal' }}>great.</em>
          </h2>
          <div className="reveal rd2 flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:hello@friflow.studio" className="cursor-none no-underline font-medium transition-colors duration-250"
              style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#080808', background: accent, padding: '18px 48px' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#F5F0E8')}
              onMouseLeave={e => (e.currentTarget.style.background = accent)}
            >Start a Project</a>
            <a href="#work" className="cursor-none no-underline transition-all duration-250"
              style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#F5F0E8', border: `1px solid ${rule}`, padding: '18px 48px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = rule; e.currentTarget.style.color = '#F5F0E8' }}
            >See Our Work</a>
          </div>
          <p className="reveal rd3" style={{ marginTop: 36, fontSize: 12, color: muted, letterSpacing: 1 }}>
            Or drop us a line at <a href="mailto:hello@friflow.studio" style={{ color: accent, textDecoration: 'none' }}>hello@friflow.studio</a>
          </p>
        </div>
      </div>
    </section>
  )
}
