"use client";

import { motion } from "framer-motion";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('services');

  const services = [
    {
      id: "websites",
      icon: FaLaptopCode,
      features: ["responsive", "cms", "seo", "performance", "gdpr", "support"],
      technologies: ["Next.js", "React", "WordPress", "Laravel"],
    },
    {
      id: "landing-pages",
      icon: FaRocket,
      features: ["conversion", "testing", "analytics", "leads", "cta", "speed"],
      technologies: ["Next.js", "React", "Tailwind CSS", "Google Analytics"],
    },
    {
      id: "web-apps",
      icon: FaCode,
      features: ["custom", "api", "database", "users", "scalable", "maintenance"],
      technologies: ["Next.js", "Node.js", "Laravel", "PostgreSQL", "MongoDB"],
    },
    {
      id: "ecommerce",
      icon: FaShoppingCart,
      features: ["products", "cart", "payment", "shipping", "orders", "multilang"],
      technologies: ["Shopify", "WooCommerce", "Next.js", "Stripe"],
    },
    {
      id: "mobile",
      icon: FaMobileAlt,
      features: ["pwa", "offline", "push", "native", "appstore", "crossplatform"],
      technologies: ["React Native", "Next.js", "PWA", "Firebase"],
    },
    {
      id: "seo",
      icon: FaSearch,
      features: ["audit", "performance", "vitals", "schema", "content", "reporting"],
      technologies: ["Google Search Console", "Lighthouse", "GTmetrix"],
    },
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-700/10 to-blue-400/10 border border-blue-500/20 rounded-full"
            >
              <span className="text-blue-400 font-medium">
                {t('hero.badge')}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('hero.title')} <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              {t('hero.subtitle')}
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
            {services.map((service) => {
              const serviceKey = service.id.replace('-pages', '').replace('-apps', 'apps');
              return (
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
                      {t(`items.${serviceKey}.price`)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {t(`items.${serviceKey}.title`)}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {t(`items.${serviceKey}.description`)}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      {t('common.features')}
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{t(`items.${serviceKey}.features.${feature}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      {t('common.technologies')}
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
                      {t('common.requestQuote')}
                      <FaArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
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
              {t('process.title')} <span className="gradient-text">{t('process.titleHighlight')}</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              {t('process.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
          >
            {['consultation', 'concept', 'development', 'testing', 'support'].map((step, index) => (
              <motion.div
                key={step}
                variants={itemVariants}
                className="relative"
              >
                {index < 4 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                )}

                <div className="relative">
                  <div className="text-6xl font-bold gradient-text mb-4 opacity-60">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t(`process.steps.${step}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t(`process.steps.${step}.description`)}
                  </p>
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
              {t('technologies.title')} <span className="gradient-text">{t('technologies.titleHighlight')}</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              {t('technologies.subtitle')}
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
              { icon: FaCode, key: "frontend" },
              { icon: FaDatabase, key: "backend" },
              { icon: FaCloud, key: "hosting" },
              { icon: FaChartLine, key: "analytics" },
            ].map((item) => (
              <motion.div
                key={item.key}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`technologies.categories.${item.key}.name`)}
                </h3>
                <p className="text-sm text-gray-400">
                  {t(`technologies.categories.${item.key}.tech`)}
                </p>
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
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              {t('cta.description')}
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-bold text-xl hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-3"
              >
                {t('cta.button')}
                <FaArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
