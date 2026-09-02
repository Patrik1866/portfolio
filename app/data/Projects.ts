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
    title: "Encrypted file-sharing platform",
    description:
      "Make secure sharing effortless, while keeping ownership and control in the hands of the user.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    liveUrl: "https://vaultshare.project-dev-preview.com",
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
    tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind CSS", "Redis", "JWT Authentication"],
    liveUrl: "https://www.collabpulse.project-dev-preview.com",
  },
];
