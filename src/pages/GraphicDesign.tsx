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

export default function GraphicDesign() {
  useCsReveal()

  return (
    <div style={{ background: bg, color: deep, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={accent} ringBorder="rgba(255,107,53,.45)" ringBorderHov={accent} />
      <CsNavbar accentColor={accent} bgScrolled="rgba(17,16,16,.94)" textColor="#F5F0E8" mutedColor={invMuted} ctaTextColor="#fff" />

      {/* HERO */}
      <section className="cs-hero px-6 pb-12 md:px-14 md:pb-16" style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr auto', position: 'relative', overflow: 'hidden', background: invBg }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,#0a0804,#1e160a,#2a1e0c,#0a0804)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(17,16,16,.2) 0%,transparent 35%,transparent 55%,rgba(17,16,16,.95) 100%)' }} />
        <div className="hero-halftone" style={{ position: 'absolute', inset: 0, opacity: .6 }} />
        <div className="flex justify-between items-start" style={{ paddingTop: 100, position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, border: `1px solid rgba(255,107,53,.3)`, padding: '8px 14px' }}>◎ &nbsp;Graphic Design</div>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: invMuted, border: `1px solid ${invRule}`, padding: '8px 14px' }}>2025</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 md:gap-16" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <p className="flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: invMuted, marginBottom: 16 }}>
              <span style={{ width: 32, height: 1, background: accent, flexShrink: 0 }} />Case Study — 03
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px,7vw,96px)', fontWeight: 800, letterSpacing: -3, lineHeight: .93, color: '#F5F0E8', marginBottom: 24 }}>
              Roots &amp;<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Ritual</em><br />Identity
            </h1>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: invMuted, maxWidth: 460 }}>A full brand identity and print system for an organic tea brand rooted in West African botanicals — balancing heritage with contemporary shelf appeal.</p>
          </div>
          <HeroMeta accent={accent} bg="rgba(17,16,16,.72)" mutedColor={invMuted} textColor="#F5F0E8"
            items={[{ k: 'Client', v: 'Roots & Ritual Co.' }, { k: 'Scope', v: 'Brand Identity · Print' }, { k: 'Year', v: '2025' }, { k: 'Duration', v: '6 Weeks' }]} />
        </div>
      </section>

      {/* STRIP */}
      <Strip bg={bg} numColor={deep} labelColor={muted} ruleBg={rule} accent={accent}
        items={[{ val: '6', label: 'SKU Designs' }, { val: '2×', label: 'Reorder Rate' }, { val: '18k', label: 'Print Run — Launch' }, { val: '↑55%', label: 'Retailer Pick-up' }]} />

      {/* BRIEF */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
          <div className="reveal">
            <SLabel text="01 · The Brief" accent={accent} ruleColor={rule} />
            <SH accent={accent} textColor={deep}>Roots that ground.<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Ritual that sells.</em></SH>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>Roots & Ritual came to us with a powerful product story and no visual language to tell it. Their teas were genuinely rooted in West African botanical tradition — but the packaging looked like every other wellness brand on the shelf.</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>The brief: build a graphic identity that honours that heritage without leaning into tired clichés. Modern enough for premium retail. Warm enough to feel handmade.</p>
          </div>
          <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Brand Before State" subLabel="Replace with client photography" style={{ aspectRatio: '4/3' }} className="reveal rd2" />
        </div>
      </section>

      <FullImg bg="linear-gradient(135deg,#1e0c04,#5c2810,#1e0c04)" gridColor="rgba(255,107,53,.04)" label="Campaign hero visual — replace with final artwork" />

      {/* COLOUR */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="02 · Visual Language" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 560 }}>Every colour tells<br />a <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>story.</em></SH>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 0 }}>The palette was drawn directly from the botanicals — earthy ochres, deep forest greens, and the warm blush of hibiscus.</p>
        <div className="reveal grid grid-cols-3 md:grid-cols-6 gap-[3px] mt-10">
          {[['#3D2008','Deep Earth','#e8d8b8'],['#8B4A1C','Bark Brown','#f5e8d8'],['#C47A3C','Warm Ochre','#3d2008'],['#1C3A20','Forest','#c8dcc8'],['#C45A5A','Hibiscus','#fff'],['#EDE0C8','Parchment','#3d2008']].map(([bg2, name, tc]) => (
            <div key={name} className="pal-chip" style={{ background: bg2 }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, marginBottom: 3, color: tc }}>{name}</span>
              <span style={{ fontSize: 9, letterSpacing: 2, opacity: .5, color: tc }}>{bg2}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section style={{ borderBottom: `1px solid ${rule}`, background: invBg }}>
        <div style={{ position: 'relative', overflow: 'hidden', background: invBg, margin: 0 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,107,53,.06) 1.5px,transparent 1.5px)', backgroundSize: '28px 28px' }} />
          <div style={{ position: 'absolute', top: 20, left: 40, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(80px,14vw,160px)', letterSpacing: -6, lineHeight: .85, color: 'rgba(245,240,232,.07)', pointerEvents: 'none' }}>Aa</div>
          <div className="relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 py-12 md:px-14 md:py-16">
            <div>
              <div style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: accent, marginBottom: 16, fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>Typography System</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', letterSpacing: -2, lineHeight: .95, color: '#F5F0E8', marginBottom: 20 }}>
                Type that <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>breathes.</em>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: invMuted }}>All identity typography is set in Syne for headings and DM Sans for body — mirroring the friflow brand system so every client asset feels professionally cohesive.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['Display · Syne 800','Ritual',800,28,-1],['Heading · Syne 600','Botanicals',600,20,0],['Body · DM Sans 300','Handcrafted blends',300,16,0],['Label · DM Sans 400','NET WT 50G',400,11,4]].map(([name, sample, fw, fs, ls]) => (
                <div key={String(name)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: `1px solid ${invRule}` }}>
                  <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: invMuted }}>{name}</span>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: Number(fw), fontSize: Number(fs), letterSpacing: Number(ls), textTransform: Number(ls) > 0 ? 'uppercase' : 'none', color: '#F5F0E8' }}>{sample}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section style={{ paddingTop: 3, borderBottom: `1px solid ${rule}` }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[3px] mb-[3px]">
          <VBox bg="linear-gradient(135deg,#3d1500,#8c3010)" label="Package Design — Hibiscus" style={{ aspectRatio: '16/10' }} />
          <div className="grid gap-[3px]">
            <VBox bg="linear-gradient(135deg,#d0c8b8,#b8b0a0)" label="Label Detail" style={{ minHeight: 200 }} />
            <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Illustration Fragment" style={{ minHeight: 200 }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
          <VBox bg="linear-gradient(135deg,#0a0804,#1e160a)" label="Full Range — Dark" style={{ aspectRatio: '4/3' }} />
          <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Editorial Flat Lay" style={{ aspectRatio: '4/3' }} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="03 · Process" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 540 }}>From sketch to <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>shelf.</em></SH>
        <ProcessGrid accent={accent} bg={bg} textColor={deep} mutedColor={muted} ruleBg={rule}
          steps={[
            { num: '01', title: 'Brand Discovery', body: 'Founder interviews, mood boarding, and competitive mapping. We identified the exact visual gap between heritage tea brands and modern wellness.', connector: true },
            { num: '02', title: 'Mark & Palette', body: 'Logo mark drawn from a stylised kola nut cross-section. Palette extracted from raw ingredient photography. Three rounds of refinement.', connector: true },
            { num: '03', title: 'Illustration System', body: 'Custom botanical illustration set for each SKU. Each blend gets its own hero plant rendered in the brand\'s earthy, slightly textured style.', connector: true },
            { num: '04', title: 'Print Production', body: 'Dieline production, spot colour specification, uncoated stock selection, and print liaison for the 18,000-unit first run.', connector: false },
          ]} />
      </section>

      <PullQuote accent={accent} text={`"We finally have a brand that feels as intentional as our ingredients. Every time someone picks up a pack and pauses — that's friflow's work."`} author="Ama Owusu — Founder, Roots & Ritual Co." />

      {/* DELIVERABLES */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="04 · Deliverables" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 480 }}>Everything we <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>created.</em></SH>
        <DelGrid accent={accent} bg={card} hoverBg={accent} textColor={deep} mutedColor={muted}
          items={[
            { icon: '◎', title: 'Brand Identity System', desc: 'Logo suite, colour palette, typographic system, and brand guidelines PDF.' },
            { icon: '◻', title: 'Packaging Design', desc: '6 SKU dielines, print-ready artwork, spot colour specs, and unboxing notes.' },
            { icon: '◈', title: 'Illustration Set', desc: '6 custom botanical illustrations — one per blend — plus a pattern library.' },
            { icon: '▲', title: 'Stationery Suite', desc: 'Business cards, letterhead, compliment slips, and tissue paper design.' },
            { icon: '⬡', title: 'Social Template Pack', desc: 'Instagram grid and story templates in Canva, aligned to the print identity.' },
            { icon: '✦', title: 'Brand Guidelines', desc: '36-page PDF covering logo use, colour, typography, illustration, and do/don\'ts.' },
          ]} />
      </section>

      {/* RESULTS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="05 · Results" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 500 }}>Design that <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>performed.</em></SH>
        <ResGrid accent={accent} bg={mid} numColor={deep} mutedColor={muted} ruleBg={rule}
          items={[
            { num: '↑55%', label: 'Retailer Pick-up', desc: '55% of approached retailers placed an order after seeing the redesigned packaging. Previous rate was 20%.' },
            { num: '2×', label: 'Reorder Rate', desc: 'Customer reorder rate doubled in the 90 days following the rebrand and restock across all channels.' },
            { num: '18k', label: 'Launch Print Run', desc: 'First print run of 18,000 units sold out in 11 weeks. A second run was placed before delivery of the first.' },
          ]} />
      </section>

      <NextProject title="Cipher *UI* System" cat="UI / UX Design · SaaS" accent={accent} bg={invBg} hoverBg="#1c1a18" textColor="#F5F0E8" mutedColor={invMuted} href="/case-studies/ui-ux" />
      <CsFooter accentColor={accent} bgColor={invBg} ruleColor={invRule} textColor="#F5F0E8" mutedColor={invMuted} copyOpacity="rgba(245,240,232,.18)" />
    </div>
  )
}
