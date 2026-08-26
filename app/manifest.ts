import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Acentra Solutions',
    short_name: 'Acentra',
    description: 'Consultoría Corporativa de Élite en Perú: Contabilidad NIIF, Software a Medida y Gestión de Planillas',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#102C57',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  };
}
