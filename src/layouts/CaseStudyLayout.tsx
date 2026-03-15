import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useCsReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: .12 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const SPECIAL = ['+','%','×','k','M','s','w','★','↑','↓','−','*']
function StripNum({ val, accent }: { val: string; accent: string }) {
  return (
    <>
      {val.split('').map((ch, i) =>
        SPECIAL.includes(ch)
          ? <em key={i} style={{ color: accent, fontStyle: 'normal' }}>{ch}</em>
          : <span key={i}>{ch}</span>
      )}
    </>
  )
}

/* ── Strip ── */
interface StripItem { val: string; label: string }
export function Strip({ items, bg, numColor, labelColor, ruleBg, accent }: { items: StripItem[]; bg: string; numColor: string; labelColor: string; ruleBg: string; accent: string }) {
  const hoverBg = bg === '#080808' ? '#111111' : bg === '#050408' ? '#0A0810' : '#E0D9CC'
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]" style={{ background: ruleBg }}>
      {items.map((item, i) => (
        <div key={i} className={`strip-item reveal rd${i}`}
          style={{ background: bg, padding: '28px 24px', transition: 'background .3s', cursor: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.background = hoverBg)}
          onMouseLeave={e => (e.currentTarget.style.background = bg)}
        >
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1, marginBottom: 8, color: numColor }}>
            <StripNum val={item.val} accent={accent} />
          </div>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: labelColor }}>{item.label}</div>
        </div>
      ))}
    </div>
  )
}

/* ── SLabel ── */
interface SLabelProps { text: string; accent: string; ruleColor: string }
export function SLabel({ text, accent, ruleColor }: SLabelProps) {
  return (
    <div className="flex items-center gap-3.5" style={{ fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase', color: accent, marginBottom: 32 }}>
      {text}
      <span style={{ flex: 1, height: 1, background: ruleColor }} />
    </div>
  )
}

/* ── SH ── */
interface SHProps { children: React.ReactNode; accent: string; textColor: string; style?: React.CSSProperties }
export function SH({ children, textColor, style }: SHProps) {
  return (
    <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,48px)', letterSpacing: -1.5, lineHeight: 1, marginBottom: 24, color: textColor, ...style }}>
      {children}
    </h2>
  )
}

/* ── PullQuote ── */
export function PullQuote({ text, author, accent, bgColor = '#FF6B35', textColor = '#080808' }: { text: string; author: string; accent: string; bgColor?: string; textColor?: string }) {
  void accent
  return (
    <div className="reveal px-6 py-12 md:px-14 md:py-16" style={{ background: bgColor, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -48, left: 24, fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(120px,20vw,300px)', color: 'rgba(255,255,255,.12)', lineHeight: 1, pointerEvents: 'none' }}>"</div>
      <p style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: 'clamp(18px,3vw,38px)', lineHeight: 1.4, color: textColor, maxWidth: 800, position: 'relative', zIndex: 1, marginBottom: 28 }}>{text}</p>
      <p className="flex items-center gap-4" style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: `${textColor}80`, position: 'relative', zIndex: 1, fontFamily: 'DM Sans, sans-serif' }}>
        <span style={{ width: 28, height: 1, background: `${textColor}50`, flexShrink: 0 }} />
        {author}
      </p>
    </div>
  )
}

/* ── ProcessGrid ── */
interface ProcStep { num: string; title: string; body: string; connector: boolean }
export function ProcessGrid({ steps, bg, textColor, mutedColor, accent, ruleBg }: { steps: ProcStep[]; bg: string; textColor: string; mutedColor: string; accent: string; ruleBg: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] mt-10 md:mt-14" style={{ background: ruleBg }}>
      {steps.map((s, i) => (
        <div key={s.num} className={`reveal rd${i + 1}`} style={{ background: bg, padding: '32px 24px', position: 'relative' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 3, color: accent, marginBottom: 20, display: 'block' }}>{s.num}</span>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, fontWeight: 700, color: textColor, marginBottom: 10 }}>{s.title}</div>
          <p style={{ fontSize: 12, lineHeight: 1.8, color: mutedColor }}>{s.body}</p>
          {s.connector && <div style={{ position: 'absolute', top: 52, right: -1, width: 2, height: 20, background: accent, zIndex: 2 }} />}
        </div>
      ))}
    </div>
  )
}

/* ── DelGrid ── */
interface DelItem { icon: string; title: string; desc: string }
export function DelGrid({ items, bg, hoverBg, textColor, mutedColor, accent }: { items: DelItem[]; bg: string; hoverBg: string; textColor: string; mutedColor: string; accent: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] mt-10 md:mt-12">
      {items.map((d, i) => (
        <div key={i} className={`del reveal rd${(i % 3) + 1} cursor-none`}
          style={{ background: bg, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 10, transition: 'background .3s' }}
          onMouseEnter={e => { e.currentTarget.style.background = hoverBg; e.currentTarget.querySelectorAll('.del-icon,.del-t,.del-d').forEach((el: Element) => (el as HTMLElement).style.color = '#080808') }}
          onMouseLeave={e => { e.currentTarget.style.background = bg; e.currentTarget.querySelectorAll('.del-icon,.del-t,.del-d').forEach((el: Element) => { const el2 = el as HTMLElement; if (el2.classList.contains('del-icon')) el2.style.color = accent; else if (el2.classList.contains('del-t')) el2.style.color = textColor; else el2.style.color = mutedColor }) }}
        >
          <span className="del-icon" style={{ fontSize: 24, color: accent, transition: 'color .3s' }}>{d.icon}</span>
          <div className="del-t" style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700, color: textColor, transition: 'color .3s' }}>{d.title}</div>
          <p className="del-d" style={{ fontSize: 12, lineHeight: 1.75, color: mutedColor, transition: 'color .3s' }}>{d.desc}</p>
        </div>
      ))}
    </div>
  )
}

