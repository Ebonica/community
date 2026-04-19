import { motion } from 'framer-motion';
import { FaRegQuestionCircle, FaLightbulb, FaLaptopCode, FaUsers, FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Stay Connected with EboXAI 🚀</h2>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/groups/18652003/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0a66c2] text-white rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#004182] transition-colors shadow-lg"
              >
                <FaLinkedinIn className="text-xl" />
                <span>LinkedIn Group</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/company/eboxai-%E2%80%93-artificial-intelligence-technology-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border-2 border-[#0a66c2] text-[#0a66c2] rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#0a66c2] hover:text-white transition-all shadow-lg bg-white/5"
              >
                <FaLinkedinIn className="text-xl" />
                <span>LinkedIn Page</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/eboxai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg"
              >
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#1DA851] transition-colors shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Community</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://chat.whatsapp.com/DHzCskemJL90DMrYkB0PjB"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border-2 border-[#25D366] text-[#25D366] rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all shadow-lg bg-white/5"
              >
                <FaWhatsapp className="text-xl" />
                <span>Founders Group</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://chat.whatsapp.com/KfCblOAR8Iy3obHBhmFuYp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border-2 border-[#25D366] text-[#25D366] rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all shadow-lg bg-white/5"
              >
                <FaWhatsapp className="text-xl" />
                <span>AI Engineers Group</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
