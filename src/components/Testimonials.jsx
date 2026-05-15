import FadeUp from './FadeUp'

const testimonials = [
  {
    text: 'The UI redesign reduced our support tickets by 50%. Joseph understood our users better than we did.',
    name: 'Alex Kim',
    company: 'SupportEase',
    avatar: '11',
  },
  {
    text: 'Working with Joseph felt like having a seasoned design partner who truly understood our vision for KYMA.',
    name: 'Thomas Weber',
    company: 'KYMA',
    avatar: '33',
  },
  {
    text: 'Our conversion rate improved by 34% within two weeks of launching the new landing page. Remarkable work.',
    name: 'Priya Sharma',
    company: 'Nexus',
    avatar: '44',
  },
  {
    text: 'Joseph turned our complex data into something people actually enjoy looking at. DataSphere has never looked better.',
    name: 'Mark Chen',
    company: 'DataSphere',
    avatar: '65',
  },
  {
    text: 'The rebrand gave us a serious competitive advantage. Clients noticed immediately and our pitch win rate went up.',
    name: 'Sarah Miller',
    company: 'UnityBrands',
    avatar: '26',
  },
  {
    text: 'Engagement increased 30% after the redesign. Joseph nailed the brief perfectly on the first try.',
    name: 'David Park',
    company: 'TechVista',
    avatar: '54',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FFB800] text-[15px]">
      {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-12">
          <FadeUp>
            <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454] mb-3">Social proof</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[clamp(30px,4vw,52px)] font-[600] tracking-[-0.035em] leading-[1.1]">
              What clients say
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.07}>
              <div className="border border-[#dedede] rounded-2xl p-7 flex flex-col gap-5 h-full hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                <Stars />
                <p className="text-[15px] font-[500] tracking-[-0.01em] leading-[1.55] flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/80?img=${t.avatar}`}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#dedede]"
                  />
                  <div>
                    <div className="text-[13px] font-[600] tracking-[-0.01em]">{t.name}</div>
                    <div className="text-[12px] font-[500] tracking-[-0.01em] text-[#545454]">{t.company}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
