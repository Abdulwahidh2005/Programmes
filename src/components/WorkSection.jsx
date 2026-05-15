import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: '01',
    name: 'Kora',
    category: 'Consulting Site',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=85',
    tags: ['Branding', 'Web Design', 'Development'],
  },
  {
    id: '02',
    name: 'KYMA',
    category: 'AI Agency',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=85',
    tags: ['UI/UX', 'Motion', 'Development'],
  },
  {
    id: '03',
    name: 'Mugen',
    category: 'Design Studio',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=85',
    tags: ['Branding', 'Strategy'],
  },
]

export default function WorkSection() {
  const sectionRef = useRef(null)
  const innerRef   = useRef(null)

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
      id="work"
      className="relative w-full h-screen bg-[#f5f5f3] overflow-hidden"
    >
      <div ref={innerRef} className="absolute inset-0 flex flex-col px-10 lg:px-14 pt-[100px] pb-10">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-[600] tracking-[0.12em] uppercase text-[#999] mb-2">Selected Work</p>
            <h2 className="text-[clamp(40px,5vw,80px)] font-[600] tracking-[-0.04em] leading-[1] text-black">
              Projects
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-[13px] font-[600] tracking-[-0.01em] border border-black rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition-all duration-200"
          >
            View all work
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Project list */}
        <div className="flex-1 flex flex-col justify-center gap-0">
          {projects.map((p) => (
            <a
              key={p.id}
              href="#"
              className="group flex items-center gap-6 py-5 border-t border-[#dedede] last:border-b hover:pl-2 transition-all duration-300"
            >
              {/* Number */}
              <span className="text-[11px] font-[600] tracking-[0.08em] text-[#bbb] w-6 flex-shrink-0">
                {p.id}
              </span>

              {/* Thumbnail */}
              <div className="w-14 h-10 rounded-lg overflow-hidden flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>

              {/* Name */}
              <span className="flex-1 text-[clamp(22px,2.8vw,40px)] font-[600] tracking-[-0.03em] text-black leading-none">
                {p.name}
              </span>

              {/* Tags — hidden on mobile */}
              <div className="hidden lg:flex items-center gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-[500] tracking-[-0.005em] text-[#888] border border-[#dedede] rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Category + Year */}
              <div className="text-right flex-shrink-0">
                <p className="text-[13px] font-[500] text-[#888] tracking-[-0.01em]">{p.category}</p>
                <p className="text-[11px] font-[500] text-[#bbb]">{p.year}</p>
              </div>

              {/* Arrow */}
              <svg className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom stat row */}
        <div className="flex items-center gap-10 pt-6 border-t border-[#dedede]">
          {[['12+', 'Projects delivered'], ['80+', 'Happy clients'], ['4', 'Years experience']].map(([num, label]) => (
            <div key={label}>
              <p className="text-[24px] font-[700] tracking-[-0.03em] text-black leading-none">{num}</p>
              <p className="text-[12px] font-[500] text-[#888] mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
