"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "MERN",
      description: "Full-featured online shopping platform with payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Healthcare Management System",
      category: "Django",
      description: "Comprehensive hospital management system with patient records, appointment scheduling, and billing.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["Python", "Django", "PostgreSQL", "REST API"],
    },
    {
      title: "Real Estate Portal",
      category: "MERN",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      tags: ["Next.js", "Express", "MongoDB", "Maps API"],
    },
    {
      title: "Educational LMS",
      category: "Django",
      description: "Learning management system with video streaming, quizzes, progress tracking, and certificates.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      tags: ["Django", "React", "PostgreSQL", "AWS S3"],
    },
    {
      title: "Restaurant Booking App",
      category: "MERN",
      description: "Table reservation system with menu browsing, reviews, and loyalty program integration.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Fitness Tracking Platform",
      category: "Django",
      description: "Personal fitness tracker with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      tags: ["Python", "Django", "Chart.js", "REST API"],
    },
  ];

  const filters = ["All", "MERN", "Django"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Background animation */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 100, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
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
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore our recent projects showcasing innovative solutions and cutting-edge technology
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "glass-effect text-gray-400 hover:text-white"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-prism rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Overlay icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="bg-primary p-3 rounded-full text-white"
                  >
                    <FaExternalLinkAlt />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="bg-secondary p-3 rounded-full text-white"
                  >
                    <FaGithub />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 glass-effect rounded-full text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
