import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'
import { useCsReveal } from '../layouts/CaseStudyLayout'
import { useNavigate } from 'react-router-dom'

/* ─── Brand tokens (match HTML :root vars) ─── */
const TEAL        = '#3fb9cb'
const TEAL_DARK   = '#3098a6'
const TEAL_LIGHT  = '#7bbdcc'
const TEAL_PALE   = '#e8f4f7'
const INK         = '#010101'
const INK_LIGHT   = '#5a5a5a'
const INK_MUTED   = '#8a8a8a'
const WHITE       = '#ffffff'
const PAPER       = '#f4f4f2'
const EASE        = 'cubic-bezier(0.16, 1, 0.3, 1)'

/* Container mirrors .container from HTML */
const containerStyle: React.CSSProperties = {
  maxWidth: 1280,
  margin:   '0 auto',
  padding:  '0 clamp(24px, 5vw, 80px)',
}

/* Section vertical padding mirrors .section { padding: clamp(80px,10vw,140px) 0 } */
const sectionPY: React.CSSProperties = {
  padding: 'clamp(80px, 10vw, 140px) 0',
  position: 'relative',
}

/* ─── Small helpers ─── */
function SecTag({ text, white = false }: { text: string; white?: boolean }) {
  return (
    <div style={{
      fontFamily:    'Aileron, sans-serif',
      fontSize:       8,
      fontWeight:     700,
      letterSpacing:  5,
      textTransform: 'uppercase',
      color:          white ? 'rgba(255,255,255,.4)' : TEAL,
      display:       'flex',
      alignItems:    'center',
      gap:            14,
      marginBottom:   20,
    }}>
      <span style={{ width: 24, height: 1, background: white ? 'rgba(255,255,255,.3)' : TEAL, flexShrink: 0 }} />
      {text}
    </div>
  )
}

function SecHeading({ children, white = false }: { children: React.ReactNode; white?: boolean }) {
  return (
    <h2 style={{
      fontFamily:    'Aileron, sans-serif',
      fontSize:      'clamp(32px, 4vw, 56px)',
      fontWeight:     900,
      letterSpacing: -2,
      lineHeight:    .95,
      color:          white ? WHITE : INK,
    }}>
      {children}
    </h2>
  )
}

