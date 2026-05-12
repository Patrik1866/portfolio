export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Sass" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "PostgreSQL" },
      { name: "Laravel" },
      { name: "JWT" },
      { name: "REST API" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker" },
      { name: "Github Actions" },
      { name: "Docker Compose" },
      { name: "Traefik" },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "Gemini API" },
      { name: "ChatGPT" },
      { name: "Perplexity AI" },
      { name: "Copilot" },
      { name: "GitHub Copilot" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git" },
      { name: "Postman" },
      { name: "IntelliJ IDEA" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Linux" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving" },
      { name: "Team Collaboration" },
      { name: "Effective Communication" },
      { name: "Adaptability" },
      { name: "Time Management" },
      { name: "Scrum & Agile Methodologies" },
    ],
  },
];
