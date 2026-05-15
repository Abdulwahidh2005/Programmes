import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { num: '01', title: 'Brand Identity', desc: 'Logos, color systems, typography, and full brand guidelines that make you unmistakable.' },
  { num: '02', title: 'Web Design', desc: 'Conversion-focused websites that look stunning and guide visitors to take action.' },
  { num: '03', title: 'Development', desc: 'Hand-coded, performant sites. React, Next.js, Webflow, Framer — whatever fits best.' },
  { num: '04', title: 'Motion & Copy', desc: 'Micro-interactions, scroll animations, and sharp copywriting that makes people stop and read.' },
]

export default function AboutSection() {
  const sectionRef = useRef(null)
  const innerRef   = useRef(null)
  const imgRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top top',
          end:           '+=200%',
          pin:           true,
          pinSpacing:    true,
          scrub:         1.4,
          anticipatePin: 1,
        },
      })

      // Parallax on the portrait image
      tl.to(imgRef.current, {
        y: -60,
        ease: 'none',
        duration: 1.6,
      }, 0)

      // Exit
      tl.to(innerRef.current, {
        scale:   0.92,
        y:       -60,
        opacity: 0.75,
        ease:    'power2.inOut',
        duration: 0.6,
      }, 1.4)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden"
    >
      <div ref={innerRef} className="absolute inset-0 flex flex-col lg:flex-row">

        {/* Left — portrait */}
        <div className="relative lg:w-[42%] overflow-hidden flex-shrink-0">
          <div ref={imgRef} className="absolute inset-0" style={{ top: '-8%', bottom: '-8%' }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85"
              alt="Joseph"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] lg:block hidden" />
          </div>
          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-[#0a0a0a]/70 lg:hidden" />
        </div>

        {/* Right — content */}
        <div className="relative flex-1 flex flex-col justify-center px-10 lg:px-14 py-10 lg:py-0 z-10">
          <p className="text-[11px] font-[600] tracking-[0.12em] uppercase text-[#666] mb-6">About</p>

          <h2 className="text-[clamp(32px,4vw,60px)] font-[600] tracking-[-0.04em] leading-[1.05] text-white mb-8">
            I turn ideas into<br />
            <span className="text-[#666]">brands that sell.</span>
          </h2>

          <p className="text-[14.5px] font-[400] tracking-[-0.01em] leading-[1.7] text-[#888] max-w-[480px] mb-10">
            I'm Joseph — a designer and developer with 4+ years building digital products
            for startups, agencies, and ambitious founders. I obsess over the details that
            make the difference between "nice" and "converts."
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {services.map(s => (
              <div key={s.num}>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[10px] font-[700] tracking-[0.1em] text-[#555]">{s.num}</span>
                  <span className="text-[13px] font-[600] tracking-[-0.01em] text-white">{s.title}</span>
                </div>
                <p className="text-[12.5px] font-[400] tracking-[-0.005em] leading-[1.6] text-[#666] pl-6">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-4 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-black text-[13.5px] font-[600] tracking-[-0.01em] px-6 py-3 rounded-full hover:bg-[#e8e8e8] transition-colors duration-200"
            >
              Work with me
            </a>
            <a
              href="#"
              className="text-[13px] font-[500] tracking-[-0.01em] text-[#666] hover:text-white transition-colors duration-200 underline underline-offset-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
