

export const metadata = {
  title: "Our Programs | EarthServe Foundation",
  description:
    "Explore EarthServe Foundation programs focused on youth empowerment, innovation, recycling, environmental education, and community development.",
};

const programs = [
  {
    title: "Youth Empowerment",
    description:
      "Equipping young people with leadership, entrepreneurial, and life skills to become change-makers in their communities.",
  },
  {
    title: "Innovation & Skills Development",
    description:
      "Promoting creativity, problem-solving, and practical skills through workshops, trainings, and innovation hubs.",
  },
  {
    title: "Material Recycling & Waste Management",
    description:
      "Encouraging responsible waste management, recycling initiatives, and circular economy practices to protect the environment.",
  },
  {
    title: "Environmental Education",
    description:
      "Raising awareness on climate action, sustainability, and environmental protection through education and advocacy.",
  },
  {
    title: "Community Outreach",
    description:
      "Partnering with local communities to address environmental and social challenges through impactful outreach programs.",
  },
  {
    title: "Workshops & Capacity Building",
    description:
      "Organizing hands-on workshops, seminars, and trainings that empower individuals with practical knowledge and tools.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white text-gray-800">
    

      {/* HERO SECTION */}
      <section className="bg-earthGreen text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Programs
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Driving sustainable impact through youth empowerment,
          innovation, and environmental responsibility.
        </p>
      </section>

      {/* PROGRAMS GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-earthLight rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-earthGreen">
                {program.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OUR PROGRAMS */}
      <section className="bg-earthGray py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-earthGreen">
            Why Our Programs Matter
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Our programs are designed to create measurable impact by
            empowering youths, strengthening communities, and promoting
            sustainable environmental practices that benefit present and
            future generations.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-earthGreen">
          Get Involved in Our Programs
        </h2>
        <p className="mt-4 text-gray-600">
          Support, partner with us, or volunteer to help expand our
          programs and reach more communities.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="/get-involved" className="btn-primary">
            Become a Volunteer
          </a>
          <a href="/contact" className="btn-outline">
            Partner With Us
          </a>
        </div>
      </section>

    
    </main>
  );
}
