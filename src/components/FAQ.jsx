import { useState } from 'react'
import FadeUp from './FadeUp'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. Landing pages take 1–2 weeks. Full brand identities or web apps range from 3 weeks to 2 months. With the Unlimited subscription, individual requests are turned around in 48 hours on average.',
  },
  {
    q: 'Can you work with my existing brand?',
    a: "Absolutely. I regularly integrate my work into existing brand systems. I'll study your guidelines and make sure everything feels cohesive and on-brand from day one.",
  },
  {
    q: 'What makes your process different?',
    a: "I take a collaborative approach — you're never left wondering what's happening. Milestone updates, a shared Trello board, and direct communication mean you always have visibility and can give feedback along the way.",
  },
  {
    q: 'Do you offer post-project support?',
    a: 'Yes. All single projects include 30 days of minor adjustments after delivery at no extra cost. Unlimited subscribers get ongoing support as part of their plan.',
  },
  {
    q: 'Who owns the final designs?',
    a: 'You do. Full IP ownership is transferred to you upon final payment. All source files are included, and everything is kept strictly confidential under NDA if required.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left label */}
          <div>
            <FadeUp>
              <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454] mb-3">FAQ</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-[600] tracking-[-0.035em] leading-[1.1]">
                Frequently asked questions
              </h2>
            </FadeUp>
          </div>

          {/* Right — accordion */}
          <FadeUp delay={0.15}>
            <div>
              {faqs.map((item, i) => (
                <div key={i} className="border-b border-[#dedede]">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-4 py-6 cursor-pointer bg-transparent border-none"
                  >
                    <span className="text-[17px] font-[500] tracking-[-0.02em] leading-[1.3]">
                      {item.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-[#dedede] text-[18px] font-[300] leading-none transition-transform duration-300"
                      style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </button>
                  <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                    <p className="pb-6 text-[15px] font-[500] tracking-[-0.01em] leading-[1.6] text-[#545454] max-w-[580px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
