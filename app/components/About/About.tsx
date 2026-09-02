export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker reveal text-center">01 / Profile</p>
        <h2 className="section-title reveal mt-3 text-center">
          About Me
        </h2>
        <div className="section-rule reveal mx-auto mt-6 mb-14" />

        <div className="grid items-center gap-10 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
          {/* Avatar placeholder */}
          <div className="reveal flex justify-center md:justify-start">
            <div className="relative grid aspect-square w-full max-w-[17rem] place-items-center border border-[#695d4f]/30 bg-[#d0c9ba]/55">
              <span className="font-mono text-6xl font-semibold tracking-[0.08em] text-[#254c3f] sm:text-7xl">EP</span>
              <span className="absolute bottom-4 left-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#695d4f]">Since 2026</span>
              <span className="absolute right-[-1px] top-[-1px] h-10 w-10 border-l border-b border-[#254c3f]" />
            </div>
          </div>

          {/* Text */}
          <div className="reveal space-y-5 text-[0.97rem] leading-7 text-[#555b51]">
            <p>
              Hi! I&apos;m a passionate full-stack developer based in Hungary.
              I love creating digital experiences that are both functional and
              aesthetically pleasing.
            </p>
            <p>
              With experience in React, Next.js, Node.js and modern web
              technologies, I build everything from landing pages to complex web
              applications.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good cup of coffee.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="/cv.pdf"
                className="inline-flex items-center border border-[#254c3f] bg-[#254c3f] px-5 py-2.5 text-sm font-semibold text-[#f3f0e9] transition-colors hover:bg-[#17362c]"
              >
                Download CV
              </a>
              <a
                href="https://github.com/Patrik1866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#695d4f]/50 px-5 py-2.5 text-sm font-semibold text-[#3f463c] transition-colors hover:border-[#254c3f] hover:text-[#254c3f]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
