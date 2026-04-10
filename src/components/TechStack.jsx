import { motion } from 'framer-motion';
import { SiPython, SiPytorch, SiOpenai, SiHuggingface, SiDocker, SiVercel, SiNextdotjs, SiReact } from 'react-icons/si';

const techs = [
  { name: "Python", icon: <SiPython />, color: "text-[#3776AB]", bg: "bg-[#3776AB]/10" },
  { name: "PyTorch", icon: <SiPytorch />, color: "text-[#EE4C2C]", bg: "bg-[#EE4C2C]/10" },
  { name: "OpenAI API", icon: <SiOpenai />, color: "text-white", bg: "bg-white/10" },
  { name: "Hugging Face", icon: <SiHuggingface />, color: "text-[#FFD21E]", bg: "bg-[#FFD21E]/10" },
  { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", bg: "bg-white/10" },
  { name: "React", icon: <SiReact />, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
  { name: "Vercel", icon: <SiVercel />, color: "text-white", bg: "bg-white/10" }
];

export default function TechStack() {
  return (
    <section className="py-24 px-4 relative z-10 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neonPurple/30 bg-neonPurple/10 text-xs font-bold tracking-widest text-neonPurple uppercase">
            Not just prompts. Real Architecture.
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            The <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Tech Stack</span> We Master
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our innovators are building production-level applications. Join discussions on state-of-the-art frameworks, tools, and Generative AI models.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer group shadow-lg"
            >
              <div className={`p-4 rounded-xl ${tech.bg} ${tech.color} text-4xl group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
