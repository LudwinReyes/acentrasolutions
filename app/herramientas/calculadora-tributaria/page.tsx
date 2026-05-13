import { Metadata } from "next";
import { TaxCalculator } from "@/components/tools/TaxCalculator";

export const metadata: Metadata = {
  title: 'Calculadora Impuesto a la Renta 4ta y 5ta Categoría Perú | Acentra',
  description: 'Calcula gratis tu Impuesto a la Renta de 4ta y 5ta categoría en Perú. Proyecciones anuales precisas y optimización de tu carga tributaria. Actualizado 2025.',
  keywords: ['impuesto a la renta peru', 'calculadora tributaria peru', 'renta 4ta categoria', 'renta 5ta categoria', 'planificacion fiscal peru', 'retencion ir'],
  alternates: {
    canonical: 'https://acentraperu.com/herramientas/calculadora-tributaria',
  },
  openGraph: {
    title: 'Calculadora Impuesto a la Renta 4ta y 5ta Categoría Perú | Acentra',
    description: 'Calcula gratis tu Impuesto a la Renta en Perú. Proyecciones precisas y optimización fiscal. Actualizado 2025.',
    url: 'https://acentraperu.com/herramientas/calculadora-tributaria',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora Impuesto a la Renta 4ta y 5ta Categoría Perú | Acentra',
    description: 'Calcula gratis tu Impuesto a la Renta en Perú. Actualizado 2025.',
  },
};

export default function CalculadoraTributariaPage() {
  return <TaxCalculator />;
}
