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
    liveUrl: "https://portfolio.project-dev-preview.com",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with cart, authentication, authorization, CRUD, and AI chatbot integration.",
    tech: [
      "React",
      "Node.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Gemini API",
      "Tailwind CSS",
      "JWT Authentication",
    ],
    liveUrl: "https://webshop.project-dev-preview.com",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "Collaborative task management app with real-time updates and team features.",
    tech: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://www.taskmanager.project-dev-preview.com",
  },
];
