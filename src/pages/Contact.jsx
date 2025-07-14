import React, { useState } from 'react';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);

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
    }
  };

  return (
    <section id="contact" className="container mx-auto">
      <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white">
        {t('Contact')}
      </h2>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Info de contact */}
          <div className="lg:w-5/12 space-y-6 text-gray-800 dark:text-white">
            <div>
              <h3 className="text-xl font-semibold">{t('Adresse')}</h3>
              <p>Tunis</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{t('Téléphone')}</h3>
              <p>55 158 591</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{t('Email')}</h3>
              <p>oumayma.metoui@gmail.com</p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm">{t('Nom')}</label>
                  <input type="text" name="name" required className="w-full border px-4 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm">{t('Email')}</label>
                  <input type="email" name="email" required className="w-full border px-4 py-2 rounded" />
                </div>
              </div>

              <div>
                <label className="block text-sm">{t('Sujet')}</label>
                <input type="text" name="subject" required className="w-full border px-4 py-2 rounded" />
              </div>

              <div>
                <label className="block text-sm">{t('Message')}</label>
                <textarea name="message" rows="6" required className="w-full border px-4 py-2 rounded"></textarea>
              </div>

              <div className="text-center">
                <Button type="submit" className="w-full md:w-auto">
                  {t('Envoyer')}
                </Button>
              </div>

              {success && (
                <p className="text-green-600 text-center mt-4">
                  {t('Merci ! Votre message a été envoyé')}✅
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
