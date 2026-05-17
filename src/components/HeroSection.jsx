import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TrustBar from './TrustBar'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    name: 'KYMA',
    type: 'AI Agency',
    img: 'https://framerusercontent.com/images/wn56GiYIGN9okbMTZQ8fV2UQ0.jpg?width=1600&height=1200',
  },
  {
    name: 'Mugen',
    type: 'Design studio',
    img: 'https://framerusercontent.com/images/tBF8hMQFxONWA4CXtHf3R4.jpg?width=1600&height=1200',
  },
  {
    name: 'Axiom',
    type: 'Ecommerce Site',
    img: 'https://framerusercontent.com/images/AZe7hFsRlGAWp9spF25RMEwS0gA.jpg?width=1600&height=1200',
  },
  {
    name: 'Kora',
    type: 'Consulting Site',
    img: 'https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg?width=1600&height=1200',
  },
]

// Fan-stack offsets: each card's displacement + rotation relative to stack center
const stackOffsets = [
  { dx: 0,   dy: -5,  rotation: 5,   depth: 1    },
  { dx: -68, dy: 8,   rotation: -15, depth: 0.75 },
  { dx: 62,  dy: 18,  rotation: 11,  depth: 0.58 },
  { dx: -18, dy: 38,  rotation: -6,  depth: 0.42 },
]

