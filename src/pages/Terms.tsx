import { useEffect } from 'react'
import { Link } from 'react-router'

const TEXT_MUTED = '#94a3b8'

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 4rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Link to="/" style={{ color: '#e8c547', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>← Back to Homepage</Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>Terms of Service</h1>
        <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: June 1, 2026</p>

        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>Welcome to NexaFlow Digital. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>1. Services</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>NexaFlow Digital provides website development, AI automation, chatbot development, WhatsApp automation, and related digital services. All services are subject to the terms outlined in individual project agreements.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>2. Payments</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>Payment terms are specified in individual project quotes. Typically, 50% deposit is required before work begins, with the balance due upon project completion. We accept M-Pesa, bank transfer, and major credit cards.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>3. Intellectual Property</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>Upon full payment, clients receive full ownership of custom code, designs, and content created specifically for their project. We retain the right to use generic components and frameworks across multiple projects.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>4. Limitation of Liability</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>NexaFlow Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>5. Contact</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem' }}>For questions about these Terms, please contact:</p>
        <ul style={{ color: TEXT_MUTED, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Email: <a href="mailto:smartsolutions870@gmail.com" style={{ color: '#e8c547' }}>smartsolutions870@gmail.com</a></li>
          <li style={{ marginBottom: '0.5rem' }}>WhatsApp: <a href="https://wa.me/254106216699" style={{ color: '#e8c547' }}>+254 106 216 699</a></li>
        </ul>
      </div>
    </div>
  )
}
