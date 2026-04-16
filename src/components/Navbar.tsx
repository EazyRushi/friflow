import { useEffect, useState } from 'react'
import FriflowLogo from './FriflowLogo'

const tickerItems = ['Brand Identity','Packaging','UI / UX','Motion Graphics','Product Design','Graphic Design','Social Media','Videos & Reels','Brand Strategy']

const rule = 'rgba(245,240,232,0.07)'
const muted = 'rgba(245,240,232,0.4)'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, menuOpen ? 320 : 0)
  }

  return (
    <>
      {/* Ticker — hides on scroll */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 48,
        overflow: 'hidden', borderBottom: `1px solid ${rule}`,
        display: 'flex', alignItems: 'center', zIndex: 300,
        background: '#080808', transition: 'transform 0.3s ease',
        transform: scrolled ? 'translateY(-48px)' : 'translateY(0)',
      }}>
        <div className="ticker-track flex gap-0 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: muted, padding: '0 48px', borderRight: `1px solid ${rule}` }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="fixed left-0 right-0 z-[200] flex items-center justify-between transition-all duration-400"
        style={{
          top: scrolled ? 0 : 48,
          transition: 'top 0.3s ease',
          padding: '0 24px',
          height: 64,
          ...(scrolled || menuOpen ? { background: 'rgba(8,8,8,.97)', backdropFilter: 'blur(24px)' } : {}),
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline cursor-none" onClick={scrollTo('#home')}>
          <FriflowLogo />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 20, letterSpacing: 1, color: '#F5F0E8' }}>friflow</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9">
          {[['#work','Work'],['#services','Services'],['#about','Studio'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href} onClick={scrollTo(href)}
              className="cursor-none no-underline transition-colors duration-250"
              style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: muted }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F0E8')}
              onMouseLeave={e => (e.currentTarget.style.color = muted)}
            >{label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" onClick={scrollTo('#contact')}
          className="hidden md:block cursor-none no-underline font-medium transition-colors duration-250"
          style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#080808', background: '#FF6B35', padding: '11px 26px' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#F5F0E8')}
          onMouseLeave={e => (e.currentTarget.style.background = '#FF6B35')}
        >Start a Project</a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-none"
          style={{ background: 'none', border: 'none', padding: 0 }}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 24, height: 1.5, background: '#F5F0E8', transition: 'transform .3s, opacity .3s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 1.5, background: '#F5F0E8', transition: 'opacity .3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 1.5, background: '#F5F0E8', transition: 'transform .3s, opacity .3s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden fixed inset-0 z-[190] flex flex-col justify-center items-center gap-8"
        style={{
          background: 'rgba(8,8,8,.97)',
          backdropFilter: 'blur(24px)',
          transition: 'opacity .3s, transform .3s',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-16px)',
          pointerEvents: menuOpen ? 'all' : 'none',
          paddingTop: 80,
        }}
      >
        {[['#work','Work'],['#services','Services'],['#about','Studio'],['#contact','Contact']].map(([href, label]) => (
          <a key={href} href={href} onClick={scrollTo(href)}
            className="no-underline"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 32, fontWeight: 800, letterSpacing: -1, color: '#F5F0E8', textTransform: 'uppercase' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF6B35')}
            onMouseLeave={e => (e.currentTarget.style.color = '#F5F0E8')}
          >{label}</a>
        ))}
        <a href="#contact" onClick={scrollTo('#contact')}
          className="no-underline font-medium mt-4"
          style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#080808', background: '#FF6B35', padding: '14px 36px' }}
        >Start a Project</a>
      </div>
    </>
  )
}
