import { useState, useEffect, useRef, useCallback } from 'react'

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
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=240&fit=crop&auto=format&q=80',
  },
  {
    num: '02',
    title: 'AI Calling Agents',
    desc: 'Intelligent voice agents that handle inbound and outbound calls around the clock. Book appointments, qualify leads, serve customers.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=240&fit=crop&auto=format&q=80',
  },
  {
    num: '03',
    title: 'WhatsApp Automation',
    desc: 'WhatsApp Business API workflows for support, order updates, marketing campaigns, and lead nurturing at scale.',
    img: 'https://images.unsplash.com/photo-1611746869696-d09bce200020?w=600&h=240&fit=crop&auto=format&q=80',
  },
  {
    num: '04',
    title: 'Web Chat Automation',
    desc: 'Smart chatbots that engage visitors, answer questions, capture leads, and drive conversions in real-time on your website.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=240&fit=crop&auto=format&q=80',
  },
  {
    num: '05',
    title: 'Social Chat Automation',
    desc: 'Automated Messenger and Instagram DM workflows to engage social audiences and turn followers into paying customers.',
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=240&fit=crop&auto=format&q=80',
  },
  {
    num: '06',
    title: 'Shopify Cart Recovery',
    desc: 'Recover lost revenue with automated abandoned cart sequences and intelligent chat flows integrated with your Shopify store.',
    img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=240&fit=crop&auto=format&q=80',
  },
  {
    num: '07',
    title: 'E-Shop Design',
    desc: 'Complete online shop design with product catalogs, payment integration (M-Pesa included), inventory management, and mobile-optimized checkout.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=240&fit=crop&auto=format&q=80',
    price: 'KSH 40,000',
  },
  {
    num: '08',
    title: 'Web App + Android App',
    desc: 'Full-featured web application paired with a native Android app. Real-time data sync, push notifications, offline support, and scalable backend.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=240&fit=crop&auto=format&q=80',
    price: 'KSH 50,000',
  },
  {
    num: '09',
    title: 'WeDialAI White-Label',
    desc: 'Launch your own branded AI agent platform. Full white-label solution with your logo, domain, and custom pricing. Powered by our proven technology.',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=240&fit=crop&auto=format&q=80',
    price: 'KSH 128,000',
    link: 'https://wedialai.com',
  },
]

const pricing = [
  {
    name: 'Basic Package',
    subtitle: '5 Pages — Price-sensitive clients',
    price: 'KSH 6,500',
    features: ['Contact form', 'Image gallery', 'Social media integration', 'Responsive design', 'FREE SSL Certificate'],
    notIncluded: ['Professional email setup'],
    popular: false,
  },
  {
    name: 'Standard Package',
    subtitle: '10 Pages — Growing businesses',
    price: 'KSH 12,000',
    features: ['Everything in Basic', 'Blog setup', 'Enhanced SEO', 'Google Business Profile', '3 months priority support', 'FREE SSL Certificate'],
    notIncluded: ['Professional email setup'],
    popular: true,
  },
  {
    name: 'Premium Package',
    subtitle: '10+ Pages — Established businesses',
    price: 'KSH 18,000',
    features: ['Everything in Standard', 'CMS integration', 'Advanced SEO', 'Analytics dashboard', '6 months priority support', 'Professional email setup', 'FREE SSL Certificate'],
    popular: false,
  },
]

const additionalProducts = [
  {
    name: 'E-Shop Design',
    desc: 'Complete online shop with M-Pesa integration, product catalog, inventory management, and mobile checkout.',
    price: 'KSH 40,000',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'E-COMMERCE',
  },
  {
    name: 'Web App + Android App',
    desc: 'Full-featured web application with native Android companion. Real-time sync, push notifications, offline mode.',
    price: 'KSH 50,000',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'FULL STACK',
  },
  {
    name: 'WeDialAI White-Label',
    desc: 'Your own branded AI agent platform. Voice calls, WhatsApp, social media — all under your brand.',
    price: 'KSH 128,000',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'ENTERPRISE',
    link: 'https://wedialai.com',
  },
]

