interface FriflowLogoProps {
  color?: string
  width?: number
  height?: number
}

export default function FriflowLogo({ color = '#FF6B35', width = 30, height = 24 }: FriflowLogoProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 40" fill="none">
      <line x1="0" y1="7" x2="44" y2="7" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="0" y1="19" x2="34" y2="19" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M0 31 L22 31 Q28 31 30 25" stroke={color} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}
