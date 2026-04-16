import { useNavigate } from 'react-router-dom'
import FriflowLogo from './FriflowLogo'

export default function Footer() {
  const navigate = useNavigate()
  const rule = 'rgba(245,240,232,0.07)'
  const muted = 'rgba(245,240,232,0.4)'

  const goHome = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const cols = [
    {
      title: 'Services',
      links: [
        ['#services', 'Brand Identity'],
        ['#services', 'Packaging Design'],
        ['#services', 'UI / UX Design'],
        ['#services', 'Motion & Video'],
        ['#services', 'Graphic Design'],
        ['#services', 'Product Design'],
      ] as [string, string][],
    },
    {
      title: 'Studio',
      links: [
        ['#about', 'About Us'],
        ['#process', 'Our Process'],
        ['#work', 'Work'],
        ['#contact', 'Contact'],
      ] as [string, string][],
    },
    {
      title: 'Get In Touch',
      links: [
        ['mailto:hello@friflow.studio', 'hello@friflow.studio'],
        ['#contact', 'Start a Project'],
      ] as [string, string][],
    },
  ]

  return (
    <footer className="px-6 pt-14 pb-10 md:px-14 md:pt-20 md:pb-12" style={{ background: '#080808', borderTop: `1px solid ${rule}` }}>
      {/* Main grid: 1 col → 2 col → 4 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-16 pb-12 md:pb-16 mb-10 md:mb-12" style={{ borderBottom: `1px solid ${rule}` }}>
        {/* Brand col */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="flex items-center gap-3 mb-5 no-underline cursor-none">
            <FriflowLogo />
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 22, letterSpacing: 1, color: '#F5F0E8' }}>friflow</span>
          </a>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: muted, marginBottom: 24, maxWidth: 300 }}>
            A full-spectrum design studio building brands, interfaces, and visual systems that move people — and business forward.
          </p>
          <div className="flex gap-3">
            {[
              ['https://linkedin.com', 'in'],
              ['https://instagram.com', 'ig'],
              ['https://behance.net', 'be'],
              ['https://dribbble.com', 'dr'],
            ].map(([href, s]) => (
              <a key={s} href={href} target="_blank" rel="noopener noreferrer" className="cursor-none no-underline flex items-center justify-center transition-all duration-250"
                style={{ width: 36, height: 36, border: `1px solid ${rule}`, fontSize: 12, color: muted }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF6B35'; e.currentTarget.style.color = '#FF6B35' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = rule; e.currentTarget.style.color = muted }}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Link cols */}
        {cols.map(col => (
          <div key={col.title}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#F5F0E8', marginBottom: 24 }}>{col.title}</div>
            <div className="flex flex-col gap-3">
              {col.links.map(([href, label]) => {
                const isMail = href.startsWith('mailto:')
                return (
                  <a key={label} href={href}
                    onClick={isMail ? undefined : goHome(href)}
                    className="cursor-none no-underline transition-colors duration-250"
                    style={{ fontSize: 13, color: muted, letterSpacing: .3 }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FF6B35')}
                    onMouseLeave={e => (e.currentTarget.style.color = muted)}
                  >{label}</a>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar — stacks on mobile */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <p style={{ fontSize: 11, color: 'rgba(245,240,232,.2)', letterSpacing: 1 }}>© 2025 friflow design studio. All rights reserved.</p>
        <p style={{ fontSize: 11, color: 'rgba(245,240,232,.2)', letterSpacing: 1 }}>Made with obsession by <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} style={{ color: '#FF6B35', textDecoration: 'none' }}>friflow</a></p>
      </div>
    </footer>
  )
}
