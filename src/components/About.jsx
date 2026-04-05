import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="inline-block mb-6">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-semibold tracking-widest uppercase text-gray-300">
              The Movement
            </span>
          </div>
          
          <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-200">
            <span className="font-semibold text-white">EboXAI</span> is a growing AI community helping students and professionals learn, explore, and build real-world AI skills. 
            <span className="text-white font-medium"> AI is no longer optional — it's a necessity.</span> We simplify AI and make it accessible for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
