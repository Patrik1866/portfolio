import { skillCategories } from "@/app/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-[#252821]/10 bg-[#cec8bb]/35 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker reveal text-center">02 / Toolkit</p>
        <h2 className="section-title reveal mt-3 text-center">
          Skills
        </h2>
        <div className="section-rule reveal mx-auto mt-6 mb-14" />

        <div className="grid gap-px overflow-hidden border border-[#252821]/15 bg-[#252821]/15 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="reveal min-h-48 bg-[#e4e0d6] p-6 transition-colors duration-300 hover:bg-[#ebe7dd]"
            >
              <h3 className="mb-5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#254c3f]">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="border-b border-[#695d4f]/35 pb-0.5 text-sm text-[#454b42]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
