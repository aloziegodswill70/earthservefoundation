import Image from "next/image";

export default function BoardOfTrusteesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Board of Trustees
          </h2>
          <p className="text-gray-700">
            Our trustees bring diverse experience in environmental sustainability,
            research, and community leadership, guiding Earth Serve Foundation’s
            vision and long-term impact.
          </p>
        </div>

        {/* Trustees Grid */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Trustee 1 */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/aimale.jpg"
                alt="Onyinyechi G. Nwachukwu"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Onyinyechi G. Nwachukwu
              </h3>
              <p className="text-sm text-earthGreen font-medium mb-3">
                Trustee | Bioethics & Global Health
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                Onyinyechi G. Nwachukwu is a biology scholar and emerging
                bioethics researcher with a strong interest in global health
                equity. Currently studying Biology with minors in Chemistry and
                History at Prairie View A&M University, her work focuses on how
                ethics, history, and science intersect to shape healthcare
                outcomes for underserved communities.
              </p>

              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                With research interests spanning women’s health, medical ethics,
                and public health in the United States and West Africa, she brings
                a thoughtful, human-centered perspective to the Foundation’s
                mission and long-term strategy.
              </p>
            </div>
          </div>

          {/* Trustee 2 */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/aiimg.jpg"
                alt="Mr. Ebere Nwachukwu"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Mr. Ebere Nwachukwu
              </h3>
              <p className="text-sm text-earthGreen font-medium mb-3">
                Trustee | Environmental Strategy & Climate Action
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                Mr. Ebere Nwachukwu is an environmental sustainability advocate
                based in the United States, with extensive practical knowledge in
                climate change mitigation, waste management, and environmental
                sanitation systems.
              </p>

              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                As the architect of the Earth Serve Foundation vision, he brings
                strategic leadership and global perspective, ensuring the
                organization remains focused on scalable, community-driven
                recycling solutions across Africa and beyond.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}