"use client";

import { motion } from "framer-motion";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

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

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: t('categories.all') },
    { key: "website", label: t('categories.website') },
    { key: "ecommerce", label: t('categories.ecommerce') },
    { key: "webapp", label: t('categories.webapp') },
    { key: "landing", label: t('categories.landing') },
  ];

  const projects = [
    {
      id: 1,
      key: "ecommerce_fashion",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Next.js", "Shopify", "Stripe"],
      metrics: { conversion: "+45%", speed: "98/100", users: "50k+" },
      link: "#",
    },
    {
      id: 2,
      key: "saas_dashboard",
      category: "webapp",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL"],
      metrics: { users: "10k+", uptime: "99.9%", features: "200+" },
      link: "#",
    },
    {
      id: 3,
      key: "corporate_website",
      category: "website",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      tags: ["Next.js", "Tailwind", "Strapi"],
      metrics: { traffic: "+120%", bounce: "-35%", seo: "95/100" },
      link: "#",
    },
    {
      id: 4,
      key: "landing_conversion",
      category: "landing",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
      tags: ["Next.js", "Framer Motion", "GA4"],
      metrics: { conversion: "+85%", leads: "5k+", ctr: "12%" },
      link: "#",
    },
    {
      id: 5,
      key: "restaurant_booking",
      category: "webapp",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["Laravel", "Vue.js", "MySQL"],
      metrics: { bookings: "15k+", restaurants: "50+", rating: "4.8/5" },
      link: "#",
    },
    {
      id: 6,
      key: "tech_portfolio",
      category: "website",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      tags: ["Next.js", "Three.js", "Tailwind"],
      metrics: { awards: "3", speed: "100/100", bounce: "-50%" },
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

      {/* Filter Section */}
      <section className="py-12 bg-zinc-950 sticky top-20 z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === category.key
                    ? "bg-gradient-to-r from-blue-700 to-blue-400 text-white shadow-lg shadow-blue-500/50"
                    : "bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-black rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-full">
                      {t(`projects.${project.key}.category`)}
                    </span>
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 text-white" />
                  </a>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zinc-900 text-gray-400 text-xs rounded border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-blue-400 font-semibold text-sm">
                          {value}
                        </div>
                        <div className="text-gray-500 text-xs capitalize">
                          {t(`metrics.${key}`)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show more projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                {t('empty')}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {t('stats.title')} <span className="gradient-text">{t('stats.titleHighlight')}</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {['projects', 'clients', 'years', 'quality'].map((stat) => (
              <motion.div
                key={stat}
                variants={itemVariants}
                className="text-center p-6 bg-zinc-900 rounded-xl border border-zinc-800"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {t(`stats.${stat}.value`)}
                </div>
                <div className="text-white font-semibold mb-1">
                  {t(`stats.${stat}.label`)}
                </div>
                <div className="text-gray-400 text-sm">
                  {t(`stats.${stat}.description`)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
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
