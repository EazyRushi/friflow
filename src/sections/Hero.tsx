export default function Hero() {
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="home" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      className="px-6 pb-12 md:px-14 md:pb-16 lg:px-14 lg:pb-20"
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 70% at 65% 30%,#1a0a00 0%,#0d0500 40%,#080808 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(8,8,8,.1) 0%,transparent 40%,rgba(8,8,8,.7) 100%)' }} />
        <div className="hero-grid-bg" style={{ position: 'absolute', inset: 0 }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, paddingTop: 140 }}
        className="flex flex-col gap-10 lg:grid lg:gap-20"
        // lg: side-by-side, mobile: stacked
        // We use inline style for the grid only at lg+ via a wrapper trick
      >
        {/* Use a responsive grid wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-10 lg:gap-20">
          {/* Left: headline */}
          <div>
            <p className="hero-eyebrow-anim flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: muted, marginBottom: 24 }}>
              <span style={{ width: 40, height: 1, background: accent, flexShrink: 0 }} />
              Full-Spectrum Design Studio
            </p>
            <h1 className="hero-h1-anim" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(44px,9vw,128px)', fontWeight: 800, letterSpacing: -3, lineHeight: .88, color: '#F5F0E8' }}>
              We Build<br />Brands That<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent, letterSpacing: -2 }}>Move.</em>
            </h1>
            <div className="hero-line-anim" style={{ width: 1, height: 40, background: `linear-gradient(to bottom,${accent},transparent)`, margin: '28px 0' }} />
            <p className="hero-desc-anim" style={{ fontSize: 14, lineHeight: 1.85, color: muted, maxWidth: 460 }}>
              From identity to interface, packaging to film — friflow is a full-service design studio that turns ideas into visual systems that last.
            </p>
          </div>

          {/* Right: stats — row on mobile, column on desktop */}
          <div className="flex flex-row lg:flex-col items-stretch gap-[3px] lg:min-w-[220px]">
            {[['180+','Projects Delivered'],['40+','Global Clients'],['12','Design Awards']].map(([val, key], i) => (
              <div key={key} className={`hero-stat hero-stat-${i+1} flex-1 lg:flex-none flex flex-col gap-[5px] cursor-none transition-colors duration-300`}
                style={{ background: 'rgba(8,8,8,.6)', backdropFilter: 'blur(16px)', border: `1px solid ${rule}`, borderLeft: `2px solid ${accent}`, padding: '16px 18px' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,107,53,.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,8,.6)')}
              >
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(20px,4vw,32px)', fontWeight: 800, letterSpacing: -1.5, color: '#F5F0E8', lineHeight: 1 }}>
                  {val.replace('+','')}{val.includes('+') && <em style={{ color: accent, fontStyle: 'normal' }}>+</em>}
                </span>
                <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: muted }}>{key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
