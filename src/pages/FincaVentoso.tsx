import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'

/* ─── Brand tokens ─── */
const DARK_GREEN = '#082d20'
const BLUE       = '#033e5c'
const YELLOW     = '#fce89c'
const WHITE      = '#ffffff'
const GREY_BLUE  = '#50798e'
const ORANGE     = '#f26c4f'
const BEIGE      = '#f0ebdf'
const LIGHT_GREEN= '#c1e1bb'

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.fv-reveal').forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])
}

function SecTag({ children, color = DARK_GREEN }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 700,
      letterSpacing: 3, textTransform: 'uppercase',
      color: color, marginBottom: 16
    }}>
      <div style={{ width: 24, height: 1, background: 'currentColor' }} />
      {children}
    </div>
  )
}

function SecHeading({ children, color = DARK_GREEN }: { children: React.ReactNode; color?: string }) {
  return (
    <h2 style={{
      fontFamily: "'Industry Inc', sans-serif", fontSize: 'clamp(32px, 4vw, 54px)',
      fontWeight: 700, lineHeight: 1.15, letterSpacing: '1px', textTransform: 'uppercase',
      color: color, marginBottom: 'clamp(40px, 6vw, 72px)',
    }}>
      {children}
    </h2>
  )
}

export default function FincaVentoso() {
  useReveal()
  const navigate = useNavigate()

  return (
    <div style={{ background: BEIGE, color: DARK_GREEN, fontFamily: "'Jost', sans-serif", fontWeight: 400, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={ORANGE} ringBorder="rgba(242, 108, 79, .45)" ringBorderHov={ORANGE} />
      <CsNavbar accentColor={ORANGE} bgScrolled="rgba(240, 235, 223, .96)" textColor={DARK_GREEN} mutedColor={GREY_BLUE} ctaTextColor="#fff" />

      {/* ════ HERO ════ */}
      <section style={{
        minHeight: '100vh', paddingTop: 64,
        background: BEIGE,
        position: 'relative', overflow: 'hidden',
        paddingLeft: 'clamp(24px, 8vw, 120px)', paddingRight: 'clamp(24px, 6vw, 80px)',
      }}>
        <div className="fv-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: 'clamp(40px, 6vw, 100px)', height: 'calc(100vh - 64px)' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: ORANGE, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: ORANGE }} /> Brand Identity
            </div>
            <h1 className="fv-reveal" style={{ fontFamily: "'Industry Inc', sans-serif", fontSize: 'clamp(46px, 6vw, 82px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '1px', textTransform: 'uppercase', color: DARK_GREEN, marginBottom: 12 }}>
              Finca<br/>Ventoso
            </h1>
            <p className="fv-reveal" style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: GREY_BLUE, fontWeight: 400, lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
              Modern Rustic Stay. A comprehensive brand manual detailing logo construction, typography, color palettes, and real-world applications.
            </p>
            <div className="fv-reveal mt-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px, 4vw, 48px)', marginBottom: 48 }}>
              {[{ l: 'Client', v: 'Finca Ventoso' }, { l: 'Scope', v: 'Brand Manual' }, { l: 'Industry', v: 'Hospitality' }].map(m => (
                <div key={m.l}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: GREY_BLUE, marginBottom: 6 }}>{m.l}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: DARK_GREEN }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="fv-reveal fv-hero-visual" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
             <img src="/Finca-Ventoso/Blue Png.png" alt="Finca Ventoso Logo" style={{ width: '80%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* ════ LOGO CONSTRUCTION ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: WHITE }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>01 · About Brand</SecTag>
          <SecHeading>Logo Construction</SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(48px, 8vw, 120px)', alignItems: 'start' }}>
            <div className="fv-reveal" style={{ fontSize: 18, color: GREY_BLUE, lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p>The logo is constructed with the main body as <strong>VENTOSO</strong> with ‘E’ in Ventoso as a symbol and a claim under that goes <em>‘modern rustic stay’</em>.</p>
              <ul style={{ paddingLeft: 20 }}>
                <li><strong>SYMBOL:</strong> The 'E' in Ventoso.</li>
                <li><strong>MAIN BODY:</strong> VENTOSO</li>
                <li><strong>CLAIM:</strong> modern rustic stay</li>
              </ul>
              <p>The thickness of the symbol needs to be as thick as the ‘T’ in VENTOSO.</p>
            </div>
            <div className="fv-reveal">
              <img src="/Finca-Ventoso/Box png.png" alt="Logo Construction" style={{ width: '100%', borderRadius: 16, background: BEIGE, padding: 32 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ════ LOGO VERSIONS ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: BEIGE }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>02 · Logo Versions</SecTag>
          <SecHeading>Adaptability</SecHeading>
          <p className="fv-reveal" style={{ fontSize: 18, color: GREY_BLUE, lineHeight: 1.85, maxWidth: 800, marginBottom: 48 }}>
            As far as possible, the logo needs to be used in the original format. Whenever possible, use the brand in its main version. In the case that is not possible for technical reasons, the blank (monochrome/inverse) version will be used in black and white.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="fv-reveal" style={{ background: WHITE, padding: 40, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <img src="/Finca-Ventoso/Blue Png.png" alt="Primary Logo" style={{ width: '80%' }} />
            </div>
            <div className="fv-reveal" style={{ background: DARK_GREEN, padding: 40, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <img src="/Finca-Ventoso/Blue Png.png" alt="Logo on Dark" style={{ width: '80%', filter: 'brightness(0) invert(1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ════ COLOURS ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: WHITE }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>03 · Colour Palette</SecTag>
          <SecHeading>Brand Colours</SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { hex: '#082d20', name: 'Dark Green', text: WHITE },
              { hex: '#033e5c', name: 'Deep Blue', text: WHITE },
              { hex: '#fce89c', name: 'Light Yellow', text: DARK_GREEN },
              { hex: '#ffffff', name: 'White', text: DARK_GREEN, border: true },
              { hex: '#50798e', name: 'Grey Blue', text: WHITE },
              { hex: '#f26c4f', name: 'Orange', text: WHITE },
              { hex: '#f0ebdf', name: 'Beige', text: DARK_GREEN },
              { hex: '#c1e1bb', name: 'Light Green', text: DARK_GREEN },
            ].map((c, i) => (
              <div key={i} className="fv-reveal" style={{
                background: c.hex, height: 160, borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: c.border ? '1px solid #ddd' : 'none'
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: c.text, opacity: 0.8 }}>{c.name}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: c.text, textTransform: 'uppercase' }}>{c.hex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SIZE & SAFE SPACE ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: BEIGE }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)' }}>
            <div>
              <SecTag>04 · Constraints</SecTag>
              <SecHeading>Size Diff</SecHeading>
              <p className="fv-reveal" style={{ fontSize: 16, color: GREY_BLUE, lineHeight: 1.8 }}>
                The minimum size at which the logo can be reproduced is at <strong>30 mm</strong> wide, to allow its readability but maximum can be infinite as long as safe space is maintained.
              </p>
              <div className="fv-reveal" style={{ marginTop: 24, padding: 32, background: WHITE, borderRadius: 16, display: 'inline-block' }}>
                <div style={{ width: '85px', borderBottom: `2px solid ${ORANGE}`, paddingBottom: 12, marginBottom: 12, textAlign: 'center', fontSize: 14, fontWeight: 600 }}>30mm</div>
                <img src="/Finca-Ventoso/Blue Png.png" alt="30mm Logo" style={{ width: '85px' }} />
              </div>
            </div>
            <div>
              <SecTag>05 · Spacing</SecTag>
              <SecHeading>Safe Space</SecHeading>
              <p className="fv-reveal" style={{ fontSize: 16, color: GREY_BLUE, lineHeight: 1.8 }}>
                To ensure optimal application and perception of the logo symbol in all supports and formats, it has a determined reserve area that sets a minimum distance regarding the texts and graphics elements, equivalent to the measure "X" which corresponds to the inner spacing in the logo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TYPOGRAPHY ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: DARK_GREEN, color: WHITE }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag color={YELLOW}>06 · Typography</SecTag>
          <SecHeading color={WHITE}>Brand Fonts</SecHeading>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
            <div className="fv-reveal" style={{ padding: 32, background: 'rgba(255,255,255,0.05)', borderRadius: 16 }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: ORANGE, marginBottom: 16 }}>Logo Typeface</div>
              <div style={{ fontSize: 32, marginBottom: 24, fontWeight: 700 }}>Semplicita Pro Bold</div>
              <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 16 }}>The corporate typeface used in the text "VENTOSO" of the logo.</p>
              <div style={{ fontSize: 14, opacity: 0.5, wordBreak: 'break-all', lineHeight: 1.8 }}>
                abcdefghijhkmnopqrstuvwxyz<br/>
                ABCDEFGHIJHKMNOPQRSTUVWXYZ
              </div>
            </div>

            <div className="fv-reveal" style={{ padding: 32, background: 'rgba(255,255,255,0.05)', borderRadius: 16 }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: ORANGE, marginBottom: 16 }}>Headings Typeface</div>
              <div style={{ fontFamily: "'Industry Inc', sans-serif", fontSize: 32, marginBottom: 24, fontWeight: 700 }}>Industry Inc</div>
              <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 16 }}>The text for headings will be with 'Industry Inc'.</p>
              <div style={{ fontFamily: "'Industry Inc', sans-serif", fontSize: 14, opacity: 0.5, wordBreak: 'break-all', lineHeight: 1.8 }}>
                abcdefghijhkmnopqrstuvwxyz
              </div>
            </div>

            <div className="fv-reveal" style={{ padding: 32, background: 'rgba(255,255,255,0.05)', borderRadius: 16 }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: ORANGE, marginBottom: 16 }}>Body Typeface</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 32, marginBottom: 24, fontWeight: 400 }}>Jost</div>
              <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 16 }}>The sub text or the main body will be in the font 'Jost'.</p>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, opacity: 0.5, wordBreak: 'break-all', lineHeight: 1.8 }}>
                abcdefghijhkmnopqrstuvwxyz<br/>
                ABCDEFGHIJHKMNOPQRSTUVWXYZ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ MOCKUPS / APPLICATIONS ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: BEIGE }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SecTag>07 · Applications</SecTag>
          <SecHeading>Brand in the world</SecHeading>
          
          <div className="fv-gallery" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(12, 1fr)', 
            gap: 'clamp(16px, 3vw, 32px)',
            gridAutoFlow: 'dense'
          }}>
            {[
              { src: '/Finca-Ventoso/7.png', alt: 'Overview', span: 12 },
              { src: '/Finca-Ventoso/Bill.png', alt: 'Bill', span: 7 },
              { src: '/Finca-Ventoso/Matchboxes.png', alt: 'Matchboxes', span: 5 },
              { src: '/Finca-Ventoso/Toileteries.png', alt: 'Toileteries', span: 4 },
              { src: '/Finca-Ventoso/DND.png', alt: 'DND', span: 4 },
              { src: '/Finca-Ventoso/Hanger.png', alt: 'Hanger', span: 4 },
              { src: '/Finca-Ventoso/Towel.png', alt: 'Towel', span: 6 },
              { src: '/Finca-Ventoso/Screenshot 2026-04-17 at 9.02.42 PM.png', alt: 'Details', span: 6 },
              { src: '/Finca-Ventoso/19.png', alt: 'Mockup Final', span: 12 },
            ].map((img, i) => (
              <div 
                key={i} 
                className="fv-reveal fv-gallery-item" 
                style={{ 
                  gridColumn: `span ${img.span}`, 
                  borderRadius: 24, 
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: WHITE,
                  boxShadow: '0 10px 40px rgba(8,45,32,0.06)'
                }}
              >
                <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)'
                    }} 
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CsFooter accentColor={ORANGE} bgColor={DARK_GREEN} ruleColor="rgba(255,255,255,.1)" textColor={WHITE} mutedColor="rgba(255,255,255,.5)" copyOpacity="0.3" />

      <style>{`
        .fv-reveal { opacity: 0; transform: translateY(30px); transition: opacity .8s cubic-bezier(0.16,1,0.3,1), transform .8s cubic-bezier(0.16,1,0.3,1); }
        .fv-reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 900px) {
          .fv-hero-grid { grid-template-columns: 1fr !important; text-align: center; height: auto !important; padding-bottom: 60px; }
          .fv-hero-grid > div:first-child { display: flex; flex-direction: column; align-items: center; }
          .mt-meta { justify-content: center; }
          .fv-hero-visual { min-height: 300px !important; }
          .fv-gallery-item { grid-column: span 12 !important; }
        }
      `}</style>
    </div>
  )
}
