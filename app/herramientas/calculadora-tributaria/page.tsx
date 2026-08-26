import { Metadata } from "next";
import { TaxCalculator } from "@/components/tools/TaxCalculator";
import JsonLd, { createBreadcrumbSchema, createWebApplicationSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Calculadora Impuesto a la Renta 4ta y 5ta Categoría 2025/2026 | Acentra',
  description: 'Calcula gratis y al instante el Impuesto a la Renta de 4ta y 5ta categoría en Perú según la normativa SUNAT. Proyección de retenciones mensuales, deducciones de 7 y 3 UIT.',
  keywords: [
    'calculadora de 5ta categoria',
    'calculo de 5ta categoria',
    'calculo de renta de 5ta categoria',
    'calculadora de impuesto a la renta peru',
    'calculadora de detraccion',
    'calculo impuesto a la renta 2025 peru',
    'renta de 4ta y 5ta categoria',
    'calculadora tributaria sunat',
    'retencion 5ta categoria calculo'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/herramientas/calculadora-tributaria',
  },
  openGraph: {
    title: 'Calculadora Impuesto a la Renta 4ta y 5ta Categoría 2025/2026 | Acentra',
    description: 'Calcula gratis tu Impuesto a la Renta en Perú. Simulación exacta con deducciones legales de 7 y 3 UIT.',
    url: 'https://acentraperu.com/herramientas/calculadora-tributaria',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Calculadora Impuesto a la Renta Perú - Acentra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora Impuesto a la Renta 4ta y 5ta Categoría Perú | Acentra',
    description: 'Calcula gratis tu Impuesto a la Renta en Perú.',
    images: ['https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg'],
  },
};

const taxCalcBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Herramientas', url: 'https://acentraperu.com/herramientas' },
  { name: 'Calculadora Tributaria', url: 'https://acentraperu.com/herramientas/calculadora-tributaria' },
]);

const taxCalcAppSchema = createWebApplicationSchema({
  name: 'Calculadora Impuesto a la Renta 4ta y 5ta Categoría Perú (SUNAT)',
  description: 'Aplicación web interactiva gratuita para el cálculo y proyección de retenciones de Impuesto a la Renta de 4ta y 5ta categoría y deducciones tributarias en Perú.',
  url: 'https://acentraperu.com/herramientas/calculadora-tributaria',
  applicationCategory: 'FinanceApplication',
});

export default function CalculadoraTributariaPage() {
  return (
    <>
      <JsonLd data={[taxCalcBreadcrumbs, taxCalcAppSchema]} />
      <TaxCalculator />
    </>
  );
}

