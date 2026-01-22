

export const metadata = {
  title: "Get Involved | EarthServe Foundation",
  description:
    "Join EarthServe Foundation as a volunteer, partner, or sponsor and help drive youth empowerment and environmental sustainability.",
};

export default function GetInvolvedPage() {
  return (
    <main className="bg-white text-gray-800">
    

      {/* HERO SECTION */}
      <section className="bg-earthGreen text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get Involved
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Be part of a movement empowering youths, fostering innovation,
          and building a sustainable future.
        </p>
      </section>

      {/* INVOLVEMENT OPTIONS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-earthLight p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-earthGreen">
              Volunteer
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Share your skills, time, and passion to support our
              programs, workshops, and community initiatives.
            </p>
          </div>

          <div className="bg-earthLight p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-earthGreen">
              Partner With Us
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Collaborate with us as an organization, institution, or
              brand to scale impact and reach more communities.
            </p>
          </div>

          <div className="bg-earthLight p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-earthGreen">
              Sponsor a Program
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Support specific projects or initiatives financially or
              materially to help us achieve our goals.
            </p>
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="bg-earthGray py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-earthGreen">
            Volunteer With Us
          </h2>

          <form className="mt-8 bg-white p-8 rounded-2xl shadow space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
            />

            <select
              className="w-full border rounded-lg px-4 py-3"
              required
            >
              <option value="">Area of Interest</option>
              <option>Youth Empowerment</option>
              <option>Innovation & Skills</option>
              <option>Environmental Education</option>
              <option>Recycling & Sustainability</option>
              <option>Community Outreach</option>
            </select>

            <textarea
              placeholder="Why do you want to volunteer?"
              rows="4"
              className="w-full border rounded-lg px-4 py-3"
            ></textarea>

            <button type="submit" className="btn-primary w-full">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-earthGreen">
          Let’s Build Impact Together
        </h2>
        <p className="mt-4 text-gray-600">
          Whether as a volunteer, partner, or sponsor, your involvement
          helps create lasting change.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="btn-outline">
            Contact Us
          </a>
        </div>
      </section>

    
    </main>
  );
}
