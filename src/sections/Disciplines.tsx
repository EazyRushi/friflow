const disciplines = [
  { icon: '○', name: 'Brand Identity' },
  { icon: '□', name: 'Packaging' },
  { icon: '◇', name: 'UI / UX' },
  { icon: '▲', name: 'Motion' },
  { icon: '⬡', name: 'Graphic Design' },
  { icon: '✦', name: 'Product Design' },
]

export default function Disciplines() {
  const accent = '#FF6B35'
  const muted = 'rgba(245,240,232,0.4)'
  const rule = 'rgba(245,240,232,0.07)'

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-[1px]" style={{ background: rule }}>
      {disciplines.map((d, i) => (
        <div key={d.name} className={`disc-item reveal rd${i + 1} cursor-none transition-colors duration-300`}
          style={{ background: '#080808', padding: '28px 16px', textAlign: 'center' }}
          onMouseEnter={e => (e.currentTarget.style.background = accent)}
          onMouseLeave={e => (e.currentTarget.style.background = '#080808')}
        >
          <div className="disc-icon" style={{ fontSize: 22, marginBottom: 10, color: accent, transition: 'color .3s' }}>{d.icon}</div>
          <div className="disc-name" style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: muted, transition: 'color .3s', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{d.name}</div>
        </div>
      ))}
    </div>
  )
}
