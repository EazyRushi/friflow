import { useEffect } from 'react'
import FriflowLogo from './FriflowLogo'

interface ModalProps {
  src: string
  label: string
  onClose: () => void
}

export default function Modal({ src, label, onClose }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const rule = 'rgba(245,240,232,0.07)'
  const muted = 'rgba(245,240,232,0.4)'

  return (
    <>
      <div className="modal-overlay open" onClick={onClose} />
      <div className="modal-shell open">
        <div className="flex items-center justify-between px-14 flex-shrink-0"
          style={{ height: 64, background: 'rgba(8,8,8,.98)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${rule}`, zIndex: 10 }}>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5">
              <FriflowLogo width={22} height={18} />
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, fontSize: 18, letterSpacing: 1, color: '#F5F0E8' }}>friflow</span>
            </div>
            <div style={{ width: 1, height: 20, background: rule }} />
            <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: '#FF6B35', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{label}</span>
          </div>
          <button onClick={onClose} className="cursor-none flex items-center gap-2.5 transition-all duration-250"
            style={{ background: 'none', border: `1px solid ${rule}`, padding: '10px 20px', color: muted, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF6B35'; e.currentTarget.style.color = '#FF6B35' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = rule; e.currentTarget.style.color = muted }}
          >✕ &nbsp; Close</button>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <iframe src={src} title="Case Study" allowFullScreen className="w-full h-full border-none block" />
        </div>
      </div>
    </>
  )
}
