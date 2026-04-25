import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'

/* ─── Brand tokens ─── */
const RED         = '#c2262e'
const RED_DARK    = '#9a1b22'
const YELLOW      = '#fbb03b'
const INK         = '#0d0d0d'
const INK_LIGHT   = '#5a5a5a'
const INK_MUTED   = '#8a8a8a'
const WHITE       = '#ffffff'
const OFF_WHITE   = '#fafaf9'
const PAPER       = '#f5f4f0'

function useLmcReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.lmc-reveal').forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])
}

function SecTag({ children, white }: { children: React.ReactNode; white?: boolean }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700,
      letterSpacing: 3, textTransform: 'uppercase',
      color: white ? YELLOW : RED, marginBottom: 16
    }}>
      <div style={{ width: 24, height: 1, background: 'currentColor' }} />
      {children}
    </div>
  )
}

function SecHeading({ children, white }: { children: React.ReactNode; white?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 54px)',
      fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.5px',
      color: white ? WHITE : INK, marginBottom: 'clamp(40px, 6vw, 72px)',
    }}>
      {children}
    </h2>
  )
}

export default function LMCCaseStudy() {
  useLmcReveal()
  const navigate = useNavigate()

  return (
    <div style={{ background: WHITE, color: INK, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={RED} ringBorder="rgba(194,38,46,.45)" ringBorderHov={RED} />
      <CsNavbar accentColor={RED} bgScrolled="rgba(255,255,255,.96)" textColor={INK} mutedColor={INK_LIGHT} ctaTextColor="#fff" />

      {/* ════ HERO ════ */}
      <section style={{
        minHeight: '100vh', paddingTop: 64,
        background: 'linear-gradient(155deg, #fff8ec 0%, #fff3e0 35%, #fff 75%, #fff5f5 100%)',
        position: 'relative', overflow: 'hidden',
        paddingLeft: 'clamp(24px, 8vw, 120px)', paddingRight: 'clamp(24px, 6vw, 80px)',
      }}>
        {/* Background '100' */}
        <div style={{
          position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
          fontFamily: "'Playfair Display', serif", fontSize: 'clamp(200px, 30vw, 400px)',
          fontWeight: 700, color: 'rgba(194,38,46,.045)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        }}>100</div>

        <div className="lmc-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: 'clamp(40px, 6vw, 100px)', height: 'calc(100vh - 64px)' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: RED, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: RED }} /> Brand Identity · Spain
            </div>
            <h1 className="lmc-reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4.5vw, 62px)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.5px', color: INK, marginBottom: 12 }}>
              Los 100 Mejores<br/>
              <em style={{ color: RED, fontStyle: 'italic' }}>Restaurantes</em><br/>
              de España
            </h1>
            <p className="lmc-reveal" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: INK_LIGHT, fontWeight: 300, lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
              A full corporate identity system for Spain's definitive restaurant authority — built on the Golden Ratio, the Spanish flag, and a bold visual language that celebrates culinary excellence.
            </p>
            <div className="lmc-reveal mt-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px, 4vw, 48px)', marginBottom: 48 }}>
              {[{ l: 'Client', v: 'Los 100 MRE' }, { l: 'Scope', v: 'Brand Identity' }, { l: 'Deliverable', v: 'Brand Manual' }].map(m => (
                <div key={m.l}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: INK_MUTED, marginBottom: 6 }}>{m.l}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: INK }}>{m.v}</div>
                </div>
              ))}
            </div>
            
            <div className="lmc-reveal" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: INK_MUTED }}>
              <div style={{ width: 40, height: 1, background: INK_MUTED }} /> Scroll to explore
            </div>
          </div>

          <div className="lmc-reveal lmc-hero-visual" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
             <div style={{
               background: '#fff', borderRadius: 24, boxShadow: '0 32px 80px rgba(0,0,0,.10), 0 4px 16px rgba(0,0,0,.06)',
               padding: 'clamp(40px, 6vw, 72px) clamp(32px, 5vw, 64px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 2,
               animation: 'floatCard 5s ease-in-out infinite'
             }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(72px, 10vw, 110px)', lineHeight: 1, fontWeight: 700, letterSpacing: -2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: RED }}>1</span><span style={{ color: YELLOW }}>0</span><span style={{ color: RED }}>0</span>
                </div>
                <div style={{ textAlign: 'center', lineHeight: 1.3 }}>
                  <div style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 500, letterSpacing: 2, color: INK }}>mejores</div>
                  <div style={{ fontSize: 'clamp(11px, 1.5vw, 14px)', fontWeight: 300, letterSpacing: 1, color: INK_LIGHT }}>restaurantes de España</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ════ 01 · OVERVIEW ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>01 · Overview</SecTag>
          <SecHeading>Crafting a <em style={{ color: RED, fontStyle: 'italic' }}>mark</em> for<br/>culinary authority.</SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(48px, 8vw, 120px)', alignItems: 'start' }}>
            <div className="lmc-reveal" style={{ fontSize: 16, color: INK_LIGHT, lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p>Los 100 Mejores Restaurantes de España is the country's most prestigious restaurant ranking — a publication that sets the gold standard for Spanish gastronomy. The brand needed a visual identity that matched the weight of that authority: contemporary yet rooted, celebratory yet restrained.</p>
              <p>Our mandate was to create a full corporate manual — a living system covering the logo, colour, typography, spacing rules, and real-world applications from business cards to outdoor advertising. Every decision had to be as considered as the restaurants it represents.</p>
              <p>The result is an identity built on the mathematics of nature. The logo was constructed using the Golden Ratio, while the colour palette draws directly from the Spanish flag — a crimson red and a warm amber yellow — grounding the brand in national pride without resorting to cliché.</p>
            </div>
            <div className="lmc-reveal">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { l: 'Project Type', v: 'Brand Identity System' },
                  { l: 'Typeface', v: 'Futura Family' },
                  { l: 'Primary Red', v: '#C2262E' },
                  { l: 'Primary Yellow', v: '#FBB03B' },
                  { l: 'Min. Logo Size', v: '25mm width' },
                  { l: 'Logo Basis', v: 'Golden Ratio' },
                ].map((s, i) => (
                  <div key={i} style={{ padding: '24px 0', borderTop: '1px solid rgba(0,0,0,.08)', borderBottom: i === 5 ? '1px solid rgba(0,0,0,.08)' : 'none', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: INK_MUTED }}>{s.l}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: INK, textAlign: 'right' }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 02 · CHALLENGE ════ */}
      <section style={{ background: PAPER, padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>02 · The Challenge</SecTag>
          <SecHeading>Four problems.<br/><em style={{ color: RED, fontStyle: 'italic' }}>One system.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px, 5vw, 72px)' }}>
            {[
              { n: '01', t: 'Authority Without Arrogance', d: 'The brand needed to carry the weight of Spain\'s top culinary institution while remaining approachable for readers and restaurant owners alike. Prestige without intimidation.' },
              { n: '02', t: 'The Number as a Logo', d: 'Centering a visual identity around "100" — a number — is genuinely hard. Numbers feel generic. We needed to transform those three digits into a memorable, proprietary mark.' },
              { n: '03', t: 'Spanish Pride, Not a Cliché', d: 'Drawing on the Spanish flag without producing a pastiche of red-and-yellow patriotism. The palette needed to feel cultured and designed, not like a flag stamped onto a page.' },
              { n: '04', t: 'System-Wide Consistency', d: 'From a 25mm business card to a full-size street billboard, the mark had to hold at every scale. Clear rules, proper exclusion zones, and defined wrong-use cases were essential.' },
            ].map((c, i) => (
              <div key={i} className="lmc-reveal" style={{ background: WHITE, borderRadius: 20, padding: 'clamp(28px, 4vw, 48px)', border: '1px solid rgba(0,0,0,.06)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${RED}, ${YELLOW})` }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: 'rgba(194,38,46,.08)', lineHeight: 1, marginBottom: 16 }}>{c.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: INK, marginBottom: 12 }}>{c.t}</h3>
                <p style={{ fontSize: 14, color: INK_LIGHT, lineHeight: 1.75 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 03 · PROCESS ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>03 · Process</SecTag>
          <SecHeading>Built on<br/><em style={{ color: RED, fontStyle: 'italic' }}>first principles.</em></SecHeading>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', t: 'Research & Brand Audit', d: 'We began by mapping the existing landscape of European restaurant publications and Michelin-adjacent brands. The goal: understand the visual vocabulary of culinary prestige, and identify where to diverge.', tag: 'Discovery', visual: (
                <div style={{ background: 'linear-gradient(135deg,#fff8ec,#fff0d8)', height: 160, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ width: 26, height: 18, borderRadius: 3, background: YELLOW, opacity: .4 }}/>
                    <div style={{ width: 26, height: 18, borderRadius: 3, background: RED, opacity: .3 }}/>
                  </div>
                </div>
              )},
              { n: '02', t: 'Golden Ratio Construction', d: 'The "100" mark was constructed using the Fibonacci-derived Golden Ratio, ensuring the proportions of each numeral feel harmonious and self-evidently correct. The "1" stands as a bold vertical anchor; the two "0"s carry the brand colours.', tag: 'Logo Design', visual: (
                <div style={{ background: 'linear-gradient(135deg,#f9f0f0,#ffe8e8)', height: 160, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, gap: 12 }}>
                  <span style={{ color: RED, opacity: .7 }}>1</span><span style={{ color: YELLOW, opacity: .7 }}>0</span><span style={{ color: RED, opacity: .6 }}>0</span>
                </div>
              )},
              { n: '03', t: 'Palette from the Spanish Flag', d: 'Crimson red (#C2262E) and amber yellow (#FBB03B) were derived directly from the Spanish national flag, but refined to feel contemporary and typographically balanced — avoiding the flag\'s raw, saturated tones.', tag: 'Colour', visual: (
                <div style={{ background: WHITE, height: 160, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 64, borderRadius: 8, background: RED, boxShadow: '0 4px 16px rgba(194,38,46,.3)' }}/>
                  <div style={{ width: 44, height: 64, borderRadius: 8, background: YELLOW, boxShadow: '0 4px 16px rgba(251,176,59,.3)' }}/>
                  <div style={{ width: 44, height: 64, borderRadius: 8, background: '#111', boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}/>
                </div>
              )},
              { n: '04', t: 'System Rollout & Guidelines', d: 'The final manual documents every correct and incorrect usage scenario — exclusion zones, minimum reproduction sizes, wrong applications across background types, and full branded mockups across print and environmental touchpoints.', tag: 'Application', visual: (
                <div style={{ background: 'linear-gradient(135deg,#f0f0f0,#e8e8e8)', height: 160, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 56, height: 44, borderRadius: 4, background: WHITE, display: 'flex', flexDirection: 'column', gap: 6, padding: 8 }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div style={{ width: 16, height: 16, borderRadius: 2, background: RED, opacity: .7 }}/>
                      <div style={{ width: 16, height: 6, borderRadius: 2, background: YELLOW, opacity: .6 }}/>
                    </div>
                    <div style={{ width: 40, height: 2, background: '#ddd', borderRadius: 1 }}/>
                    <div style={{ width: 28, height: 2, background: '#ddd', borderRadius: 1 }}/>
                  </div>
                </div>
              )}
            ].map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'center', padding: 'clamp(32px, 4vw, 56px) 0', borderTop: '1px solid rgba(0,0,0,.07)', borderBottom: i === 3 ? '1px solid rgba(0,0,0,.07)' : 'none' }}>
                <div className="lmc-reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, color: RED, opacity: .2, lineHeight: 1 }}>{p.n}</div>
                <div className="lmc-reveal">
                  <div style={{ display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: RED, background: 'rgba(194,38,46,.08)', padding: '6px 14px', borderRadius: 100, marginBottom: 14 }}>{p.tag}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: INK, marginBottom: 10 }}>{p.t}</h3>
                  <p style={{ fontSize: 14, color: INK_LIGHT, lineHeight: 1.75 }}>{p.d}</p>
                </div>
                <div className="lmc-reveal lmc-process-visual">{p.visual}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 04 · COLOUR ════ */}
      <section style={{ background: INK, padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag white>04 · Colour Palette</SecTag>
          <SecHeading white>Inspired by<br/><em style={{ color: YELLOW, fontStyle: 'italic' }}>the Spanish flag.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(16px, 3vw, 32px)' }}>
            {[
              { n: 'Crimson Red', h: '#C2262E', bg: RED, cmyk: 'C17 M98 Y92 K7', rgb: 'R194 G38 B46' },
              { n: 'Amber Yellow', h: '#FBB03B', bg: YELLOW, cmyk: 'C0 M35 Y87 K0', rgb: 'R251 G176 B59' },
              { n: 'Pure Black', h: '#000000', bg: '#000', cmyk: 'C75 M68 Y67 K90', rgb: 'R0 G0 B0' },
            ].map((c, i) => (
              <div key={i} className="lmc-reveal" style={{ borderRadius: 20, overflow: 'hidden' }}>
                <div style={{ height: 'clamp(140px, 18vw, 220px)', background: c.bg, padding: 20, display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '12px 16px', width: '100%' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: WHITE, marginBottom: 4 }}>{c.n}</div>
                    <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,.7)', letterSpacing: 1 }}>{c.h}</div>
                  </div>
                </div>
                <div style={{ background: WHITE, padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: INK_MUTED }}>CMYK</span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: INK }}>{c.cmyk}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                    <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: INK_MUTED }}>RGB</span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: INK }}>{c.rgb}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 05 · TYPOGRAPHY ════ */}
      <section style={{ background: PAPER, padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>05 · Typography</SecTag>
          <SecHeading>Futura.<br/><em style={{ color: RED, fontStyle: 'italic' }}>Timeless geometric.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px, 4vw, 48px)' }}>
            <div className="lmc-reveal" style={{ background: WHITE, borderRadius: 20, padding: 'clamp(24px, 3vw, 40px)', border: '1px solid rgba(0,0,0,.06)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: RED, marginBottom: 20 }}>Logo Typeface</div>
              <div style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 300, letterSpacing: 2, marginBottom: 20 }}>Futura LT BT</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: INK_MUTED, marginBottom: 4 }}>Futura LT BT — Light</div>
              <div style={{ fontSize: 12, color: INK_LIGHT }}>Used in the logotype "mejores restaurantes de España"</div>
              <div style={{ fontSize: 11, letterSpacing: 1, color: INK_MUTED, marginTop: 16, lineHeight: 2, borderTop: '1px solid rgba(0,0,0,.07)', paddingTop: 16, wordBreak: 'break-all' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</div>
            </div>
            <div className="lmc-reveal" style={{ background: WHITE, borderRadius: 20, padding: 'clamp(24px, 3vw, 40px)', border: '1px solid rgba(0,0,0,.06)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: RED, marginBottom: 20 }}>Headings</div>
              <div style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: -0.5, marginBottom: 20 }}>Futura Bold</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: INK_MUTED, marginBottom: 4 }}>Futura Bold — Heavy</div>
              <div style={{ fontSize: 12, color: INK_LIGHT }}>All section headings, titles, emphasis text, and display copy</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, color: INK_MUTED, marginTop: 16, lineHeight: 2, borderTop: '1px solid rgba(0,0,0,.07)', paddingTop: 16, wordBreak: 'break-all' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</div>
            </div>
            <div className="lmc-reveal" style={{ background: WHITE, borderRadius: 20, padding: 'clamp(24px, 3vw, 40px)', border: '1px solid rgba(0,0,0,.06)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: RED, marginBottom: 20 }}>Body Text</div>
              <div style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 300, letterSpacing: -0.5, marginBottom: 20 }}>Futura PT</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: INK_MUTED, marginBottom: 4 }}>Futura PT — Regular</div>
              <div style={{ fontSize: 12, color: INK_LIGHT }}>Body copy, captions, descriptions, and all running text</div>
              <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: 1, color: INK_MUTED, marginTop: 16, lineHeight: 2, borderTop: '1px solid rgba(0,0,0,.07)', paddingTop: 16, wordBreak: 'break-all' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 06 · LOGO VERSIONS ════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag>06 · Logo Versions</SecTag>
          <SecHeading>Correct &amp; incorrect<br/><em style={{ color: RED, fontStyle: 'italic' }}>applications.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(16px, 3vw, 28px)' }}>
            {[
              { bg: WHITE, c1: RED, c2: YELLOW, c3: RED, t: '#333', name: 'Primary', ok: true },
              { bg: '#111', c1: WHITE, c2: WHITE, c3: WHITE, t: 'rgba(255,255,255,.7)', name: 'Dark BG', ok: true },
              { bg: YELLOW, c1: '#111', c2: WHITE, c3: '#111', t: '#111', name: 'Yellow BG', ok: true },
              { bg: WHITE, c1: RED, c2: YELLOW, c3: RED, t: '#333', name: 'Stretched', ok: false, stretch: true },
              { bg: WHITE, c1: '#555', c2: YELLOW, c3: '#555', t: RED, name: 'Wrong Colours', ok: false, strike: true },
              { bg: WHITE, name: 'Missing Mark', ok: false, strike: true, missing: true },
            ].map((l, i) => (
              <div key={i} className="lmc-reveal" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(0,0,0,.07)' }}>
                <div style={{ height: 'clamp(140px, 16vw, 200px)', background: l.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, position: 'relative' }}>
                  {!l.missing && (
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, lineHeight: 1, transform: l.stretch ? 'scaleX(1.4)' : 'none', opacity: l.stretch || l.strike ? 0.6 : 1 }}>
                      <span style={{ color: l.c1 }}>1</span><span style={{ color: l.c2 }}>0</span><span style={{ color: l.c3 }}>0</span>
                    </div>
                  )}
                  <div style={{ fontSize: 'clamp(8px, 1.2vw, 12px)', fontWeight: l.strike && !l.missing ? 700 : 400, letterSpacing: 1, textAlign: 'center', color: l.missing ? '#555' : l.t, zIndex: 1 }}>mejores<br/>restaurantes de España</div>
                  {(l.stretch || l.strike) && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '100%', height: 2, background: RED, transform: 'rotate(-15deg)', opacity: .6 }} />
                    </div>
                  )}
                </div>
                <div style={{ background: PAPER, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: INK }}>{l.name}</span>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, background: l.ok ? 'rgba(34,197,94,.15)' : 'rgba(239,68,68,.12)', color: l.ok ? '#16a34a' : '#dc2626' }}>{l.ok ? '✓' : '✕'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 07 · MOCKUPS ════ */}
      <section style={{ background: INK, padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <SecTag white>07 · Brand in the World</SecTag>
          <SecHeading white>Every<br/><em style={{ color: YELLOW, fontStyle: 'italic' }}>touchpoint.</em></SecHeading>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 3vw, 36px)', gridAutoFlow: 'row dense' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
              <div key={num} className="lmc-reveal" style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', background: INK_LIGHT, gridRow: num % 5 === 0 ? 'span 2' : 'span 1', minHeight: 280 }}>
                <img src={`/LMC/Mockups/${num}.png`} alt={`Mockup ${num}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 08 · RESULTS ════ */}
      <section style={{ background: RED, position: 'relative', overflow: 'hidden', padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(200px, 30vw, 440px)', fontWeight: 700, color: 'rgba(255,255,255,.04)', lineHeight: 1, pointerEvents: 'none' }}>100</div>
        <div style={{ maxWidth: 1140, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <SecTag white>08 · Outcomes</SecTag>
          <SecHeading white>A system built<br/><em style={{ color: YELLOW, fontStyle: 'italic' }}>to last.</em></SecHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(16px, 3vw, 32px)' }}>
            {[
              { l: 'Consistency Score', n: '100', p: '%', d: 'The brand manual covers every scenario — from correct background usage to minimum reproduction sizes — ensuring zero ambiguity for any designer using the system.' },
              { l: 'Touchpoints Defined', n: '+10', p: '', d: 'From business cards and gift boxes to outdoor MUPIs and publication covers, every branded surface has a defined, tested, and documented application.', smallPlus: true },
              { l: 'Design Foundation', n: 'Golden\nRatio', p: '', d: 'Every proportion in the logo traces back to the Fibonacci-derived Golden Ratio — giving the mark an intrinsic visual harmony that holds at every size.', textNum: true },
            ].map((r, i) => (
              <div key={i} className="lmc-reveal" style={{ border: '1px solid rgba(255,255,255,.15)', borderRadius: 20, padding: 'clamp(28px, 4vw, 48px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${YELLOW}, rgba(251,176,59,.2))` }} />
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 12 }}>{r.l}</div>
                {r.textNum ? (
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: WHITE, lineHeight: 1, marginBottom: 16, whiteSpace: 'pre-line', letterSpacing: -1 }}>{r.n}</div>
                ) : (
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 700, color: WHITE, lineHeight: 1, marginBottom: 16 }}>
                    {r.smallPlus ? <><span style={{ fontSize: '50%' }}>+</span>10</> : r.n}<span style={{ fontSize: '50%', opacity: .6 }}>{r.p}</span>
                  </div>
                )}
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>{r.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ NEXT CTA ════ */}
      <section style={{ padding: 'clamp(80px, 12vw, 160px) 0', background: OFF_WHITE, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,176,59,.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="lmc-reveal" style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: INK_MUTED, marginBottom: 20 }}>Next Project</div>
          <h2 className="lmc-reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: INK, marginBottom: 12 }}>
            EazyTaxes<br/><em style={{ color: RED, fontWeight: 400, fontStyle: 'italic' }}>Brand Evolution</em>
          </h2>
          <p className="lmc-reveal" style={{ fontSize: 12, color: INK_MUTED, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 40 }}>Digital Brand · Identity System</p>
          <a href="/case-studies/eazytaxes-brand" onClick={e => { e.preventDefault(); navigate('/case-studies/eazytaxes-brand') }} className="lmc-reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: WHITE, background: RED, padding: '16px 32px', borderRadius: 100, textDecoration: 'none', transition: 'background .2s, transform .2s' }} onMouseEnter={e => { e.currentTarget.style.background = RED_DARK; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.background = RED; e.currentTarget.style.transform = 'translateY(0)' }}>
            View Case Study <span>→</span>
          </a>
        </div>
      </section>

      <CsFooter accentColor={RED} bgColor={INK} ruleColor="rgba(255,255,255,.06)" textColor={WHITE} mutedColor="rgba(255,255,255,.35)" copyOpacity="0.2" />

      <style>{`
        @keyframes floatCard { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .lmc-reveal { opacity: 0; transform: translateY(36px); transition: opacity .9s cubic-bezier(0.16,1,0.3,1), transform .9s cubic-bezier(0.16,1,0.3,1); }
        .lmc-reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 900px) {
          .lmc-hero-grid { grid-template-columns: 1fr !important; text-align: center; height: auto !important; padding-bottom: 60px; }
          .lmc-hero-grid > div:first-child { display: flex; flexDirection: column; alignItems: center; }
          .mt-meta { justify-content: center; }
          .lmc-hero-visual { min-height: 360px !important; }
          .lmc-process-visual { display: none !important; }
        }
      `}</style>
    </div>
  )
}
