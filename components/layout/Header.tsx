"use client";

import { useState, useEffect } from "react";
import { Link } from '@/i18n/routing';
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'de';
  const t = useTranslations('nav');

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links with translations
  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/cv", label: t('cv') },
    { href: "/services", label: t('services') },
    { href: "/portfolio", label: t('portfolio') },
    { href: "/contact", label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-black/95 backdrop-blur-lg border-b border-zinc-800"
          : "bg-black/50 backdrop-blur-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-10 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="transition-all"
            >
              <Logo size={42} className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-xl sm:text-2xl font-bold hidden sm:block"
            >
              <span className="gradient-text">Digital</span>
              <span className="text-white">Solutions</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                {t('cta')}
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors z-10"
            aria-label="Menü"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-6 pb-4 border-t border-zinc-800 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-blue-400 transition-colors py-2 text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 pb-2 border-t border-zinc-700">
                  <LanguageSwitcher />
                </div>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="pt-2">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-medium shadow-lg shadow-blue-700/30">
                    {t('cta')}
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
