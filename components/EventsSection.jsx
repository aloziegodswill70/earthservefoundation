export default function EventsSection() {
  const events = [
    {
      title: "Climate Awareness Walk",
      date: "March 2026",
      location: "Lagos, Nigeria",
    },
    {
      title: "Youth Sustainability Summit",
      date: "June 2026",
      location: "Nairobi, Kenya",
    },
    {
      title: "Community Clean-Up Initiative",
      date: "August 2026",
      location: "Houston, Texas, USA",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-earthGreen text-center mb-12">
          Upcoming Events
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl p-6 shadow-md
                transform transition-all duration-300 ease-out
                hover:translate-x-3 hover:shadow-xl
              "
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>

              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-gray-800">Date:</span>{" "}
                {event.date}
              </p>

              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Location:</span>{" "}
                {event.location}
              </p>

              <div className="mt-4 w-12 h-1 bg-earthGreen rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}