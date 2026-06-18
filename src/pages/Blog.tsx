import { useEffect } from 'react'
import { Link } from 'react-router'

const GOLD_BRIGHT = '#e8c547'
const TEXT_MUTED = '#94a3b8'

const blogPosts = [
  {
    slug: 'ai-chatbots-kenya',
    title: 'Why AI Chatbots Are Essential for Kenyan Businesses in 2025',
    date: 'March 15, 2025',
    excerpt: 'Discover why Kenyan businesses are rapidly adopting AI chatbots to handle customer service, sales, and support — and how you can get started today.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop&auto=format&q=80',
  },
  {
    slug: 'shopify-vs-woocommerce-kenya',
    title: 'Shopify vs WooCommerce: Which is Best for Kenyan E-commerce?',
    date: 'February 28, 2025',
    excerpt: 'A comprehensive comparison of the two leading e-commerce platforms for Kenyan businesses. We break down pricing, features, and local payment integrations.',
    img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=340&fit=crop&auto=format&q=80',
  },
  {
    slug: 'website-cost-kenya-2026',
    title: 'How Much Does a Website Cost in Kenya? (2026 Guide)',
    date: 'January 20, 2025',
    excerpt: 'Everything you need to know about website pricing in Kenya. From basic brochure sites to complex e-commerce platforms — we break down the real costs.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=340&fit=crop&auto=format&q=80',
  },
  {
    slug: 'whatsapp-automation-kenya',
    title: 'WhatsApp Automation for Business: The Complete Kenya Guide',
    date: 'December 10, 2024',
    excerpt: 'Learn how to leverage WhatsApp Business API to automate customer support, send order updates, and run marketing campaigns at scale in Kenya.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop&auto=format&q=80',
  },
]

export default function Blog() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 4rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.24em', color: GOLD_BRIGHT, textTransform: 'uppercase', marginBottom: '1rem' }}>Insights & Ideas</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>The NexaFlow Blog</h1>
          <p style={{ color: TEXT_MUTED, fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>Expert perspectives on web development, AI automation, and digital strategy for businesses across Kenya and East Africa.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {blogPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{
              background: '#1e293b', border: '1px solid #334155', borderRadius: 16, overflow: 'hidden',
              textDecoration: 'none', color: 'inherit', transition: 'all 0.3s', display: 'block',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ width: '100%', height: 200, overflow: 'hidden' }}>
                <img src={post.img} alt={post.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: TEXT_MUTED, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{post.date}</p>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: 1.5 }}>{post.excerpt}</p>
                <span style={{ display: 'inline-block', marginTop: '1rem', color: GOLD_BRIGHT, fontWeight: 600, fontSize: '0.9rem' }}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
