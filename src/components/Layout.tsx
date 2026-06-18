import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router'

const ACCENT = '#3b82f6'
const GOLD = '#c9a227'
const GOLD_BRIGHT = '#e8c547'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHome) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <div style={{ background: '#0a0f1a', color: '#f8fafc', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%',
        background: scrolled ? 'rgba(10,15,26,0.97)' : 'rgba(10,15,26,0.85)',
        backdropFilter: 'blur(20px)', borderBottom: '1px solid #334155',
        zIndex: 1000, padding: '1rem 0', transition: 'background 0.3s'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, textDecoration: 'none', color: '#f8fafc' }}>
            Nexa<span style={{ color: GOLD_BRIGHT }}>Flow</span> Digital
          </Link>
          <ul style={{
            display: menuOpen ? 'flex' : 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0,
            ...(window.innerWidth < 768 ? { display: menuOpen ? 'flex' : 'none', position: 'absolute', top: '100%', left: 0, right: 0, background: '#0a0f1a', flexDirection: 'column', padding: '2rem', borderBottom: '1px solid #334155' } : {})
          } as React.CSSProperties}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f8fafc')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer"
            style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`, color: '#0a0f1a', padding: '0.6rem 1.5rem', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
            💬 WhatsApp
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.5rem', cursor: 'pointer' }}>☰</button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ paddingTop: 80 }}>{children}</main>

      {/* Footer */}
      <footer style={{ background: '#111827', borderTop: '1px solid #334155', padding: '3rem 2rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>
              Nexa<span style={{ color: GOLD_BRIGHT }}>Flow</span> Digital
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Full-stack digital solutions for modern businesses. Based in Nairobi, serving the world.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Web Development', 'AI Agents', 'WhatsApp Automation', 'Shopify Solutions'].map(s => (
                <li key={s} style={{ marginBottom: '0.5rem' }}>
                  <a href="/" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Pricing', 'Our Work', 'Contact'].map(s => (
                <li key={s} style={{ marginBottom: '0.5rem' }}>
                  <a href="/" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Connect</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://wa.me/254106216699" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>WhatsApp</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="tel:+254106216699" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>Call Us</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="mailto:smartsolutions870@gmail.com" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>Email</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://wedialai.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>Wedial AI</a></li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '3rem auto 0', paddingTop: '2rem', borderTop: '1px solid #334155', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
          <p>© 2026 NexaFlow Digital. All rights reserved. | <Link to="/privacy" style={{ color: '#64748b' }}>Privacy</Link> | <Link to="/terms" style={{ color: '#64748b' }}>Terms</Link> | <Link to="/cookies" style={{ color: '#64748b' }}>Cookies</Link> | <a href="mailto:smartsolutions870@gmail.com" style={{ color: '#64748b' }}>smartsolutions870@gmail.com</a></p>
        </div>
      </footer>
    </div>
  )
}
