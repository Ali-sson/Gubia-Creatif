import { Link } from "react-router-dom";

import React from 'react'
import HeroService from '../components/HeroService.jsx'
import office from '../assets/officeImage.jpeg'
import event from '../assets/eventImage.jpeg'
import rest from '../assets/resturantImage.jpeg'
import vacation from '../assets/vacationImage.jpeg'

import Footer from '../components/Footer.jsx';

const Commercial = () => {
 return (
   <div>
  
    <HeroService />
    <div className="pt-20 px-6 text-center">
      <h1 className="text-3xl font-bold mb-20 border-b-4 border-[#FFC928] pt-6 inline-block text-center italic">Services We Deliver</h1>
    </div>

    <div className="flex flex-col md:flex-row gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={office} alt="Office Cleaning Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Offices</h2>
       
        <p className="mb-4 text-gray-700 text-center">
         Create a healthier, more productive workplace with our professional office cleaning service.
We keep your desks, floors, and common areas spotless, sanitized, and welcoming — so your team can focus on what matters most.
Book now and let us maintain a clean, fresh, and organized office environment for you!
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

    {/*  */}

    
    <div className="flex flex-col md:flex-row md:flex-row-reverse gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={rest} alt="Restaurant Cleaning Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Restaurants</h2>
       
        <p className="mb-4 text-gray-700 text-center">
         We provide reliable and comprehensive restaurant
          cleaning services to ensure a safe, hygienic, and welcoming environment for your customers.”.
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

    {/*  */}

    
    <div className="flex flex-col md:flex-row gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={vacation} alt="Vacation Rental Cleaning Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Vacation Rentals</h2>
       
        <p className="mb-4 text-gray-700 text-center">
        We handle everything from deep cleaning to quick turnovers, fresh linens, restocking essentials, and ensuring every room feels brand-new. With our reliable team, fast response time,
         and attention to detail, you can focus on managing your property while we take care of keeping it guest-ready
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

    {/*  */}

        
    <div className="flex flex-col md:flex-row md:flex-row-reverse gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={event} alt="Events Cleaning Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Events Cleaning</h2>
       
        <p className="mb-4 text-gray-700 text-center">
        Whether it’s a wedding, birthday, concert, corporate event, or private party, our team delivers fast, efficient, and thorough cleaning tailored to your needs. From litter removal to floor care, 
        restroom cleaning, and post-event restoration, we handle every detail with precision and care.
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
export default Commercial
