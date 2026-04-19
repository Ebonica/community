import { motion } from 'framer-motion';
import { FaLinkedinIn, FaCode, FaRobot, FaChalkboardTeacher } from 'react-icons/fa';

export default function Mentors() {
  return (
    <section className="py-24 px-4 relative z-10 bg-black/20 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Visionary</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The mind behind EboXAI, dedicated to bridging the gap between complex AI concepts and practical, real-world engineering.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 group hover:border-neonBlue/30 transition-all duration-500"
          >
            {/* Background glowing orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/10 blur-[80px] rounded-full z-0 group-hover:bg-neonBlue/20 transition-all duration-500"></div>

            <div className="relative z-10 shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-neonBlue to-neonPurple">
                <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center border-[4px] border-transparent backdrop-blur-sm relative overflow-hidden">
                  <img src="/founder/profile.png" alt="Ebonica Saleth" className="w-full h-full object-cover rounded-full relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-neonBlue/20 to-transparent mix-blend-overlay z-20 pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-center md:text-left flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Ebonica Saleth</h3>
              <p className="text-neonBlue font-medium tracking-wide uppercase text-sm mb-6">Founder</p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Passionate about democratizing Artificial Intelligence. Ebonica founded EboXAI to empower developers, students, and founders with the practical skills needed to thrive in the AI era. Through hands-on workshops and continuous mentorship, Ebonica leads a growing movement of forward-thinking innovators.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/ebonica-saleth-92b268224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0a66c2] text-white rounded-full font-bold flex items-center gap-2 hover:bg-[#004182] transition-colors shadow-lg"
                >
                  <FaLinkedinIn className="text-xl" />
                  <span>Connect on LinkedIn</span>
                </a>

                <div className="flex items-center gap-3 text-gray-400 ml-2 mt-4 sm:mt-0">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:text-white transition-colors" title="AI Engineering"><FaRobot /></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:text-white transition-colors" title="Software Development"><FaCode /></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:text-white transition-colors" title="Mentorship"><FaChalkboardTeacher /></div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
