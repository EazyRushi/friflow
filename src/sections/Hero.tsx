export default function Hero() {
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="home" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 56px 80px' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 70% at 65% 30%,#1a0a00 0%,#0d0500 40%,#080808 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(8,8,8,.1) 0%,transparent 40%,rgba(8,8,8,.7) 100%)' }} />
        <div className="hero-grid-bg" style={{ position: 'absolute', inset: 0 }} />
      </div>

      {/* Content — paddingTop clears ticker (48) + navbar (~72) */}
      <div style={{ position: 'relative', zIndex: 3, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 80, paddingTop: 160 }}>
        <div>
          <p className="hero-eyebrow-anim flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: muted, marginBottom: 28 }}>
            <span style={{ width: 40, height: 1, background: accent, flexShrink: 0 }} />
            Full-Spectrum Design Studio
          </p>
          <h1 className="hero-h1-anim" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(60px,9vw,128px)', fontWeight: 800, letterSpacing: -4, lineHeight: .88, color: '#F5F0E8' }}>
            We Build<br />Brands That<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent, letterSpacing: -2 }}>Move.</em>
          </h1>
          <div className="hero-line-anim" style={{ width: 1, height: 48, background: `linear-gradient(to bottom,${accent},transparent)`, margin: '36px 0' }} />
          <p className="hero-desc-anim" style={{ fontSize: 15, lineHeight: 1.85, color: muted, maxWidth: 460 }}>
            From identity to interface, packaging to film — friflow is a full-service design studio that turns ideas into visual systems that last.
          </p>
        </div>
        <div className="flex flex-col items-end gap-[3px]" style={{ minWidth: 220 }}>
          {[['180+','Projects Delivered'],['40+','Global Clients'],['12','Design Awards']].map(([val, key], i) => (
            <div key={key} className={`hero-stat hero-stat-${i+1} w-full flex flex-col gap-[5px] cursor-none transition-colors duration-300`}
              style={{ background: 'rgba(8,8,8,.6)', backdropFilter: 'blur(16px)', border: `1px solid ${rule}`, borderLeft: `2px solid ${accent}`, padding: '20px 24px' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,107,53,.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,8,.6)')}
            >
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 32, fontWeight: 800, letterSpacing: -1.5, color: '#F5F0E8', lineHeight: 1 }}>
                {val.replace('+','')}{val.includes('+') && <em style={{ color: accent, fontStyle: 'normal' }}>+</em>}
              </span>
              <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: muted }}>{key}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
