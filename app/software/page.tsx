import { Metadata } from "next";
import { SoftwareContent } from "@/components/pages/SoftwareContent";
import JsonLd, { createBreadcrumbSchema, createServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida y Sistemas Web en Perú | Acentra',
  description: 'Empresa líder en desarrollo de software a medida, aplicaciones web, e-commerce, integraciones de APIs SUNAT/RENIEC y soluciones con Inteligencia Artificial en Lima y Perú.',
  keywords: [
    'desarrollo de software a medida peru',
    'software a medida peru',
    'empresa de desarrollo de software lima',
    'desarrollo de software en lima',
    'desarrollo web corporativo peru',
    'inteligencia artificial para empresas peru',
    'integracion api sunat',
    'integracion api reniec',
    'ecommerce peru escalable',
    'acentra software'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/software',
  },
  openGraph: {
    title: 'Desarrollo de Software a Medida y Sistemas Web en Perú | Acentra',
    description: 'Ingeniería de software corporativo: desarrollo a medida, plataformas web escalables, integración de APIs y soluciones de Inteligencia Artificial en Perú.',
    url: 'https://acentraperu.com/software',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/software/Desarrollo%20de%20Software%20a%20Medida.jpg',
        width: 1200,
        height: 630,
        alt: 'Desarrollo de Software a Medida en Perú - Acentra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo de Software a Medida y Sistemas Web en Perú | Acentra',
    description: 'Desarrollo de software a medida, plataformas web, APIs con SUNAT/RENIEC y soluciones con IA en Perú.',
    images: ['https://acentraperu.com/images/software/Desarrollo%20de%20Software%20a%20Medida.jpg'],
  },
};

const softwareBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Desarrollo de Software e IA', url: 'https://acentraperu.com/software' },
]);

const softwareServiceSchema = createServiceSchema({
  name: 'Desarrollo de Software a Medida, Aplicaciones Web y Soluciones con Inteligencia Artificial',
  serviceType: 'Software Development and AI Engineering Service',
  description: 'Desarrollo de ecosistemas digitales, aplicaciones web y móviles a medida, plataformas e-commerce de alto rendimiento, integraciones de APIs con SUNAT/RENIEC y arquitecturas de Big Data e IA en Perú.',
  url: 'https://acentraperu.com/software',
  image: 'https://acentraperu.com/images/software/Desarrollo%20de%20Software%20a%20Medida.jpg',
});

export default function SoftwarePage() {
  return (
    <>
      <JsonLd data={[softwareBreadcrumbs, softwareServiceSchema]} />
      <SoftwareContent />
    </>
  );
}

