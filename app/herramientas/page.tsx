import { Metadata } from "next";
import { ToolsList } from "@/components/tools/ToolsList";
import JsonLd, { createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Calculadoras Financieras y Laborales Gratuitas Perú 2025/2026 | Acentra',
  description: 'Suite de calculadoras financieras y laborales gratuitas para empresas y trabajadores en Perú: simulador de Impuesto a la Renta de 4ta y 5ta categoría SUNAT y calculadora de nóminas y costo laboral.',
  keywords: [
    'calculadoras financieras peru',
    'calculadora tributaria peru',
    'calculadora de sueldo neto peru',
    'calculadora de planillas',
    'calculo de impuestos sunat',
    'simulador tributario peru',
    'acentra herramientas'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/herramientas',
  },
  openGraph: {
    title: 'Calculadoras Financieras y Laborales Gratuitas Perú 2025/2026 | Acentra',
    description: 'Accede a nuestras calculadoras gratuitas de nóminas y tributación peruana. Simula costos laborales e impuestos con datos precisos.',
    url: 'https://acentraperu.com/herramientas',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Herramientas y Calculadoras Financieras Acentra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras Financieras y Laborales Gratuitas Perú | Acentra',
    description: 'Calculadoras gratuitas de nóminas y tributación peruana para empresas y trabajadores en Perú.',
    images: ['https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg'],
  },
};

const herramientasBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Herramientas Financieras', url: 'https://acentraperu.com/herramientas' },
]);

export default function HerramientasPage() {
  return (
    <>
      <JsonLd data={herramientasBreadcrumbs} />
      <ToolsList />
    </>
  );
}

