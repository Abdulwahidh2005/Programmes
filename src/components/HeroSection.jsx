import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    name: 'Kora',
    type: 'Consulting Site',
    img: 'https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg?width=1600&height=1200',
  },
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
]

const stackOffsets = [
  { dx: -82, dy: 16, rotation: -7.5, depth: 1 },
  { dx: 66, dy: -56, rotation: 6.5, depth: 0.72 },
  { dx: -38, dy: 86, rotation: -3.2, depth: 0.58 },
  { dx: 128, dy: 40, rotation: 7.8, depth: 0.42 },
]

function ArrowIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
    >
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
  const metaRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const text = textRef.current
      const grid = gridRef.current
      const cardsEls = cardRefs.current.filter(Boolean)
      const metaEls = metaRefs.current.filter(Boolean)

      const setInitialCardState = () => {
        const rect = section.getBoundingClientRect()
        const isMobile = window.innerWidth < 768
        const stackCX = isMobile ? rect.width * 0.52 : rect.width * 0.705
        const stackCY = isMobile ? rect.height * 0.64 : rect.height * 0.43
        const initialScale = isMobile
          ? 0.52
          : Math.min(0.76, Math.max(0.68, window.innerWidth / 2750))

        cardsEls.forEach((el, index) => {
          const cardRect = el.getBoundingClientRect()
          const finalCX = cardRect.left - rect.left + cardRect.width / 2
          const finalCY = cardRect.top - rect.top + cardRect.height / 2
          const stack = stackOffsets[index]

          gsap.set(el, {
            x: stackCX - finalCX + stack.dx,
            y: stackCY - finalCY + stack.dy,
            rotation: stack.rotation,
            scale: initialScale,
            z: 100 * stack.depth,
            zIndex: 10 - index,
            filter:
              'drop-shadow(0 34px 52px rgba(0,0,0,0.22)) drop-shadow(0 10px 18px rgba(0,0,0,0.14))',
            transformStyle: 'preserve-3d',
          })
        })

        gsap.set(metaEls, { opacity: 0, y: 18, filter: 'blur(8px)' })
      }

      setInitialCardState()

      gsap.fromTo(
        section.querySelectorAll('.hero-reveal'),
        { opacity: 0, y: 28, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.95,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.12,
        },
      )

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=460%',
          pin: true,
          pinSpacing: true,
          scrub: 1.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: setInitialCardState,
        },
      })

      tl.to(
        text,
        {
          y: -62,
          opacity: 0,
          filter: 'blur(10px)',
          ease: 'power2.inOut',
          duration: 0.38,
        },
        0,
      )

      cardsEls.forEach((el, index) => {
        const stack = stackOffsets[index]

        tl.to(
          el,
          {
            x: () => `+=${gsap.getProperty(el, 'x') * 0.03 * stack.depth}`,
            y: () => `+=${gsap.getProperty(el, 'y') * 0.06 * stack.depth}`,
            rotation: stack.rotation * 0.6,
            scale: '+=0.025',
            ease: 'sine.inOut',
            duration: 0.18,
          },
          0,
        )

        tl.to(
          el,
          {
            x: 0,
            y: 0,
            z: 0,
            rotation: 0,
            scale: 1,
            filter:
              'drop-shadow(0 16px 28px rgba(0,0,0,0.11)) drop-shadow(0 4px 10px rgba(0,0,0,0.08))',
            ease: 'power3.out',
            duration: 0.64,
          },
          0.18 + index * 0.025,
        )
      })

      tl.to(
        metaEls,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          ease: 'power3.out',
          stagger: 0.045,
          duration: 0.22,
        },
        0.66,
      )

      const moveTextX = gsap.quickTo(textInnerRef.current, 'x', {
        duration: 0.55,
        ease: 'power3.out',
      })
      const moveTextY = gsap.quickTo(textInnerRef.current, 'y', {
        duration: 0.55,
        ease: 'power3.out',
      })
      const moveGridX = gsap.quickTo(grid, 'x', { duration: 0.6, ease: 'power3.out' })
      const moveGridY = gsap.quickTo(grid, 'y', { duration: 0.6, ease: 'power3.out' })
      const rotateGridX = gsap.quickTo(grid, 'rotateX', { duration: 0.6, ease: 'power3.out' })
      const rotateGridY = gsap.quickTo(grid, 'rotateY', { duration: 0.6, ease: 'power3.out' })

      const onMouseMove = (event) => {
        const rect = section.getBoundingClientRect()
        const px = ((event.clientX - rect.left) / rect.width - 0.5) * 2
        const py = ((event.clientY - rect.top) / rect.height - 0.5) * 2

        moveTextX(px * -8)
        moveTextY(py * -5)
        moveGridX(px * 18)
        moveGridY(py * 12)
        rotateGridX(py * -1.6)
        rotateGridY(px * 2.2)
      }

      const onMouseLeave = () => {
        moveTextX(0)
        moveTextY(0)
        moveGridX(0)
        moveGridY(0)
        rotateGridX(0)
        rotateGridY(0)
      }

      section.addEventListener('mousemove', onMouseMove)
      section.addEventListener('mouseleave', onMouseLeave)

      ScrollTrigger.refresh()

      return () => {
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
      className="relative h-screen min-h-[760px] w-full overflow-hidden bg-white"
    >
      <div
        ref={textRef}
        className="absolute top-0 z-30 flex h-full flex-col justify-start"
        style={{
          left: 'clamp(72px, 16.8vw, 324px)',
          width: 'clamp(600px, 36vw, 760px)',
          paddingTop: 'clamp(168px, 16.8vh, 202px)',
          willChange: 'transform, opacity, filter',
        }}
      >
        <div ref={textInnerRef}>
          <div
            className="hero-reveal inline-flex w-fit items-center gap-2 rounded-full border border-[#e5e5e5] bg-white/90 px-3 py-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
            style={{ marginBottom: 30 }}
          >
            <span className="relative h-3 w-3 shrink-0">
              <span
                className="absolute inset-0 rounded-full bg-[#21b30b]"
                style={{ animation: 'pulse-ring 2s ease-in-out infinite alternate' }}
              />
              <span
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#21b30b]"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
              />
            </span>
            <span className="text-[12.5px] font-semibold tracking-[-0.01em] text-[#545454]">
              Available for August '25
            </span>
          </div>

          <h1
            className="hero-reveal mb-5 leading-[1.0] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(54px, 4.65vw, 88px)' }}
          >
            <span className="block font-medium text-[#8f8f8f]">Design that</span>
            <span className="block font-semibold text-[#111111]">delivers results.</span>
          </h1>

          <p
            className="hero-reveal mb-6 leading-[1.6] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(15px, 1.02vw, 19px)', maxWidth: 500 }}
          >
            <strong className="font-semibold text-[#1a1a1a]">
              Strategic design that drives growth, not just looks good.
            </strong>{' '}
            <span className="text-[#666]">
              I create everything your brand needs to attract customers and turn them into sales.
            </span>
          </p>

          <a
            href="#contact"
            className="hero-reveal inline-flex w-fit items-center gap-3 overflow-hidden rounded-full bg-[#050505] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_26px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.22)_inset] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.025]"
            style={{
              fontSize: 'clamp(12px, 1vw, 13.5px)',
              padding: '4px 20px 4px 4px',
              marginBottom: 18,
            }}
          >
            <img
              src="https://i.pravatar.cc/40?img=33"
              alt=""
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            Book a call with me
          </a>

          <div className="hero-reveal flex items-center gap-3">
            <div className="flex -space-x-2">
              {['33', '11', '65', '26'].map((avatar) => (
                <img
                  key={avatar}
                  src={`https://i.pravatar.cc/40?img=${avatar}`}
                  alt=""
                  className="h-7 w-7 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="text-[11px] tracking-wide text-[#FFB800]">★★★★★</div>
              <span className="text-[11.5px] font-semibold tracking-[-0.01em] text-[#545454]">
                80+ Happy clients
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex justify-center overflow-visible pointer-events-none">
        <div
          ref={gridRef}
          className="grid grid-cols-2 content-start transform-gpu"
          style={{
            width: 'clamp(860px, 65.35vw, 1256px)',
            minWidth: 860,
            gap: '26px 31px',
            paddingTop: 18,
            transformPerspective: 1400,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          {cards.map((card, index) => (
            <article
              key={card.name}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="group pointer-events-auto relative transform-gpu will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <a
                href="#work"
                className="relative block overflow-hidden bg-[#111] transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.018]"
                style={{
                  aspectRatio: '4 / 3',
                  borderRadius: 10,
                  boxShadow:
                    '0 24px 55px rgba(0,0,0,0.16), 0 2px 0 rgba(255,255,255,0.28) inset',
                  transform: `translateZ(${32 * stackOffsets[index].depth}px)`,
                }}
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="absolute inset-0 h-full w-full scale-[1.03] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[7.5px] font-bold tracking-[0.02em] backdrop-blur-sm">
                  LaunchNow
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[17px] font-semibold tracking-[-0.02em] text-white">
                  <span className="inline-grid h-5 w-5 place-items-center rounded-[4px] bg-white text-black">
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                  LaunchNow
                </div>
              </a>

              <div
                ref={(el) => {
                  metaRefs.current[index] = el
                }}
                className="flex items-start justify-between pt-4"
              >
                <div>
                  <h2 className="text-[24px] font-semibold leading-none tracking-[-0.04em] text-[#111]">
                    {card.name}
                  </h2>
                  <p className="mt-2 text-[15px] font-semibold tracking-[-0.02em] text-[#666]">
                    {card.type}
                  </p>
                </div>
                <a
                  href="#work"
                  className="mt-1 inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-[#727272] transition-colors duration-500 ease-out group-hover:text-black"
                >
                  <ArrowIcon className="h-4 w-4" />
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
