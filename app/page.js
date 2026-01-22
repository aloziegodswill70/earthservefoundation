import HeroSection from "../components/HeroSection";
import ClimateChangeSection from "../components/ClimateChangeSection";
import EventsSection from "../components/EventsSection";
import EnvironmentalAmbassadors from "../components/EnvironmentalAmbassadors";
import MeetTheCEO from "../components/MeetTheCEO";
import TrusteesSection from "../components/TrusteesSection";
import GallerySection from "../components/GallerySection";
import PartnersSection from "../components/PartnersSection";
import DonationsSection from "../components/DonationsSection";
import WhatsAppTelegramSection from "../components/WhatsAppTelegramSection";
import SocialMediaSection from "../components/SocialMediaSection";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <HeroSection />

       {/* MEET THE CEO */}
      <MeetTheCEO />

      {/* CLIMATE CHANGE AWARENESS */}
      <ClimateChangeSection />

      {/* EVENTS */}
      <EventsSection />

      {/* ENVIRONMENTAL AMBASSADORS */}
      <EnvironmentalAmbassadors />

      {/* TRUSTEES */}
      <TrusteesSection />

      {/* GALLERY */}
      <GallerySection />

      {/* PARTNERS */}
      <PartnersSection />

      {/* DONATIONS */}
      <DonationsSection />

      {/* COMMUNITY JOIN */}
      <WhatsAppTelegramSection />

      {/* SOCIAL MEDIA */}
      <SocialMediaSection />
    </main>
  );
}
