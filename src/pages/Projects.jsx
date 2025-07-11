import React from 'react'
import { motion } from 'framer-motion';
import boxGeneratorImg from '../assets/projects/box-generator.png'
import { FaDesktop, FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className='container mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} >

        <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white">
          Mes projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 shadow rounded">
        <img
          src={boxGeneratorImg}
          alt="Box generator"
          className="w-full h-auto rounded mb-4"
        />
    <div className="flex justify-between">
      <a
        href="https://oumayma26.github.io/box-generator/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
       <FaDesktop /> Démo
      </a>
      <a
        href="https://github.com/oumayma26/box-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
       <FaGithub /> GitHub 
      </a>
    </div>
  </div>

</div>


      </motion.div>
    </div>
  )
}
