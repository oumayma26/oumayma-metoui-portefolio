import { Calendar, Download, ExternalLink, MapPin } from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import img from "../assets/profile/img.jpg";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cv = "https://oumayma26.github.io/CV-oumayma/cv-oumaymaMETOUI.pdf";
  const yearsExp = 7; 

  // Effet parallax subtil sur la photo
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 25,
      y: (e.clientY - rect.top - rect.height / 2) / 25,
    });
  };

  const trackCVDownload = () => {
    if (window.gtag) {
      window.gtag("event", "click_cv", {
        event_category: "engagement",
        event_label: "cv_download",
        value: 1,
      });
    }
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("Accueil - Oumayma Metoui")}</title>
        <meta
          name="description"
          content={t(
            "Senior Full Stack Engineer ayant construit des systèmes industriels temps réel pendant 7 ans"
          )}
        />
      </Helmet>

      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 py-10 bg-white dark:bg-gray-900 relative overflow-hidden"
      >
        {/* Background décoratif subtil */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        </div>

        {/* Texte et bouton */}
        <motion.div
          className="text-center md:text-left max-w-xl space-y-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              {t("Disponible pour de nouveaux projets")}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            {t("Bonjour, je suis")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Oumayma Metoui
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {t(
              "Senior Full Stack Engineer ayant construit des systèmes industriels temps réel pendant 7 ans"
            )}
          </motion.p>

          {/* Tags de compétences visuelles */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {["Angular","React", "Node.js", "TypeScript", "PostgreSQL", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
          >
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackCVDownload}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
              aria-label={t("Télécharger le CV")}
            >
              {isDownloading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t("Chargement...")}
                </>
              ) : (
                <>
                  <Download size={18} />
                  {t("Télécharger le CV")}
                </>
              )}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <ExternalLink size={18} />
              {t("Me contacter")}
            </a>
          </motion.div>

          {/* Métadonnées rapides */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400 pt-4"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              Tunis, Tunisie
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {yearsExp}+ {t("ans d'expérience")}
            </span>
          </motion.div>
        </motion.div>

        {/* Image + Badge */}
        <motion.div
          className="flex flex-col items-center relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          <div className="relative w-56 md:w-72">
            {/* Halo animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-xl opacity-20 animate-pulse" />

            {/* Photo avec parallax */}
            <motion.div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
              animate={{
                rotateX: -mousePosition.y,
                rotateY: mousePosition.x,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ perspective: 1000 }}
            >
              <img
                src={img}
                alt={t("Portrait de Oumayma Metoui")}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Badge desktop */}
            <motion.div
              className="hidden md:flex absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-2xl shadow-xl items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                {yearsExp}+
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">{t("ans d'expérience")}</div>
                <div className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  {t("Disponible")}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Badge mobile */}
          <motion.div
            className="mt-6 md:hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              {yearsExp}+
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 dark:text-gray-400">{t("ans d'expérience")}</div>
              <div className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                {t("Disponible")}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}