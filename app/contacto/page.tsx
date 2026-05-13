import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: 'Contacto y Asesoría Gratuita en Lima, Perú | Acentra',
  description: 'Inicia tu transformación corporativa. Solicita un diagnóstico gratuito para contabilidad, software o gestión de RRHH. Estamos en Lima, Perú.',
  keywords: ['contacto acentra', 'asesoria contable gratuita', 'cotizacion software', 'consultoria empresarial lima'],
  alternates: {
    canonical: 'https://acentraperu.com/contacto',
  },
  openGraph: {
    title: 'Contacto y Asesoría Gratuita en Lima, Perú | Acentra',
    description: 'Solicita un diagnóstico gratuito para contabilidad, software o gestión de RRHH. Estamos en Lima, Perú.',
    url: 'https://acentraperu.com/contacto',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto y Asesoría Gratuita en Lima, Perú | Acentra',
    description: 'Solicita un diagnóstico gratuito para contabilidad, software o gestión de RRHH. Estamos en Lima, Perú.',
  },
};

export default function ContactoPage() {
  return <ContactForm />;
}
