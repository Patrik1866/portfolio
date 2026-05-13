export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm neon-amber">
        <p>© {new Date().getFullYear()} Patrik Erdélyi. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Patrik1866"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-amber transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/erd%C3%A9lyi-patrik-b643142b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-amber transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:erdelyi.patrik99@gmail.com"
            className="neon-amber transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
