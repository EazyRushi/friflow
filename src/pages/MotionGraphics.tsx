import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'
import { useCsReveal, Strip, SLabel, SH, PullQuote, ProcessGrid, DelGrid, ResGrid, NextProject, VBox, FullImg, HeroMeta } from '../layouts/CaseStudyLayout'

const accent = '#C84BFF'
const bg = '#050408'
const mid = '#0A0810'
const card = '#100E18'
const charcoal = '#181428'
const white = '#F0EEFF'
const muted = 'rgba(168,158,200,0.45)'
const rule = 'rgba(168,158,200,0.07)'

export default function MotionGraphics() {
  useCsReveal()

  return (
    <div style={{ background: bg, color: white, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={accent} ringBorder="rgba(200,75,255,.4)" ringBorderHov={accent} />
      <CsNavbar accentColor={accent} bgScrolled="rgba(5,4,8,.94)" textColor={white} mutedColor={muted} ctaTextColor={white} />

      {/* HERO */}
      <section className="px-6 pb-12 md:px-14 md:pb-16" style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr auto', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 80% at 50% 30%,#1a0828 0%,#08051a 50%,#050408 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(5,4,8,.15) 0%,transparent 35%,transparent 55%,rgba(5,4,8,.96) 100%)', zIndex: 1 }} />
        <div className="hero-glow" style={{ zIndex: 1 }} />
        <div className="hero-glow2" style={{ zIndex: 1 }} />
        <div className="hero-filmstrip" style={{ zIndex: 1 }} />
        <div style={{ position: 'absolute', top: 0, right: 108, display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 20, zIndex: 1 }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{ width: 12, height: 8, border: `1px solid rgba(200,75,255,.2)`, borderRadius: 2 }} />
          ))}
        </div>
        <div className="flex justify-between items-start" style={{ paddingTop: 140, position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, border: `1px solid rgba(200,75,255,.3)`, padding: '10px 20px' }}>◎ &nbsp;Motion Graphics</div>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: muted, border: `1px solid ${rule}`, padding: '10px 20px' }}>2025</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 md:gap-16" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <p className="flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: muted, marginBottom: 20 }}>
              <span style={{ width: 32, height: 1, background: accent, flexShrink: 0 }} />Case Study — 05
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 800, letterSpacing: -3, lineHeight: .93, color: white, marginBottom: 32 }}>
              Volta<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Brand</em><br />Film
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: muted, maxWidth: 460 }}>A 90-second brand film, full motion identity, and social reel pack for an EV charging startup launching across West Africa — kinetic, electric, and built for vertical video.</p>
          </div>
          <HeroMeta accent={accent} bg="rgba(5,4,8,.72)" mutedColor={muted} textColor={white}
            items={[{ k: 'Client', v: 'Volta Energy' }, { k: 'Scope', v: 'Film · Motion · Reels' }, { k: 'Year', v: '2025' }, { k: 'Duration', v: '10 Weeks' }]} />
        </div>
      </section>

      <Strip bg={bg} numColor={white} labelColor={muted} ruleBg={rule} accent={accent}
        items={[{ val: '90s', label: 'Brand Film Length' }, { val: '24+', label: 'Social Assets' }, { val: '2.4M', label: 'Views in 30 Days' }, { val: '↑3×', label: 'Investor Enquiries' }]} />

      {/* BRIEF */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}` }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
          <div className="reveal">
            <SLabel text="01 · The Brief" accent={accent} ruleColor={rule} />
            <SH accent={accent} textColor={white}>A launch film that<br />moves as fast as<br />the <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>product.</em></SH>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>Volta Energy had a launch date, a product, and nothing to show at it. They needed a brand film that could play at their investor event, launch across social, and anchor a paid campaign — all in 10 weeks.</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>The brief: high-energy, bold, and unapologetically African. Not a generic EV commercial. Something that felt native to the streets it would charge.</p>
          </div>
          <VBox bg="linear-gradient(135deg,#0c0418,#1e0832)" style={{ aspectRatio: '16/9' }} className="reveal rd2">
            <div style={{ position: 'absolute', width: 56, height: 56, border: `1px solid rgba(200,75,255,.35)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, fontSize: 20, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2 }}>▶</div>
            <span style={{ marginTop: 100, position: 'relative', zIndex: 1, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(200,75,255,.22)' }}>Brand Film — 90s Cut</span>
          </VBox>
        </div>
        <div style={{ marginTop: 56 }} className="reveal">
          {[['Brand Film','90s · 4K · DCI Colour'],['Cut-downs','60s · 30s · 15s · 6s'],['Social Reels','24 assets · 9:16 · 4:5 · 1:1'],['Motion Identity','Logo animation · Lower thirds · Titles'],['Music','Original composition · Licensed sync']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: `1px solid ${rule}`, gap: 24 }}>
              <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: muted }}>{k}</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 600, color: white }}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      <FullImg bg="linear-gradient(135deg,#0c0418,#1e0832,#0c0418)" gridColor="rgba(200,75,255,.04)" label="Hero frame — replace with film still or render" />

      {/* SCENE BREAKDOWN */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="02 · Scene Breakdown" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 560 }}>Every second<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>earned.</em></SH>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3px] mt-12">
          {[['0:00 – 0:08','The Problem','Montage · City · Night','linear-gradient(135deg,#0c0418,#1e0832)'],['0:08 – 0:24','The Shift','Product reveal · Motion ID','linear-gradient(135deg,#0a0818,#12102a)'],['0:24 – 0:64','The World','Street footage · Interviews','linear-gradient(135deg,#050408,#0a0810)'],['0:64 – 1:30','The Call','CTA · Logo lock-up','linear-gradient(135deg,#0c0418,#1e0832)']].map(([time, title, sub, bg2], i) => (
            <div key={title} className={`sc reveal rd${i + 1}`} style={{ background: card, overflow: 'hidden', cursor: 'none' }}>
              <div style={{ height: 120, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg2 }}>
                <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(200,75,255,.22)' }}>Scene 0{i + 1}</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 9, letterSpacing: 3, color: accent, marginBottom: 6, fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{time}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700, color: white, marginBottom: 6 }}>{title}</div>
                <span style={{ fontSize: 11, letterSpacing: 2, color: muted }}>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE GRIDS */}
      <section style={{ paddingTop: 3, borderBottom: `1px solid ${rule}` }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[3px] mb-[3px]">
          <VBox bg="linear-gradient(135deg,#0c0418,#1e0832)" style={{ aspectRatio: '16/10' }}>
            <div style={{ position: 'absolute', width: 44, height: 44, border: `1px solid rgba(200,75,255,.35)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, fontSize: 16, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2 }}>▶</div>
            <span style={{ marginTop: 80, position: 'relative', zIndex: 1, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(200,75,255,.22)' }}>Film Still — Scene 03</span>
          </VBox>
          <div className="grid gap-[3px]">
            <VBox bg="linear-gradient(135deg,#0a0818,#12102a)" label="Motion ID — Logo Sting" style={{ flex: 1, minHeight: 200 }} />
            <VBox bg="linear-gradient(135deg,#050408,#0a0810)" label="Lower Third — Style" style={{ flex: 1, minHeight: 200 }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
          <VBox bg="linear-gradient(135deg,#0a0818,#12102a)" label="Reel Cut — 9:16" style={{ aspectRatio: '9/16', maxHeight: 420 }} />
          <div className="grid gap-[3px]">
            <VBox bg="linear-gradient(135deg,#050408,#0a0810)" label="Reel Cut — 1:1" style={{ flex: 1, minHeight: 200 }} />
            <VBox bg="linear-gradient(135deg,#0c0418,#1e0832)" label="Story Format — 4:5" style={{ flex: 1, minHeight: 200 }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: card }}>
        <SLabel text="03 · Process" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 540 }}>10 weeks from<br />brief to <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>premiere.</em></SH>
        <ProcessGrid accent={accent} bg={bg} textColor={white} mutedColor={muted} ruleBg={rule}
          steps={[
            { num: '01', title: 'Creative Development', body: 'Script, storyboard, animatic, and music brief. Three creative territories presented. "Current" direction selected for raw energy and authenticity.', connector: true },
            { num: '02', title: 'Production', body: '3-day shoot across Accra and Lagos. friflow directed; local DPs and production teams. 6TB of raw footage captured.', connector: true },
            { num: '03', title: 'Post & Motion Design', body: 'Colour grade, sound design, motion graphics integration, and three rounds of review. All cut-downs and social formats produced simultaneously.', connector: true },
            { num: '04', title: 'Delivery & Launch', body: 'Master files, all social formats, motion identity kit, and a launch strategy for the investor event and paid social rollout.', connector: false },
          ]} />
      </section>

      <PullQuote accent={accent} bgColor={accent} textColor={bg} text={`"People at the investor event thought we'd been operating for years. The film made Volta feel inevitable — and that changed every conversation in the room."`} author="Kofi Asante — CEO, Volta Energy" />

      {/* DELIVERABLES */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="04 · Deliverables" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 480 }}>Everything in the <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>pack.</em></SH>
        <DelGrid accent={accent} bg={charcoal} hoverBg={accent} textColor={white} mutedColor={muted}
          items={[
            { icon: '◎', title: 'Brand Film — 90s', desc: '4K master, DCI colour grade, original music composition, and full stereo sound design.' },
            { icon: '◻', title: 'Cut-downs', desc: '60s, 30s, 15s, and 6s versions — each individually paced and mixed, not just trims.' },
            { icon: '◈', title: '24 Social Reels', desc: '9:16, 4:5, and 1:1 formats for Instagram, TikTok, YouTube Shorts, and LinkedIn.' },
            { icon: '▲', title: 'Motion Identity Kit', desc: 'Logo sting, lower thirds, title cards, transition elements, and an After Effects template.' },
            { icon: '⬡', title: 'Raw Footage Archive', desc: 'All approved selects organised, labelled, and delivered via cloud. 6TB total.' },
            { icon: '✦', title: 'Launch Deck', desc: 'A one-pager breakdown of every asset, format, usage recommendation, and platform spec.' },
          ]} />
      </section>

      {/* RESULTS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}` }}>
        <SLabel text="05 · Results" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 500 }}>The film that <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>launched</em> a company.</SH>
        <ResGrid accent={accent} bg={mid} numColor={white} mutedColor={muted} ruleBg={rule}
          items={[
            { num: '2.4M', label: 'Views in 30 Days', desc: 'Organic reach across Instagram, TikTok, and YouTube in the first month — zero paid spend.' },
            { num: '3×', label: 'Investor Enquiries', desc: 'Investor outreach tripled following the premiere. Two term sheets arrived within 6 weeks of launch.' },
            { num: '24+', label: 'Press Features', desc: 'The brand film was featured in 24 African tech and business publications as an example of local creative excellence.' },
          ]} />
      </section>

      <NextProject title="Aurore *Beauty* Rebrand" cat="Packaging Design · Brand Identity" accent={accent} bg={mid} hoverBg={card} textColor={white} mutedColor={muted} href="/case-studies/brand-identity" />
      <CsFooter accentColor={accent} bgColor={bg} ruleColor={rule} textColor={white} mutedColor={muted} copyOpacity="rgba(240,238,255,.15)" />
    </div>
  )
}
