import HeroSection from "@/components/home/HeroSection";
import TrustBanner from "@/components/home/TrustBanner";
import PainSection from "@/components/home/PainSection";
import BentoSolutions from "@/components/home/BentoSolutions";
import ImpactSection from "@/components/home/ImpactSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import MagneticFooter from "@/components/home/MagneticFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBanner />
      <PainSection />
      <BentoSolutions />
      <ImpactSection />
      <WhyUsSection />
      <TestimonialCarousel />
      <MagneticFooter />
    </main>
  );
}
