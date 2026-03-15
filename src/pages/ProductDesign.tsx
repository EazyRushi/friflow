import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'
import { useCsReveal, Strip, SLabel, SH, PullQuote, ProcessGrid, DelGrid, ResGrid, NextProject, VBox, FullImg, HeroMeta } from '../layouts/CaseStudyLayout'

const accent = '#C8FF00'
const bg = '#080808'
const mid = '#111111'
const card = '#181818'
const charcoal = '#1C1A18'
const white = '#F5F0E8'
const muted = 'rgba(245,240,232,0.42)'
const rule = 'rgba(245,240,232,0.07)'

export default function ProductDesign() {
  useCsReveal()

  return (
    <div style={{ background: bg, color: white, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={accent} ringBorder="rgba(200,255,0,0.4)" ringBorderHov={accent} />
      <CsNavbar accentColor={accent} bgScrolled="rgba(8,8,8,.94)" textColor={white} mutedColor={muted} ctaTextColor={bg} />

      {/* HERO */}
      <section className="px-6 pb-12 md:px-14 md:pb-16" style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr auto', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,#040c00 0%,#0a1a00 35%,#172800 65%,#050d00 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(8,8,8,.25) 0%,transparent 30%,transparent 55%,rgba(8,8,8,.92) 100%)' }} />
          <div className="hero-dot-grid" style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div className="flex justify-between items-start" style={{ paddingTop: 140, position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, border: `1px solid rgba(200,255,0,.3)`, padding: '10px 20px' }}>◎ &nbsp;Product Design</div>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: muted, border: `1px solid ${rule}`, padding: '10px 20px' }}>2025</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 md:gap-16" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <p className="flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: muted, marginBottom: 20 }}>
              <span style={{ width: 32, height: 1, background: accent, flexShrink: 0 }} />Case Study — 02
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 800, letterSpacing: -3, lineHeight: .93, color: white, marginBottom: 32 }}>
              Modu<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Smart</em><br />Scale
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: muted, maxWidth: 460 }}>Designing a connected kitchen scale that disappears into daily life — minimal form, intelligent feedback, zero learning curve.</p>
          </div>
          <HeroMeta accent={accent} bg="rgba(8,8,8,.72)" mutedColor={muted} textColor={white}
            items={[{ k: 'Client', v: 'Modu Labs' }, { k: 'Scope', v: 'Industrial Design' }, { k: 'Year', v: '2025' }, { k: 'Duration', v: '12 Weeks' }]} />
        </div>
      </section>

      <Strip bg={bg} numColor={white} labelColor={muted} ruleBg={rule} accent={accent}
        items={[{ val: '4+', label: 'Prototypes Built' }, { val: '38%', label: 'Lighter Than Prev.' }, { val: '0', label: 'Button Presses to Use' }, { val: '★4.9', label: 'User Testing Score' }]} />

      {/* CHALLENGE */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}` }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
          <div className="reveal">
            <SLabel text="01 · The Challenge" accent={accent} ruleColor={rule} />
            <SH accent={accent} textColor={white}>Hardware that<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>thinks first.</em></SH>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>Modu Labs had a technically impressive sensor array and no idea what to put it in. Their first-gen product was function-first — a box with buttons. Users tolerated it. Nobody loved it.</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>Our brief: re-design the physical product from scratch. Make it something people want on their counter even when they're not using it. Make every interaction feel inevitable.</p>
          </div>
          <VBox bg="linear-gradient(135deg,#061200,#142800)" label="Product Brief — Before State" subLabel="Replace with product photography" style={{ aspectRatio: '4/3' }} className="reveal rd2" />
        </div>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-[1px] mt-14" style={{ background: rule }}>
          {[['Dimensions','220 × 180 × 12mm'],['Weight','340g'],['Capacity','5kg / 0.1g precision'],['Connectivity','Bluetooth 5.2 · USB-C'],['Materials','Anodised Aluminium · Silicone'],['Display','E-ink 2.9" · Auto-dim']].map(([k, v]) => (
            <div key={k} style={{ background: card, padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 32 }}>
              <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: muted }}>{k}</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 600, color: white, textAlign: 'right' }}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      <FullImg bg="linear-gradient(135deg,#040c00,#142800,#040c00)" gridColor="rgba(200,255,0,.04)" label="Hero product shot — replace with final render or photography" />

      {/* CONSTRAINTS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="02 · Design Constraints" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 560 }}>Every constraint<br />became a <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>decision.</em></SH>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] mt-12">
          {[['C.01','Zero Visible Buttons','All interactions via capacitive touch zones and tilt gestures. The product reads intention, not button presses. Every surface is active.'],['C.02','Sub-12mm Profile','Flush with a countertop when not in use. The engineering challenge was fitting a full sensor array, battery, and e-ink display into 12mm of depth.'],['C.03','Single Material Face','The entire top surface is one piece of anodised aluminium — no seams, no ports visible from above. Ports route to the underside edge.']].map(([num, title, body], i) => (
            <div key={num} className={`reveal rd${i + 1}`} style={{ background: card, padding: '36px 28px', borderLeft: `2px solid ${accent}` }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 3, color: accent, marginBottom: 14 }}>{num}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 700, color: white, marginBottom: 10 }}>{title}</div>
              <p style={{ fontSize: 12, lineHeight: 1.8, color: muted }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE GRIDS */}
      <section style={{ paddingTop: 3, borderBottom: `1px solid ${rule}` }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[3px] mb-[3px]">
          <VBox bg="linear-gradient(135deg,#030903,#0c1a04)" label="3D Render — Final Form" style={{ aspectRatio: '16/10' }} />
          <div className="grid gap-[3px]">
            <VBox bg="linear-gradient(135deg,#0a0a0a,#1a1a1a)" label="Sketch — Iteration 03" style={{ flex: 1, minHeight: 200 }} />
            <VBox bg="linear-gradient(135deg,#061200,#142800)" label="Material Exploration" style={{ flex: 1, minHeight: 200 }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
          <VBox bg="linear-gradient(135deg,#061200,#142800)" label="Prototype 02 — Foam" style={{ aspectRatio: '4/3' }} />
          <VBox bg="linear-gradient(135deg,#0a0a0a,#1a1a1a)" label="Final Prototype — Machined" style={{ aspectRatio: '4/3' }} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}` }}>
        <SLabel text="03 · Process" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 540 }}>Sketch, prototype,<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>repeat.</em></SH>
        <ProcessGrid accent={accent} bg={bg} textColor={white} mutedColor={muted} ruleBg={rule}
          steps={[
            { num: '01', title: 'Research & Benchmarking', body: 'Competitive landscape mapped. 24 user interviews conducted. Key insight: users want the scale to "know" what they\'re doing.', connector: true },
            { num: '02', title: 'Concept Sketching', body: '80+ sketches across 3 form directions. Flat slab, contoured edge, and monolith forms explored. Flat slab selected for counter integration.', connector: true },
            { num: '03', title: 'Rapid Prototyping', body: '4 foam models, 2 FDM prints, 1 machined aluminium prototype. Each round tested with 8 users in kitchen environment.', connector: true },
            { num: '04', title: 'Engineering Liaison', body: 'Weekly handoffs with Modu\'s hardware team. DFM review, tolerance specifications, and final surface finish documentation.', connector: false },
          ]} />
      </section>

      <PullQuote accent={accent} bgColor={accent} textColor={bg} text={`"The first time a tester used it without any instruction and didn't make a single error — that was the moment we knew friflow had got it right."`} author="Ato Mensah — Head of Hardware, Modu Labs" />

      {/* DELIVERABLES */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="04 · Deliverables" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 480 }}>Everything we <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>handed over.</em></SH>
        <DelGrid accent={accent} bg={charcoal} hoverBg={accent} textColor={white} mutedColor={muted}
          items={[
            { icon: '◎', title: 'Industrial Design Files', desc: 'STEP/IGES CAD files, 2D drawings, GD&T callouts, and surface finish specifications.' },
            { icon: '◻', title: 'Prototyping Set', desc: '4 foam models, 2 FDM prints, 1 machined aluminium prototype with documentation.' },
            { icon: '◈', title: 'CMF Guide', desc: 'Colour, material, and finish specifications. 3 colourway options with pantone and RAL references.' },
            { icon: '▲', title: 'DFM Report', desc: 'Design-for-manufacture review, tooling notes, and supplier-ready production documentation.' },
            { icon: '⬡', title: 'Packaging Design', desc: 'Retail box dieline, insert design, and unboxing sequence documentation.' },
            { icon: '✦', title: 'Render Pack', desc: 'Studio renders across all colourways for marketing, press, and e-commerce use.' },
          ]} />
      </section>

      {/* RESULTS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}` }}>
        <SLabel text="05 · Results" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 500 }}>Shipped. <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Loved.</em></SH>
        <ResGrid accent={accent} bg={mid} numColor={white} mutedColor={muted} ruleBg={rule}
          items={[
            { num: '★4.9', label: 'User Testing Score', desc: 'Average SUS score of 4.9/5 across 40 testers in real kitchen environments. Zero manual errors in final round.' },
            { num: '38%', label: 'Weight Reduction', desc: '38% lighter than the previous generation while adding e-ink display and Bluetooth connectivity.' },
            { num: '0s', label: 'Learning Curve', desc: 'Every user in the final test round operated the product correctly on first use with no instruction.' },
          ]} />
      </section>

      <NextProject title="Cipher *UI* System" cat="UI / UX Design · SaaS" accent={accent} bg={mid} hoverBg={card} textColor={white} mutedColor={muted} href="/case-studies/ui-ux" />
      <CsFooter accentColor={accent} bgColor={bg} ruleColor={rule} textColor={white} mutedColor={muted} copyOpacity="rgba(245,240,232,.18)" />
    </div>
  )
}
