import { useEffect } from 'react'
import { useParams, Link } from 'react-router'

const GOLD_BRIGHT = '#e8c547'
const TEXT_MUTED = '#94a3b8'
const CARD = '#1e293b'
const BORDER = '#334155'

const posts: Record<string, {
  title: string
  date: string
  img: string
  content: string[]
  keywords: string[]
  hashtags: string
}> = {
  'ai-chatbots-kenya': {
    title: 'Why AI Chatbots Are Essential for Kenyan Businesses in 2025',
    date: 'March 15, 2025',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format&q=80',
    content: [
      'The Kenyan business landscape is evolving at an unprecedented pace. With over 60 million mobile subscriptions and one of the highest mobile money adoption rates globally, Kenyan consumers expect instant, digital-first interactions with the brands they love. AI chatbots are no longer a luxury — they are a competitive necessity.',
      'At NexaFlow Digital, we have deployed AI chatbots for businesses across Nairobi, Mombasa, and Kisumu. The results are consistent: 40% reduction in customer service costs, 24/7 availability, and dramatically improved customer satisfaction scores. Whether you run an e-commerce store, a real estate agency, or a healthcare clinic, an AI chatbot can transform how you engage with customers.',
      'What makes 2025 the tipping point? Three factors: first, the cost of AI technology has dropped by over 70% in the past two years, making it accessible to SMEs. Second, Kenyan consumers are now comfortable interacting with AI — WhatsApp Business API usage has grown 300% year-over-year. Third, local integration capabilities mean chatbots can now handle M-Pesa payments, Swahili language queries, and local compliance requirements seamlessly.',
      'The chatbots we build at NexaFlow go beyond simple FAQ responses. They qualify leads, process orders, schedule appointments, and integrate with your existing CRM and inventory systems. They learn from every conversation, getting smarter and more effective over time. And they scale effortlessly — handling 10 or 10,000 conversations with the same consistency.',
      'If your business is not using AI chatbots in 2025, you are essentially leaving money on the table. Your competitors are already automating. Your customers are already expecting instant responses. The question is not whether to adopt AI chatbots, but how quickly you can deploy them.',
    ],
    keywords: ['AI chatbots Kenya', 'business automation Nairobi', 'WhatsApp chatbots', 'customer service AI', 'NexaFlow Digital'],
    hashtags: '#AIChatbots #BusinessAutomation #KenyaTech #NairobiBusiness #NexaFlowDigital #CustomerService',
  },
  'shopify-vs-woocommerce-kenya': {
    title: 'Shopify vs WooCommerce: Which is Best for Kenyan E-commerce?',
    date: 'February 28, 2025',
    img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=600&fit=crop&auto=format&q=80',
    content: [
      'Choosing the right e-commerce platform is one of the most important decisions for any Kenyan business selling online. Shopify and WooCommerce dominate the market, but each has distinct advantages depending on your business model, technical expertise, and growth plans.',
      'Shopify is the king of ease-of-use. It is a fully hosted solution, meaning you do not need to worry about server management, security updates, or performance optimization. For Kenyan businesses that want to launch quickly and focus on selling rather than technical maintenance, Shopify is often the best choice. The monthly subscription includes hosting, SSL, and 24/7 support. Plus, Shopify Payments (where available) and integrations with M-Pesa through third-party apps make it viable for the Kenyan market.',
      'WooCommerce, on the other hand, offers unparalleled flexibility. Built on WordPress, it gives you complete control over every aspect of your store. You own your data, you can customize every pixel of the design, and you are not locked into a monthly subscription. For Kenyan businesses with unique requirements — custom product configurators, complex pricing rules, or integration with local logistics providers — WooCommerce is the clear winner.',
      'At NexaFlow Digital, we specialize in both platforms. For startups and small businesses looking to launch fast, we recommend Shopify. For established businesses with complex needs or those wanting full ownership of their platform, we recommend WooCommerce. And in both cases, we ensure seamless M-Pesa integration, mobile-first design, and local SEO optimization.',
      'The bottom line: if you value speed and simplicity, go with Shopify. If you value control and customization, go with WooCommerce. Either way, NexaFlow Digital can build, launch, and optimize your e-commerce store for the Kenyan market.',
    ],
    keywords: ['Shopify Kenya', 'WooCommerce Nairobi', 'e-commerce platform East Africa', 'M-Pesa integration', 'online store Kenya'],
    hashtags: '#Shopify #WooCommerce #EcommerceKenya #NairobiBusiness #OnlineStore #NexaFlowDigital',
  },
  'website-cost-kenya-2026': {
    title: 'How Much Does a Website Cost in Kenya? (2026 Guide)',
    date: 'January 20, 2025',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&auto=format&q=80',
    content: [
      'One of the most common questions we get at NexaFlow Digital is: "How much does a website cost?" The honest answer is: it depends. But in this guide, we will break down the real costs of website development in Kenya for 2026, so you can budget effectively and avoid surprises.',
      'For a basic 5-page brochure website — Home, About, Services, Contact, and one additional page — expect to pay between KSH 6,500 and KSH 15,000. This typically includes responsive design, basic SEO setup, and a contact form. At NexaFlow, our Basic Package starts at KSH 6,500 and includes a free domain, professional email, and SSL certificate.',
      'For a more robust 10-page website with a blog, enhanced SEO, and Google Business Profile integration, budget between KSH 12,000 and KSH 25,000. Our Standard Package at KSH 12,000 is our most popular option for growing businesses. It includes everything in the Basic Package plus blog setup, enhanced SEO, and 3 months of priority support.',
      'For enterprise-grade websites with CMS integration, custom functionality, advanced analytics, and dedicated support, costs range from KSH 18,000 to KSH 50,000+. Our Premium Package at KSH 18,000 includes everything in Standard plus CMS integration, advanced SEO, analytics dashboard, and 6 months of priority support.',
      'Do not forget ongoing costs. Domain renewal (KSH 1,000-2,000/year), hosting (KSH 3,000-10,000/year), maintenance (KSH 2,000-5,000/month), and content updates should all be factored into your total cost of ownership. At NexaFlow, we offer annual maintenance packages starting at KSH 2,000/year to keep your site secure, fast, and up-to-date.',
    ],
    keywords: ['website cost Kenya', 'web design pricing Nairobi', 'how much website Kenya', 'affordable web design', 'NexaFlow Digital pricing'],
    hashtags: '#WebsiteCost #WebDesignKenya #NairobiBusiness #AffordableWebsite #NexaFlowDigital #SmallBusiness',
  },
  'whatsapp-automation-kenya': {
    title: 'WhatsApp Automation for Business: The Complete Kenya Guide',
    date: 'December 10, 2024',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop&auto=format&q=80',
    content: [
      'With over 2 billion users globally and dominance in the African messaging landscape, WhatsApp has become the most intimate and effective channel for business communication in Kenya. WhatsApp Business API automation takes this a step further, enabling businesses to engage customers at scale with personalized, timely, and intelligent messaging.',
      'The WhatsApp Business API is different from the standard WhatsApp Business app. It is designed for medium to large businesses that need to communicate with thousands of customers programmatically. With the API, you can send order confirmations, delivery updates, appointment reminders, marketing campaigns, and support responses — all automated and personalized.',
      'At NexaFlow Digital, we have implemented WhatsApp automation for businesses across multiple sectors. For e-commerce stores, we set up abandoned cart recovery sequences that recover 15-25% of lost sales. For service businesses, we automate appointment booking and reminders, reducing no-shows by up to 40%. For retail chains, we handle order tracking and customer support at scale, serving thousands of customers instantly.',
      'The key to successful WhatsApp automation is balancing automation with humanity. Our systems use AI to understand context, detect sentiment, and escalate complex issues to human agents when needed. Customers never feel like they are talking to a robot — they feel like they are getting instant, helpful service from a brand that cares.',
      'Getting started is straightforward. We handle the WhatsApp Business API approval process, set up your messaging templates, integrate with your existing systems, and train your team. Within 2 weeks, you can be running fully automated WhatsApp workflows that drive revenue and delight customers.',
    ],
    keywords: ['WhatsApp automation Kenya', 'WhatsApp Business API Nairobi', 'chatbot automation East Africa', 'business messaging Kenya', 'NexaFlow Digital'],
    hashtags: '#WhatsAppAutomation #BusinessMessaging #KenyaTech #NairobiBusiness #NexaFlowDigital #CustomerEngagement',
  },
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts[slug || '']

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', padding: '8rem 2rem', textAlign: 'center' }}>
        <h1>Blog post not found</h1>
        <Link to="/blog" style={{ color: GOLD_BRIGHT }}>← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Image */}
      <div style={{ width: '100%', height: '50vh', minHeight: 300, overflow: 'hidden', position: 'relative' }}>
        <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,26,0.8) 100%)' }} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
        <Link to="/blog" style={{ color: GOLD_BRIGHT, fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>← Back to Blog</Link>
        <p style={{ color: TEXT_MUTED, fontSize: '0.9rem', marginBottom: '1rem' }}>{post.date}</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, fontFamily: "'Playfair Display', serif", marginBottom: '2rem', lineHeight: 1.2 }}>{post.title}</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {post.content.map((paragraph, i) => (
            <p key={i} style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7 }}>{paragraph}</p>
          ))}
        </div>

        {/* Keywords */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {post.keywords.map(kw => (
            <span key={kw} style={{ fontSize: '0.8rem', color: TEXT_MUTED, padding: '0.4rem 0.8rem', border: `1px solid ${BORDER}`, borderRadius: 50, textTransform: 'uppercase' }}>{kw}</span>
          ))}
        </div>

        {/* Hashtags */}
        <p style={{ color: GOLD_BRIGHT, fontWeight: 600, marginBottom: '3rem', fontSize: '0.95rem' }}>{post.hashtags}</p>

        {/* CTA */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>Ready to Transform Your Business?</h3>
          <p style={{ color: TEXT_MUTED, marginBottom: '1.5rem' }}>Let NexaFlow Digital help you implement the strategies discussed in this article.</p>
          <a href="/#contact" style={{
            display: 'inline-block', padding: '0.9rem 2rem', borderRadius: 12,
            background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRIGHT})`, color: '#0a0f1a',
            fontWeight: 700, textDecoration: 'none',
          }}>Start Your Project →</a>
        </div>
      </div>
    </div>
  )
}
