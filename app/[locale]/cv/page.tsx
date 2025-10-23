"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import {
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiLinux,
  SiNodedotjs,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const iconMap: any = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  Symfony: SiSymfony,
  "Node.js": SiNodedotjs,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: SiAmazon,
  Linux: SiLinux,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
};

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

export default function CVPage() {
  const t = useTranslations("cv");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "de";

  // Get experience jobs from translations
  const experienceJobs = t.raw("experience.jobs");

  // Get skills categories from translations
  const skillsCategories = t.raw("skills.categories");

  // Get education items from translations
  const educationItems = t.raw("education.items");

  // Get certifications from translations
  const certifications = t.raw("certifications.items");

  // Get languages from translations
  const languages = t.raw("languages.items");

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <div className="sticky top-32 p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl font-bold text-white">
                  CS
                </div>

                <h1 className="text-3xl font-bold mb-2 text-center">
                  {t("profile.name")}
                </h1>
                <p className="text-blue-400 text-center mb-6">
                  {t("profile.title")}
                </p>
                <p className="text-gray-400 text-center text-sm mb-6">
                  {t("profile.subtitle")}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaMapMarkerAlt className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{t("profile.location")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaEnvelope className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <a
                      href="mailto:contact@digitalssolutions.com"
                      className="hover:text-white transition-colors"
                    >
                      contact@digitalssolutions.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaPhone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <a
                      href="tel:+491796627473"
                      className="hover:text-white transition-colors"
                    >
                      +49 179 6627473
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaLinkedinIn className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <a
                      href="https://www.linkedin.com/in/claude-simo-012580177"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {t("profile.linkedIn")}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow flex items-center justify-center gap-2"
                >
                  <FaDownload className="w-4 h-4" />
                  {t("profile.downloadCV")}
                </motion.button>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 space-y-12"
            >
              {/* About */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
                <p className="text-gray-400 leading-relaxed">
                  {t("about.description")}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("experience.title")}</h2>
                <div className="space-y-8">
                  {experienceJobs.map((job: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-blue-400">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 text-sm">{job.period}</p>
                          <p className="text-gray-500 text-sm">{job.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.tasks.map((item: string, idx: number) => (
                          <li
                            key={idx}
                            className="text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-blue-500 mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("skills.title")}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {skillsCategories.map((skillGroup: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {skillGroup.name}
                      </h3>
                      <div className="space-y-4">
                        {skillGroup.skills.map((skill: any, idx: number) => {
                          const IconComponent = iconMap[skill.name] || FaServer;
                          return (
                            <div key={idx}>
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <IconComponent className="w-5 h-5 text-blue-400" />
                                  <span className="text-gray-300">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="text-gray-400 text-sm">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full bg-zinc-800 rounded-full h-2">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="bg-gradient-to-r from-blue-700 to-blue-400 h-2 rounded-full"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("education.title")}</h2>
                {educationItems.map((edu: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
                  >
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("certifications.title")}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("languages.title")}</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {languages.map((lang: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center"
                    >
                      <h3 className="text-lg font-semibold mb-1">
                        {lang.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{lang.level}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              {t("cta.description")}
            </p>
            <Link href={`/${currentLocale}/contact`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-bold text-xl hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-3"
              >
                {t("cta.button")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
