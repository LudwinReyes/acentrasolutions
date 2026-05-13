import { Metadata } from "next";
import { SoftwareContent } from "@/components/pages/SoftwareContent";

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida con IA en Perú | Acentra',
  description: 'Desarrollo de software a medida, e-commerce, integración de APIs y soluciones con Inteligencia Artificial para empresas en Perú. Ingeniería de vanguardia.',
  keywords: ['desarrollo de software peru', 'transformacion digital', 'ecommerce peru', 'inteligencia artificial empresas', 'software a medida', 'api integration'],
  alternates: {
    canonical: 'https://acentraperu.com/software',
  },
  openGraph: {
    title: 'Desarrollo de Software a Medida con IA en Perú | Acentra',
    description: 'Software a medida, e-commerce, integración de APIs y soluciones con IA para empresas en Perú.',
    url: 'https://acentraperu.com/software',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo de Software a Medida con IA en Perú | Acentra',
    description: 'Software a medida, e-commerce, integración de APIs y soluciones con IA para empresas en Perú.',
  },
};

export default function SoftwarePage() {
  return <SoftwareContent />;
}
