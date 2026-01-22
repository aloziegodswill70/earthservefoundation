export const metadata = {
  title: "Community Development Service | EarthServe Foundation",
  description:
    "EarthServe Foundation Community Development Service focuses on grassroots impact, environmental sustainability, youth empowerment, and social development.",
};

export default function CommunityDevelopmentServicePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-earthGreen text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community Development Service
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Driving positive change through grassroots action, education,
            and sustainable community initiatives.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-earthGreen mb-6">
            Our Commitment to Communities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            EarthServe Foundation’s Community Development Service (CDS)
            is designed to uplift communities through environmental awareness,
            youth engagement, public education, and sustainable development
            projects that address real community needs.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-earthGreen text-center mb-12">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              title="Environmental Protection"
              description="Community clean-ups, waste management education, tree planting, and climate awareness campaigns."
            />
            <FocusCard
              title="Youth Empowerment"
              description="Skill acquisition programs, leadership training, and volunteer engagement for young people."
            />
            <FocusCard
              title="Public Awareness"
              description="Health, climate, and social awareness outreaches aimed at improving quality of life."
            />
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-earthGreen text-center mb-12">
            Our CDS Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ActivityItem
              title="Community Sensitization"
              text="Engaging communities through workshops, seminars, and door-to-door sensitization."
            />
            <ActivityItem
              title="Environmental Campaigns"
              text="Promoting sustainable practices and climate responsibility."
            />
            <ActivityItem
              title="Volunteer Service"
              text="Mobilizing volunteers to participate in impactful community projects."
            />
            <ActivityItem
              title="Partnership Programs"
              text="Collaborating with schools, local leaders, and organizations."
            />
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-earthGreen text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Our Community Impact
          </h2>
          <p>
            Through consistent Community Development Service activities,
            EarthServe Foundation continues to create awareness, inspire
            participation, and foster sustainable development across
            communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-earthGreen mb-4">
            Partner With Us
          </h2>
          <p className="mb-6 text-gray-600">
            Join us in delivering meaningful Community Development Service
            projects that transform lives and protect our environment.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/volunteer" className="btn-primary">
              Become a Volunteer
            </a>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Reusable Components */

function FocusCard({ title, description }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold text-earthGreen mb-3">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ActivityItem({ title, text }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
