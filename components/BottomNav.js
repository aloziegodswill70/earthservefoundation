"use client";

import Link from "next/link";
import {
  Home,
  Info,
  Layers,
  HeartHandshake,
  Phone,
} from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow md:hidden">
      <ul className="flex justify-around items-center py-2">

        <BottomNavItem
          href="/"
          label="Home"
          icon={<Home size={22} />}
        />

        <BottomNavItem
          href="/about"
          label="About"
          icon={<Info size={22} />}
        />

        <BottomNavItem
          href="/programs"
          label="Programs"
          icon={<Layers size={22} />}
        />

        <BottomNavItem
          href="/get-involved"
          label="Get Involved"
          icon={<HeartHandshake size={22} />}
        />

        <BottomNavItem
          href="/contact"
          label="Contact"
          icon={<Phone size={22} />}
        />
      </ul>
    </nav>
  );
}

function BottomNavItem({ href, icon, label }) {
  return (
    <li>
      <Link
        href={href}
        className="flex flex-col items-center text-xs text-gray-600 hover:text-green-700 transition"
      >
        {icon}
        <span className="mt-1">{label}</span>
      </Link>
    </li>
  );
}
