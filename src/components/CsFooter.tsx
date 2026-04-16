import { useNavigate } from 'react-router-dom'
import FriflowLogo from './FriflowLogo'

interface CsFooterProps {
  accentColor: string
  bgColor?: string
  ruleColor?: string
  textColor?: string
  mutedColor?: string
  copyOpacity?: string
}

export default function CsFooter({
  accentColor,
  bgColor = '#080808',
  ruleColor = 'rgba(245,240,232,0.07)',
  textColor = '#F5F0E8',
  mutedColor = 'rgba(245,240,232,0.4)',
  copyOpacity = 'rgba(245,240,232,.18)',
}: CsFooterProps) {
  const navigate = useNavigate()

  const goHome = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const navLinks: [string, string][] = [
    ['#work', 'Work'],
    ['#services', 'Services'],
    ['#about', 'Studio'],
    ['#contact', 'Contact'],
  ]

  return (
    <footer className="px-6 pt-12 pb-8 md:px-14 md:pt-14 md:pb-10" style={{ background: bgColor, borderTop: `1px solid ${ruleColor}` }}>
      {/* Top row — stacks on mobile */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between pb-8 md:pb-10 mb-6 md:mb-8" style={{ borderBottom: `1px solid ${ruleColor}` }}>
        <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="flex items-center gap-3 no-underline cursor-none">
          <FriflowLogo color={accentColor} width={32} height={26} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 22, letterSpacing: 1, color: textColor }}>friflow</span>
        </a>
        {/* Nav links — wrap on small screens */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map(([hash, label]) => (
            <a key={label} href={`/${hash}`} onClick={goHome(hash)} className="cursor-none no-underline transition-colors duration-200"
              style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor }}
              onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
            >{label}</a>
          ))}
        </div>
      </div>

      {/* Bottom row — stacks on mobile */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p style={{ fontSize: 11, color: copyOpacity, letterSpacing: 1 }}>© 2025 friflow design studio.</p>
        <a href="mailto:hello@friflow.studio" className="no-underline cursor-none" style={{ fontSize: 11, color: copyOpacity, letterSpacing: 1 }}
          onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={e => (e.currentTarget.style.color = copyOpacity)}
        >hello@friflow.studio</a>
      </div>
    </footer>
  )
}
