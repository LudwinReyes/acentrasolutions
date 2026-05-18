import type {Metadata} from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/global/Navigation';
import CustomCursor from '@/components/global/CustomCursor';
import SmoothScroll from '@/components/global/SmoothScroll';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://acentraperu.com'),
  title: {
    default: 'Acentra - Soluciones Corporativas de Élite',
    template: '%s | Acentra'
  },
  description: 'Especialistas en Contabilidad NIIF, Software a Medida con IA y Gestión de Planillas para empresas que buscan escala y cumplimiento impecable.',
  keywords: ['contabilidad niif', 'software a medida', 'recursos humanos', 'outsourcing contable', 'acentra peru'],
  authors: [{ name: 'Acentra Solutions' }],
  creator: 'Acentra Solutions',
  publisher: 'Acentra Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Acentra - Soluciones Corporativas de Élite',
    description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite.',
    url: 'https://acentraperu.com',
    siteName: 'Acentra',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acentra - Soluciones Corporativas de Élite',
    description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite.',
  },

};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={montserrat.variable}>
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
