import React from 'react'
import img from "../assets/profile/img.jpg"
import { Typewriter } from 'react-simple-typewriter';
import Button from '../components/Button';
import cv from '../assets/pdf/CV_Oumayma_Metoui_Developpeur_FullStack.pdf'
export default function Home() {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-10 bg-white dark:bg-gray-900"
>
  {/* Texte et bouton */}
  <div className="text-center md:text-left max-w-xl space-y-6">
    <h1 className="text-3xl md:text-5xl font-bold text-night-blue dark:text-white">
      Bonjour, je suis <br />
      <span className="text-sky-500">Oumayma Metoui</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
      Développeuse Full Stack JavaScript passionnée par la création
      d’expériences web modernes.
    </p>

    <a
      href={cv}
      download
      className="inline-block bg-night-blue text-white px-6 py-3 rounded hover:bg-sky-600 transition"
    >
      Télécharger le CV
    </a>
  </div>

  {/* Image */}
  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
    <img
      src={img}
      alt="Oumayma Metoui portrait"
      className="w-full h-full object-cover"
    />
  </div>
</section>

  )
}
