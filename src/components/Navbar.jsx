import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar({ lenisRef }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroCompact, setHeroCompact] = useState(false)

  useEffect(() => {
    const onHeroCompact = (event) => {
      setHeroCompact(Boolean(event.detail?.compact))
    }

    window.addEventListener('hero-nav-compact', onHeroCompact)
    return () => window.removeEventListener('hero-nav-compact', onHeroCompact)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el && lenisRef.current) lenisRef.current.scrollTo(el, { offset: -80 })
  }

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#work' },
  ]

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0, scale: 0.975, filter: 'blur(10px)' }}
      animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ type: 'spring', stiffness: 70, damping: 19, mass: 0.9, delay: 0.04 }}
      className="fixed left-0 right-0 top-[20px] z-50 flex justify-center px-5"
    >
      <motion.div
        className="hidden items-center justify-center overflow-hidden rounded-full border md:flex"
        animate={{
          height: heroCompact ? 44 : 56,
          minWidth: heroCompact ? 250 : 600,
          paddingLeft: 12,
          paddingRight: 12,
          gap: heroCompact ? 16 : 28,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 24, mass: 0.9 }}
        style={{
          borderColor: 'rgba(210,210,210,0.72)',
          background: 'rgba(255,255,255,0.66)',
          WebkitBackdropFilter: 'blur(22px) saturate(1.35)',
          backdropFilter: 'blur(22px) saturate(1.35)',
          boxShadow: '0 18px 48px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.92) inset',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {heroCompact ? (
            <motion.a
              key="compact-name"
              href="#"
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full items-center justify-between gap-5"
            >
              <span className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/48?img=33"
                  alt=""
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span className="whitespace-nowrap text-[17px] font-semibold tracking-[-0.035em] text-[#050505]">
                  Joseph Alexander
                </span>
              </span>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-[#888]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#888]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#888]" />
              </span>
            </motion.a>
          ) : (
            <motion.div
              key="full-nav"
              initial={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center"
              style={{ gap: 28 }}
            >
              <a href="#" className="flex shrink-0 items-center gap-3 rounded-full">
                <img
                  src="https://i.pravatar.cc/48?img=33"
                  alt=""
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span className="text-[16px] font-semibold tracking-[-0.035em] text-[#050505]">
                  Joseph Alexander
                </span>
              </a>

              <div className="flex shrink-0 items-center" style={{ gap: 24 }}>
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="cursor-pointer border-none bg-transparent text-[13.5px] font-semibold tracking-[-0.035em] text-[#111] transition-colors duration-200 hover:text-[#6a6a6a]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <motion.button
                onClick={() => scrollTo('#contact')}
                whileHover={{
                  y: -2,
                  scale: 1.035,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.13), 0 1px 0 rgba(255,255,255,0.95) inset',
                }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="shrink-0 cursor-pointer rounded-full border border-[#e8e8e8] bg-white/88 px-4 py-1.5 text-[13.5px] font-semibold tracking-[-0.035em] text-black shadow-[0_7px_18px_rgba(0,0,0,0.09),0_1px_0_rgba(255,255,255,0.95)_inset] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Contact
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex h-[56px] w-full max-w-[420px] items-center justify-between rounded-full border border-[#dedede] bg-white/88 px-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=33"
            alt=""
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-[15px] font-semibold tracking-[-0.03em] text-black">
            Joseph
          </span>
        </a>
        <button
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-[#e6e6e6] bg-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-4 bg-black transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-4 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-4 bg-black transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 64, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="absolute left-5 right-5 top-0 rounded-[20px] border border-[#dedede] bg-white p-4 shadow-[0_18px_45px_rgba(0,0,0,0.12)] md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-full bg-[#f6f6f6] px-4 py-3 text-left text-[15px] font-semibold tracking-[-0.02em] text-[#111]"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="rounded-full bg-black px-4 py-3 text-[15px] font-semibold tracking-[-0.02em] text-white"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
