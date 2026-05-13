import { Metadata } from "next";
import { ToolsList } from "@/components/tools/ToolsList";

export const metadata: Metadata = {
  title: 'Herramientas y Calculadoras Financieras Gratuitas | Acentra',
  description: 'Accede a nuestras calculadoras gratuitas de nóminas y tributación peruana. Simula costos laborales, sueldo neto e impuesto a la renta con datos precisos.',
  keywords: ['calculadora tributaria peru', 'calculo de planillas', 'herramientas financieras gratis', 'simulador impuestos peru', 'calculadora nominas'],
  alternates: {
    canonical: 'https://acentraperu.com/herramientas',
  },
  openGraph: {
    title: 'Herramientas y Calculadoras Financieras Gratuitas | Acentra',
    description: 'Calculadoras gratuitas de nóminas y tributación peruana. Simula costos laborales e impuestos con datos precisos.',
    url: 'https://acentraperu.com/herramientas',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herramientas y Calculadoras Financieras Gratuitas | Acentra',
    description: 'Calculadoras gratuitas de nóminas y tributación peruana para empresas en Perú.',
  },
};

export default function HerramientasPage() {
  return <ToolsList />;
}
