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

export default function BrandIdentity() {
  useCsReveal()

  return (
    <div style={{ background: bg, color: deep, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={accent} ringBorder="rgba(255,107,53,.45)" ringBorderHov={accent} />
      <CsNavbar accentColor={accent} bgScrolled="rgba(17,16,16,.94)" textColor="#F5F0E8" mutedColor={invMuted} ctaTextColor="#fff" />

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr auto', padding: '0 56px 72px', position: 'relative', overflow: 'hidden', background: invBg }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,#0a0804,#1e160a,#2a1e0c,#0a0804)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(17,16,16,.2) 0%,transparent 35%,transparent 55%,rgba(17,16,16,.95) 100%)' }} />
        <div className="hero-halftone" style={{ position: 'absolute', inset: 0, opacity: .5 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: 140, position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, border: `1px solid rgba(255,107,53,.3)`, padding: '10px 20px' }}>◎ &nbsp;Brand Identity</div>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: invMuted, border: `1px solid ${invRule}`, padding: '10px 20px' }}>2025</div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 64 }}>
          <div>
            <p className="flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: invMuted, marginBottom: 20 }}>
              <span style={{ width: 32, height: 1, background: accent, flexShrink: 0 }} />Case Study — 01
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 800, letterSpacing: -3, lineHeight: .93, color: '#F5F0E8', marginBottom: 32 }}>
              Aurore<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Beauty</em><br />Rebrand
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: invMuted, maxWidth: 460 }}>A complete brand identity overhaul for a premium West African beauty house — logo system, visual language, naming architecture, and a 48-page brand guidelines document.</p>
          </div>
          <HeroMeta accent={accent} bg="rgba(17,16,16,.72)" mutedColor={invMuted} textColor="#F5F0E8"
            items={[{ k: 'Client', v: 'Aurore Beauty' }, { k: 'Scope', v: 'Brand Identity · Naming' }, { k: 'Year', v: '2025' }, { k: 'Duration', v: '8 Weeks' }]} />
        </div>
      </section>

      <Strip bg={bg} numColor={deep} labelColor={muted} ruleBg={rule} accent={accent}
        items={[{ val: '3', label: 'Logo Variants' }, { val: '48pg', label: 'Brand Guidelines' }, { val: '↑72%', label: 'Brand Recall' }, { val: '12+', label: 'Markets Launched' }]} />

      {/* BRIEF */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }}>
          <div className="reveal">
            <SLabel text="01 · The Brief" accent={accent} ruleColor={rule} />
            <SH accent={accent} textColor={deep}>A name that<br />commands a <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>room.</em></SH>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>Aurore had the product quality of a luxury house and the visual identity of a market stall. Their skincare line was stocked in premium retailers but the brand wasn't earning the shelf space it occupied.</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>The brief: build a brand identity that commands premium positioning across every touchpoint — from the logo mark to the tissue paper inside the box.</p>
          </div>
          <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Brand Before State" subLabel="Replace with client photography" style={{ aspectRatio: '4/3' }} className="reveal rd2" />
        </div>
      </section>

      <FullImg bg="linear-gradient(135deg,#1e0c04,#5c2810,#1e0c04)" gridColor="rgba(255,107,53,.04)" label="Brand hero visual — replace with final artwork" />

      {/* LOGO SYSTEM */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="02 · Logo System" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 560 }}>A mark built to<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>last.</em></SH>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 48 }}>The primary mark is a geometric abstraction of the aurore (dawn) — a rising arc that reads as both a sun and an open eye. Three variants cover every application from embossed packaging to digital favicon.</p>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
          {[['Primary Mark','Full lockup — horizontal','linear-gradient(135deg,#111010,#1e1c18)'],['Stacked Variant','Vertical lockup — packaging','linear-gradient(135deg,#1e1c18,#2a2820)'],['Icon Mark','Favicon · emboss · stamp','linear-gradient(135deg,#2a2820,#111010)']].map(([title, sub, bg2]) => (
            <div key={title} style={{ background: bg2, aspectRatio: '4/3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <div style={{ width: 48, height: 48, border: `1px solid rgba(255,107,53,.4)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: accent, fontSize: 18 }}>◎</span>
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 12, fontWeight: 700, color: '#F5F0E8', letterSpacing: 1 }}>{title}</span>
              <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: invMuted }}>{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COLOUR & TYPE */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="03 · Visual Language" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 560 }}>Colour that<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>whispers luxury.</em></SH>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 48 }}>The palette draws from West African dawn light — warm terracottas, deep obsidian, and the soft gold of harmattan haze. Nothing borrowed from European luxury conventions.</p>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 3 }}>
          {[['#1A1410','Obsidian','#e8d8b8'],['#8B4A1C','Terracotta','#f5e8d8'],['#C47A3C','Harmattan','#3d2008'],['#E8D4B0','Parchment','#3d2008'],['#D4A574','Warm Sand','#3d2008'],['#F5F0E8','Ivory','#3d2008']].map(([bg2, name, tc]) => (
            <div key={name} className="pal-chip" style={{ background: bg2 }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, marginBottom: 3, color: tc }}>{name}</span>
              <span style={{ fontSize: 9, letterSpacing: 2, opacity: .5, color: tc }}>{bg2}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section style={{ padding: 0, borderBottom: `1px solid ${rule}`, background: invBg }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,107,53,.06) 1.5px,transparent 1.5px)', backgroundSize: '28px 28px' }} />
          <div style={{ position: 'absolute', top: 20, left: 40, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(80px,14vw,160px)', letterSpacing: -6, lineHeight: .85, color: 'rgba(245,240,232,.07)', pointerEvents: 'none' }}>Aa</div>
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '64px 56px' }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: accent, marginBottom: 16, fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>Typography System</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', letterSpacing: -2, lineHeight: .95, color: '#F5F0E8', marginBottom: 20 }}>
                Type that <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>elevates.</em>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: invMuted }}>The identity pairs Syne for structural headings with DM Serif Display for editorial moments — creating a system that feels both modern and timeless across print and digital.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['Display · Syne 800','Aurore',800,28,-1],['Heading · Syne 600','Beauty House',600,20,0],['Body · DM Sans 300','Crafted for your skin',300,16,0],['Label · DM Sans 400','EST. 2020',400,11,4]].map(([name, sample, fw, fs, ls]) => (
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
      <section style={{ padding: '3px 0 0', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 3, marginBottom: 3 }}>
          <VBox bg="linear-gradient(135deg,#1a0800,#3d1500)" label="Brand Identity — Hero Application" style={{ aspectRatio: '16/10' }} />
          <div style={{ display: 'grid', gap: 3 }}>
            <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Stationery Suite" style={{ flex: 1, minHeight: 200 }} />
            <VBox bg="linear-gradient(135deg,#1e1c18,#2a2820)" label="Logo on Dark" style={{ flex: 1, minHeight: 200 }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <VBox bg="linear-gradient(135deg,#0a0804,#1e160a)" label="Brand Guidelines — Spread" style={{ aspectRatio: '4/3' }} />
          <VBox bg="linear-gradient(135deg,#c8b89a,#e8d8b8)" label="Brand in Context" style={{ aspectRatio: '4/3' }} />
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="04 · Process" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 540 }}>From discovery to<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>guidelines.</em></SH>
        <ProcessGrid accent={accent} bg={bg} textColor={deep} mutedColor={muted} ruleBg={rule}
          steps={[
            { num: '01', title: 'Brand Discovery', body: 'Stakeholder interviews, competitor mapping, and audience research. We identified the exact positioning gap between Aurore and the premium tier they were targeting.', connector: true },
            { num: '02', title: 'Naming Architecture', body: 'Sub-brand naming system developed for 4 product lines. Naming principles, phonetic testing, and trademark screening across 12 target markets.', connector: true },
            { num: '03', title: 'Identity Design', body: 'Logo mark, colour palette, typography system, and graphic language. Three creative directions presented; refined through two rounds of client feedback.', connector: true },
            { num: '04', title: 'Guidelines & Rollout', body: '48-page brand guidelines document covering every application. Rollout support for packaging, digital, retail, and PR touchpoints.', connector: false },
          ]} />
      </section>

      <PullQuote accent={accent} text={`"For the first time, our brand looks as good as our product feels. friflow didn't just design a logo — they gave us a language to grow into."`} author="Nadia Koné — Founder, Aurore Beauty" />

      {/* DELIVERABLES */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="05 · Deliverables" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 480 }}>Everything we <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>created.</em></SH>
        <DelGrid accent={accent} bg={card} hoverBg={accent} textColor={deep} mutedColor={muted}
          items={[
            { icon: '◎', title: 'Logo System', desc: 'Primary mark, stacked variant, icon mark, and monochrome versions. All formats: SVG, EPS, PNG.' },
            { icon: '◻', title: 'Naming Architecture', desc: 'Sub-brand naming system for 4 product lines with naming principles and trademark screening.' },
            { icon: '◈', title: 'Colour & Typography', desc: 'Full palette specification, typography system, and usage rules for print and digital.' },
            { icon: '▲', title: 'Brand Guidelines', desc: '48-page PDF covering every application — logo, colour, type, photography, and do/don\'ts.' },
            { icon: '⬡', title: 'Stationery Suite', desc: 'Business cards, letterhead, compliment slips, and email signature templates.' },
            { icon: '✦', title: 'Digital Asset Pack', desc: 'Social profile assets, cover images, and story templates aligned to the brand system.' },
          ]} />
      </section>

      {/* RESULTS */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="06 · Results" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 500 }}>A brand that <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>performs.</em></SH>
        <ResGrid accent={accent} bg={mid} numColor={deep} mutedColor={muted} ruleBg={rule}
          items={[
            { num: '↑72%', label: 'Brand Recall', desc: 'Unaided brand recall increased by 72% in target markets within 6 months of the rebrand launch.' },
            { num: '12+', label: 'Markets Launched', desc: 'The new identity successfully launched across 12 markets in West and Central Africa without adaptation.' },
            { num: '48pg', label: 'Brand Guidelines', desc: 'A 48-page living document that has onboarded 3 new agency partners with zero brand inconsistencies.' },
          ]} />
      </section>

      <NextProject title="Roots & *Ritual* Identity" cat="Graphic Design · Print" accent={accent} bg={invBg} hoverBg="#1c1a18" textColor="#F5F0E8" mutedColor={invMuted} />
      <CsFooter accentColor={accent} bgColor={invBg} ruleColor={invRule} textColor="#F5F0E8" mutedColor={invMuted} copyOpacity="rgba(245,240,232,.18)" />
    </div>
  )
}
