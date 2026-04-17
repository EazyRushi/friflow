import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'
import { useCsReveal, Strip, SLabel, SH, PullQuote, ProcessGrid, DelGrid, ResGrid, NextProject, FullImg } from '../layouts/CaseStudyLayout'

const accent = '#008080' // Teal for EazyTaxes
const bg = '#F5F5F5' // Light grey/white
const mid = '#E8E8E8'
const card = '#FFFFFF'
const deep = '#111010'
const muted = 'rgba(17,16,16,0.5)'
const rule = 'rgba(17,16,16,0.1)'
const invBg = '#111010'
const invMuted = 'rgba(245,240,232,0.4)'
const invRule = 'rgba(245,240,232,0.08)'

export default function EazyTaxesBrand() {
  useCsReveal()

  return (
    <div style={{ background: bg, color: deep, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none' }}>
      <CustomCursor accentColor={accent} ringBorder="rgba(0,128,128,.45)" ringBorderHov={accent} />
      <CsNavbar accentColor={accent} bgScrolled="rgba(17,16,16,.94)" textColor="#F5F0E8" mutedColor={invMuted} ctaTextColor="#fff" />

      {/* HERO */}
      <section className="relative px-6 md:px-14 min-h-screen flex flex-col justify-center pb-16 md:pb-24 pt-24" style={{ background: invBg, overflow: 'hidden' }}>
        {/* Backgrounds */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,#001a1a,#003333,#004d4d,#111010)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(17,16,16,.2) 0%,transparent 35%,transparent 55%,rgba(17,16,16,.95) 100%)' }} />
        <div className="hero-halftone" style={{ position: 'absolute', inset: 0, opacity: .3 }} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative z-10 w-full max-w-[1400px] mx-auto pt-10 md:pt-4">

          {/* Left Column (1-7) Main Content */}
          <div className="md:col-start-1 md:col-span-7 flex flex-col justify-end">
            <div className="reveal">
              {/* Tag aligned with headline */}
              <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, marginBottom: 32, display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ width: 8, height: 8, background: accent, borderRadius: '50%' }} />
                Brand Identity
              </div>

              {/* Headline Stack */}
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(56px, 8vw, 112px)', fontWeight: 800, letterSpacing: -3, lineHeight: .95, color: '#F5F0E8', marginBottom: 24, display: 'flex', flexDirection: 'column' }}>
                <span className="block">EazyTaxes</span>
                <span className="block" style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Brand Evolution</span>
              </h1>

              {/* Subtext */}
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(245,240,232,0.7)', maxWidth: 560, marginBottom: 48 }}>
                A comprehensive visual system for a modern tax advisory firm, balancing architectural precision with immediate, accessible authority.
              </p>

              {/* Minimal CTA */}
              <a href="#overview" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) }}
                className="flex items-center gap-4 cursor-none transition-opacity duration-300 hover:opacity-70" style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#F5F0E8', textDecoration: 'none' }}>
                <span style={{ width: 32, height: 1, background: '#F5F0E8', opacity: 0.3 }} />
                View Case Study <span style={{ color: accent }}>↓</span>
              </a>
            </div>
          </div>

          {/* Right Column (8-12) Meta Content */}
          <div className="md:col-start-9 md:col-span-4 flex flex-col justify-end md:mb-4">
            <div className="reveal rd2" style={{ borderLeft: `1px solid ${invRule}`, paddingLeft: 32, opacity: 0.7 }}>
              <div className="flex flex-col gap-8">
                {[
                  { k: 'Client', v: 'EazyTaxes Inc.' },
                  { k: 'Scope', v: 'Identity · Strategy' },
                  { k: 'Duration', v: '12 Weeks' },
                  { k: 'Year', v: '2025' }
                ].map(item => (
                  <div key={item.k}>
                    <div style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: invMuted, marginBottom: 6 }}>{item.k}</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 600, color: '#F5F0E8' }}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Strip bg={bg} numColor={deep} labelColor={muted} ruleBg={rule} accent={accent}
        items={[{ val: '250+', label: 'Design Assets' }, { val: '60pg', label: 'Brand Guidelines' }, { val: '↑45%', label: 'Trust Index' }, { val: 'Global', label: 'Standard' }]} />

      {/* BRIEF */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
          <div className="reveal">
            <SLabel text="01 · The Brief" accent={accent} ruleColor={rule} />
            <SH accent={accent} textColor={deep}>Precision in<br />every <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>pixel.</em></SH>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted, marginBottom: 20 }}>EazyTaxes handles complex cross-border tax compliance. Their previous identity felt purely transactional. The goal was to pivot towards a "Financial Architect" persona — authoritative yet accessible.</p>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: muted }}>We needed to create a system that works as well on a legal document as it does on a dynamic digital platform, ensuring consistency across three global offices.</p>
          </div>
          <div className="reveal rd2 overflow-hidden" style={{ aspectRatio: '4/3', border: `1px solid ${rule}` }}>
            <img src="/work/work1.jpeg" alt="Logo evolution" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <FullImg bg="#003D3D" gridColor="rgba(255,255,255,.03)" label="Brand Strategy & Core Values" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <img src="/work/work2.jpeg" alt="Brand Presentation" style={{ maxWidth: '90%', height: 'auto', boxShadow: '0 40px 100px rgba(0,0,0,.4)' }} className="rd2" />
      </FullImg>

      {/* LOGO SYSTEM */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="02 · Logo System" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 560 }}>Built on<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>precision.</em></SH>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 36 }}>The mark uses a clean, architectural typeface paired with a symbol that represents upward growth and structural integrity. The teal-to-white palette ensures high legibility and a sense of calm reliability.</p>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
          <div style={{ background: '#fff', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
            <img src="/work/work1.jpeg" alt="Primary Logo" style={{ maxWidth: '70%', height: 'auto' }} />
          </div>
          <div style={{ background: '#003333', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
            <img src="/work/work1.jpeg" alt="Inverse Logo" style={{ maxWidth: '70%', height: 'auto', filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </section>

      {/* VISUAL LANGUAGE */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="03 · Collateral" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 560 }}>Consistency at<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>scale.</em></SH>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.9, color: muted, maxWidth: 560, marginBottom: 36 }}>From stationery to complex pitch decks, the visual language remains consistent. We developed a set of modular templates that allow the team to generate high-quality documents that always feel on-brand.</p>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[3px]">
          <div style={{ background: '#fff', padding: 3 }}>
            <img src="/work/work3.jpeg" alt="Stationery Suite" style={{ width: '100%', height: 'auto' }} className="rd2" />
          </div>
          <div style={{ background: '#fff', padding: 3 }}>
            <img src="/work/work4.jpeg" alt="Pitch Templates" style={{ width: '100%', height: 'auto' }} className="rd2" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="04 · Process" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 540 }}>Designing for<br /><em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>trust.</em></SH>
        <ProcessGrid accent={accent} bg={bg} textColor={deep} mutedColor={muted} ruleBg={rule}
          steps={[
            { num: '01', title: 'Audit & Analysis', body: 'Examining the competitive landscape of tax advisory firms. We identified a sea of boring blue and grey, opting for a distinctive teal to stand out.', connector: true },
            { num: '02', title: 'Visual DNA', body: 'Defining the structural rules. We established a grid-based system for marketing assets that mirrors the meticulous nature of tax work.', connector: true },
            { num: '03', title: 'Asset Creation', body: 'Developing the full suite of collateral — from digital signatures to 60-page presentation decks using the new visual language.', connector: true },
            { num: '04', title: 'Implementation', body: 'Rollout across email systems, social media, and physical stationery. Providing the team with a toolkit for future growth.', connector: false },
          ]} />
      </section>

      <PullQuote accent={accent} bgColor="#004d4d" textColor="#F5F0E8" text={`"The new identity perfectly captures our architectural approach to tax compliance. It's clean, precise, and immediately communicates the level of excellence we strive for."`} author="Nikunj Bagmar — CEO, EazyTaxes Inc." />

      {/* DELIVERABLES */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: mid }}>
        <SLabel text="05 · Deliverables" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 480 }}>The Identity <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Toolbox.</em></SH>
        <DelGrid accent={accent} bg={card} hoverBg={accent} textColor={deep} mutedColor={muted}
          items={[
            { icon: '◎', title: 'Brand Mark', desc: 'Full logo system with horizontal and stacked variants in all file formats.' },
            { icon: '◻', title: 'Stationery Suite', desc: 'Letterheads, envelopes, and business cards designed for premium stock.' },
            { icon: '◈', title: 'Digital Templates', desc: 'Standardized pitch decks, report covers, and client presentation slides.' },
            { icon: '▲', title: 'Guidelines', desc: 'A 60-page master document detailing spacing, color, and typography rules.' },
            { icon: '⬡', title: 'Email Identity', desc: 'Custom HTML email signatures and standardized header systems.' },
            { icon: '✦', title: 'Social Toolkit', desc: 'Banners, profile images, and post templates for LinkedIn and Twitter.' },
          ]} />
      </section>

      {/* RESULTS */}
      <section className="px-6 py-14 md:px-14 md:py-24" style={{ borderBottom: `1px solid ${rule}`, background: bg }}>
        <SLabel text="06 · Results" accent={accent} ruleColor={rule} />
        <SH accent={accent} textColor={deep} style={{ maxWidth: 500 }}>Measured <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: accent }}>Impact.</em></SH>
        <ResGrid accent={accent} bg={mid} numColor={deep} mutedColor={muted} ruleBg={rule}
          items={[
            { num: '↑45%', label: 'Trust Index', desc: 'Customer surveys showed a 45% increase in perceived brand authority and trust post-launch.' },
            { num: '100%', label: 'Consistency', desc: 'Internal audits confirm 100% adherence to guidelines across all global client touchpoints.' },
            { num: '2025', label: 'Launch Year', desc: 'Successfully deployed across North American and International markets in Q1.' },
          ]} />
      </section>

      <NextProject title="Aurore *Beauty* Rebrand" cat="Packaging · Brand Identity" accent={accent} bg={invBg} hoverBg="#001a1a" textColor="#F5F0E8" mutedColor={invMuted} href="/case-studies/brand-identity" />
      <CsFooter accentColor={accent} bgColor={invBg} ruleColor={invRule} textColor="#F5F0E8" mutedColor={invMuted} copyOpacity="rgba(245,240,232,.18)" />
    </div>
  )
}
