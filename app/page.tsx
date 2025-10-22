"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaRocket,
  FaMobileAlt,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaCode,
    title: "Moderne Technologien",
    description:
      "Wir nutzen die neuesten Frameworks wie Next.js, React und Laravel für zukunftssichere Lösungen.",
  },
  {
    icon: FaRocket,
    title: "Schnelle Ladezeiten",
    description:
      "Optimierte Performance für beste User Experience und höhere Conversion-Raten.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "Perfekte Darstellung auf allen Geräten - vom Smartphone bis zum Desktop.",
  },
  {
    icon: FaChartLine,
    title: "SEO Optimiert",
    description:
      "Beste Sichtbarkeit in Suchmaschinen durch professionelle SEO-Optimierung.",
  },
  {
    icon: FaShieldAlt,
    title: "Maximale Sicherheit",
    description:
      "Höchste Sicherheitsstandards zum Schutz Ihrer Daten und Ihrer Kunden.",
  },
  {
    icon: FaClock,
    title: "Pünktliche Lieferung",
    description:
      "Zuverlässige Projektumsetzung innerhalb der vereinbarten Zeitrahmen.",
  },
];

const stats = [
  { value: "50+", label: "Abgeschlossene Projekte" },
  { value: "30+", label: "Zufriedene Kunden" },
  { value: "5+", label: "Jahre Erfahrung" },
  { value: "100%", label: "Kundenzufriedenheit" },
];

const services = [
  {
    title: "Moderne Websites",
    description:
      "Professionelle Unternehmenswebsites, E-Commerce-Plattformen und institutionelle Websites mit SEO-Optimierung.",
    features: ["Responsive Design", "CMS Integration", "SEO-Optimierung"],
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-fokussierte Landing Pages mit A/B-Testing und Analytics-Integration für maximale Conversions.",
    features: ["A/B Testing", "Analytics", "Lead Generation"],
  },
  {
    title: "Web Applikationen",
    description:
      "Maßgeschneiderte Lösungen mit RESTful APIs, optimierten Datenbanken und kontinuierlicher Wartung.",
    features: ["Custom Solutions", "API Integration", "Maintenance"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
            >
              <span className="text-blue-400 font-medium">
                🚀 Ihr Partner für digitale Transformation
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Innovative Weblösungen
              <br />
              für Ihr{" "}
              <span className="gradient-text">digitales Wachstum</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Wir transformieren Ihre digitalen Ideen in erfolgreiche
              Online-Präsenzen mit modernsten Technologien und
              professionellem Design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-shadow flex items-center gap-2"
                >
                  Projekt starten
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white font-semibold text-lg hover:border-zinc-700 transition-colors"
                >
                  Portfolio ansehen
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Warum <span className="gradient-text">DigitalSolutions</span>?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Wir bieten Ihnen professionelle Lösungen mit höchsten
              Qualitätsstandards
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Unsere <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Von der Konzeption bis zur Umsetzung - wir begleiten Ihr
              digitales Projekt
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all group"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-2"
              >
                Alle Services ansehen
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit, Ihr Projekt zu starten?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen.
              Kontaktieren Sie uns für eine kostenlose Beratung.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-bold text-xl hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-3"
              >
                Kostenlose Beratung vereinbaren
                <FaArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
