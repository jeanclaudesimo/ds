"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLightbulb,
  FaHeart,
  FaRocket,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Wir bleiben stets am Puls der Zeit und nutzen modernste Technologien für zukunftssichere Lösungen.",
  },
  {
    icon: FaHeart,
    title: "Leidenschaft",
    description:
      "Mit Begeisterung und Hingabe entwickeln wir Projekte, die unsere Kunden lieben werden.",
  },
  {
    icon: FaRocket,
    title: "Exzellenz",
    description:
      "Höchste Qualitätsstandards in Code, Design und Kundenservice sind unser Anspruch.",
  },
  {
    icon: FaUsers,
    title: "Partnerschaft",
    description:
      "Wir sehen uns als langfristiger Partner für Ihren digitalen Erfolg - nicht nur als Dienstleister.",
  },
];

const team = [
  {
    name: "Max Mustermann",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description: "10+ Jahre Erfahrung in Webentwicklung und digitaler Transformation.",
  },
  {
    name: "Anna Schmidt",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    description: "Spezialisiert auf UX/UI Design und moderne Designsysteme.",
  },
  {
    name: "Tom Weber",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    description: "Full-Stack Experte mit Fokus auf Performance und Skalierbarkeit.",
  },
  {
    name: "Lisa Müller",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    description: "Koordiniert Projekte und sorgt für pünktliche Lieferung.",
  },
];

const milestones = [
  { year: "2019", title: "Gründung", description: "Start von DigitalSolutions in Gummersbach" },
  { year: "2020", title: "10 Kunden", description: "Erste erfolgreiche Projekte im Portfolio" },
  { year: "2021", title: "Team-Wachstum", description: "Erweiterung auf 5 Teammitglieder" },
  { year: "2022", title: "25+ Projekte", description: "Erfolgreich abgeschlossene Projekte" },
  { year: "2023", title: "Expansion", description: "Neue Partnerschaften und Technologien" },
  { year: "2024", title: "50+ Projekte", description: "Wachstum und Qualität im Fokus" },
];

const stats = [
  { value: "5+", label: "Jahre Erfahrung" },
  { value: "50+", label: "Projekte" },
  { value: "30+", label: "Kunden" },
  { value: "100%", label: "Zufriedenheit" },
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

export default function AboutPage() {
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
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
            >
              <span className="text-blue-400 font-medium">
                🌟 Über uns
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Wir sind{" "}
              <span className="gradient-text">DigitalSolutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Ein Team aus leidenschaftlichen Entwicklern, Designern und
              Strategen, die digitale Träume wahr werden lassen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950">
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
                className="text-center p-6 bg-black rounded-xl border border-zinc-800"
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

      {/* Story Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unsere <span className="gradient-text">Geschichte</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  DigitalSolutions wurde 2019 mit der Vision gegründet,
                  Unternehmen durch innovative digitale Lösungen zum Erfolg zu
                  verhelfen. Was als kleines Team in Gummersbach begann, hat
                  sich zu einer etablierten Agentur entwickelt.
                </p>
                <p>
                  Mit über 50 erfolgreich abgeschlossenen Projekten und 30
                  zufriedenen Kunden haben wir bewiesen, dass Qualität und
                  Kundenzufriedenheit unsere höchste Priorität sind.
                </p>
                <p>
                  Heute arbeiten wir mit modernsten Technologien und einem
                  erfahrenen Team, um digitale Visionen in die Realität
                  umzusetzen. Unser Fokus liegt auf langfristigen
                  Partnerschaften und nachhaltigen Lösungen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Unsere <span className="gradient-text">Werte</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Diese Prinzipien leiten uns bei jedem Projekt
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Unsere <span className="gradient-text">Meilensteine</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-400 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Unser <span className="gradient-text">Team</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Lernen Sie die Köpfe hinter DigitalSolutions kennen
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-black rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all"
              >
                <div className="aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
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
              Werden Sie Teil unserer Erfolgsgeschichte
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-bold text-xl hover:shadow-lg hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-3"
              >
                Jetzt kontaktieren
                <FaArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
