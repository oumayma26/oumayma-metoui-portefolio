import React from 'react'
import { motion } from 'framer-motion';
import { Code2, LayoutDashboard, Server, Repeat, Rocket } from 'lucide-react';

export default function Services() {

  const services = [
  {
    icon: <LayoutDashboard size={32} className="text-blue-500" />,
    title: 'Développement Frontend',
    description:
      'Interfaces modernes, performantes et responsives avec Angular, React, TypeScript, Tailwind CSS.',
  },
  {
    icon: <Server size={32} className="text-blue-500" />,
    title: 'Développement Backend',
    description:
      'APIs REST sécurisées avec Node.js (Express, NestJS), gestion PostgreSQL et MongoDB.',
  },
  {
    icon: <Rocket size={32} className="text-blue-500" />,
    title: 'Intégration & Déploiement',
    description:
      'Mise en production via PM2, Apache, Docker. Suivi, logs, et performance assurés.',
  },
  {
    icon: <LayoutDashboard size={32} className="text-blue-500" />,
    title: 'Tableaux de bord interactifs',
    description:
      'Visualisation de KPIs en temps réel pour la prise de décision avec Chart.js ou D3.js.',
  },
  {
    icon: <Code2 size={32} className="text-blue-500" />,
    title: 'Solutions SEO sur mesure',
    description:
      'Optimisation SEO adaptée à vos besoins pour améliorer la visibilité et la performance de votre site.',
  },
  {
    icon: <Repeat size={32} className="text-blue-500" />,
    title: 'Maintenance & évolution',
    description:
      'Refactorisation, optimisation et évolution de vos solutions logicielles existantes.',
  },
];
  return (
    <section id="services" className='container mx-auto'>

       <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white">
          Mes Services
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
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
