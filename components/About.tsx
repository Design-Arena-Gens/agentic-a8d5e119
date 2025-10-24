"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle, FaUsers, FaRocket, FaAward } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <FaUsers />, number: "100+", label: "Happy Clients" },
    { icon: <FaRocket />, number: "200+", label: "Projects Completed" },
    { icon: <FaAward />, number: "5+", label: "Years Experience" },
    { icon: <FaCheckCircle />, number: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description: "Every line of code is crafted with precision and best practices.",
    },
    {
      title: "Support",
      description: "24/7 customer support to ensure your business runs smoothly.",
    },
    {
      title: "Transparency",
      description: "Clear communication and honest pricing throughout the project.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/10/25/136652-765038085_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/95 to-gray-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Divinoft Developers</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6">
              Based in Salem, Tamil Nadu, Divinoft Developers is a leading web development company
              specializing in full-stack solutions. We transform ideas into powerful digital
              experiences that drive business growth across India.
            </p>

            <p className="text-gray-400 text-lg mb-8">
              With expertise in Python, Django, MERN stack, and modern web technologies, we deliver
              comprehensive A-Z website services including development, design, SEO, hosting, and
              maintenance. Our team of passionate developers is committed to excellence and
              innovation.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Expert Full-Stack Development",
                "Modern Technology Stack",
                "SEO-Optimized Solutions",
                "Responsive & Mobile-First Design",
                "Scalable Architecture",
                "Ongoing Support & Maintenance",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <FaCheckCircle className="text-primary mr-3 text-xl" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover-glow"
            >
              Work With Us
            </motion.a>
          </motion.div>

          {/* Right side - Stats and values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-prism rounded-2xl p-6 text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl text-primary mb-3 flex justify-center"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass-effect rounded-xl p-5 border-l-4 border-primary"
                >
                  <h4 className="text-white font-bold mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
};

export default About;
