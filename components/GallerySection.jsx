"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/earth1.jpg",
  "/images/earth2.jpg",
  "/images/earth1.jpg",
  "/images/earth2.jpg",
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-earthGreen text-center mb-10">
          Our Impact Gallery
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                width={300}
                height={200}
                alt="EarthServe Gallery"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative h-64 overflow-hidden rounded-lg">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
