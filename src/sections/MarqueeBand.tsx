const items = ['Brand Identity','Packaging Design','UI / UX Design','Motion Graphics','Product Design','Graphic Design','Social Media','Videos & Reels']

export default function MarqueeBand() {
  return (
    <div style={{ height: 56, background: '#FF6B35', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div className="marquee-track flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#080808', padding: '0 40px' }}>
            {item}
            {i % items.length !== items.length - 1 && <span style={{ opacity: .35 }}> ○ </span>}
          </span>
        ))}
      </div>
    </div>
  )
}
