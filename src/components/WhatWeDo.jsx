import { motion } from 'framer-motion';
import { FaBrain, FaTools, FaGraduationCap, FaRocket } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const features = [
  {
    icon: <FaBrain className="text-3xl text-neonBlue" />,
    title: "Learn AI the simple way",
    description: "Break down complex AI concepts into easy, digestible lessons."
  },
  {
    icon: <FaTools className="text-3xl text-neonPurple" />,
    title: "Discover powerful AI tools",
    description: "Stay ahead with the latest and most effective AI tools available."
  },
  {
    icon: <FaGraduationCap className="text-3xl text-neonBlue" />,
    title: "Workshops, courses & events",
    description: "Participate in hands-on sessions led by industry experts."
  },
  {
    icon: <FaRocket className="text-3xl text-neonPurple" />,
    title: "Build real-world projects",
    description: "Apply your knowledge to create impactful, practical AI projects."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WhatWeDo() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We <span className="text-gradient">Do</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Empowering you with the knowledge and tools to thrive in the AI era.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={item}>
              <Tilt 
                tiltMaxAngleX={15} 
                tiltMaxAngleY={15} 
                glareEnable={true} 
                glareMaxOpacity={0.15} 
                glareColor="white" 
                glarePosition="all"
                scale={1.05}
                className="h-full glass-card rounded-2xl border border-white/5 hover:border-white/20 transition-colors duration-300 transform-style-3d cursor-pointer"
              >
                <div className="p-8 flex flex-col h-full inner-element">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transform translate-z-10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-wide transform translate-z-10">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed transform translate-z-5">
                    {feature.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
