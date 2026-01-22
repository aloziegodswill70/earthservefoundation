"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "234XXXXXXXXXX"; // e.g. 2348012345678
  const message =
    "Hello EarthServe Foundation, I would like to get more information.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EarthServe Foundation on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
