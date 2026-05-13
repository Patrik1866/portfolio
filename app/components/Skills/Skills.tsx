import { skillCategories } from "@/app/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold  mb-4 text-center neon-dark-green">
          Skills
        </h2>
        <div className="w-16 h-1 bg-gray-800 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="glass-tile rounded-2xl p-6"
            >
              <h3 className="neon-amber font-semibold text-sm uppercase tracking-widest mb-5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-[#0f0f0f] border border-[#2a2a2a] text-gray-300 text-sm rounded-md"
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
