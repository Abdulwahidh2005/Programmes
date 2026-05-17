import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Names normalised to "Joseph" for brand consistency with this portfolio.
const TESTIMONIALS = [
  {
    text: '"Working with Joseph felt like having a seasoned design partner who truly understood our vision for KYMA and brought it to life in ways we hadn’t even imagined."',
    avatar: 'https://i.pravatar.cc/120?img=12',
    name: 'Thomas Weber',
    role: 'Co-founder of KYMA',
  },
  {
    text: '"Joseph elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth."',
    avatar: 'https://i.pravatar.cc/120?img=32',
    name: 'Lisa Kuroda',
    role: 'Founder, Studio Analog',
  },
  {
    text: '"Joseph approaches every project with a deep sense of purpose. His work is never just about the surface — it’s about how each element functions, connects, and flows. He brings logic, sharpness, and confidence to every decision."',
    avatar: 'https://i.pravatar.cc/120?img=13',
    name: 'Daniel Reyes',
    role: 'Director, Framehaus',
  },
  {
    text: '"His ability to merge storytelling with clean interaction design is unmatched. Joseph understands not just how things should look, but why they should look that way — and that insight came through in every part of the work."',
    avatar: 'https://i.pravatar.cc/120?img=47',
    name: 'Mei Tanaka',
    role: 'UX Designer, Nuro',
  },
  {
    text: '"Working with Joseph was more than just hiring a designer — it felt like bringing on a creative partner who truly understood our goals. He took our raw ideas, added clarity, and transformed them into something that not only looked stunning."',
    avatar: 'https://i.pravatar.cc/120?img=25',
    name: 'Julian Pierce',
    role: 'Director, Vektor Inc.',
  },
  {
    text: '"Joseph brings a rare balance of creativity and discipline. He’s incredibly fast without ever sacrificing attention to detail. From early ideation to the final product, his process is intentional, his communication is clear."',
    avatar: 'https://i.pravatar.cc/120?img=45',
    name: 'Hana Samoto',
    role: 'CEO, Willow Studio',
  },
]

const PLACEMENT = [
  { align: 'flex-start', yOffset: 0, slotH: 'clamp(30vh, 36vh, 42vh)', mt: '0vh'   },
  { align: 'flex-end',   yOffset: 0, slotH: 'clamp(24vh, 28vh, 32vh)', mt: '-18vh' },
  { align: 'center',     yOffset: 0, slotH: 'clamp(34vh, 40vh, 46vh)', mt: '16vh'  },
  { align: 'flex-end',   yOffset: 0, slotH: 'clamp(30vh, 36vh, 42vh)', mt: '16vh'  },
  { align: 'flex-start', yOffset: 0, slotH: 'clamp(24vh, 28vh, 32vh)', mt: '-18vh' },
]

function Checkmark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Verified">
      <circle cx="8" cy="8" r="8" fill="#1D9BF0" />
      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Brand wordmark shown in each card footer, matching the reference layout.
function BrandMark() {
  return (
    <span
      aria-hidden="true"
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: 20,
        fontWeight: 700,
        fontStyle: 'italic',
        color: '#fff',
        letterSpacing: '-0.02em',
        flexShrink: 0,
      }}
    >
      Cairo
    </span>
  )
}

function TestimonialCard({ text, avatar, name, role }) {
  return (
    <div
      style={{
        width: 'clamp(300px, 30vw, 400px)',
        minHeight: 'clamp(260px, 30vh, 340px)',
        display: 'flex',
        flexDirection: 'column',
        background: '#000',
        borderRadius: 16,
        padding: '32px 30px 26px',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <p
        style={{
          flex: 1,
          fontSize: 'clamp(17px, 1.25vw, 21px)',
          fontWeight: 500,
          lineHeight: 1.55,
          color: '#fff',
          margin: '0 0 24px',
        }}
      >
        {text}
      </p>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
            <img
              src={avatar}
              alt={name}
              style={{ width: 48, height: 48, borderRadius: 9, objectFit: 'cover', flexShrink: 0 }}
            />
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{name}</span>
                <Checkmark />
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1 }}>{role}</div>
            </div>
          </div>
          <BrandMark />
        </div>
      </div>
    </div>
  )
}

