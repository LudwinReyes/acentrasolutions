import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/global/Navigation';
import CustomCursor from '@/components/global/CustomCursor';
import SmoothScroll from '@/components/global/SmoothScroll';
import JsonLd, { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '@/components/seo/JsonLd';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#102C57',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://acentraperu.com'),
  title: {
    default: 'Acentra | Consultoría Empresarial en Perú: Contabilidad, Software y RRHH',
    template: '%s'
  },
  description: 'Firma líder en Perú especializada en Contabilidad NIIF, Desarrollo de Software a Medida con Inteligencia Artificial y Outsourcing de Planillas y Gestión de RRHH.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  keywords: [
    'consultoria corporativa peru',
    'contabilidad niif peru',
    'outsourcing contable lima',
    'estudio contable peru',
    'desarrollo de software a medida peru',
    'software con inteligencia artificial peru',
    'gestion de planillas peru',
    'outsourcing de nominas lima',
    'cumplimiento sunafil peru',
    'acentra peru',
    'acentra solutions'
  ],
  authors: [{ name: 'Acentra Solutions', url: 'https://acentraperu.com' }],
  creator: 'Acentra Solutions',
  publisher: 'Acentra Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://acentraperu.com',
  },
  openGraph: {
    title: 'Acentra | Consultoría Corporativa de Élite en Perú',
    description: 'Optimizamos y escalamos empresas con soluciones de élite en Contabilidad NIIF, Software a Medida con IA y Gestión de Planillas.',
    url: 'https://acentraperu.com',
    siteName: 'Acentra Solutions',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Acentra - Consultoría Corporativa en Perú',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acentra | Consultoría Corporativa de Élite en Perú',
    description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite en Contabilidad NIIF, Software a Medida y Gestión de Planillas.',
    images: ['https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg'],
  },
  category: 'business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <JsonLd data={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]} />
      </head>
      <body className="font-sans antialiased bg-background-light min-h-screen text-slate-900" suppressHydrationWarning>
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

