import { useEffect } from 'react'
import { Link } from 'react-router'

const TEXT_MUTED = '#94a3b8'

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 4rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Link to="/" style={{ color: '#e8c547', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>← Back to Homepage</Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
        <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: June 1, 2026</p>

        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>At NexaFlow Digital, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>1. Information We Collect</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem' }}>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul style={{ color: TEXT_MUTED, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Fill out our contact form (name, email, phone number, message)</li>
          <li style={{ marginBottom: '0.5rem' }}>Contact us via WhatsApp, email, or phone</li>
          <li style={{ marginBottom: '0.5rem' }}>Sign up for our services</li>
          <li style={{ marginBottom: '0.5rem' }}>Subscribe to our newsletter</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>2. How We Use Your Information</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem' }}>We use the information we collect to:</p>
        <ul style={{ color: TEXT_MUTED, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Provide, operate, and maintain our services</li>
          <li style={{ marginBottom: '0.5rem' }}>Respond to your inquiries and support requests</li>
          <li style={{ marginBottom: '0.5rem' }}>Process transactions and send related information</li>
          <li style={{ marginBottom: '0.5rem' }}>Improve our website and services</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>3. Cookies</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>4. Data Security</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>5. Contact Us</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem' }}>If you have questions about this Privacy Policy, please contact us:</p>
        <ul style={{ color: TEXT_MUTED, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Email: <a href="mailto:smartsolutions870@gmail.com" style={{ color: '#e8c547' }}>smartsolutions870@gmail.com</a></li>
          <li style={{ marginBottom: '0.5rem' }}>WhatsApp: <a href="https://wa.me/254106216699" style={{ color: '#e8c547' }}>+254 106 216 699</a></li>
        </ul>
      </div>
    </div>
  )
}
