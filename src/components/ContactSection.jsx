import { useState } from 'react'

const footerLinks = [
  { label: 'Work',     href: '#work'    },
  { label: 'About',   href: '#about'   },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Twitter', href: 'https://x.com', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col"
    >
      <div className="flex-1 flex flex-col px-10 lg:px-14 pt-[120px] pb-16 max-w-[1200px] mx-auto w-full">

        {/* Big heading */}
        <div className="mb-16">
          <p className="text-[11px] font-[600] tracking-[0.12em] uppercase text-[#555] mb-4">Get in touch</p>
          <h2 className="text-[clamp(48px,7vw,110px)] font-[600] tracking-[-0.04em] leading-[0.95] text-white">
            Let's build<br />
            <span className="text-[#444]">something great.</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16 flex-1">

          {/* Left — form */}
          <div className="flex-1 max-w-[520px]">
            {sent ? (
              <div className="h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-[#21b30b]/15 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-[#21b30b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-[600] tracking-[-0.03em] text-white mb-2">Message sent.</h3>
                <p className="text-[14px] font-[400] text-[#666] leading-[1.6]">
                  I'll get back to you within 24 hours. Looking forward to it.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { id: 'name',    label: 'Your name',    type: 'text',  placeholder: 'Joseph Smith' },
                  { id: 'email',   label: 'Email address', type: 'email', placeholder: 'hello@yourco.com' },
                ].map(f => (
                  <div key={f.id}>
                    <label className="block text-[11px] font-[600] tracking-[0.08em] uppercase text-[#555] mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      required
                      className="w-full bg-[#141414] border border-[#222] rounded-xl px-4 py-3.5 text-[14px] font-[400] text-white placeholder-[#444] focus:outline-none focus:border-[#444] transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[11px] font-[600] tracking-[0.08em] uppercase text-[#555] mb-2">
                    Tell me about your project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="I need a brand identity and website for my startup..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                    className="w-full bg-[#141414] border border-[#222] rounded-xl px-4 py-3.5 text-[14px] font-[400] text-white placeholder-[#444] focus:outline-none focus:border-[#444] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white text-black text-[13.5px] font-[600] tracking-[-0.01em] px-6 py-3.5 rounded-full hover:bg-[#e8e8e8] transition-colors duration-200 w-fit"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>

          {/* Right — info */}
          <div className="lg:w-[280px] flex-shrink-0 flex flex-col gap-10">
            <div>
              <p className="text-[11px] font-[600] tracking-[0.08em] uppercase text-[#555] mb-3">Email</p>
              <a
                href="mailto:joseph@launchnow.design"
                className="text-[14px] font-[400] text-[#999] hover:text-white transition-colors duration-200"
              >
                joseph@launchnow.design
              </a>
            </div>

            <div>
              <p className="text-[11px] font-[600] tracking-[0.08em] uppercase text-[#555] mb-3">Response time</p>
              <p className="text-[14px] font-[400] text-[#999]">Within 24 hours</p>
            </div>

            <div>
              <p className="text-[11px] font-[600] tracking-[0.08em] uppercase text-[#555] mb-3">Availability</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#21b30b]" />
                <p className="text-[14px] font-[400] text-[#999]">Open for projects — Aug 2025</p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-[600] tracking-[0.08em] uppercase text-[#555] mb-3">Prefer a call?</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[13.5px] font-[600] tracking-[-0.01em] text-white border border-[#333] rounded-full px-4 py-2.5 hover:border-white transition-colors duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 9.1 19.72 19.72 0 01.34.55 2 2 0 012.31 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.87 7.37a16 16 0 006.76 6.76l.71-1.69a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-[#1a1a1a] px-10 lg:px-14 py-5 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-[500] tracking-[-0.01em] text-[#444]">
            © 2025 Joseph. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
                className="text-[12px] font-[500] tracking-[-0.01em] text-[#444] hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
