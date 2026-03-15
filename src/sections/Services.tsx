import { useNavigate } from 'react-router-dom'

const CS_ROUTES: Record<string, string> = {
  'brand-identity': '/case-studies/brand-identity',
  'packaging-design': '/case-studies/packaging-design',
  'graphic-design': '/case-studies/graphic-design',
  'motion-graphics': '/case-studies/motion-graphics',
  'product-design': '/case-studies/product-design',
  'ui-ux': '/case-studies/ui-ux',
}

const services = [
  { num: '01', name: 'Brand Identity', desc: 'Logo systems, visual identity, brand guidelines, and the complete visual language that makes a brand undeniable.', tags: ['Logo','Guidelines','Naming'], file: 'brand-identity' },
  { num: '02', name: 'Packaging Design', desc: 'Packaging that earns its shelf position. Dielines, print-ready artwork, 3D mockups, and full production support.', tags: ['Print','Dieline','3D Render'], file: 'packaging-design' },
  { num: '03', name: 'UI / UX Design', desc: 'Interfaces people actually want to use. Research-led UX, high-fidelity UI, and full design system delivery in Figma.', tags: ['Figma','Research','Design System'], file: 'ui-ux' },
  { num: '04', name: 'Motion & Video', desc: 'Brand films, social reels, motion identity kits, and animated content engineered for every format and platform.', tags: ['Film','Reels','After Effects'], file: 'motion-graphics' },
  { num: '05', name: 'Graphic Design', desc: 'Print, editorial, illustration, and campaign design. The complete visual communication suite for any medium.', tags: ['Print','Editorial','Illustration'], file: 'graphic-design' },
  { num: '06', name: 'Product Design', desc: 'Industrial and digital product design from concept to production. Hardware, software, and everything between.', tags: ['Industrial','Prototyping','CMF'], file: 'product-design' },
]

export default function Services() {
  const navigate = useNavigate()
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <section id="services" style={{ padding: '112px 56px', borderBottom: `1px solid ${rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 72 }}>
        <div>
          <p className="flex items-center gap-4 sec-label" style={{ fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase', color: accent, marginBottom: 48 }}>
            01 · Services
          </p>
          <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px,5vw,64px)', letterSpacing: -2, lineHeight: .95, color: '#F5F0E8' }}>
            Every discipline.<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>One studio.</em>
          </h2>
        </div>
        <div>
          <p className="reveal rd1" style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>
            We cover the full spectrum of visual design — so you never have to brief three different agencies, manage three timelines, or explain your brand from scratch every time.
          </p>
          <p className="reveal rd2" style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>
            Click any service to see the work. One team. One vision. All of it.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
        {services.map((svc, i) => (
          <div key={svc.num}
            className={`svc-card reveal rd${(i % 3) + 1} cursor-none`}
            style={{ background: '#161616', padding: '40px 36px 80px', position: 'relative' }}
            onClick={() => navigate(CS_ROUTES[svc.file])}
          >
            <span className="svc-child" style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 3, color: accent, marginBottom: 32, display: 'block', position: 'relative', zIndex: 1, transition: 'color .35s' }}>{svc.num}</span>
            <div className="svc-child" style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, color: '#F5F0E8', marginBottom: 14, letterSpacing: -.4, position: 'relative', zIndex: 1, transition: 'color .35s' }}>{svc.name}</div>
            <p className="svc-child" style={{ fontSize: 13, lineHeight: 1.8, color: muted, marginBottom: 28, position: 'relative', zIndex: 1, transition: 'color .35s' }}>{svc.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32, position: 'relative', zIndex: 1 }}>
              {svc.tags.map(tag => (
                <span key={tag} className="svc-tag-el" style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', border: `1px solid ${rule}`, padding: '5px 12px', color: muted, transition: 'color .35s, border-color .35s' }}>{tag}</span>
              ))}
            </div>
            <div className="svc-arrow-el" style={{ width: 36, height: 36, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#080808', position: 'relative', zIndex: 1, transition: 'background .35s, color .35s' }}>→</div>
            <span className="svc-hint" style={{ position: 'absolute', bottom: 32, right: 36, fontSize: 8.5, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(245,240,232,.28)', zIndex: 2, transition: 'color .35s', display: 'flex', alignItems: 'center', gap: 8, pointerEvents: 'none' }}>
              <span style={{ width: 14, height: 1, background: 'currentColor', flexShrink: 0 }} />
              View Case Study
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
