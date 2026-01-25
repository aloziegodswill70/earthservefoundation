export default function DonationsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-earthGreen via-green-700 to-earthDark text-white overflow-hidden">
      
      {/* Soft background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Support a Greener, Healthier Future
        </h2>

        {/* Intro text */}
        <p className="max-w-3xl mx-auto text-base md:text-lg text-green-50 mb-10 leading-relaxed">
          Your support helps Earth Serve Foundation empower young people,
          protect communities, and transform waste into sustainable
          opportunities. Every contribution directly fuels action on the
          ground.
        </p>

        {/* Reasons grid */}
        <div className="grid gap-6 md:grid-cols-3 text-left mb-12">
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              🌱 Real Community Impact
            </h3>
            <p className="text-sm text-green-100 leading-relaxed">
              Donations fund recycling projects, clean-up initiatives, and
              hands-on environmental programs that directly improve lives.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              ♻️ Youth Empowerment
            </h3>
            <p className="text-sm text-green-100 leading-relaxed">
              We train and equip young people with practical skills to become
              environmental leaders and innovators in their communities.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              🌍 Sustainable Solutions
            </h3>
            <p className="text-sm text-green-100 leading-relaxed">
              Your support helps build long-term recycling systems that reduce
              waste, protect ecosystems, and promote responsible living.
            </p>
          </div>

        </div>

        {/* CTA */}
        <button className="inline-flex items-center justify-center bg-white text-earthDark px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-100 transition shadow-lg">
          Donate Now
        </button>
      </div>
    </section>
  );
}