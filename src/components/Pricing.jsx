import FadeUp from './FadeUp'

const unlimitedFeatures = [
  'No contracts — pause or cancel anytime',
  'Multiple brands supported',
  'Unlimited design requests',
  '48-hour average turnaround',
  'Framer development included',
  'Dedicated Trello board',
  'Direct Slack communication',
]

const projectFeatures = [
  'Clearly defined project scope',
  'Fixed timeline & milestones',
  '3 rounds of revisions',
  'Milestone-based progress updates',
  'Full IP ownership on delivery',
  '30-day post-launch support',
]

function Check({ featured }) {
  return (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold ${
        featured ? 'bg-white/15 text-white' : 'bg-[#f0f0f0] text-black'
      }`}
    >
      ✓
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">

        {/* Header */}
        <div className="mb-14">
          <FadeUp>
            <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454] mb-3">Pricing</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(30px,4vw,52px)] font-[600] tracking-[-0.035em] leading-[1.1] mb-4">
              Clear costs, no hidden fees
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-[16px] font-[500] tracking-[-0.01em] text-[#545454]">
              Select from monthly subscriptions or individual project rates
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Unlimited — featured */}
          <FadeUp delay={0.1}>
            <div className="bg-black text-white rounded-2xl p-10 flex flex-col gap-8 h-full hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-[600] tracking-[-0.01em] text-white/50">Most popular</p>
                <h3 className="text-[22px] font-[600] tracking-[-0.02em]">Unlimited Design</h3>
                <div className="text-[52px] font-[900] tracking-[-0.05em] leading-none">
                  $8,000
                  <span className="text-[18px] font-[500] text-white/50"> / month</span>
                </div>
                <p className="text-[14px] font-[500] tracking-[-0.01em] text-white/60 leading-[1.5]">
                  Async design partnership. Submit unlimited requests and get them
                  done one at a time with a 48-hour turnaround.
                </p>
              </div>

              <hr className="border-white/15" />

              <div className="flex flex-col gap-3.5 flex-1">
                {unlimitedFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-[14px] font-[500] tracking-[-0.01em]">
                    <Check featured />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block text-center bg-white text-black text-[14px] font-[600] tracking-[-0.01em] py-3.5 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Get started
              </a>
            </div>
          </FadeUp>

          {/* Single project */}
          <FadeUp delay={0.18}>
            <div className="border border-[#dedede] rounded-2xl p-10 flex flex-col gap-8 h-full hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition-shadow duration-300">
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454]">One-time</p>
                <h3 className="text-[22px] font-[600] tracking-[-0.02em]">Single Project</h3>
                <div className="text-[52px] font-[900] tracking-[-0.05em] leading-none">
                  Custom
                  <span className="text-[18px] font-[500] text-[#545454]"> quote</span>
                </div>
                <p className="text-[14px] font-[500] tracking-[-0.01em] text-[#545454] leading-[1.5]">
                  A fixed-scope engagement for a specific deliverable with a
                  defined timeline and milestone-based updates.
                </p>
              </div>

              <hr className="border-[#dedede]" />

              <div className="flex flex-col gap-3.5 flex-1">
                {projectFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-[14px] font-[500] tracking-[-0.01em]">
                    <Check />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block text-center border border-[#dedede] text-black text-[14px] font-[600] tracking-[-0.01em] py-3.5 rounded-full hover:border-black transition-colors duration-200 cursor-pointer text-center"
              >
                Get a custom quote
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
