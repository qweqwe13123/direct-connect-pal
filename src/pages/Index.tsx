import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import CollabSection from "@/components/CollabSection";
import Footer from "@/components/Footer";
import useReveal from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <CollabSection />
      <Footer />
    </div>
  );
};

export default Index;