const projects = [
  {
    badge: 'Live Platform',
    num: 'No. 01',
    title: 'WeDialAI',
    desc: 'Full-featured AI agent platform we built and operate. 7-channel communication — voice calls, WhatsApp, Instagram, Facebook, Shopify, web chat. Live at wedialai.com.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://wedialai.com',
  },
  {
    badge: 'Live Website',
    num: 'No. 02',
    title: 'Labuima Masai Mara Safaris',
    desc: 'Wildlife safari booking platform with immersive photo galleries, itinerary builder, and direct booking integration. Built for a premier Masai Mara tour operator.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://labuimaasaimarasafaris.com/',
  },
  {
    badge: '+142% conversion',
    num: 'No. 03',
    title: 'Nairobi Fashion Brand',
    desc: 'Full-featured e-commerce with custom catalog, M-Pesa integration, and mobile-first design. Conversion rate doubled in 30 days.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=280&fit=crop&auto=format&q=80',
    link: null,
  },
  {
    badge: '80% calls automated',
    num: 'No. 04',
    title: 'Real Estate Agency',
    desc: '24/7 AI voice agent handling property inquiries, scheduling viewings, and qualifying leads. Now manages 80% of all inbound calls.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=280&fit=crop&auto=format&q=80',
    link: null,
  },
]

