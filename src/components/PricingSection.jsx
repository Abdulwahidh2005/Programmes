import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'Starter',
    price: '$1,200',
    period: 'one-time',
    desc: 'Perfect for founders who need a strong online presence fast.',
    features: [
      'Custom landing page',
      'Mobile responsive',
      'Copywriting included',
      '3 revisions',
      '14-day delivery',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Launch',
    price: '$2,800',
    period: 'one-time',
    desc: 'Full brand system + website for companies ready to scale.',
    features: [
      'Brand identity system',
      'Up to 6 pages',
      'Motion & interactions',
      'CMS integration',
      'Unlimited revisions',
      '21-day delivery',
    ],
    cta: 'Book a call',
    highlight: true,
  },
  {
    name: 'Retainer',
    price: '$1,800',
    period: 'per month',
    desc: 'Ongoing design partnership. A designer on demand.',
    features: [
      '40 hrs/month',
      'Design & development',
      'Priority turnaround',
      'Monthly strategy call',
      'Cancel anytime',
    ],
    cta: 'Let\'s talk',
    highlight: false,
  },
]

export default function PricingSection() {
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
      id="pricing"
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      <div ref={innerRef} className="absolute inset-0 flex flex-col px-10 lg:px-14 pt-[100px] pb-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-[600] tracking-[0.12em] uppercase text-[#999] mb-2">Pricing</p>
          <h2 className="text-[clamp(40px,5vw,80px)] font-[600] tracking-[-0.04em] leading-[1] text-black">
            Simple, transparent.
          </h2>
        </div>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-7 border ${
                plan.highlight
                  ? 'bg-black border-black text-white'
                  : 'bg-[#fafafa] border-[#ebebeb] text-black'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4">
                  <span className="text-[10px] font-[700] tracking-[0.1em] uppercase bg-white/15 text-white rounded-full px-2.5 py-1">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <p className={`text-[12px] font-[600] tracking-[-0.01em] mb-3 ${plan.highlight ? 'text-white/60' : 'text-[#888]'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[38px] font-[700] tracking-[-0.04em] leading-none">
                    {plan.price}
                  </span>
                  <span className={`text-[12px] font-[500] ${plan.highlight ? 'text-white/50' : 'text-[#aaa]'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-[13px] font-[400] leading-[1.5] mt-3 ${plan.highlight ? 'text-white/60' : 'text-[#666]'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex-1 flex flex-col gap-2.5 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5">
                    <svg className={`w-3.5 h-3.5 flex-shrink-0 ${plan.highlight ? 'text-white/70' : 'text-[#21b30b]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`text-[13px] font-[500] tracking-[-0.005em] ${plan.highlight ? 'text-white/80' : 'text-[#333]'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center text-[13.5px] font-[600] tracking-[-0.01em] px-5 py-3 rounded-full transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-[#e8e8e8]'
                    : 'bg-black text-white hover:bg-[#222]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
