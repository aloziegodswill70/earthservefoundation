"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const fullTitle = "Earth Serve Foundation";
const fullSubtitle = "Recycling for a Sustainable Future";

export default function HeroSection() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  // Typing effect
  useEffect(() => {
    let tIndex = 0;
    let sIndex = 0;

    const titleInterval = setInterval(() => {
      setTitle(fullTitle.slice(0, tIndex + 1));
      tIndex++;
      if (tIndex === fullTitle.length) clearInterval(titleInterval);
    }, 80);

    setTimeout(() => {
      const subtitleInterval = setInterval(() => {
        setSubtitle(fullSubtitle.slice(0, sIndex + 1));
        sIndex++;
        if (sIndex === fullSubtitle.length) clearInterval(subtitleInterval);
      }, 60);
    }, 1200);

    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/impactes.jpg"
          alt="Recycling for a Sustainable Future"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earthDark/80 via-earthDark/70 to-earthGreen/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-center md:text-left"
        >
          <h1 className="font-heading font-bold text-white
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         leading-tight mb-6">
            {title}
            <span className="block text-earth-light mt-2">
              {subtitle}
            </span>
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl mb-10">
            We drive climate action through recycling innovation, environmental
            education, and youth-led sustainability initiatives that protect
            our planet for future generations.
          </p>

          {/* Animated Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.a
              href="/get-involved"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="px-8 py-4 bg-earthGreen text-white font-semibold rounded-full shadow-lg hover:bg-earthGreen/90 transition"
            >
              Get Involved
            </motion.a>

            <motion.a
              href="/programs"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-earthDark transition"
            >
              Our Programs
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}