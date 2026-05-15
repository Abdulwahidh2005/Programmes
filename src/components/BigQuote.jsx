import FadeUp from './FadeUp'

export default function BigQuote() {
  return (
    <section className="py-24 border-t border-b border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">
        <FadeUp>
          <div className="max-w-[820px] mx-auto text-center">
            <span className="block text-[80px] leading-none font-[900] mb-4 select-none">"</span>
            <p className="text-[clamp(22px,3vw,40px)] font-[600] tracking-[-0.03em] leading-[1.22] italic mb-8">
              Working with Joseph felt like having a seasoned design partner who truly
              understood our vision for KYMA
            </p>
            <div className="flex items-center justify-center gap-3">
              <img
                src="https://i.pravatar.cc/80?img=33"
                alt="Thomas Weber"
                className="w-10 h-10 rounded-full object-cover border border-[#dedede]"
              />
              <div className="text-left">
                <div className="text-[14px] font-[600] tracking-[-0.01em]">Thomas Weber</div>
                <div className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454]">
                  Co-founder of KYMA
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
