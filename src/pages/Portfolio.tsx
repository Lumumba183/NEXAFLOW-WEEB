import { useEffect } from 'react'
import { Link } from 'react-router'
import { projects, ACCENT_GLOW, GOLD, GOLD_BRIGHT, TEXT_MUTED, CARD, BORDER } from '../data'

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Portfolio — NexaFlow Digital'
  }, [])

  return (
    <div style={{ background: '#0a0f1a', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        padding: '10rem 2rem 5rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #050a14 0%, #0a0f1a 50%, #0f1a2e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(80px)',
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)',
            color: GOLD_BRIGHT, padding: '0.4rem 1.2rem', borderRadius: 50,
            fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
          }}>
            🏆 50+ Projects Delivered
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800,
            fontFamily: "'Playfair Display', serif", marginBottom: '1rem',
            background: 'linear-gradient(135deg, #e8c547 0%, #ffffff 50%, #f5e6a3 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Our Portfolio
          </h1>
          <p style={{ color: TEXT_MUTED, fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Every project tells a story. Here are 9 businesses we've helped transform — 
            from AI platforms to safari booking engines, from financial boutiques to children's homes.
          </p>
          <Link to="/" style={{
            display: 'inline-block', padding: '0.8rem 2rem',
            border: `1px solid ${BORDER}`, borderRadius: 12,
            color: '#f8fafc', textDecoration: 'none', fontWeight: 600,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.background = 'rgba(201,162,39,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = 'transparent' }}>
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: '2rem', background: '#111827', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '9', label: 'Industries Served' },
            { num: '100%', label: 'Client Satisfaction' },
            { num: '24h', label: 'Avg. First Draft' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT, marginBottom: '0.25rem' }}>{stat.num}</div>
              <div style={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '4rem 2rem', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 20,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = BORDER
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ width: '100%', height: 240, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: p.badge === 'Live Platform' ? 'rgba(59,130,246,0.9)' : 'rgba(16,185,129,0.9)',
                    color: 'white', padding: '0.3rem 0.8rem', borderRadius: 50,
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em',
                  }}>
                    {p.badge.toUpperCase()}
                  </div>
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    fontSize: '2rem', fontWeight: 800,
                    color: 'rgba(255,255,255,0.15)',
                  }}>
                    {p.num}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: ACCENT_GLOW, fontSize: '0.85rem', fontWeight: 600 }}>
                    <span>View Live Site</span>
                    <span style={{ transition: 'transform 0.3s' }} className="arrow-icon">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg, #0a0f1a 0%, #111827 100%)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700,
            fontFamily: "'Playfair Display', serif", marginBottom: '1rem',
          }}>
            Ready to be project <span style={{ color: GOLD_BRIGHT }}>No. 10?</span>
          </h2>
          <p style={{ color: TEXT_MUTED, marginBottom: '2rem', lineHeight: 1.7 }}>
            Let's build something that makes your competitors nervous.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20a%20website" 
              target="_blank" rel="noopener noreferrer"
              style={{
                background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`,
                color: '#0a0f1a', padding: '1rem 2.5rem', borderRadius: 12,
                fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(201,162,39,0.3)',
              }}>
              💬 Start on WhatsApp
            </a>
            <Link to="/"
              style={{
                border: `2px solid ${BORDER}`, color: '#f8fafc',
                padding: '1rem 2.5rem', borderRadius: 12,
                fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD_BRIGHT }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = '#f8fafc' }}>
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
