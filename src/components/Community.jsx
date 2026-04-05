import { motion } from 'framer-motion';
import { FaRegQuestionCircle, FaLightbulb, FaLaptopCode, FaUsers, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const list = [
  { icon: <FaRegQuestionCircle />, text: "Ask questions" },
  { icon: <FaLightbulb />, text: "Share ideas" },
  { icon: <FaLaptopCode />, text: "Build projects" },
  { icon: <FaUsers />, text: "Grow together" }
];

export default function Community() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-12">
            "This is not just a page — <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-white to-neonPurple">it’s a movement</span>"
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {list.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/10"
              >
                <span className="text-neonBlue text-xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-10 md:p-16 border border-white/10 relative overflow-hidden"
        >
          {/* Inner glowing orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neonPurple/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Join EboXAI Today 🚀</h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button group relative px-8 py-4 bg-white text-dark rounded-full font-bold text-lg flex items-center justify-center gap-3 w-full sm:w-auto min-w-[240px]"
              >
                <FaWhatsapp className="text-2xl" />
                <span>WhatsApp</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/groups/18652003/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto min-w-[240px]"
              >
                <FaLinkedinIn className="text-2xl" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
