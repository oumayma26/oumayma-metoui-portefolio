import { AnimatePresence, motion } from "framer-motion";
import { Eye, Filter } from "lucide-react";
import { FaDesktop, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import artGalleryImg from "../assets/projects/art-galery.png";
import boxGeneratorImg from "../assets/projects/box-generator.png";

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.3 },
};

const projects = [
  {
    id: "art-gallery",
    titleKey: "My Art Gallery",
    descriptionKey: "Galerie d'art personnelle présentant mes peintures originales avec navigation fluide, filtrage par technique et visionneuse plein écran immersive.",
    demoUrl: "https://art-by-oumayma-metoui.vercel.app/",
    githubUrl: "https://github.com/oumayma26/art-gallery",
    image: artGalleryImg,
    tags: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    status: "completed",
    featured: true,
  },
  {
    id: "box-generator",
    titleKey: "Projet Box Generator",
    descriptionKey: "Une application React permettant de créer dynamiquement des boîtes personnalisées en fonction des couleurs et dimensions choisies",
    demoUrl: "https://oumayma26.github.io/box-generator/",
    githubUrl: "https://github.com/oumayma26/box-generator",
    image: boxGeneratorImg,
    tags: ["React", "Tailwind CSS", "Hooks"],
    category: "frontend",
    status: "completed",
    featured: false,
  },
];

const allTags = [...new Set(projects.flatMap((p) => p.tags))];

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageError, setImageError] = useState({});

  const canonicalUrl = "https://oumayma-portfolio-five.vercel.app/#projects";

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const handleImageError = (projectId) => {
    setImageError((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("Mes projets")} – Oumayma Metoui</title>
        <meta
          name="description"
          content={t(
            "Découvrez une sélection de projets web développés avec soin : frontend, backend, démos interactives et plus."
          )}
        />
        <meta
          name="keywords"
          content="projets web, développement, developper, React, Angular, GitHub, frontend, backend, Oumayma Metoui"
        />
        <meta name="author" content="Oumayma Metoui" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section
        className="container mx-auto px-4 py-20"
        aria-labelledby="projects-title"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* En-tête */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
              {t("Portfolio")}
            </span>
            <h2
              id="projects-title"
              className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
            >
              {t("Mes projets")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("Une sélection de projets récents, construits avec passion et attention aux détails")}
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {t("Tous")}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tag
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grille de projets */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700"
                  whileHover={cardHover}
                >
                  {/* Image avec overlay au hover */}
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700 aspect-video">
                    {!imageError[project.id] ? (
                      <img
                        src={project.image}
                        alt={t(`Capture d'écran du projet ${project.titleKey}`)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={() => handleImageError(project.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                        <Eye size={48} className="text-gray-400" />
                      </div>
                    )}

                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-500 hover:text-white transition-colors"
                          aria-label={t("Voir la démo")}
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                      {/* <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                        aria-label={t("Voir le code")}
                      >
                        <FaGithub size={18} />
                      </a> */}
                    </div>

                    {/* Badge "Featured" */}
                    {/* {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                        ⭐ {t("Mis en avant")}
                      </div>
                    )} */}
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.titleKey}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                      {project.descriptionKey}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer avec liens */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <FaDesktop /> {t("Démo")}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-400 flex items-center gap-2">
                          <FaDesktop /> {t("Pas de démo")}
                        </span>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <FaGithub /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Message si aucun projet ne correspond */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                {t("Aucun projet ne correspond à ce filtre")}
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 text-blue-600 hover:underline"
              >
                {t("Voir tous les projets")}
              </button>
            </div>
          )}
        </motion.div>
      </section>
    </>
  );
}