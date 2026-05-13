import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustBanner from "@/components/home/TrustBanner";
import PainSection from "@/components/home/PainSection";
import BentoSolutions from "@/components/home/BentoSolutions";
import ImpactSection from "@/components/home/ImpactSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import MagneticFooter from "@/components/home/MagneticFooter";

export const metadata: Metadata = {
  title: 'Acentra Solutions | Consultoría Corporativa de Élite en Perú',
  description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite en contabilidad NIIF, software a medida y gestión de RRHH. Transformación digital con propósito.',
  keywords: ['consultoria corporativa peru', 'contabilidad niif peru', 'desarrollo software peru', 'gestion de planillas', 'acentra solutions'],
  alternates: {
    canonical: 'https://acentraperu.com',
  },
  openGraph: {
    title: 'Acentra Solutions | Consultoría Corporativa de Élite en Perú',
    description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite en contabilidad NIIF, software a medida y gestión de RRHH.',
    url: 'https://acentraperu.com',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acentra Solutions | Consultoría Corporativa de Élite en Perú',
    description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite en contabilidad NIIF, software a medida y gestión de RRHH.',
  },
};

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
