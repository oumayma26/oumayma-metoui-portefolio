import React, { useState, useRef } from 'react';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);
  const successRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mpwrgvrd", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
      if (successRef.current) {
        successRef.current.focus();
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('Contact - Oumayma Metoui')}</title>
        <meta name="description" content={t('Contactez-moi via ce formulaire ou par email.')} />
      </Helmet>

      <section id="contact" className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white">
          {t('Contact')}
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Info de contact */}
          <div className="lg:w-5/12 space-y-8 text-gray-800 dark:text-white">
            <div>
              <h3 className="text-xl font-semibold mb-1">{t('Adresse')}</h3>
              <p>Tunis</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{t('Téléphone')}</h3>
              <p>55 158 591</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{t('Email')}</h3>
              <p>oumayma.metoui@gmail.com</p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">{t('Nom')}</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">{t('Email')}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">{t('Sujet')}</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">{t('Message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>

              <div className="text-center">
                <Button type="submit" className="w-full md:w-auto">
                  {t('Envoyer')}
                </Button>
              </div>

              {success && (
                <p
                  tabIndex={-1}
                  ref={successRef}
                  className="text-green-600 text-center mt-4 animate-fadeIn"
                  role="alert"
                >
                  {t('Merci ! Votre message a été envoyé')} ✅
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