function ReducedMotionLayout() {
  return (
    <section id="testimonials" style={{ background: '#fff', padding: '100px 20px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {TESTIMONIALS.map(t => <TestimonialCard key={t.name} {...t} />)}
      </div>
    </section>
  )
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const bgWrapRef = useRef(null)
  const bgTextRef = useRef(null)
  const cardRefs  = useRef([])
  const slotRefs  = useRef([])
  const frostRefs = useRef([])

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Pin the background layer so the watermark + CTA stay viewport-centred
      // while the whole section scrolls — cards then fly over them.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: bgWrapRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      })

      // Watermark runs continuously right→left, independent of scroll
      gsap.to(bgTextRef.current, {
        xPercent: -50,
        duration: 36,
        ease: 'none',
        repeat: -1,
      })

      const isMobile = window.innerWidth < 768

      TESTIMONIALS.slice(0, 5).forEach((_, i) => {
        const card  = cardRefs.current[i]
        const slot  = slotRefs.current[i]
        const frost = frostRefs.current[i]
        if (!card || !slot) return

        const { align, yOffset } = PLACEMENT[i]
        const dir = align === 'flex-start' ? -1 : align === 'flex-end' ? 1 : 0

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slot,
            start: 'top 90%',
            end: 'bottom 18%',
            scrub: 0.8,
          },
        })

        tl.fromTo(
          card,
          {
            y: 110,
            opacity: 1,
            scale: 0.94,
            rotateX: isMobile ? 8 : 14,
            rotateY: isMobile ? 0 : dir * 6,
            transformPerspective: 1200,
            transformOrigin: 'center center',
          },
          { y: yOffset, opacity: 1, scale: 1, rotateX: 0, rotateY: 0, ease: 'power2.out' }
        ).to(card, {
          y: yOffset - 90,
          opacity: 0,
          scale: 0.96,
          rotateX: isMobile ? -6 : -10,
          rotateY: isMobile ? 0 : -dir * 4,
          ease: 'power2.in',
        })

        if (frost) {
          tl.fromTo(frost, { opacity: 1 }, { opacity: 0, ease: 'power2.out' }, 0)
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return <ReducedMotionLayout />

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{ position: 'relative', background: '#fff', isolation: 'isolate' }}
    >
      {/* Background layer — GSAP-pinned, stays viewport-centred the whole time */}
      <div
        ref={bgWrapRef}
        style={{
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 0,
          background: '#fff',
        }}
      >
        {/* Oversized watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max-content',
          }}
        >
          <span
            ref={bgTextRef}
            style={{
              display: 'block',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(100px, 18vw, 240px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: 'rgba(0,0,0,0.05)',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            {'Testimonial© - Reviews — Testimonial© - Reviews — Testimonial© - Reviews — Testimonial© - Reviews — Testimonial© - Reviews — '.repeat(2)}
          </span>
        </div>

      </div>

      {/* Card overlay — scrolls OVER the pinned background. pointerEvents:none
          so the static Get in Touch underneath stays clickable. */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          marginTop: '-100vh',
          pointerEvents: 'none',
          maxWidth: 1320,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 clamp(20px, 3.5vw, 56px)',
        }}
      >
        {/* Brief watermark-only beat before card 1 rises in */}
        <div aria-hidden="true" style={{ height: '100vh' }} />

        {TESTIMONIALS.slice(0, 5).map((t, i) => (
          <div
            key={t.name}
            ref={el => { slotRefs.current[i] = el }}
            style={{
              minHeight: PLACEMENT[i].slotH,
              marginTop: PLACEMENT[i].mt,
              display: 'flex',
              alignItems: 'center',
              justifyContent: PLACEMENT[i].align,
            }}
          >
            <div
              ref={el => { cardRefs.current[i] = el }}
              style={{ position: 'relative', transformStyle: 'preserve-3d', willChange: 'transform, opacity' }}
            >
              <TestimonialCard {...t} />
              <div
                ref={el => { frostRefs.current[i] = el }}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 16,
                  pointerEvents: 'none',
                  backdropFilter: 'blur(9px)',
                  WebkitBackdropFilter: 'blur(9px)',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 26%, rgba(0,0,0,0) 52%)',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 26%, rgba(0,0,0,0) 52%)',
                  willChange: 'opacity',
                }}
              />
            </div>
          </div>
        ))}

        {/* Background stays visible as the section exits */}
        <div aria-hidden="true" style={{ height: '24vh' }} />
      </div>
    </section>
  )
}
