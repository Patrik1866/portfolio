import { projects } from "@/app/data/Projects";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker reveal text-center">03 / Selected work</p>
        <h2 className="section-title reveal mt-3 text-center">
          Projects
        </h2>
        <div className="section-rule reveal mx-auto mt-6 mb-14" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
