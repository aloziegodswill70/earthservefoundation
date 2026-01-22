import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Logo & About */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/images/earth1.jpg"
              alt="EarthServe Foundation Logo"
              width={50}
              height={50}
            />
            <span className="sr-only">EarthServe Foundation</span>
          </Link>

          <p className="text-sm text-gray-200 leading-relaxed">
            EarthServe Foundation is committed to environmental protection,
            climate awareness, youth empowerment, and sustainable community
            development.
          </p>
        </div>

        {/* Organization */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Organization</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link href="/impact" className="hover:text-white">Our Impact</Link></li>
            <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="/get-involved" className="hover:text-white">Get Involved</Link></li>
            <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
            <li>
              <Link
                href="/community-development-service"
                className="hover:text-white"
              >
                Community Development Service
              </Link>
            </li>
            <li><Link href="/join-the-vibe" className="hover:text-white">Join the Vibe</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white text-green-900 p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-white text-green-900 p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-white text-green-900 p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="bg-white text-green-900 p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} EarthServe Foundation. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
