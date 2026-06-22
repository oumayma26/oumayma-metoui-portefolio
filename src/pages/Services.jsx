import {
    LayoutDashboard,
    Repeat,
    Rocket,
    Search,
    Server,
    Sparkles
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t, i18n } = useTranslation();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "frontend",
      icon: <LayoutDashboard size={28} />,
      title: t("Développement Frontend"),
      description: t("Interfaces modernes, performantes et responsives avec React, Vue et Angular"),
      details: ["React / Next.js", "Vue.js / Nuxt", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "backend",
      icon: <Server size={28} />,
      title: t("Développement Backend"),
      description: t("APIs REST sécurisées avec Node.js, gestion PostgreSQL et MongoDB"),
      details: ["Node.js / Express", "NestJS", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "devops",
      icon: <Rocket size={28} />,
      title: t("Intégration & Déploiement"),
      description: t("Mise en production via Docker, CI/CD et monitoring"),
      details: ["Docker", "GitHub Actions", "PM2", "Nginx", "Monitoring"],
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
    },
    {
      id: "dashboard",
      icon: <Sparkles size={28} />,
      title: t("Tableaux de bord interactifs"),
      description: t("Visualisation de KPIs en temps réel avec Chart.js ou D3.js"),
      details: ["Chart.js", "D3.js", "Recharts", "WebSockets", "Real-time"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "seo",
      icon: <Search size={28} />,
      title: t("Solutions SEO sur mesure"),
      description: t("Optimisation SEO pour améliorer la visibilité et la performance"),
      details: ["Audit technique", "Core Web Vitals", "Schema.org", "Performance", "Analytics"],
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      textColor: "text-rose-600 dark:text-rose-400",
    },
    {
      id: "maintenance",
      icon: <Repeat size={28} />,
      title: t("Maintenance & évolution"),
      description: t("Refactorisation, optimisation et évolution de solutions existantes"),
      details: ["Code review", "Refactoring", "Tests", "Documentation", "Migrations"],
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      textColor: "text-indigo-600 dark:text-indigo-400",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("Services")} – Oumayma Metoui</title>
        <meta
          name="description"
          content={t(
            "Découvrez les services de développement frontend, backend, intégration, SEO et maintenance offerts par Oumayma Metoui."
          )}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oumayma-portfolio-five.vercel.app/#services" />
      </Helmet>

      <section
        id="services"
        className="container mx-auto px-4 py-20"
        aria-labelledby="services-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* En-tête */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4"
            >
              {t("Ce que je propose")}
            </motion.span>
            <h2
              id="services-title"
              className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
            >
              {t("Services")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              {t("Des solutions techniques adaptées à vos besoins, de la conception au déploiement")}
            </p>
          </div>

          {/* Grille de services */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`
                  relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer
                  ${activeService === service.id 
                    ? "border-transparent shadow-2xl scale-[1.02]" 
                    : "border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
                  }
                  bg-white dark:bg-gray-800 overflow-hidden
                `}
              >
                {/* Background gradient au hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 ${
                    activeService === service.id ? "opacity-5" : ""
                  }`}
                />

                <div className="relative z-10">
                  {/* Icône avec fond coloré */}
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 ${service.textColor}`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tags de compétences */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>

                  {/* Lien "En savoir plus" animé */}
                  {/* <motion.div
                    className={`flex items-center gap-1 text-sm font-medium ${service.textColor}`}
                    animate={{
                      x: activeService === service.id ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t("En savoir plus")}
                    <ChevronRight size={16} />
                  </motion.div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}