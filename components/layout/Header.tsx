"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import LocaleLink from "@/components/ui/LocaleLink";
import { useTranslations } from "next-intl";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');

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
          <LocaleLink href="/" className="z-10">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Logo size="md" />
            </motion.div>
          </LocaleLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-400 group-hover:w-full transition-all duration-300" />
              </LocaleLink>
            ))}
          </div>

          {/* CTA Button & Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <LocaleLink href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                {t('cta')}
              </motion.button>
            </LocaleLink>
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
                  <LocaleLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-blue-400 transition-colors py-2 text-lg font-medium"
                  >
                    {link.label}
                  </LocaleLink>
                ))}
                <div className="pt-2">
                  <LanguageSwitcher />
                </div>
                <LocaleLink href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="pt-2">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-medium shadow-lg shadow-blue-700/30">
                    {t('cta')}
                  </button>
                </LocaleLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
