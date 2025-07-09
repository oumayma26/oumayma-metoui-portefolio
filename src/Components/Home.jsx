import { motion } from 'framer-motion';

import { Typewriter } from 'react-simple-typewriter';
import homeImg from "../assets/home.avif"

export default function Home() {
  return (
    <section id="home" className="relative w-full h-screen">
      <motion.div>
        <img
            src={homeImg}
            alt="Home Image"
            className="w-full h-full object-cover rounded-md shadow-lg"
        />

        {/* Texte superposé */}
        <div className="absolute inset-0 flex items-center justify-start">
            <div className="text-white text-3xl md:text-5xl font-bold text-center bg-black bg-opacity-0 p-4 rounded-md">
            <Typewriter
                words={['Bonjour', 'Bienvenue sur mon portfolio', 'Je suis développeur Full Stack JS']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
            </div>
        </div>
    </motion.div>
</section>

  )
}
