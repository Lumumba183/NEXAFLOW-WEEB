import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { ACCENT_GLOW, GOLD, GOLD_BRIGHT, TEXT_MUTED, CARD, BORDER } from '../../data'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We jump on a quick call to understand your business, goals, and what success looks like for you.',
    icon: '🎯',
  },
  {
    num: '02',
    title: 'Day-One Design',
    desc: 'We design your complete website on day one. You see real progress immediately — no waiting weeks.',
    icon: '⚡',
  },
  {
    num: '03',
    title: 'Feedback Loop',
    desc: 'You review, we refine. Two rounds of revisions included. We don\'t stop until you love it.',
    icon: '🔄',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We deploy, connect your domain, and hand over the keys. Plus 3-6 months of priority support.',
    icon: '🚀',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
        position: 'relative',
      }}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div style={{
          position: 'absolute',
          top: '3rem',
          right: '-2rem',
          width: '4rem',
          height: 2,
          background: `linear-gradient(90deg, ${GOLD}, transparent)`,
          display: 'none',
        }} className="desktop-only" />
      )}

      <div style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 20,
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)'
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = BORDER
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Step number background */}
        <div style={{
          position: 'absolute', top: '-0.5rem', right: '-0.5rem',
          fontSize: '5rem', fontWeight: 800,
          color: 'rgba(201,162,39,0.05)',
          lineHeight: 1,
        }}>
          {step.num}
        </div>

        <div style={{
          width: 50, height: 50,
          background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          marginBottom: '1.25rem',
        }}>
          {step.icon}
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          {step.title}
        </h3>
        <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: 1.6 }}>
          {step.desc}
        </p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section style={{ padding: '5rem 2rem', background: '#0a0f1a', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
            color: ACCENT_GLOW, padding: '0.4rem 1.2rem', borderRadius: 50,
            fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
          }}>
            How We Work
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            fontFamily: "'Playfair Display', serif",
          }}>
            From Idea to Live in <span style={{ color: GOLD_BRIGHT }}>Record Time</span>
          </h2>
          <p style={{ color: TEXT_MUTED, fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            No endless back-and-forth. No weeks of waiting. Our process is built for speed without sacrificing quality.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
