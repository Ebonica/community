import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const images = [
  "/workshop/EboXAI_Workshop.png",
  "/workshop/scre1.jpeg",
  "/workshop/scre2.jpeg",
  "/workshop/scre3.jpeg"
];

const linkedinPosts = [
  "https://www.linkedin.com/posts/padmini-s-762ab2293_expanding-my-ai-knowledge-workshop-certificate-ugcPost-7451589915169165312-bh9V",
  "https://www.linkedin.com/feed/update/urn:li:activity:7451590109277368320/",
  "https://www.linkedin.com/feed/update/urn:li:activity:7451582280969457664/"
];

export default function CompletedWorkshops() {
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Completed <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Workshops</span></h2>
            <p className="text-gray-400 max-w-xl">Take a look at our successful past events and the amazing certificates our students earned.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 group aspect-video lg:aspect-square"
            >
               <img src={img} alt={`Workshop memory ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h3 className="text-2xl font-bold text-white mb-6">Student <span className="text-neonBlue">Appreciation</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {linkedinPosts.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#0077b5]/50 transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                            <FaLinkedin className="text-2xl" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-white font-medium truncate">View LinkedIn Post</p>
                            <p className="text-sm text-gray-400">Student Certificate</p>
                        </div>
                    </a>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
