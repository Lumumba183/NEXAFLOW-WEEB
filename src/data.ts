// Shared data — used by both Home and Portfolio pages
export const ACCENT = '#3b82f6'
export const ACCENT_GLOW = '#60a5fa'
export const GOLD = '#c9a227'
export const GOLD_BRIGHT = '#e8c547'
export const GOLD_PALE = '#f5e6a3'
export const TEXT_MUTED = '#94a3b8'
export const TEXT_DARK = '#64748b'
export const CARD = '#1e293b'
export const BORDER = '#334155'

export const services = [
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
    price: 'KSH 65,000',
  },
  {
    num: '08',
    title: 'Web App + Android App',
    desc: 'Full-featured web application paired with a native Android app. Real-time data sync, push notifications, offline support, and scalable backend.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=240&fit=crop&auto=format&q=80',
    price: 'From KSH 250,000',
  },
  {
    num: '09',
    title: 'WeDialAI White-Label',
    desc: 'Launch your own branded AI agent platform. Full white-label solution with your logo, domain, and custom pricing. Powered by our proven technology.',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=240&fit=crop&auto=format&q=80',
    price: 'KSH 250,000 + KSH 35,000/mo',
    link: 'https://wedialai.com',
  },
]

export const pricing = [
  {
    name: 'Starter Package',
    subtitle: 'Up to 5 Pages — Essential web presence',
    price: 'KSH 18,000',
    features: ['Contact form', 'Image gallery', 'Social media integration', 'Responsive design', 'FREE domain (year 1)', 'FREE SSL Certificate'],
    notIncluded: ['Blog setup', 'Professional email setup'],
    popular: false,
  },
  {
    name: 'Business Package',
    subtitle: 'Up to 10 Pages — Growing businesses',
    price: 'KSH 35,000',
    features: ['Everything in Starter', 'Blog setup', 'Enhanced SEO', 'Google Business Profile', 'WhatsApp chat integration', '3 months priority support', 'FREE domain (year 1)', 'FREE SSL Certificate'],
    notIncluded: ['Professional email setup'],
    popular: true,
  },
  {
    name: 'Premium Package',
    subtitle: '10+ Pages — Established businesses',
    price: 'KSH 55,000',
    features: ['Everything in Business', 'CMS integration', 'Advanced SEO', 'Analytics dashboard', 'Professional email setup', '6 months priority support', 'FREE domain (year 1)', 'FREE SSL Certificate'],
    popular: false,
  },
]

export const additionalProducts = [
  {
    name: 'E-Shop Starter',
    desc: 'Complete online shop with M-Pesa/card checkout, up to 30 products, inventory management, order emails, and mobile checkout.',
    price: 'KSH 65,000',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'E-COMMERCE',
  },
  {
    name: 'E-Shop Growth',
    desc: 'Up to 150 products, abandoned-cart recovery, customer accounts, coupons, delivery zones, and basic SEO.',
    price: 'KSH 110,000',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'E-COMMERCE',
  },
  {
    name: 'E-Shop Pro / Marketplace',
    desc: '150+ products, multi-vendor support, advanced features, courier integration, and 3-month support.',
    price: 'From KSH 180,000',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'ENTERPRISE',
  },
  {
    name: 'Web App + Android App',
    desc: 'Full-featured web application with native Android companion. Real-time sync, push notifications, offline mode, scalable backend.',
    price: 'From KSH 250,000',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'FULL STACK',
  },
  {
    name: 'WeDialAI White-Label',
    desc: 'Your own branded AI agent platform. Voice calls, WhatsApp, social media — all under your brand. Setup + monthly licence.',
    price: 'KSH 250,000 + KSH 35,000/mo',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=280&fit=crop&auto=format&q=80',
    badge: 'ENTERPRISE',
    link: 'https://wedialai.com',
  },
]

export const projects = [
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
    badge: 'Live Website',
    num: 'No. 03',
    title: 'House of Finance Kenya',
    desc: 'Premium financial advisory boutique website with elegant dark-themed design, immersive scroll animations, and automated contact forms. Built for a Nairobi-based investment firm serving corporate clients across East Africa.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://www.houseoffinancekenya.com',
  },
  {
    badge: 'Live Website',
    num: 'No. 04',
    title: 'Gemonet Tours & Safaris',
    desc: 'Wildlife safari and tour booking platform featuring stunning destination galleries, interactive itineraries, and seamless booking integration. Showcases Kenya\'s finest safari experiences for international travelers.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://www.gemonettoursandsafaris.com',
  },
  {
    badge: 'Live Website',
    num: 'No. 05',
    title: 'MumoFreight Logistics',
    desc: 'Professional freight forwarding & cargo logistics platform — real-time shipment tracking, instant quote generation, and seamless booking for domestic & international shipping across East Africa.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://www.mumofreightcargo.com',
  },
  {
    badge: 'Live Website',
    num: 'No. 06',
    title: 'Rijal Enterprises',
    desc: 'Corporate enterprise website showcasing diverse business operations and services. Professional design built to establish credibility and drive client engagement.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://rijalenterprises.co.ke/',
  },
  {
    badge: 'Live Website',
    num: 'No. 07',
    title: 'Utue Executive Safaris',
    desc: 'Premium safari and travel experience platform offering curated executive-level tours across Kenya and East Africa. Elegant booking flow and rich destination content.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://utuexecutivesafaris.com',
  },
  {
    badge: 'Live Website',
    num: 'No. 08',
    title: 'Redland Junior School',
    desc: 'Modern school website with engaging design, comprehensive academic information, and parent communication features. Built for an educational institution focused on excellence.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'https://eclectic-treacle-18016a.netlify.app/',
  },
  {
    badge: 'Live Website',
    num: 'No. 09',
    title: 'Grace & Hope Home',
    desc: 'Compassionate nonprofit website for a children\'s home, featuring donation integration, success stories, and community engagement tools to support vulnerable children.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=280&fit=crop&auto=format&q=80',
    link: 'http://gracenhopehome.org',
  },
]

export const whyUs = [
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

export const testimonials = [
  {
    text: 'NexaFlow built our financial advisory website with precision and sophistication. The dark-themed design perfectly captures our brand, and the automated contact system has significantly improved client inquiries.',
    name: 'Solomon Desita',
    role: 'Principal, House of Finance Kenya',
    initials: 'SD',
  },
  {
    text: 'Our safari booking platform now showcases Kenya\'s beauty to the world. The interactive galleries and seamless booking flow have transformed how international travelers discover and book our tours.',
    name: 'Grace Muthoni',
    role: 'Director, Gemonet Tours & Safaris',
    initials: 'GM',
  },
  {
    text: 'The AI voice agent handles our property inquiries flawlessly. Our team now focuses on closing deals instead of answering the same questions all day.',
    name: 'James Ochieng',
    role: 'Director, CloudHaven Digital',
    initials: 'JO',
  },
]
