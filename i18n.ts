export const locales = ['de', 'fr'] as const;
export const defaultLocale = 'de' as const;

export type Locale = (typeof locales)[number];
