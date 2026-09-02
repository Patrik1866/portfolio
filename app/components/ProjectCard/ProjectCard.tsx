import { Project } from "@/app/data/Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="reveal group flex min-h-[21rem] flex-col border border-[#252821]/15 bg-[#e9e5dc]/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#254c3f]/45 hover:shadow-[0_18px_35px_rgba(58,50,40,0.1)]">
      <div className="mb-9 flex items-start justify-between">
        <span className="font-mono text-[0.68rem] font-bold tracking-[0.12em] text-[#254c3f]">
          0{project.id}
        </span>
        <span className="h-6 w-6 border-r border-t border-[#695d4f]/45 transition-colors group-hover:border-[#254c3f]" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-semibold text-[#252821]">
          {project.title}
        </h3>
        <p className="text-sm leading-6 text-[#5e625a]">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 pt-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.66rem] text-[#5e625a]"
          >
            #{t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5 border-t border-[#252821]/15 pt-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#5e625a] transition-colors hover:text-[#254c3f]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#254c3f] transition-colors hover:text-[#17362c]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
