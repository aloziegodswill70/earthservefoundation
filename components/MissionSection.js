export default function MissionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">

        {/* Image */}
        <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/recycling1.jpg"
            alt="Youth recycling initiative"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            At Earth Serve Foundation, our mission is to equip young people with
            the skills, tools, and opportunities needed to tackle environmental
            challenges through practical recycling solutions. Through our Youth
            Recycling Initiative, we work closely with students, community groups,
            and young innovators to transform waste into valuable resources.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            We deliver hands-on workshops, community recycling projects, and
            environmental advocacy programs that help young people move from
            awareness to action. By promoting circular economy practices and
            responsible waste management, we are building sustainable habits that
            benefit communities today and protect the planet for the future.
          </p>

          {/* Key Pillars */}
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
              Youth Empowerment
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
              Practical Recycling
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
              Community Impact
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
              Sustainable Futures
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a href="/get-involved" className="btn-primary">
              Become a Recycling Ambassador
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}