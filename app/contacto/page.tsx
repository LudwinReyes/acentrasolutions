import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: 'Contacto y Asesoría Gratuita | Acentra',
  description: 'Inicia tu transformación corporativa. Solicita un diagnóstico gratuito para contabilidad, software o gestión de RRHH. Estamos en Lima, Perú.',
  keywords: ['contacto acentra', 'asesoria contable gratuita', 'cotizacion software', 'consultoria empresarial lima'],
};

export default function ContactoPage() {
  return <ContactForm />;
}
