import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'
import { useCsReveal, Strip, SLabel, SH, PullQuote, ProcessGrid, DelGrid, ResGrid, NextProject, VBox, FullImg, HeroMeta } from '../layouts/CaseStudyLayout'

const accent = '#FF6B35'
const bg = '#EDE8DC'
const mid = '#E0D9CC'
const card = '#D6CFC3'
const deep = '#111010'
const muted = 'rgba(17,16,16,0.42)'
const rule = 'rgba(17,16,16,0.09)'
const invBg = '#111010'
const invMuted = 'rgba(245,240,232,0.4)'
const invRule = 'rgba(245,240,232,0.08)'

export default function PackagingDesign() {
  useCsReveal()

  return (
    <div style={{ background: bg, color: deep, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={accent} ringBorder="rgba(255,107,53,.45)" ringBorderHov={accent} />
      <CsNavbar accentColor={accent} bgScrolled="rgba(17,16,16,.94)" textColor="#F5F0E8" mutedColor={invMuted} ctaTextColor="#fff" />

      {/* HERO */}
      <section className="px-6 pb-12 md:px-14 md:pb-16" style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr auto', position: 'relative', overflow: 'hidden', background: invBg }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,#0a0804,#1e160a,#2a1e0c,#0a0804)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(17,16,16,.2) 0%,transparent 35%,transparent 55%,rgba(17,16,16,.95) 100%)' }} />
        <div className="hero-halftone" style={{ position: 'absolute', inset: 0, opacity: .4 }} />
        {/* Dieline grid decoration */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,107,53,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,53,.04) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="flex justify-between items-start" style={{ paddingTop: 140, position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, border: `1px solid rgba(255,107,53,.3)`, padding: '10px 20px' }}>◎ &nbsp;Packaging Design</div>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: invMuted, border: `1px solid ${invRule}`, padding: '10px 20px' }}>2025</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 md:gap-16" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <p className="flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: invMuted, marginBottom: 20 }}>
              <span style={{ width: 32, height: 1, background: accent, flexShrink: 0 }} />Case Study — 02
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 800, letterSpacing: -3, lineHeight: .93, color: '#F5F0E8', marginBottom: 32 }}>
              Kora<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Spirits</em><br />Packaging
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: invMuted, maxWidth: 460 }}>Full packaging design for a premium artisan spirits brand — dielines, print-ready artwork, 3D mockups, and production liaison for a 24,000-unit first run across 6 SKUs.</p>
          </div>
          <HeroMeta accent={accent} bg="rgba(17,16,16,.72)" mutedColor={invMuted} textColor="#F5F0E8"
            items={[{ k: 'Client', v: 'Kora Spirits Co.' }, { k: 'Scope', v: 'Packaging · Print · 3D' }, { k: 'Year', v: '2025' }, { k: 'Duration', v: '10 Weeks' }]} />
        </div>
      </section>

      <Strip bg={bg} numColor={deep} labelColor={muted} ruleBg={rule} accent={accent}
        items={[{ val: '6', label: 'SKU Designs' }, { val: '24k', label: 'Unit First Run' }, { val: '↑63%', label: 'Shelf Pick-up Rate' }, { val: '3×', label: 'Reorder Volume' }]} />

      {/* BRIEF */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
          <div className="reveal">
            <SLabel text="01 · The Brief" accent={accent} ruleColor={rule} />
            <SH accent={accent} textColor={deep}>Packaging that<br />earns its <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>shelf.</em></SH>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>Kora Spirits had a genuinely exceptional product — small-batch, botanically infused, and rooted in West African distilling tradition. Their packaging looked like a supermarket own-brand.</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>The brief: design packaging that commands premium shelf positioning, communicates the craft story at a glance, and works across 6 SKUs without losing coherence.</p>
          </div>
          <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Packaging Before State" subLabel="Replace with client photography" style={{ aspectRatio: '4/3' }} className="reveal rd2" />
        </div>
        {/* Spec table */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-[1px] mt-14" style={{ background: rule }}>
          {[['Format','700ml · 350ml · 50ml miniature'],['Substrate','Uncoated 350gsm · Soft-touch laminate'],['Finish','Spot UV · Foil stamp · Emboss'],['Print Method','Litho offset · 5 colour + spot'],['Dieline','Custom die-cut with tuck-end closure'],['3D Deliverable','Keyshot renders · 360° turntable']].map(([k, v]) => (
            <div key={k} style={{ background: card, padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 32 }}>
              <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: muted }}>{k}</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 600, color: deep, textAlign: 'right' }}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      <FullImg bg="linear-gradient(135deg,#1e0c04,#5c2810,#1e0c04)" gridColor="rgba(255,107,53,.04)" label="Full range hero shot — replace with final photography" />

      {/* COLOUR */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="02 · Visual Language" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 560 }}>Six SKUs.<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>One family.</em></SH>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 48 }}>Each SKU gets its own botanical colour — drawn directly from the hero ingredient. The structural elements stay constant: the mark, the typographic system, the foil band. The colour tells the flavour story.</p>
        <div className="reveal grid grid-cols-3 md:grid-cols-6 gap-[3px]">
          {[['#1A2E1A','Kola Forest','#c8dcc8'],['#8B4A1C','Bark & Spice','#f5e8d8'],['#C47A3C','Warm Amber','#3d2008'],['#2E1A3A','Hibiscus Night','#e8d0f0'],['#1C3A20','Moringa','#c8dcc8'],['#EDE0C8','Parchment','#3d2008']].map(([bg2, name, tc]) => (
            <div key={name} className="pal-chip" style={{ background: bg2 }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, marginBottom: 3, color: tc }}>{name}</span>
              <span style={{ fontSize: 9, letterSpacing: 2, opacity: .5, color: tc }}>{bg2}</span>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE GRID */}
      <section style={{ paddingTop: 3, borderBottom: `1px solid ${rule}` }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[3px] mb-[3px]">
          <VBox bg="linear-gradient(135deg,#3d1500,#8c3010)" label="Full Range — Hero Shot" style={{ aspectRatio: '16/10' }} />
          <div className="grid gap-[3px]">
            <VBox bg="linear-gradient(135deg,#d0c8b8,#b8b0a0)" label="Label Detail — Foil" style={{ flex: 1, minHeight: 200 }} />
            <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Dieline — Flat" style={{ flex: 1, minHeight: 200 }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px]">
          <VBox bg="linear-gradient(135deg,#1a2e1a,#2e4a2e)" label="Kola Forest SKU" style={{ aspectRatio: '3/4' }} />
          <VBox bg="linear-gradient(135deg,#2e1a3a,#4a2e5c)" label="Hibiscus Night SKU" style={{ aspectRatio: '3/4' }} />
          <VBox bg="linear-gradient(135deg,#0a0804,#1e160a)" label="3D Render — Dark" style={{ aspectRatio: '3/4' }} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="03 · Process" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 540 }}>From dieline to<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>dispatch.</em></SH>
        <ProcessGrid accent={accent} bg={bg} textColor={deep} mutedColor={muted} ruleBg={rule}
          steps={[
            { num: '01', title: 'Structural Design', body: 'Dieline development for all 3 formats. Custom die-cut with tuck-end closure engineered for retail shelf stability and unboxing experience.', connector: true },
            { num: '02', title: 'Graphic Design', body: 'Label artwork, illustration system, and typographic hierarchy. Each SKU illustration hand-drawn and adapted to the botanical colour palette.', connector: true },
            { num: '03', title: '3D Visualisation', body: 'Keyshot renders across all 6 SKUs and 3 formats. 360° turntable animations for e-commerce and press. Lifestyle composites for campaign use.', connector: true },
            { num: '04', title: 'Print Production', body: 'Print-ready artwork, spot colour specification, foil and emboss briefing, and full print liaison for the 24,000-unit first run.', connector: false },
          ]} />
      </section>

      <PullQuote accent={accent} text={`"We went from being invisible on shelf to being the bottle people pick up first. The packaging does the selling before anyone reads a word."`} author="Kwame Asante — Founder, Kora Spirits Co." />

      {/* DELIVERABLES */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="04 · Deliverables" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 480 }}>Everything we <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>produced.</em></SH>
        <DelGrid accent={accent} bg={card} hoverBg={accent} textColor={deep} mutedColor={muted}
          items={[
            { icon: '◎', title: 'Dieline Set', desc: '6 SKU dielines across 3 formats — 700ml, 350ml, and 50ml miniature. All print-ready with bleed and crop marks.' },
            { icon: '◻', title: 'Print-ready Artwork', desc: 'All 6 SKUs in CMYK + spot colour. Foil, emboss, and spot UV layers separated and briefed for the printer.' },
            { icon: '◈', title: 'Illustration Set', desc: '6 custom botanical illustrations — one per SKU — rendered in the brand\'s earthy, slightly textured style.' },
            { icon: '▲', title: '3D Render Pack', desc: 'Keyshot renders across all SKUs and formats. 360° turntable, lifestyle composites, and e-commerce white-background shots.' },
            { icon: '⬡', title: 'Packaging Guidelines', desc: 'Usage rules for all packaging elements — colour, typography, illustration placement, and print specification.' },
            { icon: '✦', title: 'Production File Archive', desc: 'All source files (AI, PDF, TIFF) organised by SKU and format, with a handoff document for future print runs.' },
          ]} />
      </section>

      {/* RESULTS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="05 · Results" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 500 }}>Packaging that <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>sells.</em></SH>
        <ResGrid accent={accent} bg={mid} numColor={deep} mutedColor={muted} ruleBg={rule}
          items={[
            { num: '↑63%', label: 'Shelf Pick-up Rate', desc: '63% increase in shelf pick-up rate measured across 8 retail locations in the 90 days post-launch.' },
            { num: '3×', label: 'Reorder Volume', desc: 'Retailer reorder volume tripled in the first quarter. The 24,000-unit run sold through in 14 weeks.' },
            { num: '6', label: 'SKUs Launched', desc: 'All 6 SKUs launched simultaneously across 3 formats with zero print errors or production delays.' },
          ]} />
      </section>

      <NextProject title="Aurore *Beauty* Rebrand" cat="Brand Identity · Naming" accent={accent} bg={invBg} hoverBg="#1c1a18" textColor="#F5F0E8" mutedColor={invMuted} href="/case-studies/brand-identity" />
      <CsFooter accentColor={accent} bgColor={invBg} ruleColor={invRule} textColor="#F5F0E8" mutedColor={invMuted} copyOpacity="rgba(245,240,232,.18)" />
    </div>
  )
}
