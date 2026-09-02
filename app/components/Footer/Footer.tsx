export default function Footer() {
  return (
    <footer className="border-t border-[#252821]/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[#6b6e64] md:flex-row">
        <p>© {new Date().getFullYear()} Patrik Erdélyi. All rights reserved.</p>
        <div className="flex items-center gap-5 font-medium text-[#254c3f]">
          <a
            href="https://github.com/Patrik1866"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#17362c]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/erd%C3%A9lyi-patrik-b643142b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#17362c]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:erdelyi.patrik99@gmail.com"
            className="transition-colors hover:text-[#17362c]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
