import HeroSection from "../components/HeroSection";
import ClimateChangeSection from "../components/ClimateChangeSection";
import EventsSection from "../components/EventsSection";
import EnvironmentalAmbassadors from "../components/EnvironmentalAmbassadors";
import GallerySection from "../components/GallerySection";
import PartnersSection from "../components/PartnersSection";
import DonationsSection from "../components/DonationsSection";
import WhatsAppTelegramSection from "../components/WhatsAppTelegramSection";
import SocialMediaSection from "../components/SocialMediaSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import BoardOfTrusteesSection from "@/components/BoardOfTrusteesSection";
import TeamOfConsultantsSection from "@/components/TeamOfConsultantsSection";
import ServicesSection from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <HeroSection />

       {/* ABOUT */}
      <AboutSection />

      {/* SERVICES */}
      <ServicesSection />

       {/* MISSION */}
      <MissionSection />

       {/* BOARDOFTRUSTEES */}
      <BoardOfTrusteesSection />

      {/* TEAMOFCONSULTANTS */}
      <TeamOfConsultantsSection />

       {/* DONATIONS */}
      <DonationsSection />

      {/* CLIMATE CHANGE AWARENESS */}
      <ClimateChangeSection />

      {/* EVENTS */}
      <EventsSection />

      {/* ENVIRONMENTAL AMBASSADORS */}
      <EnvironmentalAmbassadors />


      {/* GALLERY */}
      <GallerySection />

      {/* PARTNERS */}
      <PartnersSection />

      {/* COMMUNITY JOIN */}
      <WhatsAppTelegramSection />

      {/* SOCIAL MEDIA */}
      <SocialMediaSection />
    </main>
  );
}
