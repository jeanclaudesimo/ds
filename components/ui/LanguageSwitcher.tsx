"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/i18n";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const languageNames = {
  de: "Deutsch",
  fr: "Français",
};

const languageFlags = {
  de: "🇩🇪",
  fr: "🇫🇷",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

    // Navigate to new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
        aria-label="Change language"
      >
        <span className="text-xl">{languageFlags[locale as keyof typeof languageFlags]}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {languageNames[locale as keyof typeof languageNames]}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden z-50"
        >
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors ${
                locale === loc ? "bg-zinc-800/50" : ""
              }`}
            >
              <span className="text-xl">{languageFlags[loc as keyof typeof languageFlags]}</span>
              <span className="text-sm font-medium">
                {languageNames[loc as keyof typeof languageNames]}
              </span>
              {locale === loc && (
                <svg
                  className="w-4 h-4 ml-auto text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
