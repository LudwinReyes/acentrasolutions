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
  title: 'Acentra | Consultoría Empresarial en Perú: Contabilidad, Software y RRHH',
  description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite en contabilidad NIIF, outsourcing contable, desarrollo de software a medida con IA y gestión de planillas en Perú.',
  keywords: [
    'consultoria empresarial peru',
    'outsourcing contable lima',
    'contabilidad niif peru',
    'desarrollo de software a medida peru',
    'gestion de planillas peru',
    'asesoria tributaria sunat',
    'acentra peru',
    'acentra solutions'
  ],
  alternates: {
    canonical: 'https://acentraperu.com',
  },
  openGraph: {
    title: 'Acentra | Consultoría Empresarial en Perú: Contabilidad, Software y RRHH',
    description: 'Optimizamos y escalamos empresas con soluciones de élite en Contabilidad NIIF, Software a Medida y Gestión de Planillas en Perú.',
    url: 'https://acentraperu.com',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Acentra Solutions - Consultoría Corporativa en Perú',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acentra | Consultoría Empresarial en Perú: Contabilidad, Software y RRHH',
    description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite en Contabilidad NIIF, Software a Medida y Gestión de Planillas.',
    images: ['https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg'],
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
