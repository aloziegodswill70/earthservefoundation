"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
    <section className="relative bg-earthGreen text-white py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {slides[index].title}
            </h1>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              {slides[index].text}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
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
    </section>
  );
}
