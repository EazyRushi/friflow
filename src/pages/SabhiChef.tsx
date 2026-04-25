import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'

/* ─── Brand tokens ─── */
const Y    = '#FEE472'
const O    = '#F47B40'
const R    = '#DD2D2B'
const G    = '#16703A'
const OL   = '#B7C158'
const BR   = '#995424'
const CREAM = '#FFF9ED'
const INK  = '#1e0f00'
const EASE = 'cubic-bezier(0.16,1,0.3,1)'

function useSabhiReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.sc-reveal').forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])
}

/* ─── Tag pill ─── */
function Tag({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: Y, border: `2px solid ${BR}`, borderRadius: 30,
      padding: '6px 15px', fontFamily: 'Nunito, sans-serif',
      fontSize: '.65rem', fontWeight: 900, letterSpacing: '.14em',
      textTransform: 'uppercase', color: BR, marginBottom: '.9rem',
      ...style,
    }}>
      {children}
    </div>
  )
}

/* ─── Section heading ─── */
function SH({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{
      fontFamily: 'Nunito, sans-serif',
      fontSize: 'clamp(2rem,3.8vw,3.2rem)',
      fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.025em',
      color: BR, marginBottom: '1rem', ...style,
    }}>
      {children}
    </h2>
  )
}

/* ─── Color bar strip at top ─── */
function ColorBar() {
  return (
    <div style={{ display: 'flex', height: 6 }}>
      {[Y, O, R, G, OL, INK].map((c, i) => (
        <div key={i} style={{ flex: 1, background: c }} />
      ))}
    </div>
  )
}

/* ─── Scrolling ticker ─── */
const TICKER_ITEMS = [
  { label: 'Client',   value: 'Sabhi Chef' },
  { label: 'Scope',    value: 'Brand + Website + Packaging + Social' },
  { label: 'Founders', value: 'Surekha & Ruchita' },
  { label: 'Products', value: '15+ SKUs' },
  { label: 'Category', value: 'Food & Lifestyle' },
  { label: 'Year',     value: '2024 – 2025' },
]

/* ─── Packaging card ─── */
function PkCard({
  topBg, brandLight, category, name, meta, chips, botBg, price, weight, footTitle, footSub, delay, imgUrl,
}: {
  topBg?: string; brandLight?: boolean; category?: string; name?: string; meta?: string; chips?: string[];
  botBg?: string; price?: string; weight?: string; footTitle: string; footSub: string; delay?: string; imgUrl?: string;
}) {
  return (
    <div className="sc-reveal" style={{
      background: CREAM, border: `3px solid rgba(255,249,237,.12)`,
      borderRadius: 20, overflow: 'hidden',
      transition: `transform .3s ${EASE}, box-shadow .3s`,
      cursor: 'default', transitionDelay: delay,
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,.3)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
    >
      {imgUrl ? (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
          <img src={imgUrl} alt={footTitle} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', aspectRatio: '3/4' }}>
          {/* Top */}
          <div style={{ padding: '.85rem 1rem .55rem', textAlign: 'center', borderBottom: `2px solid ${INK}`, background: topBg }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.9rem', fontWeight: 900, color: brandLight ? 'white' : BR }}>Sabhi Chef</div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.42rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: brandLight ? 'rgba(255,255,255,.75)' : G, marginTop: 2 }}>Homely Food in Minutes</div>
          </div>
          {/* Mid */}
          <div style={{ flex: 1, padding: '.75rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#fffdf7' }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.48rem', fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: O, marginBottom: 3 }}>{category}</div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 900, color: INK, lineHeight: 1.1, marginBottom: '.3rem' }}>{name}</div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.48rem', fontWeight: 700, color: '#7a4a20', marginBottom: '.5rem' }}>{meta}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
              {chips?.map((c, i) => (
                <span key={i} style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.4rem', fontWeight: 900, background: 'rgba(255,255,255,.8)', border: `1.5px solid ${BR}`, borderRadius: 10, padding: '2px 6px', color: BR }}>{c}</span>
              ))}
            </div>
          </div>
          {/* Bottom */}
          <div style={{ padding: '.65rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `2px solid ${INK}`, background: botBg }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.9rem', fontWeight: 900, color: 'white' }}>{price}</div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.42rem', fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>{weight}</div>
          </div>
        </div>
      )}
      {/* Footer */}
      <div style={{ padding: '1rem 1.25rem', background: 'white', borderTop: `2px solid rgba(30,15,0,.07)` }}>
        <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.78rem', fontWeight: 900, color: INK, marginBottom: 2 }}>{footTitle}</div>
        <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.62rem', fontWeight: 700, color: '#7a4a20' }}>{footSub}</div>
      </div>
    </div>
  )
}

/* ─── Instagram post ─── */
function IgPost({ bgColor, emojis, title, tags, caption, delay, imgUrl }: {
  bgColor?: string; emojis?: string; title?: React.ReactNode; tags?: { text: string; dark?: boolean }[]; caption: string; delay?: string; imgUrl?: string;
}) {
  return (
    <div className="sc-reveal" style={{
      border: `3px solid ${INK}`, borderRadius: 14, overflow: 'hidden',
      boxShadow: `5px 5px 0 ${INK}`, transitionDelay: delay,
      transition: `transform .25s ${EASE}, box-shadow .25s`,
    }}
      onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translate(-3px,-3px)'; d.style.boxShadow = `8px 8px 0 ${INK}` }}
      onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = ''; d.style.boxShadow = `5px 5px 0 ${INK}` }}
    >
      {imgUrl ? (
        <div style={{ width: '100%', aspectRatio: '1', position: 'relative', overflow: 'hidden' }}>
          <img src={imgUrl} alt={caption} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (
        <div style={{ aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '.4rem', padding: '.75rem', background: bgColor, position: 'relative' }}>
          {emojis && <div style={{ fontSize: '3.2rem' }}>{emojis}</div>}
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 900, textAlign: 'center', lineHeight: 1.15 }}>{title}</div>
          {tags && (
            <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', justifyContent: 'center', padding: '0 .5rem' }}>
              {tags.map((t, i) => (
                <span key={i} style={{
                  background: t.dark ? Y : 'rgba(255,255,255,.85)', color: INK,
                  fontFamily: 'Nunito, sans-serif', fontSize: '.5rem', fontWeight: 900,
                  padding: '3px 8px', borderRadius: 12, border: `1.5px solid ${INK}`,
                }}>{t.text}</span>
              ))}
            </div>
          )}
        </div>
      )}
      <div style={{ background: 'white', padding: '.6rem .75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.52rem', fontWeight: 800, color: INK }}>{caption}</span>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.48rem', fontWeight: 900, color: O }}>@sabhi.chef</span>
      </div>
    </div>
  )
}

