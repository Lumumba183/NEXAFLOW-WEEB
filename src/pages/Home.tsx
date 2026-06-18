import { useState, useEffect, useRef } from 'react'

const ACCENT = '#3b82f6'
const ACCENT_GLOW = '#60a5fa'
const GOLD = '#c9a227'
const GOLD_BRIGHT = '#e8c547'
const GOLD_PALE = '#f5e6a3'
const TEXT_MUTED = '#94a3b8'
const TEXT_DARK = '#64748b'
const CARD = '#1e293b'
const BORDER = '#334155'

const services = [
  {
    num: '01',
    title: 'Website Development',
    desc: 'High-performance, conversion-optimized websites built with React, Next.js, and modern frameworks. Mobile-first, SEO-ready, blazing fast.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    num: '02',
    title: 'AI Calling Agents',
    desc: 'Intelligent voice agents that handle inbound and outbound calls around the clock. Book appointments, qualify leads, serve customers.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    num: '03',
    title: 'WhatsApp Automation',
    desc: 'WhatsApp Business API workflows for support, order updates, marketing campaigns, and lead nurturing at scale.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    num: '04',
    title: 'Web Chat Automation',
    desc: 'Smart chatbots that engage visitors, answer questions, capture leads, and drive conversions in real-time on your website.',
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    num: '05',
    title: 'Social Chat Automation',
    desc: 'Automated Messenger and Instagram DM workflows to engage social audiences and turn followers into paying customers.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    num: '06',
    title: 'Shopify Cart Recovery',
    desc: 'Recover lost revenue with automated abandoned cart sequences and intelligent chat flows integrated with your Shopify store.',
    img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=160&fit=crop&auto=format&q=80',
  },
]

const pricing = [
  {
    name: 'Basic Package',
    subtitle: '5 Pages — Price-sensitive clients',
    price: 'KSH 6,500',
    features: ['Contact form', 'Image gallery', 'Social media integration', 'Responsive design', 'Professional email setup', 'FREE SSL Certificate'],
    popular: false,
  },
  {
    name: 'Standard Package',
    subtitle: '10 Pages — Growing businesses',
    price: 'KSH 12,000',
    features: ['Everything in Basic', 'Blog setup', 'Enhanced SEO', 'Google Business Profile', '3 months priority support', 'FREE SSL Certificate'],
    popular: true,
  },
  {
    name: 'Premium Package',
    subtitle: '10+ Pages — Established businesses',
    price: 'KSH 18,000',
    features: ['Everything in Standard', 'CMS integration', 'Advanced SEO', 'Analytics dashboard', '6 months priority support', 'FREE SSL Certificate'],
    popular: false,
  },
]

const projects = [
  {
    badge: 'Live Platform',
    num: 'No. 01',
    title: 'WeDialAI',
    desc: 'Full-featured AI agent platform we built and operate. 7-channel communication — voice calls, WhatsApp, Instagram, Facebook, Shopify, web chat. Live at wedialai.com.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=220&fit=crop&auto=format&q=80',
    link: 'https://wedialai.com',
  },
  {
    badge: 'Branding Website',
    num: 'No. 02',
    title: 'Mwanda Brands',
    desc: 'Complete brand identity and website for Mwanda Brands East Africa — a leading branding and marketing company in Kenya. Live at www.mbrands.co.ke.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=220&fit=crop&auto=format&q=80',
    link: 'https://www.mbrands.co.ke',
  },
  {
    badge: '+142% conversion',
    num: 'No. 03',
    title: 'Nairobi Fashion Brand',
    desc: 'Full-featured e-commerce with custom catalog, M-Pesa integration, and mobile-first design. Conversion rate doubled in 30 days.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=220&fit=crop&auto=format&q=80',
    link: null,
  },
  {
    badge: '80% calls automated',
    num: 'No. 04',
    title: 'Real Estate Agency',
    desc: '24/7 AI voice agent handling property inquiries, scheduling viewings, and qualifying leads. Now manages 80% of all inbound calls.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=220&fit=crop&auto=format&q=80',
    link: null,
  },
]

const whyUs = [
  {
    title: 'Results-First Pricing',
    desc: 'We measure success by revenue generated and hours saved — not just tasks completed. Every project ties back to your bottom line.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    title: 'Full-Stack In-House',
    desc: 'From UI design to AI model deployment, everything happens under one roof. No handoffs, no delays, no blame-shifting.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    title: 'AI-Native Architecture',
    desc: 'Our systems are built with automation at the core, not bolted on. This means real intelligence, not just rule-based chatbots.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=160&fit=crop&auto=format&q=80',
  },
  {
    title: 'Local Market Expertise',
    desc: 'Deep understanding of East African business — M-Pesa integrations, local compliance, and customer behavior patterns.',
    img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&h=160&fit=crop&auto=format&q=80',
  },
]

