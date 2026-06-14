import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Experience",
    desc: "Ultra-fast headless commerce platform with instant page changes.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "SaaS Dashboard Engine",
    desc: "A clean, modern analytical UI layout optimized for data rendering.",
    tech: ["React", "Next.js", "Lucide Icons"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured Creations</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-gray-900/40 border border-gray-800/80 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-blue-400 mb-6">
                <Code size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">{project.desc}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-gray-800/60 px-3 py-1 rounded-full text-gray-300 font-medium">{t}</span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:underline">
                Explore Project <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}