"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Python & Django Development",
    "MERN Stack Development",
    "SEO Optimization",
    "Web Hosting",
    "Design to Code",
    "Website Redesign",
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      {/* Background effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Divinoft Developers
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for full-stack web development, design, and digital solutions in Salem, Tamil Nadu.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                <span className="text-sm">Salem, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaPhone className="mr-2 text-primary" />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2 text-primary" />
                <a href="mailto:info@divinoft.com" className="text-sm hover:text-white transition-colors">
                  info@divinoft.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Follow us on social media for updates and tech insights.
            </p>
            <div className="flex gap-3 mb-6">
              {[
                { icon: <FaLinkedin />, link: "https://linkedin.com", color: "hover:bg-blue-600" },
                { icon: <FaGithub />, link: "https://github.com", color: "hover:bg-gray-700" },
                { icon: <FaWhatsapp />, link: "https://wa.me/919876543210", color: "hover:bg-green-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`w-10 h-10 flex items-center justify-center glass-effect rounded-lg text-white transition-all ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="glass-effect rounded-lg p-3">
              <p className="text-xs text-gray-400">
                <strong className="text-white">Keywords:</strong> Web Development Salem, Full Stack Development Tamil Nadu, Python Django India, MERN Stack Developers
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Divinoft Developers. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-1 animate-pulse" /> in Salem, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
