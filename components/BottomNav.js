"use client";

import Link from "next/link";
import {
  Home,
  Layers,
  HeartHandshake,
  Phone,
} from "lucide-react";

export default function BottomNav() {
  return (
    <nav
      className="
        fixed bottom-0 inset-x-0 z-[999]
        bg-green-50 border-t border-green-200 shadow
        md:hidden
        pb-safe
      "
    >
      <ul className="flex items-center justify-between px-4 py-2 max-w-md mx-auto">

        <BottomNavItem
          href="/"
          label="Home"
          icon={<Home size={20} />}
        />

        <BottomNavItem
          href="/programs"
          label="Programs"
          icon={<Layers size={20} />}
        />

        <BottomNavItem
          href="/get-involved"
          label="Involve"
          icon={<HeartHandshake size={20} />}
        />

        <BottomNavItem
          href="/contact"
          label="Call"
          icon={<Phone size={20} />}
        />
      </ul>
    </nav>
  );
}

function BottomNavItem({ href, icon, label }) {
  return (
    <li className="flex-1">
      <Link
        href={href}
        className="flex flex-col items-center justify-center text-[11px] text-gray-700 hover:text-green-700 transition"
      >
        {icon}
        <span className="mt-1 leading-none">{label}</span>
      </Link>
    </li>
  );
}
