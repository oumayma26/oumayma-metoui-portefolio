import React from 'react'
import img from "../assets/profile/img.jpg"
import { Typewriter } from 'react-simple-typewriter';
import Button from '../components/Button';
import cv from '../assets/pdf/CV_Oumayma_Metoui_Developpeur_FullStack.pdf'
export default function Home() {
  return (
    <div className='p-2 container mx-auto'>
                
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
           

            <div class=" p-4  ">
              <h2 className='pb-6 '>
                <Typewriter
                  words={['Bonjour', 'Je suis développeur Full Stack']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}  />
              </h2>
              <Button href={cv} type="button"  >Telecharger le CV</Button>

               
            </div>

            <div class=" p-4  mx-auto ">
                <img src={img} alt=""          
                className="w-64 h-64 object-cover shadow-lg" />
            </div>

           

        </div>


    </div>
  )
}
