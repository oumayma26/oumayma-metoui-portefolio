import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    title: 'SENIOR FullStack JS',
    company: 'Marabout Technology',
    period: 'Jan. 2018 - Juil. 2025',
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
      "Développement et maintenance d’une application de gestion d’assurance en utilisant Spring Boot et Angular",
      "Interfaces Angular performantes et intuitives",
      "API REST sécurisées et évolutives",
      "Déploiement backend (PM2) & frontend (Apache)",
      "Tableau de bord interactif pour KPIs",
      "Stack : Angular 18, Node.js, PostgreSQL, RabbitMQ, Redis, Socket.IO, PM2",
    ],
  },
  // ➕ Ajoute plus d'expériences ici si besoin
];

export default function Resume() {
  return (
    <main   className="flex-1 px-10 py-10 dark:bg-gray-900 dark:text-white transition-colors">
      <section id="resume" className="mb-12">
        <h5 className="text-4xl  border-blue-500 inline-block pb-1 mb-4">
          Je développe des sites web performants, optimisés pour le SEO, avec un design adaptable, un code soigné, et des API RESTful sur mesure.


        </h5>

        
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
          <h2 className="text-2xl font-semibold mb-8">Expériences 2</h2>
          <div className="relative border-l-2 border-blue-500 pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>

         <div>
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">BRANDON JOHNSON</h3>
            <p className="italic text-gray-600 dark:text-gray-300">
              Innovative and deadline-driven Graphic Designer with 3+ years...
            </p>
            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-400 list-disc ml-5">
              <li>Portland par 127, Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div>
        </div>
      </div>

      </section>


    </main>
  );
}