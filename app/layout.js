import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Poppins, Inter } from "next/font/google";

/* =========================
   FONT CONFIGURATION
========================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* =========================
   METADATA
========================= */
export const metadata = {
  metadataBase: new URL("https://earthservefoundation.org"),

  title: "EarthServe Foundation | Empowering the Next Generation",
  description:
    "EarthServe Foundation empowers youths, promotes innovation, and advances environmental sustainability for a better future.",

  openGraph: {
    title: "EarthServe Foundation",
    description: "Empowering the next generation for a sustainable future.",
    url: "https://earthservefoundation.org",
    siteName: "EarthServe Foundation",
    images: [
      {
        url: "/images/EARTHSERVELOGO.jpeg",
        width: 1200,
        height: 630,
        alt: "EarthServe Foundation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased bg-white text-gray-800">
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <BottomNav />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}