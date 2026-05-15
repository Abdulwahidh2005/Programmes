import FadeUp from './FadeUp'

const posts = [
  {
    date: 'Mar 6, 2025',
    title: 'How designers and developers can actually collaborate',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80',
    href: '#',
  },
  {
    date: 'Apr 22, 2025',
    title: 'Why faster isn\'t always better in design',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
    href: '#',
  },
  {
    date: 'Apr 1, 2025',
    title: 'Designing for human connection',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80',
    href: '#',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">

        <div className="flex items-end justify-between mb-12">
          <div>
            <FadeUp>
              <p className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454] mb-3">Blog</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-[600] tracking-[-0.035em] leading-[1.1]">
                Thoughts & insights
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 text-[13.5px] font-[600] tracking-[-0.01em] border border-[#dedede] rounded-full px-4 py-2 hover:border-black transition-colors duration-200"
            >
              View all posts
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08}>
              <a href={p.href} className="group flex flex-col gap-4" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="aspect-video rounded-xl overflow-hidden border border-[#dedede] bg-[#fafafa]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454]">{p.date}</span>
                  <h3 className="text-[17px] font-[600] tracking-[-0.02em] leading-[1.3]">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-[13px] font-[600] tracking-[-0.01em] text-[#545454] group-hover:text-black transition-colors duration-200">
                    Read more
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
