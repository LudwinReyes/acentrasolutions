import { Metadata } from "next";
import { RRHHContent } from "@/components/pages/RRHHContent";
import JsonLd, { createBreadcrumbSchema, createServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Gestión y Outsourcing de Planillas en Perú (D.L. 728, Sunafil) | Acentra',
  description: 'Servicio integral de outsourcing y maquila de planillas en Lima y Perú. Cálculo exacto D.L. 728, T-Registro, CTS, gratificaciones y blindaje ante fiscalizaciones de Sunafil.',
  keywords: [
    'gestion de planillas peru',
    'outsourcing de planillas lima',
    'administracion de planillas',
    'administracion de nomina peru',
    'maquila de nominas peru',
    'cumplimiento sunafil empresas',
    'calculo de beneficios laborales peru',
    't-registro altas y bajas sunat',
    'software de planillas peru',
    'acentra rrhh'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/rrhh',
  },
  openGraph: {
    title: 'Gestión y Outsourcing de Planillas en Perú (D.L. 728, Sunafil) | Acentra',
    description: 'Outsourcing integral de planillas, T-Registro, liquidaciones de beneficios sociales y blindaje ante Sunafil para empresas en Perú.',
    url: 'https://acentraperu.com/rrhh',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/RRHH/Gesti%C3%B3n%20Mensual%20Integrada.jpg',
        width: 1200,
        height: 630,
        alt: 'Gestión y Outsourcing de Planillas en Perú - Acentra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestión y Outsourcing de Planillas en Perú | Acentra',
    description: 'Gestión integral de nóminas, T-Registro, liquidaciones y cumplimiento Sunafil en Perú.',
    images: ['https://acentraperu.com/images/RRHH/Gesti%C3%B3n%20Mensual%20Integrada.jpg'],
  },
};

const rrhhBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Gestión de Planillas y RRHH', url: 'https://acentraperu.com/rrhh' },
]);

const rrhhServiceSchema = createServiceSchema({
  name: 'Outsourcing de Planillas, Maquila de Nóminas y Cumplimiento Laboral Sunafil',
  serviceType: 'Payroll Administration and Human Resources Consulting Service',
  description: 'Administración integral de planillas de sueldos bajo el régimen D.L. 728, elaboración de boletas, cálculo de CTS, gratificaciones, vacaciones, gestión de T-Registro y representación ante Sunafil en Perú.',
  url: 'https://acentraperu.com/rrhh',
  image: 'https://acentraperu.com/images/RRHH/Gesti%C3%B3n%20Mensual%20Integrada.jpg',
});

export default function RRHHPage() {
  return (
    <>
      <JsonLd data={[rrhhBreadcrumbs, rrhhServiceSchema]} />
      <RRHHContent />
    </>
  );
}

