const tools = [
  { name: 'Figma',              emoji: '🎨' },
  { name: 'Framer',             emoji: '⚡' },
  { name: 'Webflow',            emoji: '🌐' },
  { name: 'Rive',               emoji: '🎭' },
  { name: 'Blender',            emoji: '🔷' },
  { name: 'Trello',             emoji: '📋' },
  { name: 'ChatGPT',            emoji: '🤖' },
  { name: 'Claude',             emoji: '✦'  },
  { name: 'Framer Development', emoji: '⚡' },
  { name: 'Brand Design',       emoji: '🎨' },
  { name: 'Web Apps',           emoji: '💻' },
  { name: 'Landing Pages',      emoji: '📄' },
  { name: 'Motion Graphics',    emoji: '🎬' },
  { name: '3D Design',          emoji: '🔮' },
  { name: 'UX/UI',              emoji: '✦'  },
]

const doubled = [...tools, ...tools]

export default function TechStack() {
  return (
    <div className="py-8 border-t border-[#dedede] overflow-hidden">
      <div className="flex marquee-track gap-12" style={{ width: 'max-content' }}>
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 text-[14px] font-[600] tracking-[-0.01em] text-[#545454] whitespace-nowrap select-none"
          >
            <span className="text-[18px]">{t.emoji}</span>
            {t.name}
          </div>
        ))}
      </div>
    </div>
  )
}