/* ── ResGrid ── */
interface ResItem { num: string; label: string; desc: string }
export function ResGrid({ items, bg, numColor, mutedColor, accent, ruleBg }: { items: ResItem[]; bg: string; numColor: string; mutedColor: string; accent: string; ruleBg: string }) {
  void ruleBg
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px] mt-10 md:mt-12">
      {items.map((r, i) => (
        <div key={i} className={`rc reveal rd${i + 1}`} style={{ background: bg, padding: '32px 24px', borderTop: `2px solid ${accent}` }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px,5vw,52px)', fontWeight: 800, letterSpacing: -2, color: numColor, lineHeight: 1, marginBottom: 8 }}>
            <StripNum val={r.num} accent={accent} />
          </div>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor, marginBottom: 10 }}>{r.label}</div>
          <p style={{ fontSize: 12, lineHeight: 1.75, color: mutedColor }}>{r.desc}</p>
        </div>
      ))}
    </div>
  )
}

/* ── NextProject ── */
export function NextProject({ title: rawTitle, cat, accent, bg, hoverBg, textColor, mutedColor, href = '/' }: { title: string; cat: string; accent: string; bg: string; hoverBg: string; textColor: string; mutedColor: string; href?: string }) {
  const navigate = useNavigate()
  return (
    <a href={href} onClick={e => { e.preventDefault(); navigate(href) }} className="next-link cursor-none no-underline transition-colors duration-400 flex items-center justify-between gap-6 px-6 py-14 md:px-14 md:py-20"
      style={{ background: bg, borderTop: `1px solid rgba(245,240,232,.07)` }}
      onMouseEnter={e => (e.currentTarget.style.background = hoverBg)}
      onMouseLeave={e => (e.currentTarget.style.background = bg)}
    >
      <div>
        <p style={{ fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: mutedColor, marginBottom: 12 }}>Next Project</p>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(24px,4vw,54px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: .95, color: textColor, marginBottom: 10 }}>
          {rawTitle.split(/\*([^*]+)\*/).map((part, i) =>
            i % 2 === 1
              ? <em key={i} style={{ color: accent, fontStyle: 'normal' }}>{part}</em>
              : <span key={i}>{part}</span>
          )}
        </div>
        <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor }}>{cat}</p>
      </div>
      <div className="np-arrow flex-shrink-0" style={{ width: 48, height: 48, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: bg }}>→</div>
    </a>
  )
}

/* ── VBox ── */
export function VBox({ bg, label, subLabel, style, className, children }: { bg: string; label?: string; subLabel?: string; style?: React.CSSProperties; className?: string; children?: React.ReactNode }) {
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, ...style }}>
      {children}
      {label && <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(245,240,232,.2)', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>{label}</span>}
      {subLabel && <span style={{ position: 'absolute', bottom: 16, left: 20, fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(245,240,232,.14)', fontFamily: 'DM Sans, sans-serif' }}>{subLabel}</span>}
    </div>
  )
}

/* ── FullImg ── */
export function FullImg({ bg, gridColor, label }: { bg: string; gridColor: string; label: string }) {
  return (
    <div className="reveal" style={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: bg }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${gridColor} 1px,transparent 1px),linear-gradient(90deg,${gridColor} 1px,transparent 1px)`, backgroundSize: '64px 64px' }} />
      <span style={{ position: 'relative', zIndex: 1, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: 'rgba(245,240,232,.18)', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', padding: '0 16px' }}>{label}</span>
    </div>
  )
}

/* ── HeroMeta ── */
interface HeroMetaItem { k: string; v: string }
export function HeroMeta({ items, bg, accent, mutedColor, textColor }: { items: HeroMetaItem[]; bg: string; accent: string; mutedColor: string; textColor: string }) {
  return (
    <>
      {/* Mobile: horizontal scrollable strip */}
      <div className="flex md:hidden gap-[3px] overflow-x-auto pb-1 -mx-6 px-6" style={{ scrollbarWidth: 'none' }}>
        {items.map(item => (
          <div key={item.k} style={{ background: bg, backdropFilter: 'blur(12px)', padding: '10px 14px', borderLeft: `2px solid ${accent}`, flexShrink: 0 }}>
            <div style={{ fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: mutedColor, marginBottom: 3 }}>{item.k}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 12, fontWeight: 600, color: textColor, whiteSpace: 'nowrap' }}>{item.v}</div>
          </div>
        ))}
      </div>
      {/* Desktop: vertical stack */}
      <div className="hidden md:flex flex-col gap-[3px]" style={{ minWidth: 220 }}>
        {items.map(item => (
          <div key={item.k} style={{ background: bg, backdropFilter: 'blur(12px)', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20, borderLeft: `2px solid ${accent}` }}>
            <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor }}>{item.k}</span>
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 600, color: textColor, textAlign: 'right' }}>{item.v}</span>
          </div>
        ))}
      </div>
    </>
  )
}