const testimonials = [
  {
    text: 'NexaFlow rebuilt our entire online store. Within the first month, our conversion rate had doubled. The M-Pesa integration alone changed everything for us.',
    name: 'Sarah Mwangi',
    role: 'Founder, BrightWave Studios',
    initials: 'SM',
  },
  {
    text: 'The AI voice agent handles our property inquiries flawlessly. Our team now focuses on closing deals instead of answering the same questions all day.',
    name: 'James Ochieng',
    role: 'Director, CloudHaven Digital',
    initials: 'JO',
  },
  {
    text: 'We went from manually replying to hundreds of WhatsApp messages to fully automated order tracking and support. Our customers love the instant responses.',
    name: 'Aminah Hassan',
    role: 'COO, SparkLine Innovations',
    initials: 'AH',
  },
]

const automationChannels = [
  'WhatsApp',
  'Instagram',
  'Facebook',
  'Email',
  'SMS',
  'Outgoing AI Calls',
  'Incoming AI Calls',
]

export default function Home() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleChannel = (channel: string) => {
    setSelectedChannels(prev =>
      prev.includes(channel) ? prev.filter(c => c !== channel) : [...prev, channel]
    )
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    formData.set('automationChannels', selectedChannels.join(', '))
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setQuoteSubmitted(true))
      .catch(() => setQuoteSubmitted(true))
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setContactSubmitted(true))
      .catch(() => setContactSubmitted(true))
  }

  const sectionHeader = (title: string, subtitle?: string) => (
    <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '4rem' }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, marginBottom: '1rem',
        fontFamily: "'Playfair Display', serif", position: 'relative', display: 'inline-block',
      }}>
        {title}
        <span style={{
          position: 'absolute', bottom: -12, left: '50%', transform: 'translateX(-50%)',
          width: 60, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_BRIGHT})`, borderRadius: 2,
        }} />
      </h2>
      {subtitle && <p style={{ color: TEXT_MUTED, fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>{subtitle}</p>}
    </div>
  )

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '8rem 2rem 4rem',
        background: 'linear-gradient(135deg, #0a0f1a 0%, #0f1a2e 50%, #0a0f1a 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-30%', left: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.3)',
            color: GOLD_BRIGHT, padding: '0.5rem 1.2rem', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
          }}>🚀 Chat on WhatsApp</div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem',
            fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #e8c547 0%, #ffffff 40%, #f5e6a3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            NEXAFLOW <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}>DIGITAL</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: TEXT_MUTED, maxWidth: 600, margin: '0 auto 2rem' }}>
            We architect digital systems for modern businesses — from high-performance websites to intelligent voice agents and automated chat workflows that run 24/7.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" style={{
              background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white', padding: '1rem 2.5rem',
              borderRadius: 12, fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
            }}>View Packages →</a>
            <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent', color: '#f8fafc', padding: '1rem 2.5rem', borderRadius: 12,
              fontWeight: 600, fontSize: '1rem', border: `2px solid ${BORDER}`, textDecoration: 'none',
            }}>📱 WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Everything you need to digitalize your business', 'Full-stack digital solutions built for performance. One team, one vision — from pixel-perfect interfaces to AI models in production.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map(s => (
              <div key={s.num} style={{
                background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '2rem', position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'rgba(201,162,39,0.2)', position: 'absolute', top: '1rem', right: '1.5rem' }}>{s.num}</div>
                <div style={{ width: '100%', height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: '1rem' }}>
                  <img src={s.img} alt={s.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: '0.95rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ padding: '1.5rem 0', background: '#111827', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 20s linear infinite' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i}>
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>WEB DEVELOPMENT</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>AI CALLING AGENTS</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>WHATSAPP AUTOMATION</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>SHOPIFY SOLUTIONS</span> •
              <span style={{ color: TEXT_DARK, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 1rem' }}>CHAT AUTOMATION</span> •
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #111827 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Smart Solutions for Every Budget', 'All packages include a FREE domain name, professional email address, and FREE SSL Certificate.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {pricing.map(p => (
              <div key={p.name} style={{
                background: CARD, border: `1px solid ${p.popular ? GOLD : BORDER}`, borderRadius: 20, padding: '2.5rem',
                position: 'relative', transition: 'all 0.3s',
                boxShadow: p.popular ? '0 0 40px rgba(201,162,39,0.15)' : 'none',
              }}>
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
                      <span style={{ color: f.includes('FREE SSL') ? GOLD_BRIGHT : '#f8fafc' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}`} target="_blank" rel="noopener noreferrer" style={{
                  width: '100%', padding: '1rem', borderRadius: 12, border: p.popular ? 'none' : `2px solid ${BORDER}`,
                  background: p.popular ? `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})` : 'transparent',
                  color: p.popular ? '#0a0f1a' : '#f8fafc', fontWeight: 700, fontSize: '1rem',
                  textDecoration: 'none', display: 'block', textAlign: 'center',
                }}>Get Started</a>
                <p style={{ textAlign: 'center', color: TEXT_MUTED, fontSize: '0.9rem', marginTop: '0.5rem' }}>Annual maintenance: KSH 2,000/year</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section style={{ padding: '3rem 0', background: '#111827', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Value-Added Services')}
          <table style={{ width: '100%', maxWidth: 700, margin: '2rem auto 0', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: `1px solid ${BORDER}`, color: ACCENT_GLOW, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: `1px solid ${BORDER}`, color: ACCENT_GLOW, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price</th>
                <th style={{ padding: '1rem', textAlign: 'right', borderBottom: `1px solid ${BORDER}`, color: ACCENT_GLOW, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: 'SEO Setup', price: 'KSH 3,000 – 5,000', freq: 'One-time' },
                { service: 'Content Creation', price: 'KSH 1,500 – 3,000', freq: 'Per article' },
                { service: 'Enhanced Maintenance', price: 'KSH 2,500 – 5,000', freq: 'Monthly' },
                { service: 'Social Media Management', price: 'KSH 5,000 – 10,000', freq: 'Monthly' },
              ].map(row => (
                <tr key={row.service}>
                  <td style={{ padding: '1rem', borderBottom: `1px solid ${BORDER}`, color: TEXT_MUTED, fontSize: '0.95rem' }}>{row.service}</td>
                  <td style={{ padding: '1rem', borderBottom: `1px solid ${BORDER}`, color: TEXT_MUTED, fontSize: '0.95rem' }}>{row.price}</td>
                  <td style={{ padding: '1rem', borderBottom: `1px solid ${BORDER}`, textAlign: 'right', color: GOLD_BRIGHT, fontWeight: 600, fontSize: '0.95rem' }}>{row.freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AI Automation Quote Form */}
      <section style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('AI Automation Quote', 'Automate your business across WhatsApp, Instagram, Facebook, Email, SMS, and AI call centers. Request a custom quote today.')}
          <div style={{ maxWidth: 700, margin: '0 auto', background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: '2.5rem' }}>
            {quoteSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Quote Request Received!</h3>
                <p style={{ color: TEXT_MUTED }}>We'll get back to you within 24 hours with a tailored quote for your AI automation needs.</p>
              </div>
            ) : (
              <form name="ai-quote-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleQuoteSubmit}>
                <input type="hidden" name="form-name" value="ai-quote-form" />
                <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Automation Channels *</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {automationChannels.map(ch => (
                      <button key={ch} type="button" onClick={() => toggleChannel(ch)} style={{
                        padding: '0.5rem 1rem', borderRadius: 50, border: `1px solid ${selectedChannels.includes(ch) ? GOLD : BORDER}`,
                        background: selectedChannels.includes(ch) ? `rgba(201,162,39,0.2)` : 'transparent',
                        color: selectedChannels.includes(ch) ? GOLD_BRIGHT : TEXT_MUTED, fontSize: '0.85rem', cursor: 'pointer',
                      }}>
                        {selectedChannels.includes(ch) ? '✓ ' : ''}{ch}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="automationChannels" value={selectedChannels.join(', ')} />
                </div>

                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'John Doe', required: true },
                  { label: 'Email *', name: 'email', type: 'email', placeholder: 'john@company.com', required: true },
                  { label: 'Phone *', name: 'phone', type: 'tel', placeholder: '+254 7XX XXX XXX', required: true },
                  { label: 'Website (optional)', name: 'website', type: 'url', placeholder: 'https://yourcompany.com', required: false },
                ].map(field => (
                  <div key={field.name} style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>{field.label}</label>
                    <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required}
                      style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem' }} />
                  </div>
                ))}

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Describe what you want automated *</label>
                  <textarea name="message" placeholder="Tell us about your business and what you'd like to automate..." required rows={4}
                    style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical' }} />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '1rem', borderRadius: 12, border: 'none',
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white',
                  fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                }}>Request Quote →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Projects that deliver real results', '4 Projects')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {projects.map(p => (
              <div key={p.title} style={{
                background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: '100%', height: 180, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{
                    display: 'inline-block', background: 'rgba(201,162,39,0.15)', color: GOLD_BRIGHT,
                    padding: '0.3rem 0.8rem', borderRadius: 50, fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem',
                  }}>{p.badge}</span>
                  <p style={{ color: TEXT_DARK, fontSize: '0.8rem', marginBottom: '0.5rem' }}>{p.num}</p>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '1rem' }}>{p.desc}</p>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT_GLOW, fontSize: '0.9rem', fontWeight: 600 }}>Visit Site →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedial AI Section */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #111827 0%, #0a0f1a 100%)', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Powered by WeDial AI', 'Our proprietary AI agent platform. Launch intelligent voice and chat agents that work 24/7 across 7 channels.')}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem',
          }}>
            {[
              { icon: '📞', title: 'AI Voice Calls', desc: 'Human-like voice agents for inbound and outbound calls. Handle bookings, support, and sales calls autonomously.' },
              { icon: '💬', title: 'WhatsApp Automation', desc: 'Smart WhatsApp Business API workflows for support, orders, and marketing at unlimited scale.' },
              { icon: '📱', title: 'Social Media Agents', desc: 'Automated Instagram and Facebook DM responses that convert followers into customers.' },
              { icon: '🤖', title: 'Web Chat Bots', desc: 'Intelligent website chatbots that capture leads, answer questions, and drive conversions.' },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://wedialai.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', padding: '1rem 2.5rem', borderRadius: 12,
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`, color: '#0a0f1a',
              fontWeight: 700, fontSize: '1rem', textDecoration: 'none', marginRight: '1rem',
            }}>Launch Your AI Agent →</a>
            <a href="https://wedialai.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', padding: '1rem 2.5rem', borderRadius: 12,
              background: 'transparent', color: '#f8fafc', border: `2px solid ${BORDER}`,
              fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
            }}>Login to Create Agents</a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Built for results, not just deliverables', 'We don\'t just build websites and bots. We engineer complete digital ecosystems that generate revenue while you sleep.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '100%', height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: '1rem' }}>
                  <img src={w.img} alt={w.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{w.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: '0.9rem' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #111827 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Trusted by businesses that move fast')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1rem', left: '1.5rem', fontSize: '4rem', color: GOLD, opacity: 0.3, lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>"</span>
                <p style={{ fontSize: '1rem', color: TEXT_MUTED, marginBottom: '1.5rem', marginTop: '1rem' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 48, height: 48, background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem',
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: TEXT_DARK, fontSize: '0.85rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #0f1a2e 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader("Let's Build Something Great", 'Ready to digitalize your business? Reach out however works best for you.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Get in Touch</h3>
              <p style={{ color: TEXT_MUTED, marginBottom: '2rem' }}>Ready to digitalize your business? We're here to help.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '💬', label: 'WhatsApp', value: '+254 106 216 699 — Fastest response', href: 'https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I\'m%20interested%20in%20your%20services' },
                  { icon: '📞', label: 'Phone', value: '+254 106 216 699', href: 'tel:+254106216699' },
                  { icon: '✉️', label: 'Email', value: 'smartsolutions870@gmail.com', href: 'mailto:smartsolutions870@gmail.com' },
                  { icon: '🤖', label: 'AI Agent Platform', value: 'wedialai.com — White-label available', href: 'https://wedialai.com' },
                ].map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem',
                    background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.transform = 'translateX(5px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateX(0)' }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.2rem', color: '#f8fafc' }}>{c.label}</strong>
                      <span style={{ color: TEXT_MUTED, fontSize: '0.9rem' }}>{c.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h4>
                  <p style={{ color: TEXT_MUTED }}>We'll reply within 24 hours. Or WhatsApp us for instant replies 💬</p>
                </div>
              ) : (
                <form name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleContactSubmit}>
                  <input type="hidden" name="form-name" value="contact-form" />
                  <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>
                  {[
                    { label: 'Your Name', name: 'name', type: 'text', placeholder: 'John Doe', required: true },
                    { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com', required: true },
                    { label: 'Phone (optional)', name: 'phone', type: 'tel', placeholder: '+254 7XX XXX XXX', required: false },
                  ].map(field => (
                    <div key={field.name} style={{ marginBottom: '1.2rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>{field.label}</label>
                      <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required}
                        style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem' }} />
                    </div>
                  ))}
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Service Needed</label>
                    <select name="service" required style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem' }}>
                      <option value="">Select...</option>
                      <option value="website">Website Development</option>
                      <option value="ai-agents">AI Calling Agents</option>
                      <option value="whatsapp">WhatsApp Automation</option>
                      <option value="chat">Web Chat Automation</option>
                      <option value="shopify">Shopify Solutions</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Message</label>
                    <textarea name="message" placeholder="Tell us about your project..." required rows={4}
                      style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '1rem', borderRadius: 12, border: 'none',
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white',
                    fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                  }}>Send Message →</button>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.85rem', marginTop: '1rem', textAlign: 'center' }}>We'll reply within 24 hours. Or WhatsApp us for instant replies 💬</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
