import Image from "next/image";

export default function TeamOfConsultantsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Team of Consultants
          </h2>
          <p className="text-gray-700">
            Our consultants provide expert guidance across healthcare,
            environmental science, nutrition, governance, and sustainable
            development, strengthening the Foundation’s impact and strategy.
          </p>
        </div>

        {/* Consultants Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Consultant 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/godswill.jpg"
                alt="Dr. Godswill Onyedikachi Alozie"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Dr. Godswill Onyedikachi Alozie
            </h3>
            <p className="text-sm text-earthGreen font-medium mb-4">
              Optometrist | Health Tech Consultant
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Dr. Alozie is a licensed Optometrist, researcher, and tech innovator
              with strong interests in ocular emergency care, ocular pharmacology,
              and digital health solutions. A graduate of the Federal University
              of Technology, Owerri (FUTO), he combines clinical precision with
              patient-centered care to improve vision outcomes.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify mt-3">
              Beyond clinical practice, he develops technology-driven tools that
              enhance healthcare delivery, education, and accessibility. His
              work supports rapid response to eye emergencies, teleconsultation,
              and sustainable eye-care systems, particularly in underserved
              communities.
            </p>
          </div>

          {/* Consultant 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/aiimg.jpg"
                alt="Dr. Eneke Israel Chukwuemeka"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Dr. Eneke Israel Chukwuemeka
            </h3>
            <p className="text-sm text-earthGreen font-medium mb-4">
              Nutrition & Toxicology Consultant
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Dr. Chukwuemeka is a seasoned expert in Nutrition and Toxicology
              with decades of academic and research experience. Formerly a
              lecturer at the Federal College of Agriculture, Ishiagu, his work
              focuses on food safety, agrochemical exposure, and environmental
              health risks.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify mt-3">
              His research bridges laboratory science and real-world application,
              contributing to safer agricultural practices, improved food
              security, and reduced environmental toxicity across communities.
            </p>
          </div>

          {/* Consultant 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/aiimg.jpg"
                alt="Mr. Teddy Ogbonna"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Mr. Teddy Ogbonna
            </h3>
            <p className="text-sm text-earthGreen font-medium mb-4">
              Global Development & Governance Consultant
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Mr. Ogbonna is a global consultant, human rights advocate, and
              development strategist with experience across Africa, Europe, and
              North America. He holds a double major in Law & Society and Political
              Science from the University of Calgary.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify mt-3">
              His work spans governance reform, youth empowerment, environmental
              sustainability, and policy advisory. He also partners on
              community-based recycling and circular economy initiatives that
              align closely with Earth Serve Foundation’s mission.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}