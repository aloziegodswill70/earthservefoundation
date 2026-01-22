export const metadata = {
  title: "Join the Vibe | EarthServe Foundation",
  description:
    "Join the EarthServe vibe — a movement of young people passionate about climate action, sustainability, and community impact.",
};

export default function JoinTheVibePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Vibe 🌍
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            A movement. A community. A lifestyle for young people who care
            about the planet and the future.
          </p>
        </div>
      </section>

      {/* What is the Vibe */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            What Is the EarthServe Vibe?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The EarthServe Vibe is a growing community of youths, volunteers,
            creatives, and advocates who believe in environmental protection,
            climate awareness, and sustainable living. It’s about action,
            collaboration, and positive energy for change.
          </p>
        </div>
      </section>

      {/* Vibe Cards */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <VibeCard
            title="Connect"
            description="Meet like-minded people passionate about sustainability and social impact."
          />
          <VibeCard
            title="Learn"
            description="Gain access to environmental education, events, and leadership opportunities."
          />
          <VibeCard
            title="Act"
            description="Participate in campaigns, clean-ups, advocacy, and real-world impact projects."
          />
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
            How to Join the Vibe
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StepCard
              step="1"
              title="Follow Us"
              description="Stay connected on social media and keep up with our activities."
            />
            <StepCard
              step="2"
              title="Engage"
              description="Like, share, comment, and participate in challenges and campaigns."
            />
            <StepCard
              step="3"
              title="Get Involved"
              description="Volunteer, attend events, and represent the EarthServe vibe."
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-green-700 py-16 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="mb-6">
            Be loud for the planet. Be bold for the future.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/volunteer"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Volunteer
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
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

function VibeCard({ title, description }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ step, title, description }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="text-3xl font-bold text-green-700 mb-3">
        {step}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
