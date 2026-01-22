"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const trustees = [
  {
    name: "Mr. Ebere Nwachukwu",
    role: "Chairman, Board of Trustees",
    image: "/images/aiimg.jpeg",
  },
  {
    name: "Miss. Ebere",
    role: "Trustee",
    image: "/images/aiimg.jpeg",
  },
  {
    name: "Dr. Godswill Alozie",
    role: "Trustee",
    image: "/images/godswill.jpeg",
  },
  {
    name: "Mr. Emeka",
    role: "Trustee",
    image: "/images/aiimg.jpeg",
  },
];

export default function TrusteesSection() {
  const sliderRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (!slider) return;

      scrollAmount += 1;
      slider.scrollLeft += 1;

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth
      ) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(slide, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-earthGreen">
            Our Trustees
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated leaders guiding EarthServe Foundation’s
            mission and strategic direction.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {trustees.map((trustee, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={trustee.image}
                  alt={trustee.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="font-semibold text-lg">
                {trustee.name}
              </h3>
              <p className="text-sm text-gray-600">
                {trustee.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
