"use client";

import Link from "next/link";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  services: [
    { label: "Moderne Websites", href: "/services#websites" },
    { label: "Landing Pages", href: "/services#landing-pages" },
    { label: "Web Applikationen", href: "/services#web-apps" },
    { label: "E-Commerce", href: "/services#ecommerce" },
  ],
  company: [
    { label: "Über uns", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Kontakt", href: "/contact" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/claude-simo-012580177", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Logo size="md" className="mb-4" />
              <p className="text-gray-400 text-sm">
                Ihr Partner für digitale Transformation und innovative Weblösungen.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Gummersbach, Deutschland</span>
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
            <h4 className="text-white font-semibold mb-4">Services</h4>
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
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
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
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
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
            © {currentYear} Digitalssolutions. Alle Rechte vorbehalten.
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
