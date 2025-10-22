import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Automatically detect the user's locale based on their browser
  localeDetection: true,

  // Optional: Add locale prefix to default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|fr)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
