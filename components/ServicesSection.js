import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Recycling Consultation",
      description:
        "Expert guidance for businesses, institutions, and communities to design and improve recycling systems that reduce waste, cut costs, and meet environmental standards.",
      image: "/images/recycling3.jpg",
    },
    {
      title: "Waste Audit & Analysis",
      description:
        "Comprehensive assessment of waste streams to identify inefficiencies, uncover cost-saving opportunities, and improve compliance through data-driven insights.",
      image: "/images/recycling1.jpg",
    },
    {
      title: "Sustainable Strategy Development",
      description:
        "Customized recycling and waste-reduction strategies built around your operational realities, with clear implementation plans and measurable outcomes.",
      image: "/images/recycling2.jpg",
    },
    {
      title: "Implementation & Training",
      description:
        "Hands-on support including staff training, infrastructure setup, and practical tools that ensure recycling programs work effectively on the ground.",
      image: "/images/recycling4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-700">
            We provide practical recycling and waste management solutions that
            help organizations turn waste into value while protecting the
            environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-earthGreen px-8 py-3 text-white font-medium hover:bg-green-700 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}