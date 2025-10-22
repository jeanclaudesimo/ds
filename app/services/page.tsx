"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLaptopCode,
  FaRocket,
  FaShoppingCart,
  FaMobileAlt,
  FaSearch,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaCloud,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: "websites",
    icon: FaLaptopCode,
    title: "Moderne Websites",
    description:
      "Professionelle Unternehmenswebsites, die Ihre Marke perfekt repräsentieren und Ihre Zielgruppe begeistern.",
    features: [
      "Responsive Design für alle Geräte",
      "Content Management System (CMS)",
      "SEO-Optimierung from Beginn an",
      "Performance-optimiert",
      "DSGVO-konform",
      "Wartung & Support",
    ],
    technologies: ["Next.js", "React", "WordPress", "Laravel"],
    price: "Ab 2.500€",
  },
  {
    id: "landing-pages",
    icon: FaRocket,
    title: "Landing Pages",
    description:
      "Conversion-optimierte Landing Pages, die Besucher in Kunden verwandeln und Ihre Marketing-Ziele erreichen.",
    features: [
      "Conversion-fokussiertes Design",
      "A/B Testing Integration",
      "Analytics & Tracking",
      "Lead-Generierung",
      "Call-to-Action Optimierung",
      "Schnelle Ladezeiten",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Google Analytics"],
    price: "Ab 1.500€",
  },
  {
    id: "web-apps",
    icon: FaCode,
    title: "Web Applikationen",
    description:
      "Maßgeschneiderte Web-Applikationen für Ihre individuellen Geschäftsprozesse und Anforderungen.",
    features: [
      "Custom Development",
      "RESTful API Integration",
      "Datenbank-Optimierung",
      "User Management",
      "Skalierbare Architektur",
      "Kontinuierliche Wartung",
    ],
    technologies: ["Next.js", "Node.js", "Laravel", "PostgreSQL", "MongoDB"],
    price: "Ab 5.000€",
  },
  {
    id: "ecommerce",
    icon: FaShoppingCart,
    title: "E-Commerce Lösungen",
    description:
      "Leistungsstarke Online-Shops mit allen Features für erfolgreiches Online-Business.",
    features: [
      "Produkt-Management",
      "Warenkorb & Checkout",
      "Payment Gateway Integration",
      "Versand-Integration",
      "Bestellverwaltung",
      "Multi-Language Support",
    ],
    technologies: ["Shopify", "WooCommerce", "Next.js", "Stripe"],
    price: "Ab 4.000€",
  },
  {
    id: "mobile",
    icon: FaMobileAlt,
    title: "Mobile-First Development",
    description:
      "Progressive Web Apps und mobile-optimierte Websites für die beste User Experience auf Smartphones.",
    features: [
      "Progressive Web App (PWA)",
      "Offline-Funktionalität",
      "Push-Benachrichtigungen",
      "Native App-Feeling",
      "App Store Ready",
      "Cross-Platform",
    ],
    technologies: ["React Native", "Next.js", "PWA", "Firebase"],
    price: "Ab 3.500€",
  },
  {
    id: "seo",
    icon: FaSearch,
    title: "SEO & Performance",
    description:
      "Technische SEO-Optimierung und Performance-Verbesserung für bessere Rankings und schnellere Ladezeiten.",
    features: [
      "Technical SEO Audit",
      "Performance Optimierung",
      "Core Web Vitals",
      "Schema Markup",
      "Content-Optimierung",
      "Monatliches Reporting",
    ],
    technologies: ["Google Search Console", "Lighthouse", "GTmetrix"],
    price: "Ab 800€/Monat",
  },
];

const process = [
  {
    step: "01",
    title: "Beratung & Analyse",
    description:
      "Wir analysieren Ihre Anforderungen und beraten Sie zu den besten Lösungen für Ihr Projekt.",
  },
  {
    step: "02",
    title: "Konzept & Design",
    description:
      "Entwicklung eines maßgeschneiderten Konzepts und professionellen Designs nach Ihren Wünschen.",
  },
  {
    step: "03",
    title: "Entwicklung",
    description:
      "Umsetzung mit modernsten Technologien und agiler Entwicklungsmethodik mit regelmäßigen Updates.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description:
      "Umfassende Tests, Qualitätssicherung und erfolgreicher Launch Ihres Projekts.",
  },
  {
    step: "05",
    title: "Support & Wartung",
    description:
      "Kontinuierliche Betreuung, Updates und technischer Support für langfristigen Erfolg.",
  },
];

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

export default function ServicesPage() {
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-700/10 to-blue-400/10 border border-blue-500/20 rounded-full"
            >
              <span className="text-blue-400 font-medium">
                🎯 Maßgeschneiderte Lösungen
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Unsere <span className="gradient-text">Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Von der Konzeption bis zum Launch - wir bieten Ihnen umfassende
              digitale Lösungen aus einer Hand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-400 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-blue-400 font-semibold text-lg">
                    {service.price}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Leistungen:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Technologien:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zinc-900 text-gray-300 text-xs rounded-full border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow flex items-center justify-center gap-2"
                  >
                    Anfrage stellen
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Unser <span className="gradient-text">Prozess</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Von der ersten Idee bis zum erfolgreichen Launch - so arbeiten wir
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                )}

                <div className="relative">
                  <div className="text-6xl font-bold gradient-text mb-4 opacity-20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Unsere <span className="gradient-text">Technologien</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Wir arbeiten mit den modernsten und bewährtesten Technologien
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: FaCode, name: "Frontend", tech: "Next.js, React, Vue.js" },
              { icon: FaDatabase, name: "Backend", tech: "Node.js, Laravel, PHP" },
              { icon: FaCloud, name: "Hosting", tech: "Vercel, AWS, Azure" },
              { icon: FaChartLine, name: "Analytics", tech: "GA4, Mixpanel" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
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
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Lassen Sie uns gemeinsam die perfekte Lösung für Ihre
              Anforderungen entwickeln.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-bold text-xl hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-3"
              >
                Kostenlose Beratung anfragen
                <FaArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
