"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookie } from "react-icons/fa";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center">
                    <FaCookie className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-0">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website
                    zu verbessern. Durch die Nutzung unserer Website stimmen Sie
                    der Verwendung von Cookies zu. Weitere Informationen finden
                    Sie in unserer{" "}
                    <Link
                      href="/datenschutz"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium text-sm md:text-base whitespace-nowrap"
                  >
                    Ablehnen
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-600 hover:to-blue-300 text-white rounded-lg transition-all font-medium text-sm md:text-base whitespace-nowrap shadow-lg shadow-blue-700/30"
                  >
                    Akzeptieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
