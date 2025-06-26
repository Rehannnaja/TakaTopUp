import { useRef, useEffect } from 'react'

export default function BlackHoleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const center = { x: width / 2, y: height / 2 }

    const particles = Array.from({ length: 400 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * 250 + 50,
      speed: Math.random() * 0.005 + 0.002,
      size: Math.random() * 2 + 1,
    }))

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      center.x = width / 2
      center.y = height / 2
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.angle += p.speed
        const x = center.x + Math.cos(p.angle) * p.radius
        const y = center.y + Math.sin(p.angle) * p.radius

        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = '#3b82f6' // warna biru listrik (Tailwind blue-500)
        ctx.shadowColor = '#60a5fa'
        ctx.shadowBlur = 15
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40"
    />
  )
}

