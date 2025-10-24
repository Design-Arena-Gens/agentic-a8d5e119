"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPython, FaReact, FaNodeJs, FaSearch, FaServer, FaPaintBrush, FaCode, FaSyncAlt } from "react-icons/fa";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FaPython />,
      title: "Python & Django Development",
      description: "Build robust, scalable web applications with Python and Django framework. Expert backend development for complex business logic.",
      features: ["REST APIs", "Database Design", "Authentication", "Admin Panels"],
    },
    {
      icon: <FaReact />,
      title: "MERN Stack Development",
      description: "Full-stack JavaScript development using MongoDB, Express, React, and Node.js for modern, responsive web applications.",
      features: ["Single Page Apps", "Real-time Features", "Scalable Architecture", "Modern UI/UX"],
    },
    {
      icon: <FaPaintBrush />,
      title: "Design to Code",
      description: "Transform your designs into pixel-perfect, responsive websites. We convert Figma, Adobe XD, or any design into clean, maintainable code.",
      features: ["Pixel Perfect", "Responsive Design", "Cross-browser Compatible", "Performance Optimized"],
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO services. On-page, off-page, and technical SEO to rank higher on search engines.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Optimization"],
    },
    {
      icon: <FaServer />,
      title: "Web Hosting",
      description: "Reliable, secure, and fast web hosting solutions. From shared hosting to dedicated servers with 99.9% uptime guarantee.",
      features: ["24/7 Support", "SSL Certificates", "Daily Backups", "High Performance"],
    },
    {
      icon: <FaCode />,
      title: "Custom Web Development",
      description: "Tailored web solutions built from scratch to meet your unique business requirements with cutting-edge technologies.",
      features: ["Custom Features", "Scalable Solutions", "Clean Code", "Documentation"],
    },
    {
      icon: <FaSyncAlt />,
      title: "Website Redesign",
      description: "Modernize your existing website with fresh designs, improved performance, and enhanced user experience.",
      features: ["Modern Design", "Better UX", "Performance Boost", "Mobile Friendly"],
    },
    {
      icon: <FaNodeJs />,
      title: "Website Redevelopment",
      description: "Complete website overhaul with latest technologies, improved security, and better performance for your growing business.",
      features: ["Technology Upgrade", "Security Enhancement", "Speed Optimization", "Feature Addition"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs.
            From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-prism rounded-2xl p-6 relative group overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4 text-primary"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 * idx }}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover-glow"
          >
            Get a Free Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
