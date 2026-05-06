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
  title: 'Acentra - Soluciones Integrales',
  description: 'Optimizamos y escalamos empresas con soluciones corporativas de élite en contabilidad, software y recursos humanos.',
  icons: {
    icon: '/img/acentra/preloader.png',
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
