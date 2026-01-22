export const metadata = {
  title: "Testimonials | EarthServe Foundation",
  description:
    "Hear from volunteers, community members, and partners about their experiences with EarthServe Foundation.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Amina Yusuf",
      role: "Community Volunteer",
      message:
        "EarthServe Foundation opened my eyes to how small actions can create real environmental change. Volunteering here has been life-changing.",
    },
    {
      name: "Daniel Okafor",
      role: "Youth Advocate",
      message:
        "Through EarthServe programs, I gained leadership skills and a deeper understanding of environmental responsibility.",
    },
    {
      name: "Grace Williams",
      role: "Partner Organization",
      message:
        "Collaborating with EarthServe Foundation has been impactful. Their commitment to sustainability and community empowerment is inspiring.",
    },
    {
      name: "Samuel Ade",
      role: "Community Member",
      message:
        "The environmental awareness programs helped our community adopt cleaner and more sustainable practices.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What People Say About Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Real stories from individuals and communities impacted by
            EarthServe Foundation.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Want to Share Your Experience?
          </h2>
          <p className="mb-6 text-gray-600">
            We value the voices of our volunteers, partners, and community members.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

/* Reusable Component */

function TestimonialCard({ name, role, message }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <p className="text-gray-700 leading-relaxed mb-4">
        “{message}”
      </p>
      <div>
        <h3 className="font-semibold text-green-700">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
