import { Link } from "react-router-dom";
import React from 'react'
import HeroService from "../components/HeroService"
import construct from '../assets/construct.jpeg';
import floor from '../assets/floor.jpeg';
import fumigation from '../assets/fumigation.jpeg';
import pressure from '../assets/pressure.jpeg';
import restroom from '../assets/restroom.jpeg';

import Footer from "../components/Footer";


const Industrial = () => {
  return (
   <div>
    <HeroService />
    <div className="pt-20 px-6 text-center">
      <h1 className="text-3xl font-bold mb-20 border-b-4 border-[#FFC928] pt-6 inline-block text-center italic">Services We Deliver</h1>
    </div>

    <div className="flex flex-col md:flex-row gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={construct} alt="Construct Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Post Construction Clean-up</h2>
       
        <p className="mb-4 text-gray-700 text-left">
          Turn your new space into a spotless masterpiece.
        Our post-construction cleaning removes dust, debris, and fine particles, 
        leaving your property clean, safe, and ready to use.
        </p>

          <div className='flex md:justify-start justify-center py-2 px-0'>
       <Link to="/Booking">
      <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition cursor-pointer">
            Book Service
          </button>
          </Link>
          </div>

      </div>
    </div>

    {/* second */}

    
    <div className="flex flex-col md:flex-row md:flex-row-reverse gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={pressure} alt="House Cleaning Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Pressure Cleaning </h2>
       
        <p className="mb-4 text-gray-700 text-left">
         Blast away dirt and grime with our expert pressure cleaning service.
Perfect for driveways, walls, fences, pavements, and more — we restore the true 
beauty of your surfaces with powerful, deep cleaning that lasts.
        </p>

          <div className='flex md:justify-start justify-center py-2 px-0'>
       <Link to="/Booking">
      <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition cursor-pointer">
            Book Service
          </button>
          </Link>
          </div>

      </div>
    </div>


    {/* third */}
    
    <div className="flex flex-col md:flex-row gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={restroom} alt="Restroom Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Rest-room Sanitation</h2>
       
        <p className="mb-4 text-gray-700 text-left">
         Keep your restrooms fresh, hygienic, and spotless.
Our restroom cleaning service ensures a clean, sanitized, and odor-free environment for 
your home or business — giving your space the comfort and cleanliness it deserves.
        </p>

          <div className='flex md:justify-start justify-center py-2 px-0'>
      <Link to="/Booking">
      <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition cursor-pointer">
            Book Service
          </button>
          </Link>
          </div>

      </div>
    </div>


    
    {/* fourth */}
    <div className="flex flex-col md:flex-row md:flex-row-reverse gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={floor} alt="Floor Cleaning Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Floor Cleaning</h2>
       
        <p className="mb-4 text-gray-700 text-left">
         Restore the beauty of your floors with our professional floor cleaning service — spotless,
         polished, and refreshed for a healthier environment.
From tiles to hardwood, we ensure every surface shines like new. 
Let us handle the dirt while you enjoy a cleaner, healthier space.
        </p>

          <div className='flex md:justify-start justify-center py-2 px-0'>
       <Link to="/Booking">
      <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition cursor-pointer">
            Book Service
          </button>
          </Link>
          </div>

      </div>
    </div>

          {/* fifth */}
    <div className="flex flex-col md:flex-row gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={fumigation} alt="Fumigation Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Fumigation Service</h2>
       
        <p className="mb-4 text-gray-700 text-left">
        Protect your home and business from pests with our professional fumigation service.
Safe, effective, and guaranteed to restore your peace of mind.
Enjoy a cleaner, safer, and pest-free environment with our trusted experts — book today!
        </p>

          <div className='flex md:justify-start justify-center py-2 px-0'>
      <Link to="/Booking">
      <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition cursor-pointer">
            Book Service
          </button>
          </Link>
          </div>

      </div>
    </div>

    <Footer />

   </div>
  )
}
export default Industrial