function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroSection() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const textInnerRef = useRef(null)
  const gridRef = useRef(null)
  const cardRefs = useRef([])
  const trustRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const text = textRef.current
      const grid = gridRef.current
      const cardsEls = cardRefs.current.filter(Boolean)
      const labels = section.querySelectorAll('.card-label, .grid-cta')

      const setInitialCardState = () => {
        // Reset grid Y before measuring so getBoundingClientRect reflects natural positions
        gsap.set(grid, { y: 0 })
        // Reset cards to natural DOM positions
        gsap.set(cardsEls, { x: 0, y: 0, z: 0, rotation: 0, scale: 1, clearProps: 'filter,zIndex' })
        // Labels always hidden until cards reach their final grid positions
        gsap.set(labels, { opacity: 0 })

        const rect = section.getBoundingClientRect()
        const isMobile = window.innerWidth < 768

        // Stack aligns vertically with the heading (clear of the navbar) and is larger
        const stackCX = isMobile ? rect.width * 0.52 : rect.width * 0.66
        const stackCY = isMobile ? rect.height * 0.52 : rect.height * 0.45
        const scale   = isMobile ? 0.46 : 0.62

        cardsEls.forEach((el, i) => {
          const cardRect = el.getBoundingClientRect()
          const naturalCX = cardRect.left - rect.left + cardRect.width / 2
          const naturalCY = cardRect.top - rect.top + cardRect.height / 2
          const s = stackOffsets[i]

          gsap.set(el, {
            x: stackCX - naturalCX + s.dx,
            y: stackCY - naturalCY + s.dy,
            rotation: s.rotation,
            scale,
            z: 110 * s.depth,
            zIndex: 10 - i,
            filter: 'drop-shadow(0 28px 44px rgba(0,0,0,0.22)) drop-shadow(0 8px 14px rgba(0,0,0,0.14))',
            transformStyle: 'preserve-3d',
          })
        })
      }

      setInitialCardState()

      // Entrance reveal for text elements
      gsap.fromTo(
        section.querySelectorAll('.hero-reveal'),
        { opacity: 0, y: 26, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.1 },
      )

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=240%',
          pin: true,
          pinSpacing: true,
          scrub: 0.14,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: setInitialCardState,
          onUpdate: (self) => {
            window.dispatchEvent(new CustomEvent('hero-nav-compact', {
              detail: { compact: self.progress > 0.015 && self.progress < 0.965 },
            }))
          },
          onLeave: () => window.dispatchEvent(new CustomEvent('hero-nav-compact', { detail: { compact: false } })),
          onLeaveBack: () => window.dispatchEvent(new CustomEvent('hero-nav-compact', { detail: { compact: false } })),
        },
      })

      // Phase 1: left text slides straight up and off the top of the screen — stays
      // fully sharp (no fade, no blur), in parallel with the card travel from the
      // very start, so it leaves "above the page" instead of overlapping the cards.
      tl.to(text, {
        y: () => -(sectionRef.current.getBoundingClientRect().height + 40),
        ease: 'none',
        duration: 1.3,
      }, 0)

      // Phase 1b: trust row (bottom of hero) rises off the top in parallel — it
      // starts at the bottom so it travels a bit further to fully clear the top.
      tl.to(trustRef.current, {
        y: () => -(sectionRef.current.getBoundingClientRect().height + 120),
        ease: 'none',
        duration: 1.3,
      }, 0)

      // Phase 2: cards spread from stacked fan to natural 2x2 grid positions —
      // starts at scroll 0 and stretched so the stack expands on every scroll.
      cardsEls.forEach((el) => {
        tl.to(el, {
          x: 0,
          y: 0,
          z: 0,
          rotation: 0,
          scale: 1,
          zIndex: 1,
          filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.10)) drop-shadow(0 4px 8px rgba(0,0,0,0.07))',
          ease: 'power2.inOut',
          duration: 0.92,
        }, 0)
      })

      // Phase 3: grid slides up to reveal bottom 2 cards + button
      tl.to(grid, {
        y: () => -Math.max(0, gridRef.current.scrollHeight - sectionRef.current.getBoundingClientRect().height),
        ease: 'power2.inOut',
        duration: 0.40,
      }, 0.92)

      // Phase 4: labels fade in as bottom cards slide into view
      tl.to(labels, {
        opacity: 1,
        duration: 0.14,
        stagger: 0.04,
        ease: 'power2.out',
      }, 1.15)

      // Mouse parallax depth effect
      const moveTextX = gsap.quickTo(textInnerRef.current, 'x', { duration: 0.55, ease: 'power3.out' })
      const moveTextY = gsap.quickTo(textInnerRef.current, 'y', { duration: 0.55, ease: 'power3.out' })
      const moveGridX = gsap.quickTo(grid, 'x', { duration: 0.6, ease: 'power3.out' })
      const rotateGridX = gsap.quickTo(grid, 'rotateX', { duration: 0.6, ease: 'power3.out' })
      const rotateGridY = gsap.quickTo(grid, 'rotateY', { duration: 0.6, ease: 'power3.out' })

      const onMouseMove = (e) => {
        const rect = section.getBoundingClientRect()
        const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        moveTextX(px * -8)
        moveTextY(py * -5)
        moveGridX(px * 16)
        rotateGridX(py * -1.5)
        rotateGridY(px * 2)
      }
      const onMouseLeave = () => {
        moveTextX(0)
        moveTextY(0)
        moveGridX(0)
        rotateGridX(0)
        rotateGridY(0)
      }

      section.addEventListener('mousemove', onMouseMove)
      section.addEventListener('mouseleave', onMouseLeave)
      ScrollTrigger.refresh()

      return () => {
        window.dispatchEvent(new CustomEvent('hero-nav-compact', { detail: { compact: false } }))
        section.removeEventListener('mousemove', onMouseMove)
        section.removeEventListener('mouseleave', onMouseLeave)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-190 w-full bg-white"
    >
      {/* Decorative guide lines (hero-only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0"
        style={{ left: 'clamp(100px, 14vw, 230px)', right: 'clamp(100px, 14vw, 230px)', zIndex: 1 }}
      >
        <span className="absolute inset-y-0 left-0" style={{ width: 1, background: 'rgba(0,0,0,0.06)' }} />
        <span className="absolute inset-y-0 right-0" style={{ width: 1, background: 'rgba(0,0,0,0.06)' }} />
      </div>

      {/* Left: text */}
      <div
        ref={textRef}
        className="absolute top-0 z-30 flex h-full flex-col justify-start"
        style={{
          left: 'clamp(100px, 14vw, 230px)',
          width: 'clamp(320px, 30vw, 480px)',
          paddingTop: 'clamp(180px, 21vh, 230px)',
          willChange: 'transform, opacity, filter',
        }}
      >
        <div ref={textInnerRef} className="relative">

          <div
            className="hero-reveal inline-flex w-fit items-center gap-2 rounded-full border border-[#e5e5e5] bg-white/90 px-3 py-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
            style={{ marginBottom: 28 }}
          >
            <span className="relative h-3 w-3 shrink-0">
              <span className="absolute inset-0 rounded-full bg-[#21b30b]" style={{ animation: 'pulse-ring 2s ease-in-out infinite alternate' }} />
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#21b30b]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            </span>
            <span className="text-[12.5px] font-semibold tracking-[-0.01em] text-[#545454]">
              Available for August '25
            </span>
          </div>

          <h1
            className="hero-reveal mb-8 leading-none tracking-[-0.04em]"
            style={{ fontSize: 'clamp(52px, 4.5vw, 84px)' }}
          >
            <span className="hero-highlight block w-fit px-1 font-medium text-[#8f8f8f]">Design that</span>
            <span className="hero-highlight block w-fit px-1 font-semibold text-[#111111]">delivers results.</span>
          </h1>

          <p
            className="hero-reveal mb-7 leading-[1.62] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(14.5px, 1vw, 17.5px)', maxWidth: 440 }}
          >
            <span className="hero-copy-highlight px-1">
              <strong className="font-semibold text-inherit">Strategic design that drives growth, not just looks good.</strong>{' '}
              <span className="text-inherit">I create everything your brand needs to attract customers and turn them into sales.</span>
            </span>
          </p>

          <a
            href="#contact"
            className="hero-reveal inline-flex w-fit items-center gap-3 overflow-hidden rounded-full bg-[#050505] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_26px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.22)_inset] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.025]"
            style={{ fontSize: 'clamp(12px, 1vw, 13.5px)', padding: '4px 20px 4px 4px', marginBottom: 20 }}
          >
            <img src="https://i.pravatar.cc/40?img=33" alt="" className="h-9 w-9 shrink-0 rounded-full object-cover" />
            Book a call with me
          </a>

          <div className="hero-reveal flex items-center gap-3">
            <div className="flex -space-x-2">
              {['33', '11', '65', '26'].map((id) => (
                <img key={id} src={`https://i.pravatar.cc/40?img=${id}`} alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <div className="text-[11px] tracking-wide text-[#FFB800]">★★★★★</div>
              <span className="text-[11.5px] font-semibold tracking-[-0.01em] text-[#545454]">80+ Happy clients</span>
            </div>
          </div>

        </div>
      </div>

      {/* Right: 2x2 project grid (centered, cards start stacked via GSAP) */}
      <div className="absolute inset-0 z-10 flex justify-center overflow-visible pointer-events-none">
        <div
          ref={gridRef}
          className="grid grid-cols-2 transform-gpu"
          style={{
            width: 'clamp(700px, 78vw, 1120px)',
            gap: 'clamp(22px, 2.5vw, 36px)',
            paddingTop: 'clamp(145px, 17vh, 175px)',
            alignContent: 'start',
            transformPerspective: 1400,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          {cards.map((card, index) => (
            <article
              key={card.name}
              ref={(el) => { cardRefs.current[index] = el }}
              className="group pointer-events-auto relative transform-gpu will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <a
                href="#work"
                className="relative block overflow-hidden bg-[#111] transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.018]"
                style={{
                  aspectRatio: '4 / 3',
                  borderRadius: 10,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.14), 0 2px 0 rgba(255,255,255,0.26) inset',
                }}
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="absolute inset-0 h-full w-full scale-[1.03] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[7.5px] font-bold tracking-[0.02em] backdrop-blur-sm">
                  LaunchNow
                </div>
              </a>

              <div className="card-label mt-6 flex items-start justify-between gap-2 px-0.5">
                <div>
                  <p className="text-[15.5px] font-bold leading-none tracking-[-0.02em] text-[#111]">{card.name}</p>
                  <p className="mt-1.5 text-[13px] font-medium tracking-[-0.01em] text-[#888]">{card.type}</p>
                </div>
                <a href="#work" className="flex shrink-0 items-center gap-1.5 text-[11.5px] font-semibold tracking-[-0.01em] text-[#111] opacity-50 transition-opacity hover:opacity-100">
                  <ArrowIcon className="h-3 w-3" />
                  View Project
                </a>
              </div>
            </article>
          ))}

          <div className="grid-cta pointer-events-auto col-span-2 flex justify-center pt-5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold tracking-[-0.01em] text-[#111] transition-opacity hover:opacity-60"
            >
              View all my projects
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        ref={trustRef}
        className="absolute"
        style={{
          left: 'clamp(100px, 14vw, 230px)',
          right: 'clamp(100px, 14vw, 230px)',
          bottom: 'clamp(40px, 6vh, 80px)',
          zIndex: 5,
          willChange: 'transform',
        }}
      >
        <div aria-hidden="true" style={{ height: 1, background: 'rgba(0,0,0,0.06)' }} />
        <TrustBar />
      </div>
    </section>
  )
}
