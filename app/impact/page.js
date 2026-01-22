export const metadata = {
  title: "Our Impact | EarthServe Foundation",
  description:
    "See the real impact of EarthServe Foundation through our environmental projects, community outreach, and sustainability programs.",
};

export default function ImpactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Measuring change, restoring hope, and building a sustainable future
            for communities and the environment.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <ImpactCard number="15+" label="Communities Reached" />
          <ImpactCard number="3,000+" label="Trees Planted" />
          <ImpactCard number="1,200+" label="People Educated" />
          <ImpactCard number="25+" label="Environmental Campaigns" />
        </div>
      </section>

      {/* Impact Story */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Creating Real Change
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            EarthServe Foundation works at the grassroots level to address
            environmental degradation, climate awareness, and community
            sustainability. Our initiatives empower local communities with the
            knowledge and tools needed to protect their environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through education, advocacy, and direct environmental action, we
            have helped communities adopt eco-friendly practices while
            supporting livelihoods and preserving natural resources.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            Key Areas of Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              title="Environmental Protection"
              description="Reforestation, waste management campaigns, and conservation programs aimed at restoring ecosystems."
            />
            <FocusCard
              title="Community Empowerment"
              description="Educating and engaging local communities to become active stewards of their environment."
            />
            <FocusCard
              title="Climate Awareness"
              description="Advocacy, workshops, and outreach programs focused on climate change adaptation and mitigation."
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-green-700 py-16 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Be Part of the Impact
          </h2>
          <p className="mb-6">
            Join us in protecting the environment and empowering communities for
            a sustainable future.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/get-involved"
              className="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-green-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Reusable Components */
function ImpactCard({ number, label }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-3xl font-bold text-green-700 mb-2">
        {number}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

function FocusCard({ title, description }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
