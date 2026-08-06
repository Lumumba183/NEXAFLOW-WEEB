import { GOLD_BRIGHT, TEXT_MUTED, BORDER } from '../../data'

const clients = [
  'Labuima Safaris',
  'House of Finance',
  'Gemonet Tours',
  'MumoFreight',
  'Rijal Enterprises',
  'Utue Safaris',
  'Redland School',
  'Grace & Hope Home',
  'WeDialAI',
]

export default function TrustedBy() {
  return (
    <section style={{
      padding: '2.5rem 0',
      background: '#0a0f1a',
      borderTop: `1px solid ${BORDER}`,
      borderBottom: `1px solid ${BORDER}`,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 150,
        background: 'linear-gradient(90deg, #0a0f1a, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 150,
        background: 'linear-gradient(270deg, #0a0f1a, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <p style={{
        textAlign: 'center', color: TEXT_MUTED, fontSize: '0.8rem',
        fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em',
        marginBottom: '1.5rem',
      }}>
        Trusted by 50+ businesses across Kenya & beyond
      </p>

      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 30s linear infinite',
        }}>
          {Array(3).fill(null).map((_, setIdx) => (
            <span key={setIdx}>
              {clients.map((client, i) => (
                <span key={`${setIdx}-${i}`} style={{
                  display: 'inline-flex', alignItems: 'center',
                  margin: '0 2.5rem', color: GOLD_BRIGHT,
                  fontWeight: 600, fontSize: '0.95rem',
                  opacity: 0.7,
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'rgba(201,162,39,0.4)',
                    marginRight: '0.75rem', display: 'inline-block',
                  }} />
                  {client}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
