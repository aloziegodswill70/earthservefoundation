"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/impactes.jpg",
  "/images/impactes2.jpg",
  "/images/impactes1.jpg",
  "/images/impactes3.jpg",
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -60, // fall from top
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function GallerySection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-earthGreen text-center mb-12">
          Our Impact Gallery
        </h2>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-4 gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={img}
                width={300}
                height={220}
                alt="EarthServe Gallery"
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider */}
        <div className="md:hidden relative h-64 overflow-hidden rounded-xl shadow-md">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              fill
              alt="EarthServe Gallery"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}