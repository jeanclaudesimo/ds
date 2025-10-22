"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaCode,
  FaServer,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaCloud,
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
  SiGit,
  SiLinux,
} from "react-icons/si";

const experience = [
  {
    title: "Senior Full-Stack PHP Developer & DevOps",
    company: "DigitalSolutions",
    period: "2019 - Heute",
    location: "Gummersbach, Deutschland",
    description: [
      "Entwicklung und Wartung von Full-Stack Web-Applikationen mit PHP/Laravel/Symfony",
      "DevOps-Automatisierung: CI/CD-Pipelines, Docker, Kubernetes",
      "Aufbau und Verwaltung von Cloud-Infrastrukturen (AWS, Azure)",
      "Performance-Optimierung und Skalierung von Anwendungen",
      "Code Reviews und Mentoring von Junior-Entwicklern",
    ],
  },
  {
    title: "PHP Developer",
    company: "Freelance",
    period: "2017 - 2019",
    location: "Remote",
    description: [
      "Entwicklung von E-Commerce-Plattformen und CMS-Lösungen",
      "RESTful API-Entwicklung und Integration von Drittanbieter-Services",
      "Datenbank-Design und -Optimierung (MySQL, PostgreSQL)",
      "Frontend-Entwicklung mit JavaScript, Vue.js und React",
    ],
  },
];

const skills = [
  {
    category: "Backend Development",
    items: [
      { name: "PHP", icon: SiPhp, level: 95 },
      { name: "Laravel", icon: SiLaravel, level: 95 },
      { name: "Symfony", icon: SiSymfony, level: 95 },
      { name: "Node.js", icon: FaServer, level: 80 },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "React", icon: SiReact, level: 85 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: SiDocker, level: 90 },
      { name: "Kubernetes", icon: SiKubernetes, level: 80 },
      { name: "AWS", icon: SiAmazon, level: 85 },
      { name: "Linux", icon: SiLinux, level: 90 },
    ],
  },
  {
    category: "Datenbanken",
    items: [
      { name: "MySQL", icon: SiMysql, level: 90 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
    ],
  },
];

const education = [
  {
    degree: "Informatik",
    institution: "Universität",
    period: "2014 - 2018",
    description: "Schwerpunkt: Web-Entwicklung und Software Engineering",
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Kubernetes Administrator (CKA)",
  "Laravel Certified Developer",
  "Docker Certified Associate",
];

const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Englisch", level: "Fließend" },
  { name: "Französisch", level: "Grundkenntnisse" },
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

export default function CVPage() {
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
                  Claude Simo
                </h1>
                <p className="text-blue-400 text-center mb-6">
                  Senior Full-Stack PHP Developer
                </p>
                <p className="text-gray-400 text-center text-sm mb-6">
                  Laravel | Symfony | DevOps
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaMapMarkerAlt className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>Gummersbach, Deutschland</span>
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
                      href="tel:+4917966274733"
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
                      LinkedIn Profil
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow flex items-center justify-center gap-2"
                >
                  <FaDownload className="w-4 h-4" />
                  CV als PDF
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
                <h2 className="text-3xl font-bold mb-6">Über mich</h2>
                <p className="text-gray-400 leading-relaxed">
                  Senior Full-Stack PHP Developer mit 5+ Jahren Erfahrung in der
                  Entwicklung skalierbarer Web-Applikationen. Spezialisiert auf
                  Laravel, Symfony, DevOps-Praktiken und Cloud-Infrastrukturen. Meine
                  Leidenschaft liegt darin, robuste, performante Lösungen zu
                  entwickeln, die echte Geschäftsprobleme lösen. Erfahrung in der
                  gesamten Entwicklungspipeline: von der Konzeption über die
                  Implementierung bis zum Deployment und Monitoring.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Berufserfahrung</h2>
                <div className="space-y-8">
                  {experience.map((job, index) => (
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
                        {job.description.map((item, idx) => (
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
                <h2 className="text-3xl font-bold mb-6">Technische Skills</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {skillGroup.category}
                      </h3>
                      <div className="space-y-4">
                        {skillGroup.items.map((skill, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <skill.icon className="w-5 h-5 text-blue-400" />
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
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Ausbildung</h2>
                {education.map((edu, index) => (
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
                <h2 className="text-3xl font-bold mb-6">Zertifizierungen</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
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
                <h2 className="text-3xl font-bold mb-6">Sprachen</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
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
              Interessiert an einer Zusammenarbeit?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-bold text-xl hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-3"
              >
                Kontakt aufnehmen
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
