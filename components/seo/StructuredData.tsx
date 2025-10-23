export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://digitalssolutions.de/#organization",
    name: "Digitalssolutions",
    alternateName: "Digitalssolutions - Claude Simo",
    url: "https://digitalssolutions.de",
    logo: "https://digitalssolutions.de/favicon.svg",
    description:
      "Professionelle Webentwicklung, Landing Pages und Web-Applikationen. Spezialisiert auf PHP, Laravel, Symfony, React und Next.js.",
    email: "contact@digitalssolutions.com",
    telephone: "+491796627473",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gummersbach",
      addressCountry: "DE",
    },
    sameAs: [
      "https://www.linkedin.com/in/claude-simo-012580177",
    ],
    founder: {
      "@type": "Person",
      name: "Claude Simo",
      jobTitle: "Full-Stack Developer & DevOps Engineer",
      url: "https://digitalssolutions.de/cv",
      sameAs: ["https://www.linkedin.com/in/claude-simo-012580177"],
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    knowsAbout: [
      "Web Development",
      "PHP",
      "Laravel",
      "Symfony",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "DevOps",
      "Docker",
      "Kubernetes",
    ],
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webentwicklung",
          description: "Moderne Websites und Webanwendungen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Pages",
          description: "Conversion-optimierte Landing Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Applikationen",
          description: "Maßgeschneiderte Webanwendungen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce",
          description: "Online-Shop-Entwicklung",
        },
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://digitalssolutions.de/#person",
    name: "Claude Simo",
    jobTitle: "Full-Stack Developer & DevOps Engineer",
    url: "https://digitalssolutions.de",
    image: "https://digitalssolutions.de/favicon.svg",
    email: "contact@digitalssolutions.com",
    telephone: "+491796627473",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gummersbach",
      addressCountry: "DE",
    },
    sameAs: ["https://www.linkedin.com/in/claude-simo-012580177"],
    worksFor: {
      "@type": "Organization",
      name: "Digitalssolutions",
    },
    knowsAbout: [
      "PHP Development",
      "Laravel Framework",
      "Symfony Framework",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "DevOps",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://digitalssolutions.de/#website",
    url: "https://digitalssolutions.de",
    name: "Digitalssolutions",
    description:
      "Professionelle Webentwicklung und digitale Lösungen von Claude Simo",
    publisher: {
      "@id": "https://digitalssolutions.de/#organization",
    },
    inLanguage: "de-DE",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://digitalssolutions.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lebenslauf",
        item: "https://digitalssolutions.de/cv",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://digitalssolutions.de/services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Portfolio",
        item: "https://digitalssolutions.de/portfolio",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Kontakt",
        item: "https://digitalssolutions.de/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
