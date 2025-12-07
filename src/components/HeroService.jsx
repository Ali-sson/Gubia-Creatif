import React from 'react'
import ServeImage from '../assets/ServeImage.png';


const HeroService = () => {
  return (
    <div
         className="relative  h-[60vh] md:h-[60vh] bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${ServeImage})` }}
       >
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/40"></div>
   
         {/* Content */}
         <div className="relative z-10 flex items-center justify-center h-full">
           {/* content here */}
           <h1 className="text-4xl font-bold text-white text-center italic">Our Services</h1>
         </div>
       </div>
  )
}

export default HeroService
