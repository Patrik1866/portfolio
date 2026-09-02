"use client";

import { useEffect, useState } from "react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled
        ? "border-[#252821]/10 bg-[#e4e0d6]/90 shadow-[0_8px_30px_rgba(58,50,40,0.07)] backdrop-blur-md"
        : "border-transparent bg-transparent"
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-mono text-sm font-bold tracking-wide text-[#254c3f] transition-colors hover:text-[#17362c]"
        >
          {"EP / 01"}
        </button>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={`text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${activeSection === link.href
                  ? "text-[#254c3f]"
                  : "text-[#6b6e64] hover:text-[#254c3f]"
                  }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="text-[#254c3f] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-[#252821]/10 bg-[#e4e0d6]/95 shadow-[0_14px_30px_rgba(58,50,40,0.1)] backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => {
                    scrollToSection(link.href);
                    setMenuOpen(false);
                  }}
                  className={`text-left text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${activeSection === link.href
                    ? "text-[#254c3f]"
                    : "text-[#6b6e64] hover:text-[#254c3f]"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
