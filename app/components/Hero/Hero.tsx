"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { scrollToSection } from "@/app/lib/Utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-svh flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="hero-text text-white neon-dark-green text-sm font-mono mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="hero-text text-5xl md:text-7xl font-bold text-white mb-6 leading-tight ">
          Erdélyi Patrik
        </h1>
        <h2 className="hero-text text-2xl md:text-3xl font-medium text-white neon-dark-green mb-8">
          Full-Stack Developer
        </h2>
        <p className="hero-text text-white neon-text text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I build clean, performant web applications with modern technologies.
          Passionate about great user experiences and scalable code.
        </p>
        <div className="hero-text flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 neon-cyan text-white font-medium rounded-lg transition-colors duration-200 glass-btn"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-[#2a2a2a glass-btn neon-cyan font-medium rounded-lg transition-colors duration-200"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
