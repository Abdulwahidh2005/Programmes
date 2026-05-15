export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#dedede] py-14">
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 md:gap-16 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-[15px] font-[700] tracking-[-0.02em]">Joseph</span>
            <p className="text-[13px] font-[500] text-[#545454] tracking-[-0.01em] leading-[1.55] max-w-[200px]">
              Strategic design that drives growth, not just looks good.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a href="https://x.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[#dedede] hover:border-black transition-colors duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.757l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[#dedede] hover:border-black transition-colors duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-[700] tracking-[0.05em] text-[#545454] uppercase mb-1">Navigate</span>
            {['Work', 'Services', 'Pricing', 'Blog'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[14px] font-[500] tracking-[-0.01em] text-[#545454] hover:text-black transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-[700] tracking-[0.05em] text-[#545454] uppercase mb-1">Contact</span>
            <a href="mailto:joseph@launchnow.design"
              className="text-[14px] font-[500] tracking-[-0.01em] text-[#545454] hover:text-black transition-colors duration-200">
              joseph@launchnow.design
            </a>
            <a href="#contact"
              className="text-[14px] font-[500] tracking-[-0.01em] text-[#545454] hover:text-black transition-colors duration-200">
              Book a consultation
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-[700] tracking-[0.05em] text-[#545454] uppercase mb-1">Legal</span>
            <a href="#" className="text-[14px] font-[500] tracking-[-0.01em] text-[#545454] hover:text-black transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-[14px] font-[500] tracking-[-0.01em] text-[#545454] hover:text-black transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#dedede] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[13px] font-[500] text-[#545454] tracking-[-0.01em]">
            © {year} Joseph. All rights reserved.
          </span>
          <span className="text-[13px] font-[500] text-[#545454] tracking-[-0.01em]">
            Designed & built by Joseph ✦
          </span>
        </div>
      </div>
    </footer>
  )
}
