"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
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

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: t('info.email.title'),
      value: t('info.email.value'),
      link: "mailto:contact@digitalssolutions.com",
    },
    {
      icon: FaPhone,
      title: t('info.phone.title'),
      value: t('info.phone.value'),
      link: "tel:+491796627473",
    },
    {
      icon: FaMapMarkerAlt,
      title: t('info.address.title'),
      value: t('info.address.value'),
      link: "#",
    },
    {
      icon: FaClock,
      title: t('info.hours.title'),
      value: t('info.hours.value'),
      link: "#",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

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

      {/* Contact Info Cards */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                  {info.title}
                </h3>
                <p className="text-white font-medium">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('form.title')}{" "}
                <span className="gradient-text">{t('form.titleHighlight')}</span>
              </h2>
              <p className="text-gray-400 mb-8">
                {t('form.subtitle')}
              </p>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                >
                  {t('form.successMessage')}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('form.fields.name.label')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder={t('form.fields.name.placeholder')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('form.fields.email.label')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder={t('form.fields.email.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('form.fields.company.label')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder={t('form.fields.company.placeholder')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('form.fields.phone.label')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder={t('form.fields.phone.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('form.fields.service.label')} *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">{t('form.fields.service.placeholder')}</option>
                      <option value="website">{t('form.fields.service.options.website')}</option>
                      <option value="landing">{t('form.fields.service.options.landing')}</option>
                      <option value="webapp">{t('form.fields.service.options.webapp')}</option>
                      <option value="ecommerce">{t('form.fields.service.options.ecommerce')}</option>
                      <option value="seo">{t('form.fields.service.options.seo')}</option>
                      <option value="other">{t('form.fields.service.options.other')}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('form.fields.budget.label')}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">{t('form.fields.budget.placeholder')}</option>
                      <option value="1-3k">{t('form.fields.budget.options.1-3k')}</option>
                      <option value="3-5k">{t('form.fields.budget.options.3-5k')}</option>
                      <option value="5-10k">{t('form.fields.budget.options.5-10k')}</option>
                      <option value="10k+">{t('form.fields.budget.options.10k+')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t('form.fields.message.label')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder={t('form.fields.message.placeholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('form.submit.submitting')}
                    </>
                  ) : (
                    <>
                      {t('form.submit.idle')}
                      <FaPaperPlane className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-12"
            >
              <div className="sticky top-32 space-y-8">
                <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-4">
                    {t('consultation.title')}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {t('consultation.description')}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          {t('consultation.benefits.personal.title')}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {t('consultation.benefits.personal.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          {t('consultation.benefits.transparent.title')}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {t('consultation.benefits.transparent.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{t('consultation.benefits.fast.title')}</h4>
                        <p className="text-sm text-gray-400">
                          {t('consultation.benefits.fast.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
                  <h3 className="text-2xl font-bold mb-4">{t('callBox.title')}</h3>
                  <p className="text-gray-400 mb-6">
                    {t('callBox.description')}
                  </p>
                  <a
                    href="tel:+491796627473"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <FaPhone className="w-6 h-6" />
                    +49 179 6627473
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('faq.title')} <span className="gradient-text">{t('faq.titleHighlight')}</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            {['duration', 'pricing', 'support', 'international'].map((faqKey, index) => (
              <motion.div
                key={faqKey}
                variants={itemVariants}
                className="p-6 bg-black rounded-xl border border-zinc-800"
              >
                <h3 className="text-lg font-semibold mb-3">{t(`faq.items.${faqKey}.question`)}</h3>
                <p className="text-gray-400">{t(`faq.items.${faqKey}.answer`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
