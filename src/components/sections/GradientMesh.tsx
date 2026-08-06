import { useEffect, useRef } from 'react'
import { TEXT_MUTED } from '../../data'

// Animated gradient mesh background for hero
export default function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)

    const blobs = [
      { x: 0.3, y: 0.3, r: 0.4, color: 'rgba(59, 130, 246, 0.15)', speed: 0.3, phase: 0 },
      { x: 0.7, y: 0.5, r: 0.35, color: 'rgba(201, 162, 39, 0.12)', speed: 0.25, phase: 2 },
      { x: 0.5, y: 0.7, r: 0.3, color: 'rgba(96, 165, 250, 0.1)', speed: 0.2, phase: 4 },
      { x: 0.2, y: 0.6, r: 0.25, color: 'rgba(201, 162, 39, 0.08)', speed: 0.35, phase: 1 },
    ]

    const animate = () => {
      time += 0.008
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      blobs.forEach(blob => {
        const bx = canvas.width * (blob.x + Math.sin(time * blob.speed + blob.phase) * 0.15)
        const by = canvas.height * (blob.y + Math.cos(time * blob.speed * 0.7 + blob.phase) * 0.1)
        const br = Math.min(canvas.width, canvas.height) * blob.r

        const gradient = ctx.createRadialGradient(bx, by, 0, bx, by, br)
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
}
