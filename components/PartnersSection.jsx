import Image from "next/image";

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-earthGreen">
            Our Partners
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We collaborate with national and international organizations
            committed to youth empowerment, environmental protection, and
            sustainable development.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
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
      </div>
    </section>
  );
}
