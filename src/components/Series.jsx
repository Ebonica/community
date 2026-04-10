import { motion } from 'framer-motion';
import { FaBookOpen, FaVideo, FaMicrophoneAlt } from 'react-icons/fa';

const series = [
  {
    icon: <FaBookOpen className="text-3xl text-neonPurple" />,
    title: "Word of the Day",
    description: "Daily AI terminology explained simply.",
    tag: "🧠 Learn",
    color: "from-purple-500/20 to-transparent"
  },
  {
    icon: <FaVideo className="text-3xl border border-white p-1 rounded-md bg-white text-dark" />, 
    title: "AI Tool of the Day",
    description: "Discovering and mastering new AI tools daily.",
    tag: "🎬 Discover",
    color: "from-neonBlue/20 to-transparent"
  },
  {
    icon: <FaMicrophoneAlt className="text-3xl text-white" />,
    title: "EboXAI Voices",
    description: "Interviews and podcasts with AI pioneers.",
    tag: "🎙 Listen",
    color: "from-pink-500/20 to-transparent"
  }
];

export default function Series() {
  return (
    <section className="py-24 px-4 relative z-10 bg-black/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ongoing <span className="text-gradient">Series</span></h2>
            <p className="text-gray-400 max-w-xl">Curated content to keep you updated and engaged with the fast-paced world of AI.</p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-medium tracking-widest text-neonBlue uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-neonBlue">Highlights</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {series.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden relative group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/5 whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
