import FadeUp from './FadeUp'

const projects = [
  {
    name: 'Kora Consulting Site',
    type: 'Branding / Web Design',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    href: '#',
  },
  {
    name: 'KYMA AI Agency',
    type: 'Framer Development / AI',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    href: '#',
  },
  {
    name: 'Mugen Design Studio',
    type: 'Brand Design / Motion',
    img: 'https://images.unsplash.com/photo-1634655377962-e6e7b446e7e8?w=800&q=80',
    href: '#',
  },
  {
    name: 'Axiom Ecommerce Site',
    type: 'Ecommerce / UX Design',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    href: '#',
  },
]

function ProjectCard({ project, delay }) {
  return (
    <FadeUp delay={delay}>
      <a
        href={project.href}
        className="group flex flex-col gap-3 cursor-pointer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#fafafa] border border-[#dedede]">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.68,0,0.22,0.83)] group-hover:scale-110"
          />
        </div>

        {/* Info row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[17px] font-[500] tracking-[-0.02em]">{project.name}</span>
            <span className="text-[12px] font-[600] tracking-[-0.01em] text-[#545454]">{project.type}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-[600] tracking-[-0.01em] text-[#545454] opacity-60 group-hover:opacity-100 transition-opacity duration-200">
            <svg
              className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View Project
          </div>
        </div>
      </a>
    </FadeUp>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-20 border-t border-[#dedede]">
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Header */}
        <FadeUp>
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-[clamp(28px,3vw,40px)] font-[600] tracking-[-0.03em] leading-[1.1]">
              Selected work
            </h2>
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 text-[13.5px] font-[600] tracking-[-0.01em] border border-[#dedede] rounded-full px-4 py-2 hover:border-black transition-colors duration-200"
            >
              View all projects
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
