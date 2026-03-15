const metrics = [
  { val: '180', suffix: '+', label: 'Projects Delivered' },
  { val: '40', suffix: '+', label: 'Global Clients' },
  { val: '12', suffix: '', label: 'Design Awards' },
  { val: '8', suffix: '+', label: 'Years of Practice' },
]

export default function About() {
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="about" style={{ padding: '112px 56px', borderBottom: `1px solid ${rule}` }}>
      <p className="sec-label flex items-center gap-4" style={{ fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase', color: accent, marginBottom: 48 }}>
        04 · The Studio
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,5vw,64px)', letterSpacing: -2, lineHeight: .95, color: '#F5F0E8', marginBottom: 28 }}>
            Design is our<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>obsession.</em>
          </h2>
          <p className="reveal rd1" style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>
            We are friflow — a full-spectrum design studio. We work with founders, brands, and businesses who want design that genuinely moves the needle.
          </p>
          <p className="reveal rd2" style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>
            From a single logo to a complete brand universe, we bring the same obsessive attention to every project. No templates. No shortcuts.
          </p>
          <div className="reveal rd3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, marginTop: 56 }}>
            {metrics.map(m => (
              <div key={m.label} className="am-item cursor-none transition-colors duration-300"
                style={{ background: '#111111', padding: '32px 28px' }}
                onMouseEnter={e => (e.currentTarget.style.background = accent)}
                onMouseLeave={e => (e.currentTarget.style.background = '#111111')}
              >
                <div className="am-val" style={{ fontFamily: 'Syne, sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: -1.5, color: '#F5F0E8', lineHeight: 1, marginBottom: 6, transition: 'color .3s' }}>
                  {m.val}{m.suffix && <em style={{ color: accent, fontStyle: 'normal', transition: 'color .3s' }}>{m.suffix}</em>}
                </div>
                <div className="am-label" style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: muted, transition: 'color .3s' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal rd2" style={{ background: 'linear-gradient(135deg,#1a0a00,#3d1a00)', aspectRatio: '4/5', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(245,240,232,.15)' }}>Studio photography</span>
          <div style={{ position: 'absolute', bottom: 28, right: 28, background: accent, padding: '16px 20px' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, letterSpacing: -1, color: '#080808', lineHeight: 1 }}>friflow</div>
            <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(8,8,8,.55)', marginTop: 3 }}>design studio</div>
          </div>
        </div>
      </div>
    </section>
  )
}