export default function EazyTaxesBrand() {
  useCsReveal()
  const navigate = useNavigate()

  return (
    <div style={{ background: WHITE, color: INK, fontFamily: 'Aileron, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={TEAL} ringBorder="rgba(63,185,203,.45)" ringBorderHov={TEAL} />
      <CsNavbar accentColor={TEAL} bgScrolled="rgba(255,255,255,.95)" textColor={INK} mutedColor={INK_LIGHT} ctaTextColor="#fff" />

      {/* ════ HERO ════ */}
      <section style={{
        minHeight:            '100vh',
        paddingTop:            64,
        background:            WHITE,
        position:             'relative',
        overflow:             'hidden',
        display:              'grid',
        gridTemplateColumns:  '1fr 1fr',
        alignItems:           'center',
        gap:                   0,
      }}>
        {/* Dot pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(67,147,166,.1) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        {/* Blob */}
        <div style={{ position: 'absolute', right: '-10%', top: '10%', width: '55vw', height: '55vw', maxWidth: 700, maxHeight: 700, background: 'radial-gradient(ellipse, rgba(67,147,166,.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Hero left */}
        <div style={{ padding: 'clamp(60px, 8vw, 120px) clamp(32px, 5vw, 80px) clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)', position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(67,147,166,.1)', border: '1px solid rgba(67,147,166,.2)', padding: '8px 16px', marginBottom: 32 }}>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: TEAL }}>Brand Identity · 12 Weeks · 2025</span>
          </div>

          <h1 className="reveal" style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 900, letterSpacing: '-2.5px', lineHeight: .92, color: INK, marginBottom: 24, transitionDelay: '.1s' }}>
            <span style={{ color: INK }}>eazy</span><span style={{ color: TEAL }}>taxes</span><br />
            <span style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>Brand Evolution</span>
          </h1>

          <p className="reveal" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.8, color: INK_LIGHT, maxWidth: 480, marginBottom: 44, fontWeight: 300, transitionDelay: '.18s' }}>
            A comprehensive visual system for a modern tax advisory firm — balancing architectural precision with immediate, accessible authority across every touchpoint.
          </p>

          <div className="reveal flex items-center flex-wrap" style={{ gap: 16, marginBottom: 56, transitionDelay: '.26s' }}>
            <a href="#brief" onClick={e => { e.preventDefault(); document.querySelector('#brief')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="cursor-none"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: INK, color: WHITE, padding: '15px 32px', fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', textDecoration: 'none', transition: 'background .2s, gap .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = TEAL; e.currentTarget.style.gap = '18px' }}
              onMouseLeave={e => { e.currentTarget.style.background = INK; e.currentTarget.style.gap = '12px' }}>
              View Case Study <span>↓</span>
            </a>
            <a href="https://eazytaxes.com" target="_blank" rel="noopener noreferrer"
              className="cursor-none"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: INK, borderBottom: `1.5px solid ${INK}`, paddingBottom: 2, fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', transition: 'color .2s, border-color .2s, gap .2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = TEAL; e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.gap = '16px' }}
              onMouseLeave={e => { e.currentTarget.style.color = INK; e.currentTarget.style.borderColor = INK; e.currentTarget.style.gap = '10px' }}>
              Visit Client Site <span>→</span>
            </a>
          </div>

          <div className="reveal flex" style={{ gap: 'clamp(24px, 3vw, 48px)', transitionDelay: '.34s' }}>
            {[
              { num: <>250<em style={{ color: TEAL, fontStyle: 'normal' }}>+</em></>, label: 'Design Assets' },
              { num: <>60<em style={{ color: TEAL, fontStyle: 'normal' }}>pg</em></>, label: 'Brand Guidelines' },
              { num: <><em style={{ color: TEAL, fontStyle: 'normal' }}>↑</em>45<em style={{ color: TEAL, fontStyle: 'normal' }}>%</em></>, label: 'Trust Index' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 900, letterSpacing: '-1.5px', color: INK, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: INK_MUTED, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero right */}
        <div style={{ position: 'relative', zIndex: 2, height: '100%', minHeight: 600, overflow: 'hidden' }}>
          <img src="/work/work1.jpeg" alt="EazyTaxes Brand" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(240,248,250,.4) 0%, transparent 40%)' }} />
          {/* Floating card */}
          <div className="reveal" style={{ position: 'absolute', bottom: 40, left: 32, background: WHITE, padding: '20px 24px', boxShadow: '0 16px 60px rgba(0,0,0,.12)', display: 'flex', alignItems: 'center', gap: 16, minWidth: 220 }}>
            <div style={{ width: 40, height: 40, background: TEAL_PALE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" stroke={TEAL} fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -1, color: INK, lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: INK_MUTED, marginTop: 2 }}>Consistency</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PALETTE STRIP ════ */}
      <div style={{ display: 'flex', height: 5 }}>
        {[TEAL, TEAL_DARK, TEAL_LIGHT, TEAL_PALE, INK].map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
      </div>

      {/* ════ 01 · THE BRIEF ════ */}
      <section id="brief" style={{ ...sectionPY, background: PAPER }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px, 7vw, 100px)', alignItems: 'center' }}>
            {/* Left */}
            <div className="reveal">
              <SecTag text="01 · The Brief" />
              <div style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 700, letterSpacing: '-.8px', lineHeight: 1.2, color: INK, marginBottom: 24 }}>
                Precision in every <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>pixel.</em>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: INK_LIGHT, marginBottom: 18, fontWeight: 300 }}>
                EazyTaxes manages high-stakes tax compliance for international firms. Their previous identity felt purely administrative and failed to reflect their sophisticated analytical approach.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: INK_LIGHT, fontWeight: 300 }}>
                Our objective was to pivot the brand towards a "Financial Architect" persona — one that commands authority through structural clarity while remaining approachable to small business owners.
              </p>
            </div>

            {/* Right – pillars */}
            <div className="reveal" style={{ transitionDelay: '.1s' }}>
              <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid rgba(0,0,0,.07)` }}>
                {[
                  { num: '01', title: 'Authority',     desc: 'Establish immediate credibility through architectural precision and structural clarity.' },
                  { num: '02', title: 'Accessibility', desc: 'Balance professional sophistication with approachable, human-centered communication.' },
                  { num: '03', title: 'Scalability',   desc: 'Create a flexible system that maintains consistency across digital and physical touchpoints.' },
                  { num: '04', title: 'Distinction',   desc: 'Stand apart from traditional tax firms through modern, confident visual language.' },
                ].map((p, i, arr) => (
                  <div key={i}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 18, padding: '22px 24px', borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,.06)' : 'none', transition: 'background .2s', cursor: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.background = TEAL_PALE}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', color: TEAL, flexShrink: 0, marginTop: 2, minWidth: 24 }}>{p.num}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 3 }}>{p.title}</div>
                      <div style={{ fontSize: 11.5, lineHeight: 1.6, color: INK_LIGHT }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 02 · BOOKLET BAND (full-bleed image, text at bottom) ════ */}
      <section className="reveal" style={{ position: 'relative', overflow: 'hidden', height: 'clamp(380px, 50vw, 680px)' }}>
        <img src="/work/work2.jpeg" alt="Brand booklet" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: `transform 8s ease` }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,.4) 60%, transparent 100%)', display: 'flex', alignItems: 'flex-end', padding: 'clamp(32px, 5vw, 64px)' }}>
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', color: TEAL, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 20, height: 1, background: TEAL, flexShrink: 0 }} />
              02 · Visual DNA
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, letterSpacing: -2, lineHeight: .95, color: WHITE, marginBottom: 16 }}>
              Built on <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>precision.</em>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,.6)' }}>
              The new identity system utilizes a strict grid-based framework that mirrors the meticulous nature of tax documentation. This architectural foundation allows for infinite scalability across digital and physical touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* ════ 03 · COLLATERAL SPLIT ════ */}
      <section style={{ background: PAPER, ...sectionPY, padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, minHeight: 560 }}>
          {/* Image */}
          <div className="reveal" style={{ overflow: 'hidden', position: 'relative' }}>
            <img src="/work/work4.jpeg" alt="EazyTaxes Collateral" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: `transform .8s ${EASE}` }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
          {/* Text */}
          <div className="reveal" style={{ background: PAPER, padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', transitionDelay: '.1s' }}>
            <SecTag text="03 · Collateral" />
            <SecHeading>Consistency at <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>scale.</em></SecHeading>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: INK_LIGHT, marginBottom: 28, fontWeight: 300, marginTop: 20 }}>
              From business cards to comprehensive brand guidelines, every touchpoint maintains the architectural precision that defines EazyTaxes.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 28, border: '1px solid rgba(0,0,0,.07)' }}>
              {[
                { icon: '◉', label: 'Business Cards',       sub: 'Premium letterpress finish' },
                { icon: '◻', label: 'Letterhead',           sub: 'Digital & print templates' },
                { icon: '◈', label: 'Email Signatures',     sub: 'Responsive HTML design' },
                { icon: '▲', label: 'Presentation Decks',   sub: 'PowerPoint & Keynote' },
                { icon: '⬡', label: 'Document Templates',   sub: 'Client-facing materials' },
                { icon: '✦', label: 'Social Media',         sub: 'Profile & cover assets' },
              ].map((item, idx, arr) => (
                <div key={idx}
                  style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 22px', borderBottom: idx < arr.length - 1 ? '1px solid rgba(0,0,0,.06)' : 'none', transition: 'background .2s, transform .2s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.transform = 'translateX(6px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateX(0)' }}>
                  <div style={{ width: 36, height: 36, background: TEAL_PALE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16, color: TEAL }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: INK }}>{item.label}</div>
                    <div style={{ fontSize: 10, color: INK_MUTED }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ 04 · LOGO SECTION (dark) ════ */}
      <section style={{ background: INK, position: 'relative', overflow: 'hidden', ...sectionPY }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(67,147,166,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(67,147,166,.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ ...containerStyle, position: 'relative', zIndex: 1 }}>
          <SecTag text="04 · Logo System" white />
          <SecHeading white>Clean, structural &amp; <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>accessible.</em></SecHeading>

          {/* Logo variants */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, position: 'relative', zIndex: 1, marginTop: 40 }}>
            {[
              { bg: 'transparent', border: '1px solid rgba(255,255,255,.04)', eazy: WHITE, taxes: TEAL,  label: 'PRIMARY MARK',  labelColor: 'rgba(255,255,255,.3)' },
              { bg: TEAL,          border: 'none',                            eazy: WHITE, taxes: WHITE,  label: 'ON TEAL',       labelColor: 'rgba(255,255,255,.6)' },
              { bg: PAPER,         border: 'none',                            eazy: INK,   taxes: TEAL,   label: 'ON LIGHT',      labelColor: INK_MUTED },
            ].map((v, i) => (
              <div key={i} className="reveal"
                style={{ padding: 'clamp(40px, 5vw, 72px) clamp(24px, 3vw, 48px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, minHeight: 200, transition: 'background .3s', background: v.bg, border: v.border, cursor: 'none', transitionDelay: `${i * .1}s` }}
                onMouseEnter={e => { if (v.bg === 'transparent') e.currentTarget.style.background = 'rgba(67,147,166,.1)' }}
                onMouseLeave={e => { if (v.bg === 'transparent') e.currentTarget.style.background = 'transparent' }}>
                <div style={{ fontFamily: 'Aileron, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: -1, textAlign: 'center' }}>
                  <span style={{ color: v.eazy }}>eazy</span><span style={{ color: v.taxes }}>taxes</span>
                </div>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: v.labelColor, textAlign: 'center' }}>{v.label}</div>
              </div>
            ))}
          </div>

          {/* Color swatches */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', marginTop: 3, position: 'relative', zIndex: 1 }}>
            {[
              { bg: TEAL,       name: 'TEAL',       hex: '#3fb9cb', textColor: WHITE },
              { bg: TEAL_DARK,  name: 'TEAL DARK',  hex: '#3098a6', textColor: WHITE },
              { bg: TEAL_LIGHT, name: 'TEAL LIGHT', hex: '#7bbdcc', textColor: WHITE },
              { bg: TEAL_PALE,  name: 'TEAL PALE',  hex: '#e8f4f7', textColor: INK  },
              { bg: INK,        name: 'INK',         hex: '#010101', textColor: WHITE },
              { bg: WHITE,      name: 'WHITE',       hex: '#FFFFFF', textColor: INK  },
            ].map((sw, i) => (
              <div key={i} className="reveal" style={{ padding: '22px 18px 20px', background: sw.bg, transitionDelay: `${i * .05}s` }}>
                <div style={{ fontSize: 7.5, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginTop: 10, color: sw.textColor }}>{sw.name}</div>
                <div style={{ fontSize: 9.5, marginTop: 2, opacity: .65, color: sw.textColor }}>{sw.hex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ IMAGE MOSAIC ════ */}
      <section style={{ background: WHITE }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 3 }}>
          {/* Full width */}
          <div className="reveal" style={{ gridColumn: '1/-1', overflow: 'hidden', position: 'relative', minHeight: 360 }}>
            <img src="/work/work3.jpeg" alt="Brand Guidelines" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: `transform .7s ${EASE}` }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(1,1,1,.7))', padding: '32px 24px 20px', fontSize: 9, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,.8)', opacity: 0, transition: 'opacity .3s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>BRAND GUIDELINES</div>
          </div>
          {/* Two columns */}
          {[
            { src: '/work/work4.jpeg', label: 'BUSINESS CARDS', delay: '.1s' },
            { src: '/work/work1.jpeg', label: 'STATIONERY',     delay: '.2s' },
          ].map((t, i) => (
            <div key={i} className="reveal" style={{ overflow: 'hidden', position: 'relative', minHeight: 300, transitionDelay: t.delay }}>
              <img src={t.src} alt={t.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: `transform .7s ${EASE}` }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(1,1,1,.7))', padding: '32px 24px 20px', fontSize: 9, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,.8)', opacity: 0, transition: 'opacity .3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ BRAND MERCHANDISE ════ */}
      <section style={{ background: WHITE, ...sectionPY }}>
        <div style={containerStyle}>
          <SecTag text="Brand Merchandise" />
          <SecHeading>The brand, <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>everywhere.</em></SecHeading>
          <p className="reveal" style={{ fontSize: 15, lineHeight: 1.85, color: INK_LIGHT, maxWidth: 640, marginTop: 16, fontWeight: 300, transitionDelay: '.18s' }}>
            Every client touchpoint — from a pen handed across a desk to a mug on a credenza — carries the same precise, confident visual language.
          </p>
        </div>
        {/* Merch grid — full-width inside padding */}
        <div style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, marginTop: 48, transitionDelay: '.2s' }}>
            {[
              { src: '/merch-pens.jpg', badge: 'Branded Pens', badgeTeal: false },
              { src: '/merch-mugs.jpg', badge: 'Branded Mugs', badgeTeal: true  },
            ].map((tile, i) => (
              <div key={i} style={{ overflow: 'hidden', position: 'relative', aspectRatio: '16/9' }}>
                <img src={tile.src} alt={tile.badge}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: `transform .7s ${EASE}` }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                {/* Badge */}
                <div style={{
                  position: 'absolute', top: 20, left: 20,
                  background: tile.badgeTeal ? TEAL : WHITE,
                  color: tile.badgeTeal ? WHITE : INK,
                  padding: '8px 16px',
                  fontSize: 8, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase',
                  boxShadow: '0 4px 20px rgba(0,0,0,.1)',
                }}>
                  {tile.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 05 · PROCESS ════ */}
      <section style={{ background: WHITE, ...sectionPY }}>
        <div style={containerStyle}>
          <SecTag text="05 · Process" />
          <SecHeading>Designing for <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>Trust.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 56, position: 'relative' }}>
            {/* Connector line */}
            <div style={{ content: '', position: 'absolute', top: 36, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, ${TEAL}, rgba(67,147,166,.1))`, zIndex: 0 }} />
            {[
              { num: '01', title: 'Identity Audit',  body: 'Identifying the gaps in existing communications and defining the architectural brand pillars.' },
              { num: '02', title: 'System Strategy', body: 'Developing a logic-driven visual language that balances teal authority with white space.' },
              { num: '03', title: 'Development',     body: 'Building a comprehensive asset library and specialized document templates.' },
              { num: '04', title: 'Implementation',  body: 'Global rollout across all offices, ensuring 100% brand consistency.' },
            ].map((s, i) => (
              <div key={i} className="reveal"
                style={{ position: 'relative', zIndex: 1, background: WHITE, border: '1px solid rgba(0,0,0,.07)', padding: 'clamp(24px, 3vw, 40px)', transition: 'border-color .3s, transform .3s', transitionDelay: `${i * .1}s` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.transform = 'translateY(-6px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,.07)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ width: 48, height: 48, background: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900, color: WHITE, marginBottom: 22 }}>{s.num}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginBottom: 10 }}>{s.title}</div>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: INK_LIGHT }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 06 · DELIVERABLES (white bg with border cards) ════ */}
      <section style={{ background: INK, ...sectionPY }}>
        <div style={containerStyle}>
          <SecTag text="06 · Deliverables" white />
          <SecHeading white>The Branding <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>Toolkit.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 40 }}>
            {[
              { icon: '◉', title: 'Primary Mark',  desc: 'Flexible logo system for all digital and physical applications.' },
              { icon: '◻', title: 'Visual System', desc: 'A strict typographic and color framework for tax reporting.' },
              { icon: '◈', title: 'Guidelines',    desc: '60+ pages of structural rules for global consistency.' },
              { icon: '▲', title: 'Templates',     desc: 'Automation-ready slide decks and client report layouts.' },
              { icon: '⬡', title: 'Stationery',    desc: 'Business identity cards and high-end physical collateral.' },
              { icon: '✦', title: 'Social Signage',desc: 'Standardized digital signatures and professional banners.' },
            ].map((d, i) => (
              <div key={i} className="reveal"
                style={{ padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 36px)', background: WHITE, border: '1px solid rgba(0,0,0,.07)', transition: 'background .25s, border-color .25s, transform .25s', position: 'relative', overflow: 'hidden', transitionDelay: `${(i % 3) * .08}s`, cursor: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = TEAL_PALE; e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.borderColor = 'rgba(0,0,0,.07)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <span style={{ fontSize: 26, marginBottom: 18, display: 'block', color: TEAL }}>{d.icon}</span>
                <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginBottom: 8 }}>{d.title}</div>
                <p style={{ fontSize: 11.5, lineHeight: 1.7, color: INK_LIGHT }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 07 · RESULTS (dark, side-bordered cards) ════ */}
      <section style={{ background: INK, position: 'relative', overflow: 'hidden', ...sectionPY }}>
        <div style={{ position: 'absolute', bottom: -80, right: -40, fontSize: 'clamp(160px, 22vw, 300px)', fontWeight: 900, color: 'rgba(255,255,255,.02)', letterSpacing: '-12px', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>RESULTS</div>
        <div style={{ ...containerStyle, position: 'relative', zIndex: 1 }}>
          <SecTag text="07 · Results" white />
          <SecHeading white>Measured <em style={{ color: TEAL, fontStyle: 'normal', fontWeight: 'inherit' }}>Impact.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 40, position: 'relative', zIndex: 1 }}>
            {[
              { num: '↑45%', numTeal: true,  label: 'Trust Index', desc: 'Post-launch surveys showed a significant leap in perceived professional authority.' },
              { num: '100%', numTeal: false,  label: 'Adherence',   desc: 'Successful internal rollout with zero deviations from the new guidelines.' },
              { num: '2025', numTeal: false,  label: 'Global Launch', desc: 'Identity successfully deployed across North America and EU markets.' },
            ].map((r, i) => (
              <div key={i} className="reveal"
                style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 3vw, 48px)', borderRight: i < 2 ? '1px solid rgba(255,255,255,.06)' : 'none', position: 'relative', transition: 'background .3s', transitionDelay: `${i * .1}s` }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(67,147,166,.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                {/* Animated left bar on hover */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 0, background: TEAL, transition: `height .7s ${EASE}` }}
                  onMouseEnter={e => (e.currentTarget.style.height = '100%')} />
                <div style={{ fontFamily: 'Aileron, sans-serif', fontSize: 'clamp(44px, 6vw, 76px)', fontWeight: 900, letterSpacing: -3, color: WHITE, lineHeight: .9, marginBottom: 18 }}>
                  {r.num.split('').map((ch, ci) => '↑%'.includes(ch)
                    ? <em key={ci} style={{ color: TEAL, fontStyle: 'normal' }}>{ch}</em>
                    : <span key={ci}>{ch}</span>
                  )}
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 10 }}>{r.label}</div>
                <p style={{ fontSize: 11.5, lineHeight: 1.7, color: 'rgba(255,255,255,.3)' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ BRAND SPREAD (full-bleed) ════ */}
      <section className="reveal" style={{ position: 'relative', overflow: 'hidden', height: 'clamp(340px, 45vw, 620px)' }}>
        <img src="/work/work3.jpeg" alt="Brand spread" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 8s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(1,1,1,.65) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: 'clamp(32px, 5vw, 64px)' }}>
          <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12, letterSpacing: '1px', maxWidth: 520 }}>
            <strong style={{ color: WHITE, fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 4 }}>EazyTaxes Brand Guidelines</strong>
            A 60-page architectural blueprint defining every visual rule for the global rollout.
          </div>
        </div>
      </section>

      {/* ════ NEXT PROJECT CTA ════ */}
      <section style={{ background: INK, padding: 'clamp(80px, 10vw, 140px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(67,147,166,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(67,147,166,.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ ...containerStyle, position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 20 }}>Next Project</p>
          <div style={{ fontFamily: 'Aileron, sans-serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, letterSpacing: -2, color: WHITE, lineHeight: .95, marginBottom: 14 }}>Aurore Beauty</div>
          <em style={{ fontSize: 16, fontWeight: 100, color: TEAL, fontStyle: 'normal', display: 'block', marginBottom: 48 }}>Packaging · Brand Identity</em>
          <a href="/case-studies/brand-identity"
            onClick={e => { e.preventDefault(); navigate('/case-studies/brand-identity') }}
            className="cursor-none"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: TEAL, color: WHITE, padding: '17px 38px', fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', transition: 'background .2s, gap .2s' }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(0.9)'; e.currentTarget.style.gap = '22px' }}
            onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.gap = '14px' }}>
            View Project <span>→</span>
          </a>
        </div>
      </section>

      <CsFooter accentColor={TEAL} bgColor={INK} ruleColor="rgba(255,255,255,.06)" textColor={WHITE} mutedColor="rgba(245,240,232,.35)" copyOpacity="0.2" />
    </div>
  )
}
