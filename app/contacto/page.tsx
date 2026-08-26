import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import JsonLd, { createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Contacto y Asesoría Corporativa Gratuita en Lima, Perú | Acentra',
  description: 'Inicia la transformación y escala de tu empresa. Solicita una asesoría y diagnóstico gratuito en contabilidad NIIF, desarrollo de software a medida o gestión de planillas en Lima, Perú.',
  keywords: [
    'contacto acentra',
    'asesoria contable gratuita lima',
    'cotizacion software a medida peru',
    'consultoria empresarial lima',
    'estudio contable telefono lima',
    'oficina acentra peru'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/contacto',
  },
  openGraph: {
    title: 'Contacto y Asesoría Corporativa Gratuita en Lima, Perú | Acentra',
    description: 'Solicita un diagnóstico gratuito para contabilidad, software a medida o gestión de planillas. Atención directa en Lima, Perú.',
    url: 'https://acentraperu.com/contacto',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contacto Acentra Solutions Perú',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto y Asesoría Corporativa Gratuita en Lima, Perú | Acentra',
    description: 'Solicita un diagnóstico gratuito para contabilidad, software o gestión de RRHH en Perú.',
    images: ['https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg'],
  },
};

const contactoBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Contacto', url: 'https://acentraperu.com/contacto' },
]);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto Acentra Solutions",
  "description": "Formulario de contacto y asesoría corporativa directa con los especialistas de Acentra en Lima, Perú.",
  "url": "https://acentraperu.com/contacto",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "Acentra Solutions",
    "telephone": "+51954775210",
    "email": "contacto@acentraperu.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressRegion": "Lima",
      "addressCountry": "PE"
    }
  }
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={[contactoBreadcrumbs, contactPageSchema]} />
      <ContactForm />
    </>
  );
}

