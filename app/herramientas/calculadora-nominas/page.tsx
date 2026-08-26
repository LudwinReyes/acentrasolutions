import { Metadata } from "next";
import { PayrollCalculator } from "@/components/tools/PayrollCalculator";
import JsonLd, { createBreadcrumbSchema, createWebApplicationSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Calculadora de Planillas y Costo Laboral Perú (EsSalud, CTS) | Acentra',
  description: 'Calcula gratis el costo laboral total de un trabajador y el sueldo neto en Perú según el D.L. 728. Simulación exacta de EsSalud 9%, CTS, Gratificaciones, AFP/ONP y 5ta categoría.',
  keywords: [
    'calculadora de planillas',
    'calculadora planillas peru',
    'calculo planilla peru',
    'costo laboral peru empleado',
    'calculador de sueldo neto',
    'calculo de sueldo neto peru',
    'simulador planilla dl 728',
    'calculo de liquidacion de beneficios',
    'programa de planillas peru'
  ],
  alternates: {
    canonical: 'https://acentraperu.com/herramientas/calculadora-nominas',
  },
  openGraph: {
    title: 'Calculadora de Planillas y Costo Laboral Perú (EsSalud, CTS) | Acentra',
    description: 'Simula gratis el costo total de un trabajador y su sueldo neto en Perú. Incluye EsSalud, CTS, Gratificaciones y retenciones.',
    url: 'https://acentraperu.com/herramientas/calculadora-nominas',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/inicio/RRHH%20y%20N%C3%B3minas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Planillas y Costos Laborales Perú - Acentra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Planillas y Costo Laboral Perú | Acentra',
    description: 'Simula gratis el costo total de un trabajador y su sueldo neto en Perú.',
    images: ['https://acentraperu.com/images/inicio/RRHH%20y%20N%C3%B3minas.jpeg'],
  },
};

const payrollCalcBreadcrumbs = createBreadcrumbSchema([
  { name: 'Inicio', url: 'https://acentraperu.com' },
  { name: 'Herramientas', url: 'https://acentraperu.com/herramientas' },
  { name: 'Calculadora de Nóminas y Costo Laboral', url: 'https://acentraperu.com/herramientas/calculadora-nominas' },
]);

const payrollCalcAppSchema = createWebApplicationSchema({
  name: 'Calculadora de Planillas y Costo Laboral Empleador Perú (D.L. 728)',
  description: 'Herramienta interactiva gratuita para simular el sueldo neto y costo total laboral de trabajadores en el régimen general de la actividad privada en Perú.',
  url: 'https://acentraperu.com/herramientas/calculadora-nominas',
  applicationCategory: 'BusinessApplication',
});

export default function CalculadoraNominasPage() {
  return (
    <>
      <JsonLd data={[payrollCalcBreadcrumbs, payrollCalcAppSchema]} />
      <PayrollCalculator />
    </>
  );
}

