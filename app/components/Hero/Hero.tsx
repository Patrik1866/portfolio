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
      className="relative min-h-svh overflow-hidden px-6 pt-16"
    >
      <div className="absolute right-[-7rem] top-[23%] h-72 w-72 rounded-full border border-[#254c3f]/20 sm:h-96 sm:w-96" />
      <div className="absolute left-[-3rem] bottom-[15%] h-32 w-[35vw] max-w-80 border-y border-[#695d4f]/20" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center">
        <p className="hero-text eyebrow-line section-kicker mb-6">
          Hello, I&apos;m
        </p>
        <h1 className="hero-text max-w-4xl text-5xl font-bold leading-[0.98] tracking-normal text-[#252821] sm:text-7xl lg:text-8xl">
          Erdélyi Patrik
        </h1>
        <h2 className="hero-text mt-6 text-xl font-medium text-[#254c3f] md:text-2xl">
          Full-Stack Developer
        </h2>
        <p className="hero-text mt-8 max-w-xl text-base leading-7 text-[#565c52] md:text-lg">
          I build clean, performant web applications with modern technologies.
          Passionate about great user experiences and scalable code.
        </p>
        <div className="hero-text mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollToSection("projects")}
            className="border border-[#254c3f] bg-[#254c3f] px-6 py-3 text-sm font-semibold text-[#f3f0e9] transition-colors hover:bg-[#17362c]"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-[#695d4f]/50 px-6 py-3 text-sm font-semibold text-[#3f463c] transition-colors hover:border-[#254c3f] hover:text-[#254c3f]"
          >
            Contact Me
          </button>
        </div>
        <p className="hero-text mt-16 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#77766c]">
          Based in Hungary · Available for thoughtful digital work
        </p>
      </div>
    </section>
  );
}
