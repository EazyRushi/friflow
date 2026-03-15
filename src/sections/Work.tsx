import { useNavigate } from 'react-router-dom'

const CS_ROUTES: Record<string, string> = {
  'brand-identity': '/case-studies/brand-identity',
  'packaging-design': '/case-studies/packaging-design',
  'graphic-design': '/case-studies/graphic-design',
  'motion-graphics': '/case-studies/motion-graphics',
  'product-design': '/case-studies/product-design',
  'ui-ux': '/case-studies/ui-ux',
}

const works = [
  { file: 'brand-identity', label: 'Brand Identity', cat: 'Packaging · Brand Identity', title: 'Aurore Beauty Rebrand', year: '2025', bg: 'linear-gradient(135deg,#1a0800,#3d1500,#6b2800)', span: true },
  { file: 'product-design', label: 'Product Design', cat: 'Product Design', title: 'Modu Smart Scale', year: '2025', bg: 'linear-gradient(135deg,#040c00,#0e2200,#1c3d00)', span: false },
  { file: 'graphic-design', label: 'Graphic Design', cat: 'Graphic Design · Print', title: 'Roots & Ritual Identity', year: '2025', bg: 'linear-gradient(135deg,#060410,#0e0a28,#1a1450)', span: false },
  { file: 'ui-ux', label: 'UI / UX Design', cat: 'UI / UX Design', title: 'Cipher Finance Platform', year: '2025', bg: 'linear-gradient(135deg,#180408,#3d0a18,#6b1430)', span: false },
  { file: 'motion-graphics', label: 'Motion Graphics', cat: 'Motion Graphics · Film', title: 'Volta Energy Brand Film', year: '2025', bg: 'linear-gradient(135deg,#040c14,#0a1e2e,#143050)', span: false },
]

export default function Work() {
  const navigate = useNavigate()
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="work" style={{ background: '#111111', paddingBottom: 0, paddingLeft: 0, paddingRight: 0, borderBottom: `1px solid ${rule}` }}>
      <div style={{ padding: '112px 56px 56px' }}>
        <p className="sec-label flex items-center gap-4" style={{ fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase', color: accent, marginBottom: 48 }}>
          02 · Selected Work
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end' }}>
          <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,5vw,64px)', letterSpacing: -2, lineHeight: .95, color: '#F5F0E8' }}>
            Work that speaks<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>for itself.</em>
          </h2>
          <a href="#contact" className="reveal rd2 cursor-none no-underline transition-all duration-250"
            style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#F5F0E8', border: `1px solid ${rule}`, padding: '18px 48px', marginBottom: 4 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = rule; e.currentTarget.style.color = '#F5F0E8' }}
          >View All Work</a>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 3 }}>
        {works.map((w, i) => (
          <div key={i} className="work-item cursor-none" style={{ position: 'relative', overflow: 'hidden', gridRow: w.span ? 'span 2' : undefined, gridColumn: w.span ? '1' : undefined }}
            onClick={() => navigate(CS_ROUTES[w.file])}>
            <div style={{ width: '100%', overflow: 'hidden' }}>
              <div className="work-thumb-inner" style={{ width: '100%', height: '100%', background: w.bg, aspectRatio: w.span ? '3/4' : '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(245,240,232,.15)', textAlign: 'center', padding: 20 }}>{w.title}</span>
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
