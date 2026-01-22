export const metadata = {
  title: "Terms & Conditions | EarthServe Foundation",
  description:
    "Read the terms and conditions governing the use of EarthServe Foundation's website, services, and programs.",
};

export default function TermsPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 leading-relaxed">
          
          <Section
            title="1. Introduction"
            content="These Terms and Conditions govern your use of the EarthServe Foundation website and services. By accessing or using our website, you agree to comply with these terms."
          />

          <Section
            title="2. About EarthServe Foundation"
            content="EarthServe Foundation is a non-governmental organization dedicated to environmental protection, youth empowerment, and sustainable development initiatives."
          />

          <Section
            title="3. Use of Website"
            content="You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the website."
          />

          <Section
            title="4. Intellectual Property"
            content="All content on this website, including text, images, logos, and materials, is the property of EarthServe Foundation unless otherwise stated and may not be used without permission."
          />

          <Section
            title="5. Volunteer & Participation"
            content="Participation in our programs or volunteer activities is voluntary. EarthServe Foundation is not liable for any personal loss, injury, or damage incurred during participation, except as required by law."
          />

          <Section
            title="6. Donations"
            content="All donations made to EarthServe Foundation are voluntary. Refunds are not guaranteed except in cases required by applicable law."
          />

          <Section
            title="7. External Links"
            content="Our website may contain links to third-party websites. EarthServe Foundation has no control over and is not responsible for the content or practices of those websites."
          />

          <Section
            title="8. Limitation of Liability"
            content="EarthServe Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website."
          />

          <Section
            title="9. Changes to These Terms"
            content="We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page."
          />

          <Section
            title="10. Governing Law"
            content="These terms shall be governed and interpreted in accordance with the laws of the Federal Republic of Nigeria."
          />

          <Section
            title="11. Contact Us"
            content="If you have any questions about these Terms and Conditions, please contact us through the contact page on this website."
          />

          <p className="text-sm text-gray-500 pt-6">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </main>
  );
}

/* Reusable Section Component */
function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-green-700 mb-2">
        {title}
      </h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
