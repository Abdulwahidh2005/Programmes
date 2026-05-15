const logos = [
  {
    name: 'Codecraft_',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 9H12M9 6V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Frequencii',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <path d="M2 9C2 9 4 5 7 9C10 13 13 9 16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Kintsugi',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <polygon points="9,1.5 16.5,6 16.5,12 9,16.5 1.5,12 1.5,6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'KYMA',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <path d="M2 14L6 9L2 4M8 14H16M8 9H14M8 4H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Axiom',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <path d="M9 2L16 16H2L9 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'CoreOS',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: 'Luminary',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <path d="M9 1.5C9 1.5 13.5 5 13.5 9C13.5 13 9 16.5 9 16.5C9 16.5 4.5 13 4.5 9C4.5 5 9 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M1.5 9H16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: '45 Degrees°',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
        <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const allLogos = [...logos, ...logos]

export default function TrustBar() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        zIndex: 50,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid #e5e5e5',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {/* Social proof */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          padding: '0 32px',
          borderRight: '1px solid #e5e5e5',
          flexShrink: 0,
          minWidth: 'clamp(220px, 18vw, 300px)',
        }}
      >
        <div style={{ display: 'flex', marginRight: 4 }}>
          {['33', '11', '65', '26', '55'].map((id, i) => (
            <img
              key={id}
              src={`https://i.pravatar.cc/40?img=${id}`}
              alt=""
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '2.5px solid #fff',
                objectFit: 'cover',
                marginLeft: i === 0 ? 0 : -10,
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ fontSize: 13, color: '#FFB800', letterSpacing: '0.06em' }}>★★★★★</span>
          <span style={{ fontSize: 14.5, fontWeight: 600, color: '#111', letterSpacing: '-0.02em', lineHeight: 1 }}>
            99+ Happy clients
          </span>
        </div>
      </div>

      {/* Scrolling logos */}
      <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', inset: '0 auto 0 0', width: 80, zIndex: 1,
          background: 'linear-gradient(to right, rgba(255,255,255,0.96), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: '0 0 0 auto', width: 80, zIndex: 1,
          background: 'linear-gradient(to left, rgba(255,255,255,0.96), transparent)',
          pointerEvents: 'none',
        }} />

        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            gap: 48,
            whiteSpace: 'nowrap',
            paddingLeft: 32,
          }}
        >
          {allLogos.map((logo, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 14.5,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#555',
                cursor: 'default',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#111'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              {logo.icon}
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
