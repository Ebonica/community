import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "David M.",
    role: "Student & Developer",
    text: "I've learned more about practical AI tools here in a few weeks than I did from hours of tutorials. The prompt engineering resources shared in the group are top tier.",
  },
  {
    name: "Sarah J.",
    role: "Product Designer",
    text: "As someone just starting out, this community has been incredibly welcoming. Whenever I don't know which AI model is best for a task, there's always someone to point me in the right direction.",
  },
  {
    name: "Michael T.",
    role: "Software Engineer",
    text: "The weekly resource drops alone are insane, but it's completely free. The discussions here have helped me finally map out and build my first full-stack AI app.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative z-10 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Hear from our <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Community</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join hundreds of members who are leveling up their skills every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative hover:border-neonBlue/30 transition-all group"
            >
              <div className="absolute top-6 right-8 text-white/5 text-7xl group-hover:text-neonBlue/10 transition-colors">
                <FaQuoteLeft />
              </div>
              
              <div className="flex gap-1 mb-6 text-neonBlue">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 relative z-10 leading-relaxed font-medium">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neonBlue/40 to-neonPurple/40 flex items-center justify-center font-bold text-xl border border-white/20">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-wide">{item.name}</h4>
                  <p className="text-sm text-neonBlue/80 font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
