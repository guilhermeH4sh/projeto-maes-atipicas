import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyHelp from "@/components/EmergencyHelp";
import HeroSection from "@/components/sections/HeroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import GuidesSection from "@/components/sections/GuidesSection";
import CommunitySection from "@/components/sections/CommunitySection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-slate-800 selection:bg-brand-blue/20">
      <Navbar />

      <main id="conteudo-principal" className="flex-grow">
        <HeroSection />
        <PillarsSection />
        <GuidesSection />
        <CommunitySection />
        <FaqSection />
        <EmergencyHelp />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
