import { useEffect, useRef } from 'react'

interface CustomCursorProps {
  accentColor?: string
  ringBorder?: string
  ringBorderHov?: string
  dotShape?: 'circle' | 'square' | 'diamond'
  ringStyle?: 'solid' | 'dashed'
  ringShape?: 'circle' | 'square'
}

export default function CustomCursor({
  accentColor = '#FF6B35',
  ringBorder = 'rgba(255,107,53,.45)',
  ringBorderHov = '#FF6B35',
  dotShape = 'circle',
  ringStyle = 'solid',
  ringShape = 'circle',
}: CustomCursorProps) {
  const curRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (curRef.current)  { curRef.current.style.left  = mx + 'px'; curRef.current.style.top  = my + 'px' }

      // ── Zone detection: check every element under the cursor ──────────────
      const els  = document.elementsFromPoint(mx, my)
      const zone = els.find(el => el.hasAttribute('data-cursor-zone'))?.getAttribute('data-cursor-zone') ?? ''

      const cur  = curRef.current
      const ring = ringRef.current
      if (!cur || !ring) return

      if (zone === 'dark') {
        // cursor is over a same-color / accent / bright section → go dark
        cur.classList.add('cur-dark');  ring.classList.add('cur-dark')
      } else {
        cur.classList.remove('cur-dark'); ring.classList.remove('cur-dark')
      }
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

  const dotClass = [
    'cursor',
    dotShape === 'square'  ? 'cursor-sq'  : '',
    dotShape === 'diamond' ? 'cursor-dia' : '',
  ].filter(Boolean).join(' ')

  const ringClass = [
    'cursor-ring',
    ringStyle === 'dashed' ? 'ring-dashed' : '',
    ringShape === 'square' ? 'ring-sq'     : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <div ref={curRef}  className={dotClass}  style={{ background: accentColor }} />
      <div ref={ringRef} className={ringClass} style={{ borderColor: ringBorder, ['--cur-hov' as string]: ringBorderHov }} />
    </>
  )
}
