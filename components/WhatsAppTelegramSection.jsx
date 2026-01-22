export default function WhatsAppTelegramSection() {
  return (
    <section className="bg-earthGreen text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="mb-8">
          Be part of our WhatsApp and Telegram communities.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="bg-white text-earthGreen px-6 py-3 rounded-full font-semibold">
            Join WhatsApp
          </a>
          <a href="#" className="border border-white px-6 py-3 rounded-full font-semibold">
            Join Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
