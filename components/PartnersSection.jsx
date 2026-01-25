import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "National Youth Service Corps (NYSC)",
    logo: "/images/nysc.jpg",
  },
  {
    name: "National Environmental Standards & Regulations Enforcement Agency (NESREA)",
    logo: "/images/ehc.jpg",
  },
  {
    name: "Nigerian Conservation Foundation (NCF)",
    logo: "/images/earth1.jpg",
  },
  {
    name: "Global Cleaning Network",
    logo: "/images/earth2.jpg",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-earthGreen">
            Our Partners
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We collaborate with national and international organizations
            committed to youth empowerment, environmental protection, and
            sustainable development.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

        {/* Partner CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Partner With Us
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Join us in driving climate action, empowering young people, and
            building sustainable communities. Together, we can create
            measurable environmental impact across Africa and beyond.
          </p>

          <Link href="/partners">
            <button className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-earthGreen text-white font-semibold text-lg hover:bg-green-700 transition shadow-lg">
              Partner With Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}