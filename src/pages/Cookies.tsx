import { useEffect } from 'react'
import { Link } from 'react-router'

const TEXT_MUTED = '#94a3b8'

export default function Cookies() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 4rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Link to="/" style={{ color: '#e8c547', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>← Back to Homepage</Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>Cookie Policy</h1>
        <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: June 1, 2026</p>

        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>This Cookie Policy explains how NexaFlow Digital uses cookies and similar technologies on our website.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>What Are Cookies?</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>Types of Cookies We Use</h2>
        <ul style={{ color: TEXT_MUTED, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits.</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>Managing Cookies</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem', lineHeight: 1.7 }}>You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Please note that disabling cookies may affect the functionality of our website.</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 1rem', color: '#e8c547' }}>Contact Us</h2>
        <p style={{ color: TEXT_MUTED, marginBottom: '1rem' }}>If you have questions about our Cookie Policy, please contact:</p>
        <ul style={{ color: TEXT_MUTED, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Email: <a href="mailto:smartsolutions870@gmail.com" style={{ color: '#e8c547' }}>smartsolutions870@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}
