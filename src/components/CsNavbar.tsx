import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FriflowLogo from './FriflowLogo'

interface CsNavbarProps {
  accentColor: string
  bgScrolled?: string
  textColor?: string
  mutedColor?: string
  ctaTextColor?: string
}

export default function CsNavbar({
  accentColor,
  bgScrolled,
  textColor = '#F5F0E8',
  mutedColor = 'rgba(245,240,232,0.4)',
  ctaTextColor = '#080808',
}: CsNavbarProps) {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-14 flex items-center justify-between transition-all duration-400"
      style={{
        padding: '28px 56px',
        background: scrolled ? (bgScrolled || 'rgba(8,8,8,.94)') : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="flex items-center gap-3 no-underline cursor-none">
        <FriflowLogo color={accentColor} width={32} height={26} />
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 20, letterSpacing: 1, color: textColor }}>friflow</span>
      </a>
      <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="cursor-none no-underline flex items-center gap-2.5 transition-colors duration-300"
        style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor }}
        onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
        onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
      >
        <span className="nav-back-line" />
        All Work
      </a>
      <a href="mailto:hello@friflow.studio"
        className="cursor-none no-underline font-medium transition-colors duration-300"
        style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: ctaTextColor, background: accentColor, padding: '10px 24px' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F5F0E8'; e.currentTarget.style.color = '#080808' }}
        onMouseLeave={e => { e.currentTarget.style.background = accentColor; e.currentTarget.style.color = ctaTextColor }}
      >Start a Project</a>
    </nav>
  )
}
