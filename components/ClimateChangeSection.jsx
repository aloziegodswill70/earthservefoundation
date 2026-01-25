import Image from "next/image";

export default function ClimateChangeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">
        
        {/* Image Section */}
        <div className="relative w-full h-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/climaticchange.jpg"
            alt="Community climate action and sustainability"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Strategy for Climate Change Action
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            At Earth Serve Foundation, our approach to climate change goes beyond
            awareness. We focus on practical, community-driven solutions that
            reduce environmental harm while building long-term resilience.
            Climate change is a local issue with global consequences, and our
            strategy is designed to empower individuals and institutions to act
            meaningfully within their own environments.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            We integrate climate education with hands-on action by promoting
            sustainable waste management, recycling systems, and circular
            economy practices that directly reduce greenhouse gas emissions.
            Through youth engagement, community workshops, and institutional
            partnerships, we translate climate science into everyday actions
            that communities can adopt and sustain.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-8">
            Our work also emphasizes behavior change and policy alignment. By
            supporting data-driven waste audits, responsible consumption, and
            climate-smart decision-making, we help communities adapt to climate
            risks while contributing to global mitigation efforts. This
            practical, inclusive strategy ensures climate action is achievable,
            measurable, and impactful.
          </p>

          {/* Strategy Pillars */}
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-earthGreen rounded-full"></span>
              Climate Education & Awareness
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-earthGreen rounded-full"></span>
              Waste Reduction & Recycling
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-earthGreen rounded-full"></span>
              Youth-Led Climate Action
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-earthGreen rounded-full"></span>
              Community Resilience Building
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}