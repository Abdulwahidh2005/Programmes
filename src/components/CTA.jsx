import FadeUp from './FadeUp'

export default function CTA() {
  return (
    <section id="contact" className="py-24 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">
        <FadeUp>
          <div className="text-center max-w-[580px] mx-auto flex flex-col items-center gap-6">
            <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454]">
              Let's work together
            </p>
            <h2 className="text-[clamp(36px,4.5vw,60px)] font-[600] tracking-[-0.04em] leading-[1.05]">
              Still not sure?<br />Book a free discovery call
            </h2>
            <p className="text-[16px] font-[500] tracking-[-0.01em] text-[#545454] leading-[1.55]">
              Let's talk about your project. No commitment, no pressure —
              just a conversation about how great design can help your business grow.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white text-[14px] font-[600] tracking-[-0.01em] px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
              >
                Book a free call
              </a>
              <a
                href="mailto:joseph@launchnow.design"
                className="border border-[#dedede] text-black text-[14px] font-[600] tracking-[-0.01em] px-7 py-3.5 rounded-full hover:border-black transition-colors duration-200"
              >
                Send an email
              </a>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-6 text-[13px] font-[500] text-[#545454] pt-2">
              <span className="flex items-center gap-1.5"><span className="text-[#21b30b]">✓</span> No commitment</span>
              <span className="flex items-center gap-1.5"><span className="text-[#21b30b]">✓</span> 30-min call</span>
              <span className="flex items-center gap-1.5"><span className="text-[#21b30b]">✓</span> Free</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
