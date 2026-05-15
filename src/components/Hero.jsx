import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    name: 'Kora',
    type: 'Consulting Site',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=85',
  },
  {
    name: 'KYMA',
    type: 'AI Agency',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=85',
  },
  {
    name: 'Mugen',
    type: 'Design Studio',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85',
  },
  {
    name: 'Axiom',
    type: 'Ecommerce Site',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=85',
  },
]

/*
 * Stacking offsets: push each card toward the visual center
 * so all 4 look piled together initially.
 * Card 0 = top-left  → nudge right + down
 * Card 1 = top-right → nudge left  + down
 * Card 2 = bot-left  → nudge right + up
 * Card 3 = bot-right → nudge left  + up
 */
const STACK = [
  { x:  90,  y:  100, r: -7,  s: 0.80 },
  { x: -75,  y:   90, r:  5,  s: 0.84 },
  { x:  100, y: -90,  r: -3,  s: 0.74 },
  { x: -55,  y: -80,  r:  8,  s: 0.70 },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const textRef    = useRef(null)
  const gridRef    = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── 1. Set cards to stacked positions immediately ────────── */
      cardRefs.current.forEach((el, i) => {
        gsap.set(el, { x: STACK[i].x, y: STACK[i].y, rotation: STACK[i].r, scale: STACK[i].s, zIndex: 4 - i })
      })
      gsap.set(gridRef.current, { scale: 0.92, opacity: 0.85 })

      /* ── 2. Pinned scroll timeline ────────────────────────────── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top top',
          end:           '+=300%',   // 3 × viewport of scroll travel
          pin:           true,
          scrub:         1.4,
          anticipatePin: 1,
        },
      })

      // Text: fade + slide up (first 30% of scrub)
      tl.to(textRef.current, {
        y:        -70,
        opacity:  0,
        ease:     'power2.inOut',
        duration: 0.3,
      }, 0)

      // Grid wrapper: scale up to full
      tl.to(gridRef.current, {
        scale:    1,
        opacity:  1,
        ease:     'power2.out',
        duration: 0.5,
      }, 0)

      // Cards: spread to grid positions (staggered)
      cardRefs.current.forEach((el, i) => {
        tl.to(el, {
          x: 0, y: 0, rotation: 0, scale: 1,
          ease:     'power3.out',
          duration: 1,
        }, i * 0.05)
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      {/* ── Left text ─────────────────────────────────────────────── */}
      <div
        ref={textRef}
        className="absolute top-0 left-0 h-full flex flex-col justify-center z-20 px-10 lg:px-14"
        style={{ width: 'clamp(280px, 43%, 500px)' }}
      >
        {/* Availability */}
        <div className="inline-flex items-center gap-2 border border-[#dedede] rounded-full px-3 py-1.5 mb-8 w-fit bg-[#fafafa]">
          <span className="relative w-3 h-3 flex-shrink-0">
            <span
              className="absolute inset-0 rounded-full bg-[#21b30b]"
              style={{ animation: 'pulse-ring 2s ease-in-out infinite alternate' }}
            />
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#21b30b]"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
          </span>
          <span className="text-[12.5px] font-[600] tracking-[-0.01em] text-[#545454]">
            Available for August '25
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(36px,4vw,64px)] font-[600] tracking-[-0.04em] leading-[1.03] mb-5">
          Design that<br />delivers results.
        </h1>

        {/* Sub */}
        <p className="text-[14.5px] font-[500] tracking-[-0.015em] leading-[1.6] text-[#545454] mb-8 max-w-[320px]">
          Strategic design that drives growth, not just looks good. I create
          everything your brand needs to attract customers and turn them into sales.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-black text-white text-[13.5px] font-[600] tracking-[-0.01em] px-6 py-3 rounded-full w-fit hover:bg-[#1a1a1a] transition-colors duration-200 mb-7"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 9.1 19.72 19.72 0 01.34.55 2 2 0 012.31 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.87 7.37a16 16 0 006.76 6.76l.71-1.69a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Book a call with me
        </a>

        {/* Social proof */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {['33','11','65','26'].map(n => (
              <img key={n} src={`https://i.pravatar.cc/40?img=${n}`} alt=""
                className="w-7 h-7 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <div>
            <div className="text-[#FFB800] text-[11px] tracking-wide">★★★★★</div>
            <span className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454]">80+ Happy clients</span>
          </div>
        </div>
      </div>

      {/* ── Right: 2×2 grid (cards start stacked, spread on scroll) ── */}
      <div
        className="absolute right-0 top-0 h-full flex items-center justify-center pr-6"
        style={{ width: 'clamp(320px, 57%, 780px)' }}
      >
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 w-full"
          style={{ aspectRatio: '1.02 / 1' }}
        >
          {cards.map((card, i) => (
            <div
              key={card.name}
              ref={el => (cardRefs.current[i] = el)}
              className="relative rounded-2xl overflow-hidden group"
              style={{ willChange: 'transform', aspectRatio: '4/3' }}
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.name}
                className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-[1.15]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* LaunchNow badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[9.5px] font-[700] tracking-[0.01em]">
                LaunchNow
              </div>

              {/* Card label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white text-[14px] font-[700] tracking-[-0.02em] leading-none">{card.name}</p>
                    <p className="text-white/55 text-[10.5px] font-[500] mt-0.5">{card.type}</p>
                  </div>
                  <div className="flex items-center gap-1 text-white/0 group-hover:text-white/80 text-[10px] font-[600] transition-colors duration-300">
                    View
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
