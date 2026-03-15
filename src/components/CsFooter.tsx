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
  return (
    <footer style={{ background: bgColor, padding: '56px 56px 40px', borderTop: `1px solid ${ruleColor}` }}>
      <div className="flex items-center justify-between" style={{ paddingBottom: 40, marginBottom: 32, borderBottom: `1px solid ${ruleColor}` }}>
        <div className="flex items-center gap-3">
          <FriflowLogo color={accentColor} width={32} height={26} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 22, letterSpacing: 1, color: textColor }}>friflow</span>
        </div>
        <div className="flex gap-8">
          {[['#','Work'],['#','Services'],['#','Studio'],['#','Contact']].map(([href, label]) => (
            <a key={label} href={href} className="cursor-none no-underline transition-colors duration-200"
              style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: mutedColor }}
              onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
            >{label}</a>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <p style={{ fontSize: 11, color: copyOpacity, letterSpacing: 1 }}>© 2025 friflow design studio.</p>
        <p style={{ fontSize: 11, color: copyOpacity, letterSpacing: 1 }}>hello@friflow.studio</p>
      </div>
    </footer>
  )
}
