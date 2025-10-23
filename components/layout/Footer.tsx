"use client";

import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Logo from "@/components/ui/Logo";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/claude-simo-012580177", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'de';
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: t('services.websites'), href: '/services#websites' },
      { label: t('services.landing'), href: '/services#landing-pages' },
      { label: t('services.webapps'), href: '/services#web-apps' },
      { label: t('services.ecommerce'), href: '/services#ecommerce' },
    ],
    company: [
      { label: t('company.about'), href: '/about' },
      { label: t('company.portfolio'), href: '/portfolio' },
      { label: t('company.contact'), href: '/contact' },
      { label: t('company.logos'), href: '/logos' },
    ],
    legal: [
      { label: t('legal.imprint'), href: '/impressum' },
      { label: t('legal.privacy'), href: '/datenschutz' },
      { label: t('legal.terms'), href: '/agb' },
    ],
  };

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Logo size={36} />
                <h3 className="text-2xl font-bold">
                  <span className="gradient-text">Digital</span>
                  <span className="text-white">Solutions</span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                {t('tagline')}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{t('location')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaEnvelope className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:contact@digitalssolutions.com"
                  className="hover:text-white transition-colors"
                >
                  contact@digitalssolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaPhone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a
                  href="tel:+4917966274733"
                  className="hover:text-white transition-colors"
                >
                  +49 179 6627473
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('services.title')}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('company.title')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('legal.title')}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} DigitalSolutions. {t('copyright')}
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
