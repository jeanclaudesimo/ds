'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { locales } from '@/i18n';

const languageNames = {
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract current locale and path
  const currentLocale = pathname.split('/')[1] as 'de' | 'fr';
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all text-white"
        aria-label="Sprache wählen"
      >
        <span className="text-xl">{languageNames[currentLocale].flag}</span>
        <span className="text-sm font-medium hidden sm:inline">
          {languageNames[currentLocale].name}
        </span>
        <HiChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg shadow-black/50 overflow-hidden z-50"
          >
            {locales.map((locale) => {
              const isActive = locale === currentLocale;
              const newPath = `/${locale}${pathWithoutLocale}`;

              return (
                <Link
                  key={locale}
                  href={newPath}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 transition-colors
                    ${isActive
                      ? 'bg-gradient-to-r from-blue-700 to-blue-400 text-white'
                      : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
                    }
                  `}
                >
                  <span className="text-2xl">{languageNames[locale].flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      {languageNames[locale].name}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">
                      {locale}
                    </div>
                  </div>
                  {isActive && (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
