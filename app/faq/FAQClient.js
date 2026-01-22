"use client";

import { useState } from "react";

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is EarthServe Foundation?",
      a: "We are a non-profit focused on environmental sustainability and community empowerment.",
    },
    {
      q: "How can I volunteer?",
      a: "Visit the Volunteer page and fill out the form.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">FAQs</h1>

      {faqs.map((faq, i) => (
        <div key={i} className="mb-4 border rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-4 font-semibold"
          >
            {faq.q}
          </button>
          {openIndex === i && (
            <p className="p-4 text-gray-600">{faq.a}</p>
          )}
        </div>
      ))}
    </section>
  );
}
