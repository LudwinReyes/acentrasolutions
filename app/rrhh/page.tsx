import { Metadata } from "next";
import { RRHHContent } from "@/components/pages/RRHHContent";

export const metadata: Metadata = {
  title: 'Gestión de RRHH, Planillas y Cumplimiento Laboral | Acentra',
  description: 'Gestión integral de planillas (D.L. 728), T-Registro, liquidaciones y cumplimiento Sunafil. Tranquilidad legal y operativa para tu empresa en Perú.',
  keywords: ['gestion de planillas peru', 'recursos humanos', 'sunafil', 't-registro', 'liquidacion de beneficios', 'outsourcing rrhh'],
  alternates: {
    canonical: 'https://acentraperu.com/rrhh',
  },
  openGraph: {
    title: 'Gestión de RRHH, Planillas y Cumplimiento Laboral | Acentra',
    description: 'Gestión integral de planillas, T-Registro, liquidaciones y cumplimiento Sunafil. Tranquilidad legal y operativa para tu empresa.',
    url: 'https://acentraperu.com/rrhh',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestión de RRHH, Planillas y Cumplimiento Laboral | Acentra',
    description: 'Gestión integral de planillas, T-Registro, liquidaciones y cumplimiento Sunafil.',
  },
};

export default function RRHHPage() {
  return <RRHHContent />;
}
