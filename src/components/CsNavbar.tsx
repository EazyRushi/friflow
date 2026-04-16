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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const goHome = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
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
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-400"
        style={{
          padding: '0 24px',
          height: 64,
          background: scrolled || menuOpen ? (bgScrolled || 'rgba(8,8,8,.97)') : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="flex items-center gap-3 no-underline cursor-none">
          <FriflowLogo color={accentColor} width={32} height={26} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 20, letterSpacing: 1, color: textColor }}>friflow</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(([hash, label]) => (
            <a key={hash} href={`/${hash}`} onClick={goHome(hash)}
              className="cursor-none no-underline transition-colors duration-250"
              style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor }}
              onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
            >{label}</a>
          ))}
        </div>

        {/* Desktop right controls */}
        <div className="hidden md:flex items-center gap-6">
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
        </div>

        {/* Mobile right: hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-none"
            style={{ background: scrolled || menuOpen ? accentColor : 'rgba(245,240,232,0.05)', borderRadius: '50%', border: 'none', padding: 0 }}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 20, height: 1.5, background: menuOpen ? '#080808' : textColor, transition: 'transform .3s, opacity .3s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 20, height: 1.5, background: menuOpen ? '#080808' : textColor, transition: 'opacity .3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 20, height: 1.5, background: menuOpen ? '#080808' : textColor, transition: 'transform .3s, opacity .3s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden fixed inset-0 z-[90] flex flex-col justify-center items-center gap-8"
        style={{
          background: bgScrolled || 'rgba(8,8,8,.97)',
          backdropFilter: 'blur(24px)',
          transition: 'opacity .3s, transform .3s',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-16px)',
          pointerEvents: menuOpen ? 'all' : 'none',
          paddingTop: 80,
        }}
      >
        {navLinks.map(([hash, label]) => (
          <a key={hash} href={`/${hash}`} onClick={goHome(hash)}
            className="no-underline"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, letterSpacing: -1, color: textColor, textTransform: 'uppercase' }}
            onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
            onMouseLeave={e => (e.currentTarget.style.color = textColor)}
          >{label}</a>
        ))}
        <a href="mailto:hello@friflow.studio"
          className="no-underline font-medium mt-4"
          style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: ctaTextColor, background: accentColor, padding: '14px 36px' }}
        >Start a Project</a>
      </div>
    </>
  )
}
