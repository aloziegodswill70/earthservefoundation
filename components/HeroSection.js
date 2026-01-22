"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Empowering Youths",
    text: "Raising leaders for a sustainable future through education and action.",
  },
  {
    title: "Protecting the Planet",
    text: "Climate action, environmental awareness, and community engagement.",
  },
  {
    title: "Driving Sustainable Change",
    text: "Creating impact today for a greener tomorrow.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-earthGreen to-earthDark text-white">
      {/* Ripple Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1.4],
            opacity: [0.35, 0.15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute w-[380px] h-[380px] md:w-[520px] md:h-[520px] rounded-full bg-white/20 blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                {slides[index].title}
              </h1>

              <p className="text-lg max-w-xl mb-8 text-white/90">
                {slides[index].text}
              </p>

              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <a href="/get-involved" className="btn-primary">
                  Get Involved
                </a>
                <a href="/about" className="btn-outline">
                  Learn More
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center">
          {/* Ripple Rings */}
          <motion.div
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-white/30"
            animate={{ scale: [1, 1.15, 1.3], opacity: [0.6, 0.3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full border border-white/20"
            animate={{ scale: [1, 1.1, 1.25], opacity: [0.6, 0.25, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
          />

          {/* Hero Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-full overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/earthserve.jpg"
              alt="EarthServe Foundation Impact"
              width={380}
              height={380}
              className="rounded-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
