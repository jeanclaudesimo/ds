import { Metadata, Viewport } from 'next';

export function generateViewport(): Viewport {
  return {
    themeColor: '#174374',
  };
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: 'Digitalssolutions - Ihr Partner für digitale Transformation',
    fr: 'Digitalssolutions - Votre partenaire pour la transformation numérique'
  };

  const descriptions = {
    de: 'Professionelle Webentwicklung, Landing Pages und Web-Applikationen. Wir transformieren Ihre digitalen Ideen in innovative Lösungen mit modernsten Technologien.',
    fr: 'Développement web professionnel, pages de destination et applications web. Nous transformons vos idées numériques en solutions innovantes avec les technologies les plus modernes.'
  };

  return {
    title: {
      default: titles[locale as keyof typeof titles] || titles.de,
      template: `%s | Digitalssolutions`,
    },
    description: descriptions[locale as keyof typeof descriptions] || descriptions.de,
    keywords: [
      'Webentwicklung',
      'Web Development',
      'Landing Pages',
      'Web Applikationen',
      'E-Commerce',
      'Next.js',
      'React',
      'PHP',
      'Laravel',
      'Symfony',
      'Digitale Transformation',
    ],
    authors: [{ name: 'Digitalssolutions' }],
    creator: 'Digitalssolutions',
    metadataBase: new URL('https://digitalssolutions.de'),
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-icon',
      other: [
        {
          rel: 'mask-icon',
          url: '/favicon.svg',
          color: '#174374',
        },
      ],
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'de_DE',
      url: 'https://digitalssolutions.de',
      title: titles[locale as keyof typeof titles] || titles.de,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.de,
      siteName: 'Digitalssolutions',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.de,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.de,
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
    manifest: '/manifest',
    alternates: {
      languages: {
        de: '/de',
        fr: '/fr',
      },
    },
  };
}
