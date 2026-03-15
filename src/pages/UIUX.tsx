import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'
import { useCsReveal, Strip, SLabel, SH, PullQuote, ProcessGrid, DelGrid, ResGrid, NextProject, VBox, FullImg, HeroMeta } from '../layouts/CaseStudyLayout'

const accent = '#4FFFB0'
const bg = '#06080F'
const mid = '#0C0F1A'
const card = '#111420'
const charcoal = '#181C28'
const white = '#EEF2FF'
const muted = 'rgba(180,188,219,0.45)'
const rule = 'rgba(180,188,219,0.07)'

export default function UIUX() {
  useCsReveal()

  return (
    <div style={{ background: bg, color: white, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={accent} ringBorder="rgba(79,255,176,.4)" ringBorderHov={accent} />
      <CsNavbar accentColor={accent} bgScrolled="rgba(6,8,15,.94)" textColor={white} mutedColor={muted} ctaTextColor={bg} />

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr auto', padding: '0 56px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 60% 40%,#0a1a2e 0%,#060810 60%,#06080f 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(6,8,15,.2) 0%,transparent 35%,transparent 55%,rgba(6,8,15,.95) 100%)', zIndex: 1 }} />
        <div className="hero-scanlines" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        {/* UI Chrome decoration */}
        <div className="hero-chrome" style={{ zIndex: 1 }}>
          <div style={{ position: 'absolute', top: 22, left: 24, display: 'flex', gap: 7 }}>
            {['rgba(79,255,176,.5)','rgba(79,255,176,.25)','rgba(79,255,176,.1)'].map((c, i) => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{ position: 'absolute', top: 60, left: 16, right: 16, bottom: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <div style={{ background: 'rgba(79,255,176,.04)', border: '1px solid rgba(79,255,176,.06)', gridRow: 'span 2' }} />
            <div style={{ background: 'rgba(79,255,176,.04)', border: '1px solid rgba(79,255,176,.06)' }} />
            <div style={{ background: 'rgba(79,255,176,.04)', border: '1px solid rgba(79,255,176,.06)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: 140, position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, border: `1px solid rgba(79,255,176,.3)`, padding: '10px 20px' }}>◎ &nbsp;UI / UX Design</div>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: muted, border: `1px solid ${rule}`, padding: '10px 20px' }}>2025</div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 64 }}>
          <div>
            <p className="flex items-center gap-4" style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: muted, marginBottom: 20 }}>
              <span style={{ width: 32, height: 1, background: accent, flexShrink: 0 }} />Case Study — 04
            </p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 800, letterSpacing: -3, lineHeight: .93, color: white, marginBottom: 32 }}>
              Cipher<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Finance</em><br />Platform
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: muted, maxWidth: 460 }}>Redesigning a complex B2B financial dashboard into a system that reduces cognitive load, speeds decisions, and doesn't make accountants want to quit.</p>
          </div>
          <HeroMeta accent={accent} bg="rgba(6,8,15,.72)" mutedColor={muted} textColor={white}
            items={[{ k: 'Client', v: 'Cipher Financial' }, { k: 'Scope', v: 'UI · UX · Design System' }, { k: 'Year', v: '2025' }, { k: 'Duration', v: '16 Weeks' }]} />
        </div>
      </section>

      <Strip bg={bg} numColor={white} labelColor={muted} ruleBg={rule} accent={accent}
        items={[{ val: '−42%', label: 'Task Completion Time' }, { val: '94', label: 'SUS Score' }, { val: '380+', label: 'Components Built' }, { val: '↓68%', label: 'Support Tickets' }]} />

      {/* PROBLEM */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }}>
          <div className="reveal">
            <SLabel text="01 · The Problem" accent={accent} ruleColor={rule} />
            <SH accent={accent} textColor={white}>A powerful tool<br />nobody could <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>use.</em></SH>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>Cipher's platform processed millions in transactions daily. It also had a 68% error rate on routine tasks and a 4-week onboarding time for new users.</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>The system had grown by accretion — features bolted on, never reconsidered. Every new capability made the existing ones harder to find. The product worked. The experience was broken.</p>
          </div>
          <VBox bg="linear-gradient(135deg,#080c18,#0c1428)" style={{ aspectRatio: '4/3' }} className="reveal rd2">
            <div style={{ position: 'absolute', inset: 20, border: '1px solid rgba(79,255,176,.08)', background: 'rgba(79,255,176,.02)' }}>
              <div style={{ height: 24, background: 'rgba(79,255,176,.05)', borderBottom: '1px solid rgba(79,255,176,.06)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6 }}>
                {[.3,.25,.1].map((o, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: `rgba(79,255,176,${o})` }} />)}
              </div>
              <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[80,60,40,80,60].map((w, i) => <div key={i} style={{ height: 8, background: 'rgba(79,255,176,.06)', borderRadius: 2, width: `${w}%` }} />)}
              </div>
            </div>
            <span style={{ position: 'relative', zIndex: 1, marginTop: 120, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(79,255,176,.2)' }}>Before State — Legacy UI</span>
          </VBox>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3, marginTop: 56 }}>
          {[['68%','Error Rate','Of users made at least one critical input error per session before the redesign.'],['4w','Avg. Onboarding','New users required 4 weeks of training before operating independently on core tasks.'],['32','User Interviews','We spoke with accountants, CFOs, and data analysts across 8 client companies.']].map(([stat, label, desc], i) => (
            <div key={label} className={`rg-card reveal rd${i + 1}`} style={{ background: card, padding: '32px 28px', borderTop: `2px solid ${accent}` }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: -1.5, color: white, marginBottom: 8 }}>
                {stat.split('').map((ch, ci) =>
                  ['%','w','+','×','k','M','s','★','↑','↓','−'].includes(ch)
                    ? <em key={ci} style={{ color: accent, fontStyle: 'normal' }}>{ch}</em>
                    : <span key={ci}>{ch}</span>
                )}
              </div>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: muted, marginBottom: 10 }}>{label}</div>
              <p style={{ fontSize: 12, lineHeight: 1.8, color: muted }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FullImg bg="linear-gradient(135deg,#040810,#0a1428,#040810)" gridColor="rgba(79,255,176,.04)" label="Full platform overview — replace with dashboard screenshot" />

      {/* PROCESS */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="02 · Process" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 560 }}>Research first.<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Always.</em></SH>
        <ProcessGrid accent={accent} bg={bg} textColor={white} mutedColor={muted} ruleBg={rule}
          steps={[
            { num: '01', title: 'Discovery Sprint', body: '32 user interviews, task analysis, and heuristic evaluation. Journey maps built for all 5 user archetypes. Problem hierarchy established.', connector: true },
            { num: '02', title: 'IA & Wireframes', body: 'Information architecture rebuilt from zero. Card sorting with 40 users. Low-fidelity wireframes tested in 3 rounds before any visual design began.', connector: true },
            { num: '03', title: 'Design System', body: '380+ component library built in Figma. Tokens, variants, states, and accessibility annotations for every element. Dev handoff in Storybook.', connector: true },
            { num: '04', title: 'Usability Testing', body: '5 rounds of moderated usability testing. SUS scores tracked across each iteration. Final round with 24 real users in real environments.', connector: false },
          ]} />
      </section>

      {/* USER FLOW */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: card }}>
        <SLabel text="03 · User Flow Redesign" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 540 }}>From 11 steps<br />to <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>3.</em></SH>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 0 }}>The most common task — reconciling a batch transaction — required 11 steps across 4 screens in the old system. The redesigned flow completes in 3 steps on one screen.</p>
        <div className="reveal flex overflow-x-auto pb-2" style={{ marginTop: 48, gap: 0 }}>
          {[['Step 01','Upload','Drag CSV or connect bank feed directly'],['Step 02','Review','AI flags anomalies — one-click resolution'],['Step 03','Confirm','Batch approve and export. Done.']].map(([num, title, body], i) => (
            <div key={num} className="flex items-center">
              <div className="flow-step cursor-none" style={{ background: card, padding: '24px 28px', flexShrink: 0, minWidth: 160 }}>
                <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: accent, marginBottom: 10, fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{num}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700, color: white, marginBottom: 6 }}>{title}</div>
                <p style={{ fontSize: 11, lineHeight: 1.65, color: muted }}>{body}</p>
              </div>
              {i < 2 && <span style={{ color: accent, fontSize: 18, padding: '0 8px', flexShrink: 0, opacity: .5 }}>→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE GRIDS */}
      <section style={{ padding: '3px 0 0', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 3, marginBottom: 3 }}>
          <VBox bg="linear-gradient(135deg,#080c18,#0c1428)" style={{ aspectRatio: '16/10' }}>
            <div style={{ position: 'absolute', inset: 16, border: '1px solid rgba(79,255,176,.08)', background: 'rgba(79,255,176,.02)' }}>
              <div style={{ height: 24, background: 'rgba(79,255,176,.05)', borderBottom: '1px solid rgba(79,255,176,.06)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6 }}>
                {[.3,.25].map((o, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: `rgba(79,255,176,${o})` }} />)}
              </div>
              <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[80,60,40,80,60,40].map((w, i) => <div key={i} style={{ height: 8, background: 'rgba(79,255,176,.06)', borderRadius: 2, width: `${w}%` }} />)}
              </div>
            </div>
            <span style={{ position: 'relative', zIndex: 1, marginTop: 100, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(79,255,176,.2)' }}>Dashboard — Main View</span>
          </VBox>
          <div style={{ display: 'grid', gap: 3 }}>
            <VBox bg="linear-gradient(135deg,#0c1020,#141830)" label="Mobile View — Summary" style={{ flex: 1, minHeight: 200 }} />
            <VBox bg="linear-gradient(135deg,#060810,#0a1020)" label="Component Library" style={{ flex: 1, minHeight: 200 }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <VBox bg="linear-gradient(135deg,#060810,#0a1020)" label="Transaction Flow" style={{ aspectRatio: '4/3' }} />
          <VBox bg="linear-gradient(135deg,#0c1020,#141830)" label="Analytics Module" style={{ aspectRatio: '4/3' }} />
        </div>
      </section>

      <PullQuote accent={accent} bgColor={accent} textColor={bg} text={`"Our support team went from firefighting daily to handling one or two tickets a week. The redesign didn't just improve the UX — it changed how the company runs."`} author="James Osei — CTO, Cipher Financial" />

      {/* DELIVERABLES */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="04 · Deliverables" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 480 }}>Everything we <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>built.</em></SH>
        <DelGrid accent={accent} bg={charcoal} hoverBg={accent} textColor={white} mutedColor={muted}
          items={[
            { icon: '◎', title: 'UX Research Report', desc: '32 user interviews, journey maps, task analysis, and a prioritised problem hierarchy.' },
            { icon: '◻', title: 'Information Architecture', desc: 'Full IA redesign, card sorting results, and annotated sitemap with user flow overlays.' },
            { icon: '◈', title: 'Design System — Figma', desc: '380+ components with tokens, variants, states, and accessibility annotations.' },
            { icon: '▲', title: 'High-fidelity Screens', desc: 'All primary flows across desktop and mobile, with interaction notes and edge cases.' },
            { icon: '⬡', title: 'Storybook Handoff', desc: 'Component documentation in Storybook for the engineering team, with code snippets.' },
            { icon: '✦', title: 'Usability Testing Report', desc: '5 rounds documented. SUS scores, task completion rates, and design decisions justified.' },
          ]} />
      </section>

      {/* RESULTS */}
      <section style={{ padding: '96px 56px', borderBottom: `1px solid ${rule}` }}>
        <SLabel text="05 · Results" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={white} style={{ maxWidth: 500 }}>Numbers that <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>matter.</em></SH>
        <ResGrid accent={accent} bg={mid} numColor={white} mutedColor={muted} ruleBg={rule}
          items={[
            { num: '−42%', label: 'Task Completion Time', desc: 'Core task time dropped from an average of 18 minutes to under 11 minutes in the final usability round.' },
            { num: '94', label: 'SUS Score', desc: 'System Usability Scale score of 94 — up from 41 in the baseline audit. Industry average is 68.' },
            { num: '↓68%', label: 'Support Tickets', desc: 'Monthly support ticket volume fell by 68% in the 3 months post-launch. Onboarding reduced from 4 weeks to 3 days.' },
          ]} />
      </section>

      <NextProject title="Volta *Motion* Rebrand" cat="Motion Graphics · Brand Film" accent={accent} bg={mid} hoverBg={card} textColor={white} mutedColor={muted} href="/case-studies/motion-graphics" />
      <CsFooter accentColor={accent} bgColor={bg} ruleColor={rule} textColor={white} mutedColor={muted} copyOpacity="rgba(238,242,255,.15)" />
    </div>
  )
}
