import {
    AlertCircle,
    CheckCircle,
    Github,
    Linkedin,
    Loader2,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [touched, setTouched] = useState({});
  const successRef = useRef(null);

  // Validation en temps réel
  useEffect(() => {
    const newErrors = {};
    if (touched.name && !formState.name.trim()) {
      newErrors.name = t("Le nom est requis");
    }
    if (touched.email) {
      if (!formState.email.trim()) {
        newErrors.email = t("L'email est requis");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
        newErrors.email = t("Email invalide");
      }
    }
    if (touched.subject && !formState.subject.trim()) {
      newErrors.subject = t("Le sujet est requis");
    }
    if (touched.message) {
      if (!formState.message.trim()) {
        newErrors.message = t("Le message est requis");
      } else if (formState.message.length < 10) {
        newErrors.message = t("Le message doit contenir au moins 10 caractères");
      }
    }
    setErrors(newErrors);
  }, [formState, touched, t]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = t("Le nom est requis");
    if (!formState.email.trim()) {
      newErrors.email = t("L'email est requis");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = t("Email invalide");
    }
    if (!formState.subject.trim()) newErrors.subject = t("Le sujet est requis");
    if (!formState.message.trim()) {
      newErrors.message = t("Le message est requis");
    } else if (formState.message.length < 10) {
      newErrors.message = t("Le message doit contenir au moins 10 caractères");
    }
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwrgvrd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTouched({});
        setTimeout(() => {
          if (successRef.current) successRef.current.focus();
        }, 100);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      label: t("Adresse"),
      value: "Tunis, Tunisie",
      href: null,
    },
    {
      icon: <Phone size={20} />,
      label: t("Téléphone"),
      value: "+216 55 158 591",
      href: "tel:+21655158591",
    },
    {
      icon: <Mail size={20} />,
      label: t("Email"),
      value: "oumayma.metoui@gmail.com",
      href: "mailto:oumayma.metoui@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/oumayma26",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "#", // Ajoute ton lien LinkedIn
    },
  ];

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none
    ${
      errors[fieldName]
        ? "border-red-300 focus:border-red-500 bg-red-50 dark:bg-red-900/10"
        : touched[fieldName] && !errors[fieldName]
        ? "border-green-300 focus:border-green-500 bg-green-50 dark:bg-green-900/10"
        : "border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
    }
  `;

  return (
    <>
      <Helmet>
        <title>{t("Contact - Oumayma Metoui")}</title>
        <meta
          name="description"
          content={t("Contactez-moi via ce formulaire ou par email.")}
        />
      </Helmet>

      <section id="contact" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* En-tête */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
              {t("Discutons")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              {t("Contact")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("Vous avez un projet en tête ? N'hésitez pas à me contacter")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Info de contact */}
            <div className="lg:w-5/12 space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  {t("Suivez-moi")}
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:w-7/12">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      {t("Nom")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClasses("name")}
                      placeholder={t("Votre nom")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      {t("Email")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClasses("email")}
                      placeholder="exemple@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    {t("Sujet")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses("subject")}
                    placeholder={t("Sujet de votre message")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    {t("Message")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses("message")}
                    placeholder={t("Décrivez votre projet...")}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message ? (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span
                      className={`text-xs ${
                        formState.message.length > 500
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {formState.message.length}/1000
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`
                    w-full md:w-auto px-8 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all
                    ${
                      status === "loading"
                        ? "bg-gray-400 cursor-not-allowed"
                        : status === "success"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                    }
                    text-white
                  `}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      {t("Envoi en cours...")}
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={18} />
                      {t("Message envoyé !")}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {t("Envoyer")}
                    </>
                  )}
                </button>

                {/* Messages de statut */}
                {status === "success" && (
                  <motion.div
                    ref={successRef}
                    tabIndex={-1}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-400 flex items-center gap-2"
                    role="alert"
                  >
                    <CheckCircle size={20} />
                    {t("Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.")}
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 flex items-center gap-2"
                    role="alert"
                  >
                    <AlertCircle size={20} />
                    {t("Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.")}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}