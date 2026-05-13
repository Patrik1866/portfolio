export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-dark-green">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gray-800 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-2xl glass-tile flex items-center justify-center">
              <span className="text-7xl">👨‍💻</span>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 leading-relaxed">
            <p className="text-white neon-text">
              Hi! I&apos;m a passionate full-stack developer based in Hungary.
              I love creating digital experiences that are both functional and
              aesthetically pleasing.
            </p>
            <p className="text-white neon-text">
              With experience in React, Next.js, Node.js and modern web
              technologies, I build everything from landing pages to complex web
              applications.
            </p>
            <p className="text-white neon-text">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good cup of coffee.
            </p>
            <div className="flex gap-4 pt-2 flex-wrap justify-center md:justify-start">
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 glass-btn neon-cyan text-white font-medium rounded-lg transition-colors"
              >
                Download CV
              </a>
              <a
                href="https://github.com/Patrik1866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 glass-btn neon-cyan font-medium rounded-lg transition-colors"
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
