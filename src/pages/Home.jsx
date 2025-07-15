import React from "react";
import img from "../assets/profile/img.jpg";
// import cv from "../assets/pdf/CV_Oumayma_Metoui_Developpeur_FullStack.pdf";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Home() {
  const { t, i18n } = useTranslation();
  const cv = "https://oumayma26.github.io/CV-oumayma/cv-oumaymaMETOUI.pdf"
  const trackCVDownload = () => {
    if (window.gtag) {
      window.gtag("event", "click_cv", {
        event_category: "Button",
        event_label: t("Télécharger le CV"),  // étiquette traduite
      });
    }
  };

  return (
    <>
      <Helmet>
        {/* Ajout de la langue dans la balise html pour SEO & accessibilité */}
        <html lang={i18n.language} />
        <title>{t("Accueil - Oumayma Metoui")}</title>
        <meta
          name="description"
          content={t(
            "Développeuse Full Stack passionnée par la création d’expériences web modernes."
          )}
        />
      </Helmet>

      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-10 bg-white dark:bg-gray-900"
      >
        {/* Texte et bouton */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-night-blue dark:text-white">
            {t("Bonjour, je suis")} <br />
            <span className="text-sky-500">Oumayma Metoui</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            {t(
              "Développeuse Full Stack JavaScript passionnée par la création d’expériences web modernes"
            )}
          </p>

          <a
            href={cv}
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackCVDownload}
            className="inline-block bg-night-blue text-white px-6 py-3 rounded hover:bg-sky-600 transition"
            aria-label={t("Télécharger le CV")}
          >
            {t("Télécharger le CV")}
          </a>
        </div>

        {/* Image + Badge expérience */}
        <div className="flex flex-col items-center">
          {/* Container photo + badge (desktop & tablette) */}
          <div className="relative w-48 md:w-64">
            {/* Photo de profil */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mx-auto">
              <img
                src={img}
                alt={t("Portrait de Oumayma Metoui")}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge version desktop & tablette */}
            <div className="hidden md:block absolute -bottom-4 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="text-xl font-bold text-indigo-600">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t("ans d'expérience")}
              </div>
            </div>
          </div>

          {/* Badge version mobile (hors de l’image) */}
          <div className="mt-4 md:hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105">
            <div className="text-base font-bold text-indigo-600">6+</div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              {t("ans d'expérience")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
