"use client";

export default function VolunteerClient() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Volunteer With Us
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Join our mission to protect the planet and empower communities.
      </p>

      <form className="grid gap-4">
        <input className="border p-3 rounded" placeholder="Full Name" />
        <input className="border p-3 rounded" placeholder="Email Address" />
        <textarea
          className="border p-3 rounded"
          placeholder="Why do you want to volunteer?"
        />
        <button className="bg-green-700 text-white py-3 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
