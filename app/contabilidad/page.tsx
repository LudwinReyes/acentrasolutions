import { Metadata } from "next";
import { ContabilidadContent } from "@/components/pages/ContabilidadContent";

export const metadata: Metadata = {
  title: 'Contabilidad NIIF y Outsourcing Contable en Perú | Acentra',
  description: 'Servicios de contabilidad financiera bajo normas NIIF, auditorías internas, outsourcing contable y diagnóstico financiero para empresas en Perú. Cumplimiento impecable.',
  keywords: ['contabilidad niif peru', 'outsourcing contable', 'auditoria interna', 'estados financieros', 'diagnostico financiero', 'acentra contabilidad'],
  alternates: {
    canonical: 'https://acentraperu.com/contabilidad',
  },
  openGraph: {
    title: 'Contabilidad NIIF y Outsourcing Contable en Perú | Acentra',
    description: 'Servicios de contabilidad financiera bajo normas NIIF, auditorías internas, outsourcing contable y diagnóstico financiero para empresas en Perú.',
    url: 'https://acentraperu.com/contabilidad',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contabilidad NIIF y Outsourcing Contable en Perú | Acentra',
    description: 'Servicios de contabilidad financiera bajo normas NIIF, auditorías internas y outsourcing contable para empresas en Perú.',
  },
};

export default function ContabilidadPage() {
  return <ContabilidadContent />;
}
