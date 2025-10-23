"use client";

import { motion } from "framer-motion";
import { FaDownload, FaCheckCircle } from "react-icons/fa";
import Logo from "@/components/ui/Logo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function LogosPage() {
  const logos = [
    {
      title: "Standard Logo (PNG)",
      description: "Transparenter Hintergrund, 512×512px",
      file: "/logo.png",
      size: "140 KB",
      preview: "/logo.png",
      format: "PNG",
      recommended: false,
    },
    {
      title: "Hochauflösendes Logo (PNG)",
      description: "Transparenter Hintergrund, 1024×1024px",
      file: "/logo-highres.png",
      size: "350 KB",
      preview: "/logo-highres.png",
      format: "PNG",
      recommended: false,
    },
    {
      title: "Logo mit weißem Hintergrund (PNG)",
      description: "Perfekt für Rechnungen und Dokumente, 1024×1024px",
      file: "/logo-white-bg.png",
      size: "318 KB",
      preview: "/logo-white-bg.png",
      format: "PNG",
      recommended: true,
    },
    {
      title: "Standard Logo (SVG)",
      description: "Vektorgrafik, unbegrenzt skalierbar, 100×100px",
      file: "/logo.svg",
      size: "1.5 KB",
      preview: "/logo.svg",
      format: "SVG",
      recommended: false,
    },
    {
      title: "Hochauflösendes Logo (SVG)",
      description: "Vektorgrafik, 512×512px Viewbox",
      file: "/logo-highres.svg",
      size: "1.5 KB",
      preview: "/logo-highres.svg",
      format: "SVG",
      recommended: false,
    },
    {
      title: "Logo mit weißem Hintergrund (SVG)",
      description: "Vektorgrafik mit weißem Hintergrund, 512×512px Viewbox",
      file: "/logo-white-bg.svg",
      size: "1.5 KB",
      preview: "/logo-white-bg.svg",
      format: "SVG",
      recommended: false,
    },
  ];

  const colors = [
    { name: "Primärfarbe (Dunkelblau)", value: "rgb(23, 67, 116)", hex: "#174374" },
    { name: "Sekundärfarbe (Hellblau)", value: "rgb(59, 130, 246)", hex: "#3B82F6" },
  ];

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <Logo size={120} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Brand <span className="gradient-text">Assets</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Laden Sie unser Logo in verschiedenen Formaten herunter. Perfekt für Rechnungen, Präsentationen und Marketing-Materialien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Downloads Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
            >
              Logo <span className="gradient-text">Downloads</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 text-center max-w-2xl mx-auto"
            >
              Wählen Sie das passende Format für Ihren Anwendungsfall
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`relative p-6 bg-black rounded-2xl border transition-all ${
                  logo.recommended
                    ? "border-blue-500 shadow-lg shadow-blue-500/20"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {logo.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-700 to-blue-400 text-white text-xs font-bold rounded-full">
                      Empfohlen für Rechnungen
                    </span>
                  </div>
                )}

                {/* Preview */}
                <div className="mb-6 h-48 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden">
                  <img
                    src={logo.preview}
                    alt={logo.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Info */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{logo.title}</h3>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded">
                      {logo.format}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{logo.description}</p>
                  <p className="text-xs text-gray-500">Dateigröße: {logo.size}</p>
                </div>

                {/* Download Button */}
                <a
                  href={logo.file}
                  download
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow flex items-center justify-center gap-2"
                >
                  <FaDownload className="w-4 h-4" />
                  Herunterladen
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Colors Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              Brand <span className="gradient-text">Farben</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {colors.map((color, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800"
                >
                  <div
                    className="w-full h-32 rounded-xl mb-6"
                    style={{ background: color.value }}
                  />
                  <h3 className="text-xl font-bold mb-4">{color.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">RGB:</span>
                      <span className="text-white font-mono">{color.value}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">HEX:</span>
                      <span className="text-white font-mono">{color.hex}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Guidelines Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              Verwendungs<span className="gradient-text">hinweise</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="p-6 bg-black rounded-xl border border-zinc-800">
                <div className="flex items-start gap-3 mb-3">
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Für Rechnungen</h3>
                    <p className="text-gray-400">
                      Verwenden Sie <span className="text-blue-400 font-semibold">logo-white-bg.png</span> für beste Kompatibilität mit Rechnungsvorlagen und Dokumenten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black rounded-xl border border-zinc-800">
                <div className="flex items-start gap-3 mb-3">
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Für Webseiten</h3>
                    <p className="text-gray-400">
                      Verwenden Sie SVG-Dateien für scharfe Darstellung auf allen Bildschirmgrößen und Geräten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black rounded-xl border border-zinc-800">
                <div className="flex items-start gap-3 mb-3">
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Für Druckmaterialien</h3>
                    <p className="text-gray-400">
                      Verwenden Sie hochauflösende Varianten (1024×1024px) oder SVG-Dateien für beste Druckqualität.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black rounded-xl border border-zinc-800">
                <div className="flex items-start gap-3 mb-3">
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Für Social Media</h3>
                    <p className="text-gray-400">
                      <span className="text-blue-400 font-semibold">logo-white-bg.png</span> eignet sich ideal für Profile mit hellem Hintergrund.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
