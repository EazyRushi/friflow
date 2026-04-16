export default function Testimonial() {
  return (
    <div className="px-6 py-16 md:px-14 md:py-24 lg:py-28" style={{ background: '#FF6B35', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -48, left: 24, fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(160px,30vw,340px)', color: 'rgba(8,8,8,.08)', lineHeight: 1, pointerEvents: 'none' }}>"</div>
      <p style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: 'clamp(20px,3.5vw,44px)', lineHeight: 1.35, color: '#080808', maxWidth: 860, position: 'relative', zIndex: 1, marginBottom: 32 }}>
        "friflow didn't just design our brand — they gave us a language. Everything they touched made us feel like the most credible version of ourselves."
      </p>
      <p className="flex items-center gap-4" style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(8,8,8,.5)', position: 'relative', zIndex: 1 }}>
        <span style={{ width: 32, height: 1, background: 'rgba(8,8,8,.3)', flexShrink: 0 }} />
        Sarah Mensah — Founder, Aurore Beauty
      </p>
    </div>
  )
}
