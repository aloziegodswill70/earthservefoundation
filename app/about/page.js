

export const metadata = {
  title: "About Us | EarthServe Foundation",
  description:
    "Learn more about EarthServe Foundation, our mission, vision, values, and leadership dedicated to youth empowerment and environmental sustainability.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-earthGreen text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About EarthServe Foundation
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Empowering the next generation for a sustainable future through
          innovation, youth development, and environmental responsibility.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-earthGreen">
          Who We Are
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          EarthServe Foundation is a non-governmental organization committed
          to empowering youths, promoting innovation, and advancing
          sustainable environmental practices. We believe that when young
          people are equipped with the right skills and mindset, they
          become powerful agents of positive change in their communities
          and beyond.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-earthGray py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-earthGreen">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-600">
              To empower youths and communities with skills, knowledge,
              and opportunities that foster innovation, environmental
              sustainability, and long-term positive impact.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-earthGreen">
              Our Vision
            </h3>
            <p className="mt-4 text-gray-600">
              A world where young people lead sustainable solutions,
              communities thrive, and environmental stewardship is a
              shared responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-earthGreen">
          Our Core Values
        </h2>

        <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Integrity",
            "Innovation",
            "Youth Empowerment",
            "Sustainability",
            "Community Impact",
            "Collaboration",
          ].map((value) => (
            <div
              key={value}
              className="bg-earthLight p-6 rounded-xl text-center"
            >
              <h4 className="font-semibold text-lg text-earthGreen">
                {value}
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Core principles guiding our actions, programs, and
                partnerships.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-earthGreen text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Leadership</h2>

          <p className="mt-4 text-xl font-semibold">
            Joseph Nwachukwu
          </p>
          <p className="text-sm uppercase tracking-wide">
            Chief Executive Officer (CEO)
          </p>

          <p className="mt-4 text-earthLight">
            Providing strategic leadership and vision to advance youth
            empowerment, innovation, and sustainable development
            initiatives.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-earthGreen">
          Join Our Mission
        </h2>
        <p className="mt-4 text-gray-600">
          Be part of a movement shaping a sustainable future for
          generations to come.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="/get-involved" className="btn-primary">
            Get Involved
          </a>
          <a href="/contact" className="btn-outline">
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
