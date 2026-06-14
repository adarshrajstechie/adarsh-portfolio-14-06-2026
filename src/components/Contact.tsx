import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-gray-900">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's Build Something Epic</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-12">
        Looking for a high-performance web developer? I am currently accepting freelance projects globally.
      </p>
      
      <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-12 bg-gray-900/30 border border-gray-800 px-8 py-6 rounded-2xl backdrop-blur-sm">
        <div className="flex items-center gap-3 text-gray-300">
          <Mail className="text-blue-400" size={20} />
          <span className="font-medium">your.email@example.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <MapPin className="text-emerald-400" size={20} />
          <span className="font-medium">Kozhikode, Kerala, India</span>
        </div>
      </div>
    </section>
  );
}