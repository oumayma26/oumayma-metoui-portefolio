import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    title: 'SENIOR FullStack JS',
    company: 'Marabout Technology',
    period: 'Jan. 2018 - Avril. 2025',
    description: [
      "Développement d’un système MES pour la production textile",
      "Interfaces Angular performantes et intuitives",
      "API REST sécurisées et évolutives",
      "Déploiement backend (PM2) & frontend (Apache)",
      "Tableau de bord interactif pour KPIs",
      "Stack : Angular 18, Node.js, PostgreSQL, RabbitMQ, Redis, Socket.IO, PM2",
    ],
  },

  {
    title: 'Ingenieur Java - Spring',
    company: 'Solution Group',
    period: 'Jan. 2018 - Juil. 2025',
    description: [
      "Développement et maintenance d'une application de gestion d’assurance avec Spring Boot et Angular",
      "Création d’un site web responsive avec un design moderne et intuitif, centré sur l'expérience utilisateur",
      "Développement d’une application PHP pour gérer les factures et automatiser les processus financiers",
      "Stack : Spring boot, Angular",
    ],
  },
];

const educations = [
   {
    title: 'Mastere professionnel — Ingénierie des Syst`emes d’Information',
    company: 'Ecole Nationale d’Ing´enieurs de Carthage',
    period: '2015 – 2017',
    description: []
  },

  {
    title: 'Licence en Informatique — Systémes Informatique et Logiciel',
    company: 'Ecole Nationale d’Ing´enieurs de Carthage',
    period: '2011 – 2013',
    description: []
  },
]

export default function Resume() {
  return (
    <main   className="flex-1 px-10 py-10 dark:bg-gray-900 dark:text-white transition-colors">
      <section id="resume" className="mb-12">
        {/* <h5 className="text-4xl  border-blue-500 inline-block pb-1 mb-4">
          Je développe des sites web performants, optimisés pour le SEO, avec un design adaptable, un code soigné, et des API RESTful sur mesure.
        </h5> */}

         <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white">
        Resume
      </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      

        {/* Experience Timeline */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Expériences professionnelle</h2>
          <div className="relative border-l-2 border-blue-500 pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>

         <div>
          <h2 className="text-2xl font-semibold mb-8">Educations</h2>
          <div className="relative border-l-2 border-blue-500 pl-6 space-y-12">
            {educations.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>

        
      </div>

      </section>


    </main>
  );
}