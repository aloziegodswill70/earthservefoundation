import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Recycling Consultation",
      description:
        "We provide expert guidance to businesses, institutions, and communities on how to design, implement, and improve recycling systems that reduce waste, cut costs, and meet environmental and regulatory standards.",
      image: "/images/impactes3.jpg",
    },
    {
      title: "Waste Audit & Analysis",
      description:
        "Our team conducts comprehensive waste audits to assess waste streams, identify inefficiencies, and uncover opportunities for cost savings and environmental improvement using data-driven insights.",
      image: "/images/impactes.jpg",
    },
    {
      title: "Sustainable Strategy Development",
      description:
        "We develop customized sustainability and recycling strategies aligned with your operational realities, focusing on circular economy principles, measurable outcomes, and long-term impact.",
      image: "/images/recycling1.jpg",
    },
    {
      title: "Implementation & Training",
      description:
        "From infrastructure setup to staff and youth training, we provide hands-on implementation support to ensure recycling and waste-reduction programs work effectively on the ground.",
      image: "/images/recycling4.jpg",
    },
  ];

  return (
    <main className="bg-white">
      
      {/* Hero Section */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-earthGreen mb-6">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            Earth Serve Foundation delivers practical, scalable, and
            community-driven recycling and sustainability solutions that turn
            waste into value while protecting the environment.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid gap-10 lg:grid-cols-2 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-3 text-sm font-medium text-gray-800">
                  <span className="w-2 h-2 bg-earthGreen rounded-full"></span>
                  Practical & Impact-Driven
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-800 mt-2">
                  <span className="w-2 h-2 bg-earthGreen rounded-full"></span>
                  Community & Institution Focused
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-earthGreen text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Sustainable Impact?
          </h2>
          <p className="max-w-3xl mx-auto text-green-100 text-lg mb-10 leading-relaxed">
            Whether you are a business, government agency, school, NGO, or
            community group, Earth Serve Foundation is ready to partner with you
            to create lasting environmental and economic value.
          </p>

          <Link href="/contact">
            <button className="inline-flex items-center justify-center bg-white text-earthDark px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-100 transition shadow-lg">
              Work With Us
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}