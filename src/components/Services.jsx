import FadeUp from './FadeUp'

const services = [
  {
    icon: '⚡',
    name: 'Framer Development',
    desc: 'High-performance, pixel-perfect Framer sites with smooth animations and interactions.',
  },
  {
    icon: '🎨',
    name: 'Brand Design',
    desc: 'Strategic visual identities that communicate your values and differentiate your brand.',
  },
  {
    icon: '💻',
    name: 'Web Apps',
    desc: 'Clean, intuitive interfaces for SaaS products, dashboards, and complex web applications.',
  },
  {
    icon: '📄',
    name: 'Landing Pages',
    desc: 'Conversion-focused landing pages designed to turn visitors into customers.',
  },
  {
    icon: '🎬',
    name: 'Motion Graphics',
    desc: 'Engaging motion design that brings your brand to life across every touchpoint.',
  },
  {
    icon: '🔮',
    name: '3D Design',
    desc: 'Stunning 3D visuals crafted in Blender to elevate your digital presence.',
  },
  {
    icon: '✦',
    name: 'UX/UI Design',
    desc: 'User-centered design that balances beauty with function for exceptional experiences.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">

        {/* Header */}
        <div className="mb-14">
          <FadeUp>
            <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454] mb-3">What I offer</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(30px,4vw,52px)] font-[600] tracking-[-0.035em] leading-[1.1]">
              Design services that<br />move the needle
            </h2>
          </FadeUp>
        </div>

        {/* Grid */}
        <FadeUp delay={0.15}>
          <div
            className="grid border border-[#dedede] rounded-2xl overflow-hidden"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#dedede' }}
          >
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-white p-8 flex flex-col gap-3 hover:bg-[#fafafa] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f0f0f0] flex items-center justify-center text-[20px] group-hover:bg-[#e8e8e8] transition-colors">
                  {s.icon}
                </div>
                <div className="text-[16px] font-[600] tracking-[-0.02em]">{s.name}</div>
                <div className="text-[13px] font-[500] tracking-[-0.01em] text-[#545454] leading-[1.55]">
                  {s.desc}
                </div>
              </div>
            ))}
            {/* Filler to complete grid row if odd */}
            {services.length % 3 !== 0 &&
              Array.from({ length: 3 - (services.length % 3) }).map((_, i) => (
                <div key={`fill-${i}`} className="bg-white" />
              ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
