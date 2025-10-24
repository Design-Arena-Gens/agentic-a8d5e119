"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      title: "Frontend",
      techs: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiNextdotjs />, name: "Next.js", color: "#fff" },
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      techs: [
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
        { icon: <SiDjango />, name: "Django", color: "#092E20" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#fff" },
      ],
    },
    {
      title: "Database",
      techs: [
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
        { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
      ],
    },
    {
      title: "Tools & Others",
      techs: [
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
        { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
        { icon: <FaAws />, name: "AWS", color: "#FF9900" },
        { icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
      ],
    },
  ];

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Animated background particles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technologies We Master</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We leverage the latest and most powerful technologies to build exceptional web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2 }}
              className="glass-prism rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-white text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catIndex * 0.2 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center glass-effect rounded-lg p-3 group cursor-pointer"
                  >
                    <motion.div
                      className="text-3xl mr-4"
                      style={{ color: tech.color }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <span className="text-white font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-prism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-400 text-lg">
              Our team continuously explores emerging technologies and best practices to ensure
              your project benefits from the most efficient, secure, and scalable solutions
              available in the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
