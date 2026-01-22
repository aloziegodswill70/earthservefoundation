import { FaInstagram, FaFacebook, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function SocialMediaSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-earthGreen mb-4">
          Connect With Us
        </h2>
        <p className="text-gray-600 mb-8">
          Follow EarthServe Foundation and stay part of the movement.
        </p>

        <div className="flex justify-center gap-6 text-3xl text-earthGreen">
          <a href="#" className="hover:text-earthDark"><FaInstagram /></a>
          <a href="#" className="hover:text-earthDark"><FaFacebook /></a>
          <a href="#" className="hover:text-earthDark"><FaXTwitter /></a>
          <a href="#" className="hover:text-earthDark"><FaTiktok /></a>
        </div>
      </div>
    </section>
  );
}
