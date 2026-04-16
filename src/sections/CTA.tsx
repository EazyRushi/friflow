export default function CTA() {
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="contact" style={{ padding: 0, borderBottom: 'none' }}>
      <div className="px-6 py-20 md:px-14 md:py-32 lg:py-36" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%,#1a0a00,#080808)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="reveal" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: muted, marginBottom: 20 }}>Ready when you are</p>
          <h2 className="reveal rd1" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px,8vw,110px)', fontWeight: 800, letterSpacing: -3, lineHeight: .88, color: '#F5F0E8', marginBottom: 40 }}>
            Let's build<br />something <em style={{ color: accent, fontStyle: 'normal' }}>great.</em>
          </h2>
          <div className="reveal rd2 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a href="mailto:hello@friflow.studio" className="cursor-none no-underline font-medium transition-colors duration-250 w-full sm:w-auto text-center"
              style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#080808', background: accent, padding: '16px 40px' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#F5F0E8')}
              onMouseLeave={e => (e.currentTarget.style.background = accent)}
            >Start a Project</a>
            <a href="#work" className="cursor-none no-underline transition-all duration-250 w-full sm:w-auto text-center"
              style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#F5F0E8', border: `1px solid ${rule}`, padding: '16px 40px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = rule; e.currentTarget.style.color = '#F5F0E8' }}
            >See Our Work</a>
          </div>
          <p className="reveal rd3" style={{ marginTop: 28, fontSize: 12, color: muted, letterSpacing: 1 }}>
            Or drop us a line at <a href="mailto:hello@friflow.studio" style={{ color: accent, textDecoration: 'none' }}>hello@friflow.studio</a>
          </p>
        </div>
      </div>
    </section>
  )
}
