import { motion } from 'framer-motion';

export default function Demographics() {
  return (
    <section className="py-24 px-4 relative z-10 bg-black/40 border-y border-white/5 mt-12 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Network with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-emerald-400">Top-Tier</span> Talent
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
              EboXAI is highly curated. You won't just find beginners here. Converse with founders, machine learning researchers, and full-stack developers actively building the future of AI.
            </p>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm font-bold mb-3 tracking-wide">
                  <span className="text-white">Software Engineers / Web Devs</span>
                  <span className="text-neonBlue">60%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-neonBlue rounded-full shadow-[0_0_15px_#00f0ff]"
                  ></motion.div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold mb-3 tracking-wide">
                  <span className="text-white">Data Scientists / AI Researchers</span>
                  <span className="text-neonPurple">25%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "25%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="h-full bg-neonPurple rounded-full shadow-[0_0_15px_#b026ff]"
                  ></motion.div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold mb-3 tracking-wide">
                  <span className="text-white">Founders & Product Managers</span>
                  <span className="text-emerald-400">15%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                    className="h-full bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399]"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neonBlue/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative z-10 backdrop-blur-xl bg-black/60">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 shadow-inner">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-md">200+</div>
                  <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-3">Active Members</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 shadow-inner">
                  <div className="text-4xl md:text-5xl font-black text-neonBlue mb-2 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">12+</div>
                  <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-3">Weekly Resources</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 shadow-inner">
                  <div className="text-4xl md:text-5xl font-black text-neonPurple mb-2 drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]">24/7</div>
                  <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-3">Global Support</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 shadow-inner">
                  <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">100%</div>
                  <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-3">Free Forever</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
