"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      location: "Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      content: "Divinoft Developers transformed our vision into reality. Their expertise in Django and React helped us build a scalable platform that our users love. Highly professional team!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Founder, FitLife Wellness",
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      content: "The team delivered an outstanding fitness tracking app with all the features we needed. Their attention to detail and commitment to quality is exceptional. Best web development company in Tamil Nadu!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Director, ShopEase",
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      content: "Working with Divinoft was a breeze. They understood our e-commerce requirements perfectly and delivered a MERN stack solution that exceeded expectations. Great SEO results too!",
      rating: 5,
    },
    {
      name: "Meera Reddy",
      role: "Managing Partner, EduTech India",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      content: "Our learning management system is now serving thousands of students thanks to Divinoft's exceptional development work. Their ongoing support and maintenance is top-notch!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Owner, Foodie Delights",
      location: "Delhi, NCR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
      content: "The restaurant booking platform they built has increased our table bookings by 300%. The real-time features and intuitive design are fantastic. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Animated background */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
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
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients across India say about us.
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="glass-prism rounded-3xl p-8 md:p-12 relative">
            {/* Quote icon */}
            <FaQuoteLeft className="text-6xl text-primary/20 absolute top-8 left-8" />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.img
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary mr-6"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>

              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 text-lg mb-6 italic"
              >
                "{testimonials[activeIndex].content}"
              </motion.p>

              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative ${
                activeIndex === index ? "ring-4 ring-primary" : "opacity-50"
              } rounded-full transition-all`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              {activeIndex === index && (
                <motion.div
                  layoutId="active-testimonial"
                  className="absolute inset-0 bg-primary/20 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
