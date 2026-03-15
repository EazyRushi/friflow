import { useEffect, useRef } from 'react'

interface CustomCursorProps {
  accentColor?: string
  ringBorder?: string
  ringBorderHov?: string
}

export default function CustomCursor({
  accentColor = '#FF6B35',
  ringBorder = 'rgba(255,107,53,.45)',
  ringBorderHov = '#FF6B35',
}: CustomCursorProps) {
  const curRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (curRef.current) { curRef.current.style.left = mx + 'px'; curRef.current.style.top = my + 'px' }
    }
    document.addEventListener('mousemove', onMove)
    let raf: number
    const loop = () => {
      rx += (mx - rx) * .1; ry += (my - ry) * .1
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px' }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const hoverEls = document.querySelectorAll('a,button,.svc-card,.work-item,.am-item,.disc-item,.hero-stat,.proc-step,.del,.strip-item,.sc,.flow-step,.next-link')
    const addHov = () => ringRef.current?.classList.add('hov')
    const remHov = () => ringRef.current?.classList.remove('hov')
    hoverEls.forEach(el => { el.addEventListener('mouseenter', addHov); el.addEventListener('mouseleave', remHov) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      hoverEls.forEach(el => { el.removeEventListener('mouseenter', addHov); el.removeEventListener('mouseleave', remHov) })
    }
  }, [])

  return (
    <>
      <div ref={curRef} className="cursor" style={{ background: accentColor }} />
      <div ref={ringRef} className="cursor-ring" style={{ borderColor: ringBorder, ['--hov-color' as string]: ringBorderHov }} />
    </>
  )
}
