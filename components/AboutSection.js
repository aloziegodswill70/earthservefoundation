import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Image */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/recycling3.jpg"
            alt="Earth Serve Foundation recycling activities"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-earthGreen font-heading font-bold mb-6">
            About Earth Serve Foundation
          </h2>

          <p className="mb-5">
            Earth Serve Foundation is a not-for-profit organization committed to
            building a sustainable future through innovative recycling and
            responsible waste management. We address environmental challenges
            by transforming waste into economic and social value.
          </p>

          <p className="mb-5">
            Guided by circular economy principles, we develop modern recycling
            technologies, data-driven sustainability strategies, and
            community-based programs that reduce waste, create green jobs, and
            protect ecosystems.
          </p>

          <p className="mb-6">
            Our activities span <strong>Nigeria</strong>, <strong>East Africa</strong>,
            and the <strong>United States</strong>, where we work with local
            communities, businesses, and institutions to implement recycling
            solutions that are practical, scalable, and impactful.
          </p>

          {/* Locations */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-earth-light rounded-xl p-4 text-center">
              <h3 className="font-heading font-semibold text-earthGreen mb-1">
                Nigeria
              </h3>
              <p className="text-sm">
                Community recycling & youth-led sustainability programs
              </p>
            </div>

            <div className="bg-earth-light rounded-xl p-4 text-center">
              <h3 className="font-heading font-semibold text-earthGreen mb-1">
                East Africa
              </h3>
              <p className="text-sm">
                Waste recovery initiatives & regional partnerships
              </p>
            </div>

            <div className="bg-earth-light rounded-xl p-4 text-center">
              <h3 className="font-heading font-semibold text-earthGreen mb-1">
                United States
              </h3>
              <p className="text-sm">
                Research, innovation & sustainability collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}