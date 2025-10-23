import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ComponentProps } from 'react';

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale();

  // Don't add locale if href already starts with it or is external
  const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
  const hasLocale = href.startsWith(`/${locale}`);

  const localizedHref = isExternal || hasLocale ? href : `/${locale}${href}`;

  return <Link href={localizedHref} {...props} />;
}
