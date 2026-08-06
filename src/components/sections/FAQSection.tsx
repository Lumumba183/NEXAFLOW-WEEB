import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { GOLD, GOLD_BRIGHT, TEXT_MUTED, CARD, BORDER } from '../../data'

const faqs = [
  {
    q: 'How does the Upwork escrow process work?',
    a: 'We have a direct contract on Upwork. You deposit funds into Upwork\'s secure escrow system before we start. We then build your complete website on Day 1 and share it with you immediately. Funds are only released when you approve the work. Full protection for both sides.',
  },
  {
    q: 'Do you really design the full website on Day 1?',
    a: 'Yes! When you hire us on Upwork, we design your first website in FULL on the very first day of starting the project. You see real progress immediately — no waiting weeks for a draft. This is our commitment to fast, transparent delivery.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'For international clients: Upwork escrow (secure, protected). For local Kenyan clients: M-Pesa, bank transfer, or cash. All website packages include FREE domain (year 1) and FREE SSL certificate.',
  },
  {
    q: 'How long does a typical website take?',
    a: 'Starter websites: 3-5 days. Business websites: 5-7 days. Premium & e-commerce: 7-14 days. We always deliver your first full draft on Day 1 so you can review progress immediately.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes! We offer three Care Plans: Basic (KSH 3,500/mo) for updates, backups & security; Standard (KSH 7,500/mo) adds content edits; Premium (KSH 15,000/mo) includes SEO monitoring and unlimited minor edits.',
  },
  {
    q: 'Can I see your previous work?',
    a: 'Absolutely! Visit our portfolio at /portfolio to see 9+ live projects including AI platforms, safari booking sites, financial advisory websites, logistics platforms, schools, and nonprofits. We\'ve delivered 50+ projects total.',
  },
  {
    q: 'What is WeDialAI and how does it help my business?',
    a: 'WeDialAI is our flagship AI agent platform that automates customer communication across 7 channels: voice calls, WhatsApp, Instagram, Facebook, email, SMS, and web chat. It works 24/7, qualifies leads, books appointments, and handles support — so your team can focus on closing deals.',
  },
  {
    q: 'Do you build websites for international clients?',
    a: 'Yes! While we\'re based in Nairobi, Kenya, we serve clients worldwide. Our Upwork escrow service makes international payments secure and straightforward. We\'ve worked with clients across Africa, Europe, and North America.',
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease-out ${index * 0.05}s`,
        borderBottom: `1px solid ${BORDER}`,
        padding: '1.25rem 0',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.05rem',
          fontWeight: 600, cursor: 'pointer', textAlign: 'left', padding: 0,
        }}
      >
        <span>{item.q}</span>
        <span style={{
          color: GOLD_BRIGHT, fontSize: '1.5rem', fontWeight: 300,
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.3s ease', flexShrink: 0, marginLeft: '1rem',
        }}>
          +
        </span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s ease-out, padding 0.3s ease',
        paddingTop: open ? '0.75rem' : 0,
      }}>
        <p style={{ color: TEXT_MUTED, fontSize: '0.95rem', lineHeight: 1.7 }}>{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section style={{ padding: '5rem 0', background: '#0a0f1a' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
            color: '#60a5fa', padding: '0.4rem 1.2rem', borderRadius: 50,
            fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
          }}>
            Got Questions?
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
            fontFamily: "'Playfair Display', serif", marginBottom: '1rem',
          }}>
            Frequently Asked <span style={{ color: GOLD_BRIGHT }}>Questions</span>
          </h2>
          <p style={{ color: TEXT_MUTED, fontSize: '1.05rem' }}>
            Everything you need to know about working with us.
          </p>
        </div>

        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
