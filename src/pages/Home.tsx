import { useState, useEffect, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import StatsSection from '../components/sections/StatsSection'
import ProcessSection from '../components/sections/ProcessSection'
import GradientMesh from '../components/sections/GradientMesh'
import TrustedBy from '../components/sections/TrustedBy'
import FAQSection from '../components/sections/FAQSection'
import {
  services, pricing, additionalProducts, projects, whyUs, testimonials,
  wedialaiFeatures, automationChannels,
  ACCENT, ACCENT_GLOW, GOLD, GOLD_BRIGHT, GOLD_PALE, TEXT_MUTED, TEXT_DARK, CARD, BORDER
} from '../data'

// Scroll-reveal wrapper component
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [wedialaiSubmitted, setWedialaiSubmitted] = useState(false)
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleChannel = (channel: string) => {
    setSelectedChannels(prev =>
      prev.includes(channel) ? prev.filter(c => c !== channel) : [...prev, channel]
    )
  }

  const handleFormSubmit = useCallback((setSubmitted: (v: boolean) => void) => (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    formData.set('automationChannels', selectedChannels.join(', '))
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }, [selectedChannels])

  const sectionHeader = (title: string, subtitle?: string) => (
    <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '4rem' }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem',
        fontFamily: "'Playfair Display', serif", position: 'relative', display: 'inline-block',
      }}>
        {title}
        <span style={{
          position: 'absolute', bottom: -12, left: '50%', transform: 'translateX(-50%)',
          width: 60, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_BRIGHT})`, borderRadius: 2,
        }} />
      </h2>
      {subtitle && <p style={{ color: TEXT_MUTED, fontSize: '1.1rem', maxWidth: 700, margin: '0 auto' }}>{subtitle}</p>}
    </div>
  )

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '8rem 2rem 4rem',
        background: 'linear-gradient(135deg, #050a14 0%, #0a0f1a 30%, #0f1a2e 60%, #0a0f1a 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <GradientMesh />
        {/* Glowing orbs */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'pulse 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'pulse 10s ease-in-out infinite reverse' }} />
        <div style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.25)',
            color: GOLD_BRIGHT, padding: '0.5rem 1.5rem', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
            animation: 'fadeInUp 0.6s ease-out',
          }}>
            <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Trusted by 50+ Kenyan Businesses
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '1.5rem',
            fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em',
            animation: 'fadeInUp 0.8s ease-out 0.1s both',
          }}>
            <span className="gradient-text">
              We Build Digital
            </span>
            <br />
            <span className="gradient-text-blue">
              Experiences That Convert
            </span>
          </h1>
          <p style={{
            fontSize: '1.25rem', color: TEXT_MUTED, maxWidth: 650, margin: '0 auto 2.5rem', lineHeight: 1.7,
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}>
            High-performance websites & AI automation systems for businesses ready to scale.
            From KSH 18,000. Nairobi-based, worldwide delivery.
          </p>
          <div style={{
            display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.3s both',
          }}>
            <a href="#pricing" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              View Packages →
            </a>
            <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
              💬 WhatsApp Us
            </a>
          </div>
          {/* Trust badges */}
          <div style={{
            marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.7,
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
          }}>
            {['⚡ Day-1 Delivery', '🔒 Upwork Escrow', '💰 M-Pesa Ready', '📱 Mobile First'].map(b => (
              <span key={b} style={{ fontSize: '0.85rem', color: TEXT_MUTED, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>{b}</span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes pulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* ===== TRUSTED BY MARQUEE ===== */}
      <TrustedBy />

      {/* ===== STATS SECTION ===== */}
      <StatsSection />

      {/* ===== SERVICES ===== */}
      <section id="services" style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('Everything you need to digitalize your business', 'Full-stack digital solutions built for performance. One team, one vision — from pixel-perfect interfaces to AI models in production.')}
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="card-modern">
                  <div style={{ width: '100%', height: 200, overflow: 'hidden', position: 'relative' }}>
                    <img src={s.img} alt={s.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }} />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '2.5rem', fontWeight: 800, color: 'rgba(201,162,39,0.25)' }}>{s.num}</div>
                    {s.price && (
                      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(10,15,26,0.9)', border: '1px solid rgba(201,162,39,0.4)', color: GOLD_BRIGHT, padding: '0.4rem 1rem', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700 }}>
                        {s.price}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{s.title}</h3>
                    <p style={{ color: TEXT_MUTED, fontSize: '0.95rem', lineHeight: 1.6 }}>{s.desc}</p>
                    {s.link && (
                      <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', color: ACCENT_GLOW, fontSize: '0.9rem', fontWeight: 600 }}>
                        Learn More →
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PROCESS SECTION ===== */}
      <ProcessSection />

      <div className="section-divider" />

      {/* ===== MARQUEE ===== */}
      <div style={{ padding: '1.5rem 0', background: '#111827', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i}>
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>WEB DEVELOPMENT</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>AI CALLING AGENTS</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>WHATSAPP AUTOMATION</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>E-SHOP DESIGN</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>WEB + ANDROID APPS</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>AI WHITELABEL</span> •
            </span>
          ))}
        </div>
      </div>

      {/* ===== PRICING ===== */}
      <section id="pricing" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #111827 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('Smart Solutions for Every Budget', 'All packages include a FREE domain name and FREE SSL Certificate. Professional email setup available on Premium only.')}
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {pricing.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.15}>
                <div style={{
                  background: CARD, border: `1px solid ${p.popular ? GOLD : BORDER}`, borderRadius: 20, padding: '2.5rem',
                  position: 'relative', transition: 'all 0.3s',
                  boxShadow: p.popular ? '0 0 40px rgba(201,162,39,0.15)' : 'none',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = p.popular ? '0 20px 60px rgba(201,162,39,0.2)' : '0 20px 40px rgba(0,0,0,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = p.popular ? '0 0 40px rgba(201,162,39,0.15)' : 'none' }}
                >
                  {p.popular && (
                    <div style={{
                      position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                      background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`, color: '#0a0f1a',
                      padding: '0.4rem 1.5rem', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700,
                    }}>MOST POPULAR</div>
                  )}
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.name}</h3>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '1rem' }}>{p.subtitle}</p>
                  <div style={{
                    fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.25rem',
                    background: 'linear-gradient(135deg, #ffffff, #f5e6a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{p.price}</div>
                  <ul style={{ listStyle: 'none', margin: '1.5rem 0', padding: 0 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(51,65,85,0.3)', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span style={{ color: f.includes('FREE') ? GOLD_BRIGHT : '#f8fafc' }}>{f}</span>
                      </li>
                    ))}
                    {p.notIncluded?.map(f => (
                      <li key={f} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(51,65,85,0.3)', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#64748b', fontWeight: 700, flexShrink: 0 }}>✗</span>
                        <span style={{ color: '#64748b', textDecoration: 'line-through' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}`} target="_blank" rel="noopener noreferrer" style={{
                    width: '100%', padding: '1rem', borderRadius: 12, border: p.popular ? 'none' : `2px solid ${BORDER}`,
                    background: p.popular ? `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})` : 'transparent',
                    color: p.popular ? '#0a0f1a' : '#f8fafc', fontWeight: 700, fontSize: '1rem',
                    textDecoration: 'none', display: 'block', textAlign: 'center', transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => { if (!p.popular) { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.background = 'rgba(201,162,39,0.1)' }}}
                    onMouseLeave={e => { if (!p.popular) { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = 'transparent' }}}>
                    Get Started
                  </a>
                  <p style={{ textAlign: 'center', color: TEXT_MUTED, fontSize: '0.9rem', marginTop: '0.5rem' }}>Care Plan Basic: KSH 3,500/mo | Standard: KSH 7,500/mo | Premium: KSH 15,000/mo</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', background: 'rgba(201,162,39,0.08)', border: '1px dashed rgba(201,162,39,0.3)', borderRadius: 12, maxWidth: 600, margin: '2rem auto 0' }}>
            <p style={{ color: GOLD_BRIGHT, fontSize: '0.9rem', fontWeight: 600 }}>⭐ Professional email setup included FREE with Premium Package only</p>
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL PRODUCTS ===== */}
      <section style={{ padding: '4rem 0', background: '#0a0f1a', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('Additional Solutions', 'Specialized products for businesses ready to scale beyond a standard website.')}
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {additionalProducts.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <div className="card-modern">
                  <div style={{ width: '100%', height: 220, overflow: 'hidden', position: 'relative' }}>
                    <img src={p.img} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(59,130,246,0.9)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: 50, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>{p.badge}</div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.name}</h3>
                    <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>{p.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <span style={{ fontSize: '1.8rem', fontWeight: 800, background: 'linear-gradient(135deg, #ffffff, #f5e6a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.price}</span>
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>Learn More →</a>
                      ) : (
                        <a href={`https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20${encodeURIComponent(p.name)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>Get Started →</a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUE ADDED SERVICES ===== */}
      <section style={{ padding: '3rem 0', background: '#111827', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('Value-Added Services')}
          </ScrollReveal>
          <ScrollReveal>
            <table style={{ width: '100%', maxWidth: 800, margin: '2rem auto 0', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: `1px solid ${BORDER}`, color: ACCENT_GLOW, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: `1px solid ${BORDER}`, color: ACCENT_GLOW, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price</th>
                  <th style={{ padding: '1rem', textAlign: 'right', borderBottom: `1px solid ${BORDER}`, color: ACCENT_GLOW, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'SEO Setup (technical + on-page + GMB)', price: 'KSH 15,000', freq: 'One-time' },
                  { service: 'Monthly SEO (ongoing optimisation)', price: 'KSH 12,000 – 25,000', freq: 'Monthly' },
                  { service: 'Content Creation (SEO article, ~1,000–1,200 words)', price: 'KSH 3,500', freq: 'Per article' },
                  { service: 'Care Plan Basic — updates, backups, security', price: 'KSH 3,500/mo', freq: 'Monthly' },
                  { service: 'Care Plan Standard — + content edits (up to 5/mo)', price: 'KSH 7,500/mo', freq: 'Monthly' },
                  { service: 'Care Plan Premium — + SEO monitoring, unlimited minor edits', price: 'KSH 15,000/mo', freq: 'Monthly' },
                  { service: 'Social Media Management — Starter (12 posts, 2 platforms)', price: 'KSH 18,000/mo', freq: 'Monthly' },
                  { service: 'Social Media Management — Growth (20 posts + reels, 3 platforms)', price: 'KSH 35,000/mo', freq: 'Monthly' },
                  { service: 'Professional Email Setup (if not on Premium)', price: 'KSH 5,000', freq: 'One-time' },
                  { service: 'M-Pesa / Payment Gateway Integration', price: 'KSH 12,000', freq: 'One-time' },
                  { service: 'Extra Page (beyond package limit)', price: 'KSH 2,500/page', freq: 'One-time' },
                ].map(row => (
                  <tr key={row.service}>
                    <td style={{ padding: '1rem', borderBottom: `1px solid ${BORDER}`, color: TEXT_MUTED, fontSize: '0.95rem' }}>{row.service}</td>
                    <td style={{ padding: '1rem', borderBottom: `1px solid ${BORDER}`, color: TEXT_MUTED, fontSize: '0.95rem' }}>{row.price}</td>
                    <td style={{ padding: '1rem', borderBottom: `1px solid ${BORDER}`, textAlign: 'right', color: GOLD_BRIGHT, fontWeight: 600, fontSize: '0.95rem' }}>{row.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="work" style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('Our Portfolio', '9 Projects & Counting')}
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {projects.slice(0, 6).map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="card-modern">
                  <div style={{ width: '100%', height: 200, overflow: 'hidden' }}>
                    <img src={p.img} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      display: 'inline-block', background: 'rgba(201,162,39,0.15)', color: GOLD_BRIGHT,
                      padding: '0.3rem 0.8rem', borderRadius: 50, fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem',
                    }}>{p.badge}</span>
                    <p style={{ color: TEXT_DARK, fontSize: '0.8rem', marginBottom: '0.5rem' }}>{p.num}</p>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>{p.desc}</p>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT_GLOW, fontSize: '0.9rem', fontWeight: 600 }}>Visit Site →</a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/portfolio" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== WHY US ===== */}
      <section style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('Why Businesses Choose NexaFlow', 'Not just another dev shop. We measure our success by your revenue growth.')}
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {whyUs.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.1}>
                <div style={{
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                  background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16,
                  padding: '1.5rem', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <img src={w.img} alt={w.title} loading="lazy" style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{w.title}</h3>
                    <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: 1.6 }}>{w.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WEDIAL AI SECTION ===== */}
      <section id="wedialai" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #111827 0%, #0a0f1a 100%)', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('Powered by WeDial AI', 'Launch your own AI agent army. One platform. Seven channels. Infinite possibilities. Your customers never wait again.')}
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ maxWidth: 800, margin: '0 auto 3rem', textAlign: 'center' }}>
              <p style={{ color: TEXT_MUTED, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                WeDial AI is our flagship AI agent platform — the same technology powering our own operations.
                It connects voice calls, WhatsApp, Instagram, Facebook, email, SMS, and web chat into one
                intelligent system that learns your business and handles customer interactions autonomously, 24/7.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT }}>7</div>
                  <div style={{ color: TEXT_MUTED, fontSize: '0.8rem' }}>Channels</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT }}>24/7</div>
                  <div style={{ color: TEXT_MUTED, fontSize: '0.8rem' }}>Availability</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT }}>&lt;2s</div>
                  <div style={{ color: TEXT_MUTED, fontSize: '0.8rem' }}>Response Time</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {wedialaiFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div style={{
                  background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16,
                  padding: '1.5rem', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.title}</h3>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="https://wedialai.com" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Explore WeDial AI →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('What Our Clients Say', 'Real results from real businesses across Kenya and beyond.')}
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div style={{
                  background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20,
                  padding: '2rem', position: 'relative', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ fontSize: '3rem', color: GOLD, opacity: 0.3, lineHeight: 1, marginBottom: '1rem' }}>"</div>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${GOLD}, ${ACCENT})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '1rem', color: '#0a0f1a',
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{t.name}</div>
                      <div style={{ color: TEXT_MUTED, fontSize: '0.8rem' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== AI AUTOMATION QUOTE FORM ===== */}
      <section style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader('AI Automation Quote', 'Automate your business across WhatsApp, Instagram, Facebook, Email, SMS, and AI call centers. Request a custom quote today.')}
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ maxWidth: 700, margin: '0 auto', background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: '2.5rem' }}>
              {quoteSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Quote Request Received!</h3>
                  <p style={{ color: TEXT_MUTED }}>We'll get back to you within 24 hours with a tailored quote for your AI automation needs.</p>
                </div>
              ) : (
                <form name="ai-quote-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit(setQuoteSubmitted)}>
                  <input type="hidden" name="form-name" value="ai-quote-form" />
                  <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Automation Channels *</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {automationChannels.map(channel => (
                        <button
                          key={channel}
                          type="button"
                          onClick={() => toggleChannel(channel)}
                          style={{
                            padding: '0.5rem 1rem', borderRadius: 50, border: '1px solid',
                            borderColor: selectedChannels.includes(channel) ? GOLD : BORDER,
                            background: selectedChannels.includes(channel) ? 'rgba(201,162,39,0.15)' : 'transparent',
                            color: selectedChannels.includes(channel) ? GOLD_BRIGHT : TEXT_MUTED,
                            cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500,
                            transition: 'all 0.3s',
                          }}
                        >
                          {selectedChannels.includes(channel) ? '✓ ' : ''}{channel}
                        </button>
                      ))}
                    </div>
                  </div>

                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your name', required: true },
                    { label: 'Business Name', name: 'business', type: 'text', placeholder: 'Your business name', required: false },
                    { label: 'Email *', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                    { label: 'Phone *', name: 'phone', type: 'tel', placeholder: '+254...', required: true },
                  ].map(field => (
                    <div key={field.name} style={{ marginBottom: '1.2rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>{field.label}</label>
                      <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required}
                        style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                        onBlur={e => { e.currentTarget.style.borderColor = BORDER }} />
                    </div>
                  ))}
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Service Needed *</label>
                    <select name="service" required style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }}
                      onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                      onBlur={e => { e.currentTarget.style.borderColor = BORDER }}>
                      <option value="">Select a service...</option>
                      <option value="website">Website Development</option>
                      <option value="ai-agents">AI Calling Agents</option>
                      <option value="whatsapp">WhatsApp Automation</option>
                      <option value="chat">Web Chat Automation</option>
                      <option value="shopify">Shopify Solutions</option>
                      <option value="e-shop">E-Shop Design</option>
                      <option value="web-android-app">Web App + Android App</option>
                      <option value="wedialai-white-label">WeDialAI White-Label</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Message *</label>
                    <textarea name="message" placeholder="Tell us about your project..." required rows={4}
                      style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                      onBlur={e => { e.currentTarget.style.borderColor = BORDER }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    Send Message →
                  </button>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.85rem', marginTop: '1rem', textAlign: 'center' }}>Or WhatsApp us for instant replies 💬</p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FAQ ===== */}
      <FAQSection />

      <div className="section-divider" />

      {/* ===== CONTACT ===== */}
      <section id="contact" style={{ padding: '4rem 0', background: '#111827' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal>
            {sectionHeader("Let's Build Something Great", 'Ready to digitalize your business? Reach out however works best for you.')}
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ maxWidth: 700, margin: '0 auto', background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: '2.5rem' }}>
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: TEXT_MUTED }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit(setContactSubmitted)}>
                  <input type="hidden" name="form-name" value="contact-form" />
                  <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>
                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your name', required: true },
                    { label: 'Email *', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                    { label: 'Phone *', name: 'phone', type: 'tel', placeholder: '+254...', required: true },
                  ].map(field => (
                    <div key={field.name} style={{ marginBottom: '1.2rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>{field.label}</label>
                      <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required}
                        style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                        onBlur={e => { e.currentTarget.style.borderColor = BORDER }} />
                    </div>
                  ))}
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Service Needed *</label>
                    <select name="service" required style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }}
                      onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                      onBlur={e => { e.currentTarget.style.borderColor = BORDER }}>
                      <option value="">Select a service...</option>
                      <option value="website">Website Development</option>
                      <option value="ai-agents">AI Calling Agents</option>
                      <option value="whatsapp">WhatsApp Automation</option>
                      <option value="chat">Web Chat Automation</option>
                      <option value="shopify">Shopify Solutions</option>
                      <option value="e-shop">E-Shop Design</option>
                      <option value="web-android-app">Web App + Android App</option>
                      <option value="wedialai-white-label">WeDialAI White-Label</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Message *</label>
                    <textarea name="message" placeholder="Tell us about your project..." required rows={4}
                      style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                      onBlur={e => { e.currentTarget.style.borderColor = BORDER }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    Send Message →
                  </button>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.85rem', marginTop: '1rem', textAlign: 'center' }}>Or WhatsApp us for instant replies 💬</p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
