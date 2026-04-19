import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Yogalakshmi Baskar",
    role: "Student",
    text: "The class was amazing! It gave me a clear understanding of future AI trends in a very engaging way.",
    rating: 5
  },
  {
    name: "Abishek K",
    role: "Student",
    text: "Attended an AI workshop that made complex concepts simple and practical. I learned how AI is applied to real-world problems through clear examples. A valuable experience that improved my skills and confidence in AI.",
    rating: 5
  },
  {
    name: "Basanagowda Patil",
    role: "Student",
    text: "The session was amazing and very informative. Truly enjoyed the learning experience!",
    rating: 4
  },
  {
    name: "Anu M",
    role: "Student",
    text: "This AI workshop has completely transformed my workflow. It cut my content creation time in half while improving quality. It feels like having a creative partner available 24/7. Highly recommended!",
    rating: 5
  },
  {
    name: "Naresh S",
    role: "Student",
    text: "It was very useful and insightful.",
    rating: 4
  },
  {
    name: "P. Kaviya",
    role: "Student",
    text: "Very useful and easy to understand. I gained practical knowledge that I can apply immediately.",
    rating: 5
  },
  {
    name: "Arjun M",
    role: "Student",
    text: "Good session with valuable insights.",
    rating: 4
  },
  {
    name: "Sekar P",
    role: "Student",
    text: "This workshop helped me define my future goals and understand my skills better.",
    rating: 5
  },
  {
    name: "Ubakara Jayanth U",
    role: "Student",
    text: "This session was highly useful. I gained a lot of knowledge that will definitely help my career.",
    rating: 5
  },
  {
    name: "P. Preethika",
    role: "Student",
    text: "This AI workshop provided an incredible deep dive into practical applications and emerging trends. The hands-on sessions and expert insights transformed complex concepts into actionable skills. Highly recommended for anyone looking to stay ahead in tech!",
    rating: 5
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
                {[...Array(item.rating || 5)].map((_, i) => (
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
