import { Metadata } from "next";
import { PayrollCalculator } from "@/components/tools/PayrollCalculator";

export const metadata: Metadata = {
  title: 'Calculadora de Planillas y Costo Laboral Perú | Acentra',
  description: 'Simula gratis el costo total de un trabajador y su sueldo neto en Perú. Incluye EsSalud, CTS, Gratificaciones y retenciones de 5ta categoría. Actualizado 2025.',
  keywords: ['calculadora planillas peru', 'costo laboral empleado peru', 'sueldo neto peru', 'retencion 5ta categoria', 'cts gratificaciones', 'essalud calculo'],
  alternates: {
    canonical: 'https://acentraperu.com/herramientas/calculadora-nominas',
  },
  openGraph: {
    title: 'Calculadora de Planillas y Costo Laboral Perú | Acentra',
    description: 'Simula gratis el costo total de un trabajador y su sueldo neto en Perú. Incluye EsSalud, CTS, Gratificaciones y retenciones.',
    url: 'https://acentraperu.com/herramientas/calculadora-nominas',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Planillas y Costo Laboral Perú | Acentra',
    description: 'Simula gratis el costo total de un trabajador y su sueldo neto en Perú.',
  },
};

export default function CalculadoraNominasPage() {
  return <PayrollCalculator />;
}
