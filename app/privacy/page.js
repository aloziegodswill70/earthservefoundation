export const metadata = {
  title: "Privacy Policy | EarthServe Foundation",
  description:
    "Learn how EarthServe Foundation collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg">
            Your privacy matters to us. This policy explains how we handle
            your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8 leading-relaxed">

          <Section
            title="1. Introduction"
            content="EarthServe Foundation is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or participate in our programs."
          />

          <Section
            title="2. Information We Collect"
            content="We may collect personal information such as your name, email address, phone number, location, and any other details you voluntarily provide through forms on our website."
          />

          <Section
            title="3. How We Use Your Information"
            content="Your information is used to communicate with you, process volunteer applications, respond to inquiries, improve our services, and support our environmental and community programs."
          />

          <Section
            title="4. Information Sharing"
            content="EarthServe Foundation does not sell, trade, or rent your personal information to third parties. We may share information only when required by law or to protect our legal rights."
          />

          <Section
            title="5. Data Security"
            content="We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction."
          />

          <Section
            title="6. Cookies & Tracking"
            content="Our website may use cookies and similar technologies to enhance user experience and analyze site traffic. You may choose to disable cookies through your browser settings."
          />

          <Section
            title="7. Third-Party Links"
            content="Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites."
          />

          <Section
            title="8. Children's Privacy"
            content="EarthServe Foundation does not knowingly collect personal information from children under the age of 13. If you believe a child has provided personal data, please contact us for removal."
          />

          <Section
            title="9. Your Rights"
            content="You have the right to request access to, correction of, or deletion of your personal information. Requests can be made through our contact page."
          />

          <Section
            title="10. Changes to This Policy"
            content="We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."
          />

          <Section
            title="11. Contact Us"
            content="If you have questions or concerns about this Privacy Policy, please contact EarthServe Foundation through the contact page on our website."
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
