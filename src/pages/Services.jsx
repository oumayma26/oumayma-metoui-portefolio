import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LayoutDashboard, Server, Repeat, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Services() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      icon: <LayoutDashboard size={32} className="text-blue-500" />,
      title: t('Développement Frontend'),
      description: t('Interfaces modernes, performantes et responsives avec'),
    },
    {
      icon: <Server size={32} className="text-blue-500" />,
      title: t('Développement Backend'),
      description: t('APIs REST sécurisées avec Node.js (Express, NestJS), gestion PostgreSQL et MongoDB'),
    },
    {
      icon: <Rocket size={32} className="text-blue-500" />,
      title: t('Intégration & Déploiement'),
      description: t('Mise en production via PM2, Apache, Docker. Suivi, logs, et performance assurés'),
    },
    {
      icon: <LayoutDashboard size={32} className="text-blue-500" />,
      title: t('Tableaux de bord interactifs'),
      description: t('Visualisation de KPIs en temps réel pour la prise de décision avec Chart.js ou D3.js'),
    },
    {
      icon: <Code2 size={32} className="text-blue-500" />,
      title: t('Solutions SEO sur mesure'),
      description: t('Optimisation SEO adaptée à vos besoins pour améliorer la visibilité et la performance de votre site'),
    },
    {
      icon: <Repeat size={32} className="text-blue-500" />,
      title: t('Maintenance & évolution'),
      description: t('Refactorisation, optimisation et évolution de vos solutions logicielles existantes'),
    },
  ];

  return (
    <>
      {/* Balises SEO multilingues */}
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('Services')} – Oumayma Metoui</title>
        <meta
          name="description"
          content={t(
            'Découvrez les services de développement frontend, backend, intégration, SEO et maintenance offerts par Oumayma Metoui.'
          )}
        />
        <meta
          name="keywords"
          content={t(
            'développement web, developper, frontend, backend, SEO, React, Node.js, services web, Oumayma Metoui'
          )}
        />
        <meta name="author" content="Oumayma Metoui" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oumayma-portfolio-five.vercel.app/#services" />
      </Helmet>

      {/* Contenu visuel */}
      <section id="services" className="container mx-auto px-4 py-10" aria-labelledby="services-title">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="services-title"
            className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white"
          >
            {t('Services')}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
