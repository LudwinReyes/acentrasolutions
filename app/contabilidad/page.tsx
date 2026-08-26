import { Metadata } from "next";
import { ContabilidadContent } from "@/components/pages/ContabilidadContent";
import JsonLd, { createBreadcrumbSchema, createServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Outsourcing Contable y Contabilidad NIIF en Lima, Perú | Acentra',
  description: 'Servicios de outsourcing contable, contabilidad financiera bajo normas NIIF, auditorías tributarias SUNAT y diagnóstico financiero en Lima y Perú. Cero contingencias fiscales.',
  keywords: [
    'outsourcing contable lima',
    'contabilidad niif peru',
    'estudio contable en callao',
    'estudio contable lima',
    'auditoria financiera sunat',
    'estados financieros niif',
    'asesoria tributaria empresas peru',
    'software contable peru',
    'acentra contabilidad'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/contabilidad',
  },
  openGraph: {
    title: 'Outsourcing Contable y Contabilidad NIIF en Lima, Perú | Acentra',
    description: 'Servicios de outsourcing contable, normas NIIF, auditorías y diagnóstico financiero para empresas en Perú. Cumplimiento impecable ante SUNAT.',
    url: 'https://acentraperu.com/contabilidad',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/contabilidad/Consultor%C3%ADa%20en%20contabilidad%20financiera%20y%20tributaria%20(NIIF).jpg',
        width: 1200,
        height: 630,
        alt: 'Outsourcing Contable y Contabilidad NIIF en Perú - Acentra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outsourcing Contable y Contabilidad NIIF en Lima, Perú | Acentra',
    description: 'Servicios de outsourcing contable, normas NIIF, auditorías internas y diagnóstico financiero en Perú.',
    images: ['https://acentraperu.com/images/contabilidad/Consultor%C3%ADa%20en%20contabilidad%20financiera%20y%20tributaria%20(NIIF).jpg'],
  },
};

const contabilidadBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Contabilidad y Finanzas NIIF', url: 'https://acentraperu.com/contabilidad' },
]);

const contabilidadServiceSchema = createServiceSchema({
  name: 'Outsourcing Contable y Consultoría en Contabilidad Financiera y Tributaria NIIF',
  serviceType: 'Accounting and Financial Consulting Service',
  description: 'Servicios integrales de outsourcing contable, aplicación de normas NIIF, elaboración de estados financieros, auditorías internas y diagnósticos de salud financiera para empresas en Perú.',
  url: 'https://acentraperu.com/contabilidad',
  image: 'https://acentraperu.com/images/contabilidad/Consultor%C3%ADa%20en%20contabilidad%20financiera%20y%20tributaria%20(NIIF).jpg',
});

export default function ContabilidadPage() {
  return (
    <>
      <JsonLd data={[contabilidadBreadcrumbs, contabilidadServiceSchema]} />
      <ContabilidadContent />
    </>
  );
}

