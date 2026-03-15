import { useEffect, useState } from 'react'
import FriflowLogo from './FriflowLogo'

const tickerItems = ['Brand Identity','Packaging','UI / UX','Motion Graphics','Product Design','Graphic Design','Social Media','Videos & Reels','Brand Strategy']

const rule = 'rgba(245,240,232,0.07)'
const muted = 'rgba(245,240,232,0.4)'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Ticker — hides on scroll */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 48, overflow: 'hidden', borderBottom: `1px solid ${rule}`, display: 'flex', alignItems: 'center', zIndex: 300, background: '#080808', transition: 'transform 0.3s ease', transform: scrolled ? 'translateY(-48px)' : 'translateY(0)' }}>
        <div className="ticker-track flex gap-0 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: muted, padding: '0 48px', borderRight: `1px solid ${rule}` }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Navbar — fixed just below the ticker */}
      <nav
        className="fixed left-0 right-0 z-[200] px-14 py-6 flex items-center justify-between transition-all duration-400"
        style={{ top: scrolled ? 0 : 48, transition: 'top 0.3s ease', ...(scrolled ? { background: 'rgba(8,8,8,.9)', backdropFilter: 'blur(24px)' } : {}) }}
      >
        <a href="#" className="flex items-center gap-3 no-underline cursor-none" onClick={scrollTo('#home')}>
          <FriflowLogo />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 20, letterSpacing: 1, color: '#F5F0E8' }}>friflow</span>
        </a>
        <div className="flex items-center gap-9">
          {[['#work','Work'],['#services','Services'],['#about','Studio'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href} onClick={scrollTo(href)}
              className="cursor-none no-underline transition-colors duration-250"
              style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F0E8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.4)')}
            >{label}</a>
          ))}
        </div>
        <a href="#contact" onClick={scrollTo('#contact')}
          className="cursor-none no-underline font-medium transition-colors duration-250"
          style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#080808', background: '#FF6B35', padding: '11px 26px' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#F5F0E8')}
          onMouseLeave={e => (e.currentTarget.style.background = '#FF6B35')}
        >Start a Project</a>
      </nav>
    </>
  )
}
