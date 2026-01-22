

export const metadata = {
  title: "Contact Us | EarthServe Foundation",
  description:
    "Contact EarthServe Foundation for partnerships, volunteering, sponsorships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-earthGreen text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          We’d love to hear from you. Reach out to us for partnerships,
          volunteering, or any inquiries.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">
        {/* INFO */}
        <div>
          <h2 className="text-3xl font-bold text-earthGreen">
            Get in Touch
          </h2>

          <p className="mt-4 text-gray-600">
            Feel free to contact us via email, phone, or by filling the
            form. Our team will respond as soon as possible.
          </p>

          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@earthservefoundation.org"
                className="text-earthGreen"
              >
                info@earthservefoundation.org
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+2340000000000"
                className="text-earthGreen"
              >
                +234 000 000 0000
              </a>
            </p>

            <p>
              <strong>Location:</strong> Nigeria
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-earthGray p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold text-earthGreen">
            Send Us a Message
          </h3>

          <form className="mt-6 space-y-5">
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
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded-lg px-4 py-3"
              required
            ></textarea>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow">
          <iframe
            title="EarthServe Foundation Location"
            src="https://www.google.com/maps?q=Nigeria&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </main>
  );
}
