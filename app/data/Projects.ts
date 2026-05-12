export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS, and GSAP animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce platform with cart, authentication, and payment integration.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "Collaborative task management app with real-time updates and team features.",
    tech: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
];
