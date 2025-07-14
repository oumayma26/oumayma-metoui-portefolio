import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import boxGeneratorImg from '../assets/projects/box-generator.png';
import { FaDesktop, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const cardHover = {
  scale: 1.05,
  boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
  transition: { duration: 0.3 },
};

export default function Projects() {
  const { t, i18n } = useTranslation();

  // Canonical URL unique (tu n'as pas de changement d'URL selon la langue)
  const canonicalUrl = 'https://oumayma-portfolio-five.vercel.app/#projects';

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('Mes projets')} – Oumayma Metoui</title>
        <meta
          name="description"
          content={t(
            'Découvrez une sélection de projets web développés avec soin : frontend, backend, démos interactives et plus.'
          )}
        />
        <meta
          name="keywords"
          content="projets web, développement, developper, React, Angular, GitHub, frontend, backend, Oumayma Metoui"
        />
        <meta name="author" content="Oumayma Metoui" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="fr" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      </Helmet>

      {/* Section des projets */}
      <section className="container mx-auto px-4 py-10" aria-labelledby="projects-title">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2
            id="projects-title"
            className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white"
          >
            {t('Mes projets')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.article
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer"
              whileHover={cardHover}
              role="group"
              tabIndex={0}
              aria-label={t('Projet Box Generator')}
            >
              <img
                src={boxGeneratorImg}
                alt={t("Capture d'écran du projet Box Generator")}
                className="w-full h-auto rounded mb-4"
                loading="lazy"
              />
              <div className="flex justify-between items-center text-blue-600 font-medium">
                <a
                  href="https://oumayma26.github.io/box-generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  aria-label={t('Voir la démo du projet Box Generator')}
                >
                  <FaDesktop aria-hidden="true" /> {t('Démo')}
                </a>
                <a
                  href="https://github.com/oumayma26/box-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  aria-label={t('Voir le code source GitHub du projet Box Generator')}
                >
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </section>
    </>
  );
}
