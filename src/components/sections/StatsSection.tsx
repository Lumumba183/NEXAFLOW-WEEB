import { useCountUp } from '../../hooks/useScrollAnimation'
import { GOLD_BRIGHT, TEXT_MUTED } from '../../data'

function StatItem({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(num, 2000)
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '1.5rem' }}>
      <div style={{
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
        fontWeight: 800,
        color: GOLD_BRIGHT,
        lineHeight: 1,
        marginBottom: '0.5rem',
        fontFamily: "'Playfair Display', serif",
      }}>
        {count}{suffix}
      </div>
      <div style={{ color: TEXT_MUTED, fontSize: '0.9rem', fontWeight: 500 }}>{label}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section style={{
      padding: '3rem 2rem',
      background: 'linear-gradient(180deg, #0a0f1a 0%, #111827 50%, #0a0f1a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1000,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <StatItem num={50} suffix="+" label="Projects Delivered" />
        <StatItem num={100} suffix="%" label="Client Satisfaction" />
        <StatItem num={7} suffix="" label="AI Channels" />
        <StatItem num={24} suffix="h" label="First Draft Delivery" />
      </div>
    </section>
  )
}
