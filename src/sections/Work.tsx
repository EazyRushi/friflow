import { useNavigate } from 'react-router-dom'

const CS_ROUTES: Record<string, string> = {
  'eazytaxes-brand': '/case-studies/eazytaxes-brand',
  'sabhi-chef': '/case-studies/sabhi-chef',
  'lmc': '/case-studies/lmc',
  'ui-ux': '/case-studies/ui-ux',
  'motion-graphics': '/case-studies/motion-graphics',
  'brand-identity': '/case-studies/brand-identity',
}

const works = [
  { file: 'eazytaxes-brand', label: 'EazyTaxes', cat: 'Brand Identity · Strategy', title: 'EazyTaxes Brand Evolution', year: '2025', bg: 'linear-gradient(135deg,#fff,#f5f5f5)', image: '/eazytaxes-work/logo.jpg', span: false, containImage: true },
  { file: 'lmc',             label: 'Los 100 Mejores', cat: 'Identity · Logos', title: 'Los 100 Mejores', year: '2025', bg: 'linear-gradient(135deg,#7a1216,#4a0a0d,#1e0405)', image: '/LMC/Mockups/1.png', span: false },
  { file: 'sabhi-chef',      label: 'Brand & Product', cat: 'Brand · Website · Packaging', title: 'Sabhi Chef', year: '2025', bg: 'linear-gradient(135deg,#824419,#552A0D,#291405)', image: '/Sabhi Chef/Logo/Asset 6@2x.png', span: false, containImage: true },
  { file: 'ui-ux',           label: 'UI / UX Design', cat: 'UI / UX Design', title: 'Cipher Finance Platform', year: '2025', bg: 'linear-gradient(135deg,#180408,#3d0a18,#6b1430)', image: undefined, span: false },
  { file: 'motion-graphics', label: 'Motion Graphics', cat: 'Motion Graphics · Film', title: 'Volta Energy Brand Film', year: '2025', bg: 'linear-gradient(135deg,#040c14,#0a1e2e,#143050)', image: undefined, span: false },
  { file: 'brand-identity',  label: 'Brand Identity', cat: 'Packaging · Brand Identity', title: 'Aurore Beauty Rebrand', year: '2025', bg: 'linear-gradient(135deg,#1a0800,#3d1500,#6b2800)', image: undefined, span: false },
]

export default function Work() {
  const navigate = useNavigate()
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="work" style={{ background: '#111111', borderBottom: `1px solid ${rule}` }}>
      {/* Header */}
      <div className="px-6 pt-16 pb-10 md:px-14 md:pt-24 md:pb-14 lg:pt-28 lg:pb-14">
        <p className="sec-label flex items-center gap-4" style={{ fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase', color: accent, marginBottom: 32 }}>
          02 · Selected Work
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,64px)', letterSpacing: -2, lineHeight: .95, color: '#F5F0E8' }}>
            Work that speaks<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>for itself.</em>
          </h2>
          <a href="#contact"
            className="reveal rd2 cursor-none no-underline transition-all duration-250 self-start sm:self-auto"
            style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#F5F0E8', border: `1px solid ${rule}`, padding: '14px 32px', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = rule; e.currentTarget.style.color = '#F5F0E8' }}
          >View All Work</a>
        </div>
      </div>

      {/* Work grid — mobile: 1 col, tablet: 2 col, desktop: 3 col with span */}
      {/* Mobile/tablet: simple uniform grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
        {works.map((w, i) => (
          <div key={i} className="work-item cursor-none" style={{ position: 'relative', overflow: 'hidden' }}
            onClick={() => navigate(CS_ROUTES[w.file])}>
            <div style={{ width: '100%', overflow: 'hidden' }}>
              <div className="work-thumb-inner" style={{ width: '100%', background: w.bg, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {w.image ? (
                  <img src={w.image} alt={w.title} style={{ width: '100%', height: '100%', objectFit: w.containImage ? 'contain' : 'cover', padding: w.containImage ? '40px' : '0', transition: 'transform .8s cubic-bezier(0.2, 0, 0.2, 1)' }} className="work-img" />
                ) : (
                  <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(245,240,232,.15)', textAlign: 'center', padding: 20 }}>{w.title}</span>
                )}
              </div>
            </div>
            <div className="work-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,8,8,.9) 0%,transparent 50%)', opacity: 0, transition: 'opacity .4s' }} />
            <div className="work-info" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, transform: 'translateY(16px)', transition: 'transform .4s, opacity .4s', opacity: 0 }}>
              <div style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: accent, marginBottom: 6 }}>{w.cat}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#F5F0E8', letterSpacing: -.4, marginBottom: 4 }}>{w.title}</div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: muted }}>{w.year}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 3-col with span */}
      <div className="hidden lg:grid gap-[3px]" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto' }}>
        {works.map((w, i) => (
          <div key={i} className="work-item cursor-none" style={{ position: 'relative', overflow: 'hidden', gridRow: w.span ? 'span 2' : undefined, gridColumn: w.span ? '1' : undefined }}
            onClick={() => navigate(CS_ROUTES[w.file])}>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              <div className="work-thumb-inner" style={{ width: '100%', height: '100%', background: w.bg, aspectRatio: w.span ? '3/4' : '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {w.image ? (
                  <img src={w.image} alt={w.title} style={{ width: '100%', height: '100%', objectFit: w.containImage ? 'contain' : 'cover', padding: w.containImage ? '60px' : '0', transition: 'transform .8s cubic-bezier(0.2, 0, 0.2, 1)' }} className="work-img" />
                ) : (
                  <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(245,240,232,.15)', textAlign: 'center', padding: 20 }}>{w.title}</span>
                )}
              </div>
            </div>
            <div className="work-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,8,8,.9) 0%,transparent 50%)', opacity: 0, transition: 'opacity .4s' }} />
            <div className="work-info" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32, transform: 'translateY(16px)', transition: 'transform .4s, opacity .4s', opacity: 0 }}>
              <div style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: accent, marginBottom: 8 }}>{w.cat}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#F5F0E8', letterSpacing: -.4, marginBottom: 4 }}>{w.title}</div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: muted }}>{w.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
