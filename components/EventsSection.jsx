export default function EventsSection() {
  const events = [
    { title: "Climate Awareness Walk", date: "March 2026" },
    { title: "Youth Sustainability Summit", date: "June 2026" },
    { title: "Community Clean-Up", date: "August 2026" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-earthGreen text-center mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
