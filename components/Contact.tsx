"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "info@divinoft.com",
      link: "mailto:info@divinoft.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Salem, Tamil Nadu, India",
      link: "https://maps.google.com/?q=Salem,Tamil+Nadu",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      content: "+91 98765 43210",
      link: "https://wa.me/919876543210",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Background video */}
      <div className="absolute inset-0 w-full h-full opacity-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/05/17/39950-421948268_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Animated background particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity }}
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-prism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    required
                    className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-effect rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="" className="bg-gray-900">Select Service *</option>
                    <option value="python-django" className="bg-gray-900">Python & Django Development</option>
                    <option value="mern-stack" className="bg-gray-900">MERN Stack Development</option>
                    <option value="design-to-code" className="bg-gray-900">Design to Code</option>
                    <option value="seo" className="bg-gray-900">SEO Optimization</option>
                    <option value="hosting" className="bg-gray-900">Web Hosting</option>
                    <option value="redesign" className="bg-gray-900">Website Redesign</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-prism rounded-2xl p-6 group cursor-pointer"
                >
                  <motion.div
                    className="text-4xl text-primary mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h4 className="text-white font-bold mb-2">{info.title}</h4>
                  <p className="text-gray-400 text-sm">{info.content}</p>
                </motion.a>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-prism rounded-2xl p-6"
            >
              <h4 className="text-white font-bold mb-4">Our Location</h4>
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125373.65488815793!2d78.0652257!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52f8d05%3A0x9cd3b38b255f7d40!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-prism rounded-2xl p-6"
            >
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedin />, link: "https://linkedin.com" },
                  { icon: <FaGithub />, link: "https://github.com" },
                  { icon: <FaWhatsapp />, link: "https://wa.me/919876543210" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary to-secondary rounded-full text-white text-xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
