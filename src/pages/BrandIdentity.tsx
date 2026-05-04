import CustomCursor from '../components/CustomCursor'
import CsNavbar from '../components/CsNavbar'
import CsFooter from '../components/CsFooter'
import Work from '../sections/Work'
import { useEffect } from 'react'

export default function BrandIdentity() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: '#111111', color: '#F5F0E8', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, overflowX: 'hidden', cursor: 'none', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomCursor accentColor="#FF6B35" ringBorder="rgba(255,107,53,.45)" ringBorderHov="#FF6B35" />
      <CsNavbar accentColor="#FF6B35" bgScrolled="rgba(17,16,16,.94)" textColor="#F5F0E8" mutedColor="rgba(245,240,232,0.4)" ctaTextColor="#fff" />
      
      <div style={{ flex: 1, paddingTop: 64 }}>
        <section style={{ padding: 'clamp(100px, 15vw, 180px) 24px clamp(60px, 8vw, 120px)', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255,107,53,.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', border: `1px solid rgba(255,107,53, .2)`, borderRadius: 100, background: 'rgba(255,107,53, .05)', marginBottom: 32, position: 'relative', zIndex: 1 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B35', display: 'inline-block', boxShadow: `0 0 8px #FF6B35` }} />
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#FF6B35' }}>Portfolio Archive</span>
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(44px, 8vw, 96px)', fontWeight: 800, letterSpacing: -2, lineHeight: .95, color: '#F5F0E8', position: 'relative', zIndex: 1, marginBottom: 24 }}>
            Brand <em style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#FF6B35' }}>Identity</em><br/>Selected Works.
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'rgba(245,240,232,.5)', maxWidth: 500, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            A curated selection of our best work in brand strategy, visual identity, and design systems.
          </p>
        </section>
        
        <div style={{ paddingBottom: 120 }}>
          <Work hideHeader />
        </div>
      </div>

      <CsFooter accentColor="#FF6B35" bgColor="#111111" ruleColor="rgba(245,240,232,0.08)" textColor="#F5F0E8" mutedColor="rgba(245,240,232,0.4)" copyOpacity="rgba(245,240,232,.18)" />
    </div>
  )
}