export default function SabhiChef() {
  useSabhiReveal()
  const navigate = useNavigate()

  return (
    <div style={{ background: '#fffdf7', color: INK, fontFamily: 'Nunito, sans-serif', overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={O} ringBorder="rgba(244,123,64,.45)" ringBorderHov={O} />
      <CsNavbar accentColor={O} bgScrolled="rgba(255,249,237,.97)" textColor={INK} mutedColor={BR} ctaTextColor="#fff" />

      {/* ════ HERO ════ */}
      <section style={{
        minHeight: '100vh', background: Y,
        display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
        borderBottom: `3px solid ${INK}`, position: 'relative',
        paddingTop: 64,
      }}>
        {/* Blobs */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: O, opacity: .15, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: '22%', width: 320, height: 320, borderRadius: '50%', background: R, opacity: .07, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '0 clamp(24px,5vw,64px) clamp(48px,6vw,88px)', width: '100%' }}>
          {/* Tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'white', border: `2.5px solid ${BR}`, borderRadius: 40,
            padding: '7px 18px', fontFamily: 'Nunito, sans-serif',
            fontSize: '.7rem', fontWeight: 900, letterSpacing: '.14em',
            color: BR, textTransform: 'uppercase', marginBottom: '1.75rem',
            boxShadow: `3px 3px 0 ${BR}`,
          }}>
            <div style={{ width: 7, height: 7, background: O, borderRadius: '50%' }} />
            Case Study — Brand &amp; Product Design
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(3.8rem,8.5vw,9rem)',
            fontWeight: 900, lineHeight: .9, color: BR,
            letterSpacing: '-.03em', marginBottom: '2rem',
          }}>
            Sabhi<span style={{ color: R }}>Chef</span><br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: G }}>Brand</em>
          </h1>

          <div className="hero-flex" style={{ display: 'flex', alignItems: 'flex-end', gap: '4rem', flexWrap: 'wrap' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.95rem', fontWeight: 700, lineHeight: 1.7, color: '#5a3010', maxWidth: 380 }}>
              Website, packaging, social media, and brand identity — for a homemade food brand born from a mother's kitchen.
            </p>
            <div className="hero-pill-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginLeft: 'auto' }}>
              {['🌐 Website Design', '📦 Packaging', '📸 Social Media', '🎨 Illustration'].map((pill, i) => (
                <span key={i} style={{
                  background: 'white', border: `2.5px solid ${BR}`, borderRadius: 30,
                  padding: '8px 16px', fontFamily: 'Nunito, sans-serif',
                  fontSize: '.68rem', fontWeight: 900, color: BR,
                  boxShadow: `3px 3px 0 ${BR}`, whiteSpace: 'nowrap',
                }}>{pill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', right: 'clamp(24px,5vw,64px)', bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.75rem' }}>
          <div style={{ width: 2, height: 80, background: BR }} />
          <span style={{ writingMode: 'vertical-rl', fontFamily: 'Nunito, sans-serif', fontSize: '.65rem', fontWeight: 900, letterSpacing: '.2em', textTransform: 'uppercase', color: BR, marginBottom: '2rem' }}>Scroll</span>
        </div>
      </section>

      {/* ════ TICKER ════ */}
      <div style={{ background: G, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}`, overflow: 'hidden' }}>
        <div style={{
          display: 'flex', whiteSpace: 'nowrap',
          animation: 'sc-tick 26s linear infinite', padding: '13px 0',
        }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.25rem', padding: '0 2rem', flexShrink: 0 }}>
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.6rem', fontWeight: 900, letterSpacing: '.2em', color: OL, textTransform: 'uppercase' }}>{item.label}</span>
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.8rem', fontWeight: 900, color: Y, textTransform: 'uppercase', letterSpacing: '.06em' }}>{item.value}</span>
              <div style={{ width: 5, height: 5, background: OL, borderRadius: '50%', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
      <ColorBar />

      {/* ════ BRIEF + BRAND IDENTITY ════ */}
      <section style={{ background: CREAM, borderBottom: `3px solid ${INK}`, padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* Left */}
          <div className="sc-reveal">
            <Tag>The Brief</Tag>
            <SH>Brand a <em style={{ fontStyle: 'italic', fontWeight: 300, color: G }}>homemade</em> kitchen.</SH>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.92rem', fontWeight: 600, lineHeight: 1.8, color: '#5a3010', maxWidth: 340 }}>
              Full brand system from scratch — identity, 15+ product labels, a shoppable website, social content, and custom illustrations.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              {[
                { num: '01', text: 'Brand Identity & Visual Language' },
                { num: '02', text: 'Website Design & Build (Wix)' },
                { num: '03', text: 'Packaging Design — 15+ SKU Labels' },
                { num: '04', text: 'Social Media Templates & Illustrations' },
              ].map((s, i) => (
                <div key={i} className="sc-reveal" style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.1rem 1.4rem', background: 'white',
                  border: `2.5px solid ${INK}`, borderRadius: 14,
                  boxShadow: `4px 4px 0 ${INK}`,
                  transitionDelay: `${(i + 1) * 0.1}s`,
                }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.6rem', fontWeight: 900, letterSpacing: '.16em', color: O, whiteSpace: 'nowrap' }}>{s.num}</span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.88rem', fontWeight: 800, color: INK }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Brand identity visuals */}
          <div className="sc-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', transitionDelay: '.1s' }}>

            {/* Palette */}
            <div style={{ border: `3px solid ${INK}`, borderRadius: 20, overflow: 'hidden', boxShadow: `5px 5px 0 ${INK}` }}>
              <div style={{ padding: '.9rem 1.25rem', fontFamily: 'Nunito, sans-serif', fontSize: '.58rem', fontWeight: 900, letterSpacing: '.18em', textTransform: 'uppercase', borderBottom: `2px solid ${INK}`, background: CREAM, color: BR }}>Brand Palette</div>
              <div style={{ padding: '1.25rem', background: 'white' }}>
                <div style={{ display: 'flex', gap: '.75rem' }}>
                  {[
                    { bg: Y, name: 'Sunshine', hex: '#FEE472' },
                    { bg: O, name: 'Spice',    hex: '#F47B40' },
                    { bg: R, name: 'Chili',    hex: '#DD2D2B' },
                    { bg: G, name: 'Forest',   hex: '#16703A' },
                    { bg: OL, name: 'Olive',   hex: '#B7C158' },
                    { bg: BR, name: 'Earth',   hex: '#995424' },
                  ].map((sw, i) => (
                    <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ height: 52, borderRadius: 10, border: `2.5px solid ${INK}`, boxShadow: `3px 3px 0 ${INK}`, marginBottom: 5, background: sw.bg }} />
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.5rem', fontWeight: 900, color: BR }}>{sw.name}</div>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.44rem', fontWeight: 700, color: '#7a4a20' }}>{sw.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Typography */}
            <div style={{ border: `3px solid ${INK}`, borderRadius: 20, overflow: 'hidden', boxShadow: `5px 5px 0 ${INK}` }}>
              <div style={{ padding: '.9rem 1.25rem', fontFamily: 'Nunito, sans-serif', fontSize: '.58rem', fontWeight: 900, letterSpacing: '.18em', textTransform: 'uppercase', borderBottom: `2px solid ${INK}`, background: Y, color: BR }}>Brand Typography — Nunito</div>
              <div style={{ padding: '1.25rem', background: 'white', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '.75rem' }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '2.2rem', fontWeight: 900, lineHeight: 1, color: BR }}>Sabhi Chef</span>
                  <span style={{ fontFamily: 'Aileron, sans-serif', fontSize: '.55rem', fontWeight: 300, letterSpacing: '.12em', color: '#7a4a20', textTransform: 'uppercase' }}>900 Display</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '.75rem' }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: BR }}>Homely Food in Minutes</span>
                  <span style={{ fontFamily: 'Aileron, sans-serif', fontSize: '.55rem', fontWeight: 300, letterSpacing: '.12em', color: '#7a4a20', textTransform: 'uppercase' }}>700 Heading</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '.75rem' }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, fontStyle: 'italic', color: G }}>Born from a mother's love.</span>
                  <span style={{ fontFamily: 'Aileron, sans-serif', fontSize: '.55rem', fontWeight: 300, letterSpacing: '.12em', color: '#7a4a20', textTransform: 'uppercase' }}>400 Italic</span>
                </div>
                <div style={{ display: 'flex', gap: '.5rem', marginTop: '.25rem', flexWrap: 'wrap' }}>
                  {[
                    { bg: O, text: 'white', label: 'Nunito 900' },
                    { bg: Y, text: BR, label: 'Nunito 700' },
                    { bg: G, text: 'white', label: 'Nunito Italic' },
                  ].map((b, i) => (
                    <span key={i} style={{ background: b.bg, color: b.text, fontFamily: 'Nunito, sans-serif', fontSize: '.58rem', fontWeight: 900, padding: '5px 12px', borderRadius: 20, border: `2px solid ${INK}`, boxShadow: `2px 2px 0 ${INK}` }}>{b.label}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ flex: 1, border: `3px solid ${INK}`, borderRadius: 20, overflow: 'hidden', boxShadow: `5px 5px 0 ${INK}` }}>
                <img src="/Sabhi Chef/Logo/Asset 6@2x.png" alt="Primary Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#fff' }} />
              </div>
            </div>

            {/* Logo on dark + light */}
            <div className="logo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {/* Dark bg */}
              <div style={{ border: `3px solid ${INK}`, borderRadius: 20, overflow: 'hidden', boxShadow: `5px 5px 0 ${INK}` }}>
                <div style={{ background: INK, borderRadius: 14, padding: '1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: Y, letterSpacing: '-.02em' }}>Sabhi <span style={{ color: O }}>Chef</span></div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.48rem', fontWeight: 900, letterSpacing: '.18em', textTransform: 'uppercase', color: OL, marginTop: 2 }}>Homely Food in Minutes</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                    <div style={{ width: 36, height: 4, background: Y, borderRadius: 2 }} />
                    <div style={{ width: 24, height: 4, background: O, borderRadius: 2 }} />
                    <div style={{ width: 16, height: 4, background: G, borderRadius: 2 }} />
                  </div>
                </div>
              </div>
              {/* Light bg */}
              <div style={{ border: `3px solid ${INK}`, borderRadius: 20, overflow: 'hidden', boxShadow: `5px 5px 0 ${INK}` }}>
                <div style={{ background: Y, borderRadius: 14, padding: '1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.35rem', fontWeight: 900, color: BR, lineHeight: 1 }}>Sabhi Chef</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.45rem', fontWeight: 900, letterSpacing: '.16em', textTransform: 'uppercase', color: G, marginTop: 3 }}>Homely Food in Minutes</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-end' }}>
                    <div style={{ width: 30, height: 4, background: BR, borderRadius: 2 }} />
                    <div style={{ width: 20, height: 4, background: O, borderRadius: 2 }} />
                    <div style={{ width: 14, height: 4, background: G, borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════ WEBSITE SECTION ════ */}
      <section style={{ background: CREAM, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}`, padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div className="sc-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <Tag>Website Design</Tag>
            <SH>Built to <em style={{ fontStyle: 'italic', fontWeight: 300, color: G }}>sell &amp; tell.</em></SH>
          </div>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.92rem', fontWeight: 600, lineHeight: 1.8, color: '#5a3010', maxWidth: 300 }}>
            Full Wix site — product catalogue with filters, brand story, delivery info, and a bulk-order contact form.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="sc-reveal" style={{ border: `3px solid ${INK}`, borderRadius: 16, overflow: 'hidden', boxShadow: `8px 8px 0 ${INK}`, transitionDelay: '.1s' }}>
          {/* Bar */}
          <div style={{ background: INK, padding: '.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />)}
            <div style={{ flex: 1, background: 'rgba(255,255,255,.1)', borderRadius: 6, padding: '4px 12px', fontFamily: 'Nunito, sans-serif', fontSize: '.6rem', fontWeight: 700, color: 'rgba(255,249,237,.45)', letterSpacing: '.04em' }}>sabhichef.com</div>
          </div>
          {/* Body */}
          <div style={{ background: Y }}>
            {/* Mini nav */}
            <div style={{ background: 'rgba(255,249,237,.97)', borderBottom: `2.5px solid ${INK}`, padding: '.65rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.9rem', fontWeight: 900, color: BR }}>Sabhi <span style={{ color: O }}>Chef</span></div>
              <div style={{ display: 'flex', gap: '.5rem' }}>
                {['Products', 'Our Story', 'Contact'].map(l => (
                  <span key={l} style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.52rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.08em', padding: '4px 10px', borderRadius: 20, color: INK }}>{l}</span>
                ))}
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.52rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.08em', padding: '4px 10px', borderRadius: 20, color: 'white', background: O, border: `2px solid ${INK}`, boxShadow: `2px 2px 0 ${INK}` }}>Shop Now →</span>
              </div>
            </div>
            {/* Hero strip */}
            <div className="browser-hero-strip" style={{ position: 'relative', minHeight: 300, background: Y, padding: '1.5rem', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: O, opacity: .15 }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: BR, lineHeight: 1, letterSpacing: '-.02em' }}><span style={{ color: R }}>Ghar ka</span><br />Khana</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.6rem', fontWeight: 700, color: '#5a3010', margin: '.3rem 0 .6rem' }}>Homemade mixes. No preservatives. Ready in 5 minutes.</div>
                <div style={{ display: 'flex', gap: '.4rem' }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.52rem', fontWeight: 900, padding: '5px 11px', borderRadius: 20, border: `2px solid ${INK}`, background: R, color: 'white', boxShadow: `2px 2px 0 ${INK}` }}>Shop Now →</span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.52rem', fontWeight: 900, padding: '5px 11px', borderRadius: 20, border: `2px solid ${INK}`, background: 'white', color: BR }}>Our Story</span>
                </div>
              </div>
              {/* Stat card */}
              <div className="browser-stat-card" style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', background: 'white', border: `2.5px solid ${INK}`, borderRadius: 12, padding: '.75rem 1rem', boxShadow: `4px 4px 0 ${INK}`, zIndex: 3 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.1rem', fontWeight: 900, color: O, lineHeight: 1 }}>5 min</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.42rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.08em', color: BR }}>Avg. Cook Time</div>
              </div>
              {/* Mini product inset */}
              <div className="browser-mockup-inset" style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '.5rem', width: '45%', zIndex: 2 }}>
                {[
                  { emoji: '🥣', bg: '#ffecd4', name: 'Khichdi', price: '₹150' },
                  { emoji: '🫓', bg: '#e0f5e8', name: 'Chila',   price: '₹150' },
                  { emoji: '🍛', bg: '#ffe0d0', name: 'Misal',   price: '₹250' },
                  { emoji: '🎂', bg: '#fce8e8', name: 'Cake',    price: '₹150' },
                ].map((p, i) => (
                  <div key={i} style={{ background: 'white', border: `2px solid ${INK}`, borderRadius: 10, overflow: 'hidden', boxShadow: `2px 2px 0 ${INK}` }}>
                    <div style={{ height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', background: p.bg }}>{p.emoji}</div>
                    <div style={{ padding: '4px 6px', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.44rem', fontWeight: 900, color: INK }}>{p.name}</span>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.44rem', fontWeight: 900, color: G }}>{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Filter bar */}
            <div style={{ background: CREAM, borderTop: `2px solid rgba(30,15,0,.08)`, padding: '.6rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              {['All', 'Breakfast', 'Meals', 'Sweet & Drinks', 'Condiments'].map((f, i) => (
                <span key={f} style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: '.48rem', fontWeight: 900,
                  textTransform: 'uppercase', padding: '4px 10px', borderRadius: 20,
                  border: i === 0 ? 'none' : `2px solid ${BR}`, color: i === 0 ? 'white' : BR,
                  background: i === 0 ? O : 'transparent',
                  boxShadow: i === 0 ? `2px 2px 0 ${INK}` : 'none',
                }}>{f}</span>
              ))}
            </div>
            {/* Product strip */}
            <div style={{ background: 'white', borderTop: `2.5px solid ${INK}`, padding: '.75rem 1.5rem', display: 'flex', gap: '.6rem', overflowX: 'auto', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.52rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.08em', color: BR, whiteSpace: 'nowrap', marginRight: '.35rem' }}>Products</span>
              {[
                { emoji: '🥣', bg: '#ffecd4', name: 'Khichdi', price: '₹150' },
                { emoji: '🫓', bg: '#e0f5e8', name: 'Chila',   price: '₹150' },
                { emoji: '🍛', bg: '#ffe0d0', name: 'Misal',   price: '₹250' },
                { emoji: '⚡', bg: '#fffbe0', name: 'Poha',    price: '₹100' },
                { emoji: '🎂', bg: '#fce8e8', name: 'Cake',    price: '₹150' },
                { emoji: '☕', bg: '#fff4d6', name: 'Kahwa',   price: '₹150' },
                { emoji: '🥞', bg: '#e0f5e8', name: 'Pancake', price: '₹150' },
              ].map((p, i) => (
                <div key={i} style={{ flexShrink: 0, width: 68, background: CREAM, border: `2px solid ${INK}`, borderRadius: 9, overflow: 'hidden', boxShadow: `2px 2px 0 ${INK}` }}>
                  <div style={{ height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', background: p.bg }}>{p.emoji}</div>
                  <div style={{ padding: '3px 5px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.44rem', fontWeight: 900, color: INK }}>{p.name}</span>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.44rem', fontWeight: 900, color: G }}>{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ PACKAGING ════ */}
      <section style={{ background: INK, borderTop: `3px solid ${Y}`, borderBottom: `3px solid ${Y}`, padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div className="sc-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <Tag style={{ background: 'rgba(254,228,114,.12)', borderColor: 'rgba(254,228,114,.3)', color: Y }}>Packaging Design</Tag>
            <SH style={{ color: 'white' }}>15+ <em style={{ fontStyle: 'italic', fontWeight: 300, color: Y }}>labels.</em> One system.</SH>
          </div>
          <p className="sc-reveal" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.92rem', fontWeight: 600, lineHeight: 1.8, color: 'rgba(255,249,237,.55)', maxWidth: 300, transitionDelay: '.1s' }}>
            Each SKU gets a category-coded color badge — same grid, distinct accent — so the range reads as a cohesive family.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem' }}>
          <PkCard imgUrl="/Sabhi Chef/Mockups/Masala KHichdi.jpg" topBg={Y} category="Comfort Meal"        name="Masala Khichdi"   meta="150 gm · Serves 2 · 5 mins"  chips={['🌿 No Preservatives','🇮🇳 Authentic','💧 Just Add Water']} botBg={G}   price="₹150" weight="150 gm" footTitle="Masala Khichdi"  footSub="Comfort Meal · 150 gm" />
          <PkCard imgUrl="/Sabhi Chef/Mockups/Matki Misal.jpg" topBg={O} brandLight category="Maharashtrian Special" name="Matki Misal" meta="250 gm · Serves 5 · 5 mins"  chips={['🌶 Authentic Spice','🏠 Home Recipe']}              botBg={BR}  price="₹250" weight="250 gm" footTitle="Matki Misal"    footSub="Maharashtrian · 250 gm" delay=".1s" />
          <PkCard imgUrl="/Sabhi Chef/Mockups/Moong Chilla.jpg" topBg={OL} category="Healthy Breakfast"  name="Moong Chila"      meta="150 gm · Makes 6 · 4 mins"   chips={['💚 High Protein','🌿 No Preservatives']}                     botBg={G}   price="₹150" weight="150 gm" footTitle="Moong Chila"   footSub="Healthy Breakfast · 150 gm" delay=".2s" />
          <PkCard imgUrl="/Sabhi Chef/Mockups/Vanila Cake.jpg" topBg="#F4A789" category="Sweet · Eggless" name="Vanilla Cake"   meta="200 gm · Serves 5"           chips={['🥚 Eggless','🎂 Bakery Quality']}                             botBg={R}   price="₹150" weight="200 gm" footTitle="Vanilla Cake"  footSub="Sweet · Eggless · 200 gm" delay=".1s" />
          <PkCard imgUrl="/Sabhi Chef/Mockups/Instant Poha.jpg" topBg={Y} category="Breakfast"            name="Instant Poha"    meta="150 gm · Serves 2 · 5 mins"  chips={['⚡ Ready in 5 mins','🇮🇳 Home Style']}                        botBg={BR}  price="₹100" weight="150 gm" footTitle="Instant Poha"  footSub="Breakfast · 150 gm" delay=".2s" />
          <PkCard imgUrl="/Sabhi Chef/Mockups/Kashmiri kahwa.jpg" topBg="#D89339" brandLight category="Beverage" name="Kashmiri Kahwa" meta="150 gm · Serves 20 · 1 min" chips={['🌸 Saffron & Spices','☕ Aromatic']}                      botBg={INK} price="₹150" weight="150 gm" footTitle="Kashmiri Kahwa" footSub="Beverage · 150 gm" delay=".3s" />
        </div>
      </section>

      {/* ════ SOCIAL MEDIA ════ */}
      <section style={{ background: O, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}`, padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div className="sc-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <Tag style={{ background: 'rgba(254,228,114,.2)', borderColor: 'rgba(254,228,114,.4)', color: Y }}>Social Media</Tag>
            <SH style={{ color: 'white' }}>Posts that make people <em style={{ fontStyle: 'italic', fontWeight: 300, color: Y }}>hungry.</em></SH>
          </div>
          <p className="sc-reveal" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.92rem', fontWeight: 600, lineHeight: 1.8, color: 'rgba(255,253,247,.75)', maxWidth: 300, transitionDelay: '.1s' }}>
            Instagram templates, story formats, and WhatsApp Business — built so the founders post consistently without a designer on call.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.25rem' }}>
          <IgPost
            imgUrl="/Sabhi Chef/Social Media Posts/Copy of SABHI029_Product Post_Slide_1 copy 5.jpg"
            caption="Ghar ka khana, everyday 🧡"
          />
          <IgPost
            imgUrl="/Sabhi Chef/Social Media Posts/Copy of SABHI018_Christmas Post_Slide_1 copy 5.jpg"
            caption="Real food. Real ingredients."
            delay=".1s"
          />
          <IgPost
            imgUrl="/Sabhi Chef/Social Media Posts/Copy of SABHI039_Messy Kitchen_Slide_1 copy 5.jpg"
            caption="Pick your morning 🌤"
            delay=".2s"
          />
          <IgPost
            imgUrl="/Sabhi Chef/Social Media Posts/Copy of SABHI031_Testimonials_Slide_1 copy 5.jpg"
            caption="The story behind every pack"
            delay=".3s"
          />
        </div>
      </section>

      {/* ════ ILLUSTRATIONS & STICKERS ════ */}
      <section style={{ background: CREAM, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}`, padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div className="sc-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <Tag>Illustration &amp; Stickers</Tag>
            <SH>Characters<br />with <em style={{ fontStyle: 'italic', fontWeight: 300, color: G }}>flavour.</em></SH>
          </div>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.92rem', fontWeight: 600, lineHeight: 1.8, color: '#5a3010', maxWidth: 280 }}>
            Custom stickers for packaging, social, and gifting — each product gets its own illustrated badge.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {[
            { emoji: '🥘', bg: Y,      label: 'Khichdi', size: 110, fs: '2.4rem' },
            { emoji: '🫓', bg: O,      label: 'Chila',   size: 86,  fs: '1.9rem' },
            { emoji: '🍛', bg: '#e0f5e8', label: 'Misal', size: 110, fs: '2.4rem' },
            { emoji: '🎂', bg: '#F4A789', label: 'Cake', size: 68,  fs: '1.5rem' },
            { emoji: '🧆', bg: Y,      label: 'Dhokla',  size: 110, fs: '2.4rem' },
            { emoji: '☕', bg: G,      label: 'Kahwa',   size: 86,  fs: '1.9rem' },
            { emoji: '🥞', bg: O,      label: 'Pancake', size: 68,  fs: '1.5rem' },
            { emoji: '🫙', bg: '#fff4d6', label: 'Chutney', size: 110, fs: '2.4rem' },
            { emoji: '🍱', bg: Y,      label: 'Meal Kit', size: 86, fs: '1.9rem' },
            { emoji: '🎁', bg: O,      label: 'Gift Hamper', size: 86, fs: '1.9rem' },
          ].map((s, i) => (
            <div key={i} className="sc-reveal" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem',
              cursor: 'default', transitionDelay: `${(i % 4) * .08}s`,
              transform: i % 2 === 0 ? 'rotate(-2deg)' : 'rotate(3deg)',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = `rotate(${i % 2 === 0 ? '4' : '-4'}deg) scale(1.08)` }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = i % 2 === 0 ? 'rotate(-2deg)' : 'rotate(3deg)' }}
            >
              <div style={{
                width: s.size, height: s.size, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: s.fs, background: s.bg,
                border: `3px solid ${INK}`, boxShadow: `4px 4px 0 ${INK}`,
                transition: `transform .3s ${EASE}`,
              }}>{s.emoji}</div>
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.58rem', fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: BR }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="sc-reveal" style={{ marginTop: '4rem', borderRadius: 20, overflow: 'hidden', border: `3px solid ${INK}`, boxShadow: `8px 8px 0 ${INK}` }}>
          <img src="/Sabhi Chef/Illustrations/Artboard 1.png" alt="Illustrations" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* ════ POSTERS ════ */}
      <section style={{ background: '#fffdf7', borderBottom: `3px solid ${INK}`, padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div className="sc-reveal" style={{ marginBottom: '3.5rem' }}>
          <Tag>Posters</Tag>
          <SH>Visuals that <em style={{ fontStyle: 'italic', fontWeight: 300, color: G }}>pop.</em></SH>
        </div>
        <div className="posters-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '2rem' }}>
          <img className="sc-reveal" src="/Sabhi Chef/Posters/Comfort_Food-02.jpg" alt="Poster 1" style={{ width: '100%', borderRadius: 16, border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}` }} />
          <img className="sc-reveal" src="/Sabhi Chef/Posters/Maharashtrian_delight-02.jpg" alt="Poster 2" style={{ width: '100%', borderRadius: 16, border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}`, transitionDelay: '.1s' }} />
          <img className="sc-reveal" src="/Sabhi Chef/Posters/Artboard 1-100 (1).jpg" alt="Poster 3" style={{ width: '100%', borderRadius: 16, border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}`, transitionDelay: '.2s' }} />
          <img className="sc-reveal" src="/Sabhi Chef/Posters/Artboard 1-100 (2).jpg" alt="Poster 4" style={{ width: '100%', borderRadius: 16, border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}`, transitionDelay: '.3s' }} />
        </div>
      </section>

      {/* ════ RESULTS ════ */}
      <section style={{ background: '#fffdf7', padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div className="sc-reveal" style={{ marginBottom: '3rem' }}>
          <Tag>The Outcome</Tag>
          <SH>Measured <em style={{ fontStyle: 'italic', fontWeight: 300, color: G }}>Impact.</em></SH>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.25rem' }}>
          {[
            { num: '15+', numSuffix: '', label: 'SKUs launched\nwith full packaging', color: O },
            { num: '4',   numSuffix: ' deliverables', label: 'Website, packaging,\nsocial & illustrations', color: O },
            { num: 'Pan\nIndia', numSuffix: '', label: 'Brand-ready to ship\nfrom day one', color: O, large: true },
          ].map((r, i) => (
            <div key={i} className="sc-reveal" style={{
              background: 'white', border: `3px solid ${INK}`, borderRadius: 22,
              padding: '3rem 2.5rem', boxShadow: `5px 5px 0 ${INK}`,
              transition: `transform .25s ${EASE}, box-shadow .25s`,
              transitionDelay: `${i * .1}s`,
            }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translate(-3px,-3px)'; d.style.boxShadow = `8px 8px 0 ${INK}` }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = ''; d.style.boxShadow = `5px 5px 0 ${INK}` }}
            >
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: r.large ? 'clamp(2rem,3.5vw,3.5rem)' : 'clamp(2.8rem,5vw,4.8rem)', fontWeight: 900, color: r.color, lineHeight: r.large ? 1.1 : 1, letterSpacing: '-.04em', marginBottom: '.4rem', whiteSpace: 'pre-line' }}>{r.num}<span style={{ color: G, fontSize: 'clamp(1rem,2vw,1.5rem)', display: 'inline-block', marginLeft: '0.2rem', verticalAlign: 'middle', letterSpacing: 0 }}>{r.numSuffix}</span></div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.72rem', fontWeight: 800, color: '#7a4a20', textTransform: 'uppercase', letterSpacing: '.08em', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ TESTIMONIAL ════ */}
      <section style={{ background: INK, borderTop: `3px solid ${Y}`, borderBottom: `3px solid ${Y}`, padding: 'clamp(56px,9vw,112px) clamp(24px,5vw,64px)' }}>
        <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="sc-reveal" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '12rem', fontWeight: 900, color: Y, lineHeight: .7, opacity: .2, alignSelf: 'flex-start' }}>"</div>
          <div className="sc-reveal" style={{ transitionDelay: '.1s' }}>
            <blockquote style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.2rem,2.5vw,2rem)', fontWeight: 700, lineHeight: 1.6, color: 'white', fontStyle: 'italic', marginBottom: '1.75rem' }}>
              "I just wanted my daughter to have a warm meal, no matter where she was. FriFlow helped us turn that feeling into a brand that <strong style={{ fontStyle: 'normal', fontWeight: 900, color: Y }}>thousands of people trust</strong> every single day."
            </blockquote>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.75rem', fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,249,237,.4)' }}>
              <span style={{ color: Y }}>Surekha</span> — Head Chef &amp; Co-Founder, Sabhi Chef
            </div>
          </div>
        </div>
      </section>

      {/* ════ NEXT PROJECT ════ */}
      <a
        href="/case-studies/eazytaxes-brand"
        onClick={e => { e.preventDefault(); navigate('/case-studies/eazytaxes-brand') }}
        className="cursor-none no-underline next-project-flex"
        style={{ background: INK, borderTop: `3px solid ${Y}`, padding: 'clamp(48px,7vw,80px) clamp(24px,5vw,64px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'background .4s', gap: '2rem' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#120a00')}
        onMouseLeave={e => (e.currentTarget.style.background = INK)}
      >
        <div>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.62rem', fontWeight: 900, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,249,237,.3)', marginBottom: '.6rem' }}>Next Case Study</div>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: 'white', letterSpacing: '-.025em', lineHeight: 1.1 }}>
            EazyTaxes<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: Y }}>Brand Evolution</em>
          </div>
        </div>
        <div style={{ width: 60, height: 60, background: Y, border: `3px solid ${INK}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontSize: '1.3rem', fontWeight: 900, color: INK, boxShadow: `4px 4px 0 ${BR}`, flexShrink: 0 }}>→</div>
      </a>

      <CsFooter accentColor={O} bgColor={INK} ruleColor={`rgba(254,228,114,.12)`} textColor="white" mutedColor="rgba(255,249,237,.35)" copyOpacity="0.2" />

      {/* Ticker keyframes */}
      <style>{`
        @keyframes sc-tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .sc-reveal { opacity: 0; transform: translateY(24px); transition: opacity .75s cubic-bezier(0.16,1,0.3,1), transform .75s cubic-bezier(0.16,1,0.3,1); }
        .sc-reveal.visible { opacity: 1; transform: translateY(0); }
        
        @media (max-width: 768px) {
          .hero-flex { align-items: flex-start !important; gap: 2rem !important; }
          .hero-pill-group { margin-left: 0 !important; }
          .logo-grid { grid-template-columns: 1fr !important; }
          .browser-hero-strip { flex-direction: column !important; align-items: stretch !important; gap: 2rem; }
          .browser-stat-card { position: relative !important; top: auto !important; right: auto !important; width: fit-content; margin-bottom: 0rem; }
          .browser-mockup-inset { position: relative !important; bottom: auto !important; right: auto !important; width: 100% !important; margin-top: 1rem; }
          .posters-grid { grid-template-columns: 1fr !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .next-project-flex { flex-direction: column; align-items: flex-start !important; gap: 1rem !important; }
        }
      `}</style>
    </div>
  )
}
