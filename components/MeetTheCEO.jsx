import Image from "next/image";

export default function MeetTheCEO() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 items-center">
        <Image
          src="/images/EARTHSERVELOGO.jpeg"
          width={400}
          height={400}
          alt="CEO"
          className="rounded-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-earthGreen mb-4">
            Meet the CEO
          </h2>
          <p className="text-gray-600">
            Our CEO leads EarthServe Foundation with a passion for youth
            empowerment, environmental justice, and sustainable development.
          </p>
        </div>
      </div>
    </section>
  );
}