const whyUs = [
  {
    title: 'Results-First Pricing',
    desc: 'We measure success by revenue generated and hours saved — not just tasks completed. Every project ties back to your bottom line.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=220&fit=crop&auto=format&q=80',
  },
  {
    title: 'Full-Stack In-House',
    desc: 'From UI design to AI model deployment, everything happens under one roof. No handoffs, no delays, no blame-shifting.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=220&fit=crop&auto=format&q=80',
  },
  {
    title: 'AI-Native Architecture',
    desc: 'Our systems are built with automation at the core, not bolted on. This means real intelligence, not just rule-based chatbots.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=220&fit=crop&auto=format&q=80',
  },
  {
    title: 'Local Market Expertise',
    desc: 'Deep understanding of East African business — M-Pesa integrations, local compliance, and customer behavior patterns.',
    img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500&h=220&fit=crop&auto=format&q=80',
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

const wedialaiFeatures = [
  { icon: '📞', title: 'AI Voice Calls', desc: 'Human-like voice agents for inbound and outbound calls. Handle bookings, support, and sales calls autonomously with natural conversation flow.' },
  { icon: '💬', title: 'WhatsApp Automation', desc: 'Smart WhatsApp Business API workflows for support, orders, and marketing at unlimited scale. Broadcast to thousands instantly.' },
  { icon: '📱', title: 'Social Media Agents', desc: 'Automated Instagram and Facebook DM responses that convert followers into customers. Never miss a message again.' },
  { icon: '🤖', title: 'Web Chat Bots', desc: 'Intelligent website chatbots that capture leads, answer questions, and drive conversions 24/7 without human intervention.' },
  { icon: '📧', title: 'Email Automation', desc: 'Smart email sequences that nurture leads from first contact to purchase. Personalized at scale.' },
  { icon: '🛒', title: 'Shopify Integration', desc: 'Connect your store for abandoned cart recovery, order updates, and customer support — all automated.' },
]

const automationChannels = [
  'WhatsApp', 'Instagram', 'Facebook', 'Email', 'SMS', 'Outgoing AI Calls', 'Incoming AI Calls',
]

// Animated particles for hero background
function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; char: string }[] = []
    const chars = ['{', '}', '<', '>', '/', ';', '(', ')', '=', '0', '1', '▮', '▯', '▭']

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 14 + 8,
        opacity: Math.random() * 0.3 + 0.1,
        char: chars[Math.floor(Math.random() * chars.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.offsetWidth
        if (p.x > canvas.offsetWidth) p.x = 0
        if (p.y < 0) p.y = canvas.offsetHeight
        if (p.y > canvas.offsetHeight) p.y = 0

        ctx.font = `${p.size}px monospace`
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.fillText(p.char, p.x, p.y)
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }} />
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
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, marginBottom: '1rem',
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
        <HeroParticles />
        {/* Glowing orbs */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'pulse 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'pulse 10s ease-in-out infinite reverse' }} />
        <div style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.25)',
            color: GOLD_BRIGHT, padding: '0.5rem 1.5rem', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
          }}>
            <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} /> 
            Trusted by 50+ Kenyan Businesses
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '1.5rem',
            fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em',
          }}>
            <span style={{ background: 'linear-gradient(135deg, #e8c547 0%, #ffffff 50%, #f5e6a3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Professional Website
            </span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #ffffff 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Development & AI Automation
            </span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: TEXT_MUTED, maxWidth: 650, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            We build high-performance websites and intelligent AI systems that grow your business while you sleep. 
            From KSH 6,500. Based in Nairobi, serving Kenya & beyond.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" style={{
              background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white', padding: '1rem 2.5rem',
              borderRadius: 12, fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(59,130,246,0.3)', transition: 'all 0.3s',
            }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(59,130,246,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(59,130,246,0.3)' }}>
              View Packages →
            </a>
            <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent', color: '#f8fafc', padding: '1rem 2.5rem', borderRadius: 12,
              fontWeight: 600, fontSize: '1rem', border: `2px solid ${BORDER}`, textDecoration: 'none', transition: 'all 0.3s',
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD_BRIGHT }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = '#f8fafc' }}>
              💬 WhatsApp Us
            </a>
          </div>
          {/* Trust badges */}
          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.7 }}>
            {['⚡ Fast Delivery', '🔒 Secure & Reliable', '💰 M-Pesa Ready', '📱 Mobile First'].map(b => (
              <span key={b} style={{ fontSize: '0.85rem', color: TEXT_MUTED, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>{b}</span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes pulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        `}</style>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Everything you need to digitalize your business', 'Full-stack digital solutions built for performance. One team, one vision — from pixel-perfect interfaces to AI models in production.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.map(s => (
              <div key={s.num} style={{
                background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden',
                transition: 'all 0.3s', position: 'relative',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)'; e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
              >
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
            ))}
          </div>
        </div>
      </section>

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
        <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
      </div>

      {/* ===== PRICING ===== */}
      <section id="pricing" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #111827 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Smart Solutions for Every Budget', 'All packages include a FREE domain name and FREE SSL Certificate. Professional email setup available on Premium only.')}
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
                <p style={{ textAlign: 'center', color: TEXT_MUTED, fontSize: '0.9rem', marginTop: '0.5rem' }}>Annual maintenance: KSH 2,000/year</p>
              </div>
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
          {sectionHeader('Additional Solutions', 'Specialized products for businesses ready to scale beyond a standard website.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {additionalProducts.map(p => (
              <div key={p.name} style={{
                background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
              >
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
                      <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                        padding: '0.7rem 1.5rem', borderRadius: 10, background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white',
                        fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                      }}>Learn More →</a>
                    ) : (
                      <a href={`https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20${encodeURIComponent(p.name)}`} target="_blank" rel="noopener noreferrer" style={{
                        padding: '0.7rem 1.5rem', borderRadius: 10, background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white',
                        fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                      }}>Get Started →</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUE ADDED SERVICES ===== */}
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

      {/* ===== AI AUTOMATION QUOTE FORM ===== */}
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
              <form name="ai-quote-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit(setQuoteSubmitted)}>
                <input type="hidden" name="form-name" value="ai-quote-form" />
                <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Automation Channels *</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {automationChannels.map(ch => (
                      <button key={ch} type="button" onClick={() => toggleChannel(ch)} style={{
                        padding: '0.5rem 1rem', borderRadius: 50, border: `1px solid ${selectedChannels.includes(ch) ? GOLD : BORDER}`,
                        background: selectedChannels.includes(ch) ? `rgba(201,162,39,0.2)` : 'transparent',
                        color: selectedChannels.includes(ch) ? GOLD_BRIGHT : TEXT_MUTED, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s',
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
                      style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                      onBlur={e => { e.currentTarget.style.borderColor = BORDER }} />
                  </div>
                ))}

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Describe what you want automated *</label>
                  <textarea name="message" placeholder="Tell us about your business and what you'd like to automate..." required rows={4}
                    style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                    onBlur={e => { e.currentTarget.style.borderColor = BORDER }} />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '1rem', borderRadius: 12, border: 'none',
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white',
                  fontWeight: 700, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(59,130,246,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                  Request Quote →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="work" style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Projects that deliver real results', '4 Projects')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {projects.map(p => (
              <div key={p.title} style={{
                background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ===== WEDIAL AI SECTION ===== */}
      <section id="wedialai" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #111827 0%, #0a0f1a 100%)', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Powered by WeDial AI', 'Launch your own AI agent army. One platform. Seven channels. Infinite possibilities. Your customers never wait again.')}
          
          {/* WeDialAI Explanation */}
          <div style={{ maxWidth: 800, margin: '0 auto 3rem', textAlign: 'center' }}>
            <p style={{ color: TEXT_MUTED, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              WeDial AI is our flagship AI agent platform — the same technology powering our own operations. 
              It connects voice calls, WhatsApp, Instagram, Facebook, email, SMS, and web chat into one 
              intelligent system that learns your business and handles customer interactions autonomously, 24/7.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT }}>7</div>
                <div style={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>Channels</div>
              </div>
              <div style={{ width: 1, background: BORDER }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT }}>24/7</div>
                <div style={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>Availability</div>
              </div>
              <div style={{ width: 1, background: BORDER }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT }}>&lt;1s</div>
                <div style={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>Response Time</div>
              </div>
              <div style={{ width: 1, background: BORDER }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD_BRIGHT }}>∞</div>
                <div style={{ color: TEXT_MUTED, fontSize: '0.85rem' }}>Scale</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {wedialaiFeatures.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '2rem', textAlign: 'center', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* WeDialAI CTA */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://wedialai.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', padding: '1rem 2.5rem', borderRadius: 12,
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`, color: '#0a0f1a',
              fontWeight: 700, fontSize: '1rem', textDecoration: 'none', marginRight: '1rem', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,162,39,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              Launch Your AI Agent →
            </a>
            <a href="https://wedialai.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', padding: '1rem 2.5rem', borderRadius: 12,
              background: 'transparent', color: '#f8fafc', border: `2px solid ${BORDER}`,
              fontWeight: 600, fontSize: '1rem', textDecoration: 'none', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD_BRIGHT }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = '#f8fafc' }}>
              Login to Create Agents
            </a>
          </div>

          {/* WeDialAI Inquiry Form */}
          <div style={{ maxWidth: 700, margin: '4rem auto 0', background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: '2.5rem' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Interested in WeDial AI?</h3>
            <p style={{ textAlign: 'center', color: TEXT_MUTED, marginBottom: '2rem' }}>Get a personalized demo or discuss white-label options.</p>
            {wedialaiSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Inquiry Sent!</h4>
                <p style={{ color: TEXT_MUTED }}>We'll contact you within 24 hours to schedule your demo.</p>
              </div>
            ) : (
              <form name="wedialai-inquiry-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit(setWedialaiSubmitted)}>
                <input type="hidden" name="form-name" value="wedialai-inquiry-form" />
                <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>
                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'John Doe', required: true },
                  { label: 'Email *', name: 'email', type: 'email', placeholder: 'john@company.com', required: true },
                  { label: 'Phone *', name: 'phone', type: 'tel', placeholder: '+254 7XX XXX XXX', required: true },
                  { label: 'Company Name', name: 'company', type: 'text', placeholder: 'Your Company Ltd', required: false },
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
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>I'm interested in *</label>
                  <select name="interest" required style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }}
                    onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                    onBlur={e => { e.currentTarget.style.borderColor = BORDER }}>
                    <option value="">Select...</option>
                    <option value="demo">Schedule a Demo</option>
                    <option value="white-label">White-Label Solution</option>
                    <option value="integration">Integration Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Message</label>
                  <textarea name="message" placeholder="Tell us about your needs..." rows={3}
                    style={{ width: '100%', padding: '0.8rem', background: '#0a0f1a', border: `1px solid ${BORDER}`, borderRadius: 10, color: '#f8fafc', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => { e.currentTarget.style.borderColor = GOLD }}
                    onBlur={e => { e.currentTarget.style.borderColor = BORDER }} />
                </div>
                <button type="submit" style={{
                  width: '100%', padding: '1rem', borderRadius: 12, border: 'none',
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`, color: '#0a0f1a',
                  fontWeight: 700, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(201,162,39,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                  Send Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section style={{ padding: '4rem 0', background: '#0a0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Built for results, not just deliverables', 'We don\'t just build websites and bots. We engineer complete digital ecosystems that generate revenue while you sleep.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ textAlign: 'center', padding: '2rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ width: '100%', height: 180, borderRadius: 12, overflow: 'hidden', marginBottom: '1rem' }}>
                  <img src={w.img} alt={w.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{w.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #111827 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader('Trusted by businesses that move fast')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '2rem', position: 'relative', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)' }}>
                <span style={{ position: 'absolute', top: '1rem', left: '1.5rem', fontSize: '4rem', color: GOLD, opacity: 0.3, lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>"</span>
                <p style={{ fontSize: '1rem', color: TEXT_MUTED, marginBottom: '1.5rem', marginTop: '1rem', lineHeight: 1.7 }}>{t.text}</p>
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

      {/* ===== CONTACT ===== */}
      <section id="contact" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #0f1a2e 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {sectionHeader("Let's Build Something Great", 'Ready to digitalize your business? Reach out however works best for you.')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Get in Touch</h3>
              <p style={{ color: TEXT_MUTED, marginBottom: '2rem', lineHeight: 1.7 }}>
                Ready to transform your business? We're here to help. Whether you need a website, AI automation, or a complete digital overhaul — let's talk.
              </p>
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
                    onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateX(0)' }}>
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
              <h3 style={{ marginBottom: '0.5rem' }}>Send a Message</h3>
              <p style={{ color: TEXT_MUTED, fontSize: '0.85rem', marginBottom: '1.5rem' }}>We'll reply within 24 hours</p>
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h4>
                  <p style={{ color: TEXT_MUTED }}>We'll reply within 24 hours. Or WhatsApp us for instant replies 💬</p>
                </div>
              ) : (
                <form name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit(setContactSubmitted)}>
                  <input type="hidden" name="form-name" value="contact-form" />
                  <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>
                  {[
                    { label: 'Your Name *', name: 'name', type: 'text', placeholder: 'John Doe', required: true },
                    { label: 'Email *', name: 'email', type: 'email', placeholder: 'john@company.com', required: true },
                    { label: 'Phone (optional)', name: 'phone', type: 'tel', placeholder: '+254 7XX XXX XXX', required: false },
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
                  <button type="submit" style={{
                    width: '100%', padding: '1rem', borderRadius: 12, border: 'none',
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`, color: 'white',
                    fontWeight: 700, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(59,130,246,0.4)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                    Send Message →
                  </button>
                  <p style={{ color: TEXT_MUTED, fontSize: '0.85rem', marginTop: '1rem', textAlign: 'center' }}>Or WhatsApp us for instant replies 💬</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
