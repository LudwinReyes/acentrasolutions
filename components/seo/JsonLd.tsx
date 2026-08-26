import React from "react";

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://acentraperu.com/#organization",
  "name": "Acentra",
  "legalName": "Acentra Solutions",
  "alternateName": ["Acentra Perú", "Acentra Consultoría Corporativa"],
  "url": "https://acentraperu.com",
  "logo": "https://acentraperu.com/img/acentra/acentra-logo.png",
  "image": "https://acentraperu.com/images/inicio/Contabilidad%20y%20Finanzas.jpeg",
  "description": "Firma de consultoría corporativa de élite en Perú especializada en Contabilidad NIIF, Desarrollo de Software a Medida con Inteligencia Artificial y Outsourcing de Planillas y Gestión de RRHH.",
  "telephone": "+51954775210",
  "email": "contacto@acentraperu.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lima",
    "addressRegion": "Lima",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.046374,
    "longitude": -77.042793
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Perú"
    },
    {
      "@type": "City",
      "name": "Lima"
    },
    {
      "@type": "City",
      "name": "Callao"
    }
  ],
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Victor Yactayo",
    "jobTitle": "Gerente General",
    "worksFor": {
      "@id": "https://acentraperu.com/#organization"
    }
  },
  "knowsAbout": [
    "Contabilidad NIIF",
    "Outsourcing Contable en Perú",
    "Auditoría Financiera",
    "Asesoría Tributaria SUNAT",
    "Desarrollo de Software a Medida",
    "Inteligencia Artificial para Empresas",
    "Integración de APIs SUNAT y RENIEC",
    "Gestión de Planillas D.L. 728",
    "Cumplimiento Sunafil",
    "T-Registro y Liquidaciones Laborales"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/acentraperu"
  ]
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://acentraperu.com/#website",
  "url": "https://acentraperu.com",
  "name": "Acentra Solutions",
  "description": "Consultoría Corporativa de Élite en Perú: Contabilidad NIIF, Software a Medida y Gestión de RRHH",
  "publisher": {
    "@id": "https://acentraperu.com/#organization"
  },
  "inLanguage": "es-PE"
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function createServiceSchema({
  name,
  serviceType,
  description,
  url,
  image
}: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "serviceType": serviceType,
    "description": description,
    "url": url,
    "provider": {
      "@id": "https://acentraperu.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Perú"
    },
    ...(image ? { "image": image } : {})
  };
}

export function createWebApplicationSchema({
  name,
  description,
  url,
  applicationCategory = "FinanceApplication"
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": "All modern browsers",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PEN"
    },
    "provider": {
      "@id": "https://acentraperu.com/#organization"
    }
  };
}
