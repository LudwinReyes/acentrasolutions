import { Metadata } from "next";
import { NosotrosContent } from "@/components/pages/NosotrosContent";
import JsonLd, { createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Sobre Acentra | Liderazgo, Metodología y Consultoría en Perú',
  description: 'Conoce la visión, metodología de alto impacto y liderazgo directivo de Acentra. Especialistas en consultoría corporativa en contabilidad NIIF, software y RRHH en Perú.',
  keywords: [
    'Victor Yactayo',
    'sobre acentra',
    'filosofia corporativa acentra',
    'metodologia acentra',
    'consultoria corporativa peru',
    'equipo directivo acentra'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/nosotros',
  },
  openGraph: {
    title: 'Sobre Acentra | Liderazgo, Metodología y Consultoría en Perú',
    description: 'Conoce la filosofía, metodología y liderazgo de Acentra. Expertos en consultoría corporativa de alto impacto liderados por Victor Yactayo.',
    url: 'https://acentraperu.com/nosotros',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/nosotros/Nuestra%20Filosof%C3%ADa%20Corporativa.jpg',
        width: 1200,
        height: 630,
        alt: 'Sobre Acentra Solutions - Equipo y Filosofía',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Acentra | Liderazgo, Metodología y Consultoría en Perú',
    description: 'Conoce la filosofía, metodología y liderazgo de Acentra.',
    images: ['https://acentraperu.com/images/nosotros/Nuestra%20Filosof%C3%ADa%20Corporativa.jpg'],
  },
};

const nosotrosBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Sobre Nosotros', url: 'https://acentraperu.com/nosotros' },
]);

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Sobre Acentra Solutions",
  "description": "Filosofía, liderazgo y metodología de Acentra Solutions en Perú.",
  "url": "https://acentraperu.com/nosotros",
  "mainEntity": {
    "@type": "Person",
    "name": "Victor Yactayo",
    "jobTitle": "Gerente General",
    "worksFor": {
      "@type": "Organization",
      "name": "Acentra Solutions",
      "url": "https://acentraperu.com"
    },
    "description": "Líder estratégico combinando el rigor de la alta contabilidad comercial con la ingeniería y desarrollo tecnológico de vanguardia."
  }
};

export default function NosotrosPage() {
  return (
    <>
      <JsonLd data={[nosotrosBreadcrumbs, aboutPageSchema]} />
      <NosotrosContent />
    </>
  );
}

