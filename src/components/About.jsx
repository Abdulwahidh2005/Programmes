import FadeUp from './FadeUp'

export default function About() {
  return (
    <section className="py-24 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <FadeUp>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#fafafa] border border-[#dedede] max-h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Joseph"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <FadeUp>
              <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454]">About me</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(28px,3.5vw,48px)] font-[600] tracking-[-0.035em] leading-[1.1]">
                Turning ideas into<br />
                functional, user-centered<br />
                design solutions
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[16px] font-[500] tracking-[-0.01em] leading-[1.65] text-[#545454]">
                I focus on problem-solving over aesthetics alone. Every design decision is
                intentional, rooted in strategy, and built with meticulous attention to detail.
                Whether it's a brand identity, a web application, or a landing page — my work
                drives real results for real businesses.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-[16px] font-[500] tracking-[-0.01em] leading-[1.65] text-[#545454]">
                With a collaborative approach and a deep commitment to craft, I partner with
                founders and teams who want design that doesn't just look good — it performs.
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <div className="flex items-center gap-4 pt-2">
                <div className="text-center">
                  <div className="text-[28px] font-[700] tracking-[-0.04em]">5+</div>
                  <div className="text-[12px] font-[600] text-[#545454] tracking-[-0.01em]">Years experience</div>
                </div>
                <div className="w-px h-10 bg-[#dedede]" />
                <div className="text-center">
                  <div className="text-[28px] font-[700] tracking-[-0.04em]">99+</div>
                  <div className="text-[12px] font-[600] text-[#545454] tracking-[-0.01em]">Happy clients</div>
                </div>
                <div className="w-px h-10 bg-[#dedede]" />
                <div className="text-center">
                  <div className="text-[28px] font-[700] tracking-[-0.04em]">150+</div>
                  <div className="text-[12px] font-[600] text-[#545454] tracking-[-0.01em]">Projects done</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
