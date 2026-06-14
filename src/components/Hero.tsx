import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background glow effects for "Wow" factor without heavy images */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl text-center z-10">
        <p className="text-xs md:text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-4">
          Freelance Web Developer
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none">
          Crafting Digital Experiences From <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Kozhikode</span>
        </h1>
        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I'm Adarsh Raj S. I build ultra-fast, responsive, and visually striking web applications using cutting-edge technologies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 rounded-full font-medium transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
            View My Work <ArrowUpRight size={18} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gray-800/80 hover:bg-gray-800 border border-gray-700 rounded-full font-medium transition-all">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}