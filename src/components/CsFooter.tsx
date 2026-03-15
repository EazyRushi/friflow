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
    <footer style={{ background: bgColor, padding: '56px 56px 40px', borderTop: `1px solid ${ruleColor}` }}>
      <div className="flex items-center justify-between" style={{ paddingBottom: 40, marginBottom: 32, borderBottom: `1px solid ${ruleColor}` }}>
        <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="flex items-center gap-3 no-underline cursor-none">
          <FriflowLogo color={accentColor} width={32} height={26} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 22, letterSpacing: 1, color: textColor }}>friflow</span>
        </a>
        <div className="flex gap-8">
          {navLinks.map(([hash, label]) => (
            <a key={label} href={`/${hash}`} onClick={goHome(hash)} className="cursor-none no-underline transition-colors duration-200"
              style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor }}
              onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
            >{label}</a>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <p style={{ fontSize: 11, color: copyOpacity, letterSpacing: 1 }}>© 2025 friflow design studio.</p>
        <a href="mailto:hello@friflow.studio" className="no-underline cursor-none" style={{ fontSize: 11, color: copyOpacity, letterSpacing: 1 }}
          onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={e => (e.currentTarget.style.color = copyOpacity)}
        >hello@friflow.studio</a>
      </div>
    </footer>
  )
}
