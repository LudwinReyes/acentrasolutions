import { Metadata } from "next";
import { NosotrosContent } from "@/components/pages/NosotrosContent";

export const metadata: Metadata = {
  title: 'Sobre Nosotros – Equipo y Filosofía | Acentra',
  description: 'Conoce la filosofía, metodología y liderazgo de Acentra. Expertos en consultoría corporativa de alto impacto liderados por Victor Yactayo.',
  keywords: ['Victor Yactayo', 'filosofia corporativa', 'metodologia acentra', 'consultoria elite peru'],
  alternates: {
    canonical: 'https://acentraperu.com/nosotros',
  },
  openGraph: {
    title: 'Sobre Nosotros – Equipo y Filosofía | Acentra',
    description: 'Conoce la filosofía, metodología y liderazgo de Acentra. Expertos en consultoría corporativa de alto impacto.',
    url: 'https://acentraperu.com/nosotros',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nosotros – Equipo y Filosofía | Acentra',
    description: 'Conoce la filosofía, metodología y liderazgo de Acentra. Expertos en consultoría corporativa de alto impacto.',
  },
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
