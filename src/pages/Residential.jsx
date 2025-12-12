import HeroService from "../components/HeroService"
import MovingPic from '../assets/MovingPic.jpeg';
import HouseCleaning from '../assets/HouseCleaning.jpeg';

import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const Residential = () => {
  return (
   <div>
    <HeroService />
    <div className="pt-20 px-6 text-center">
      <h1 className="text-3xl font-bold mb-20 border-b-4 border-[#FFC928] pt-6 inline-block text-center italic">Services We Deliver</h1>
    </div>

    <div className="flex flex-col md:flex-row gap-8 px-6 mb-20 items-center max-w-4xl mx-auto">
      <div>
        <img src={MovingPic} alt="Moving Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">Moving Service</h2>
       
        <p className="mb-4 text-gray-700 text-center md:text-left">
          Our moving service includes packing, loading, transportation, unloading, and unpacking. We use high-quality packing 
          materials to ensure the safety of your belongings during transit. Our team is trained to handle fragile items with 
          care and to efficiently load and unload your possessions.
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
        <img src={HouseCleaning} alt="House Cleaning Service"
        className="w-100 h-auto" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 border-t-4 border-[#FFC928] 
        pt-2 inline-block ">House Sanitation</h2>
       
        <p className="mb-4 text-gray-700 text-center md:text-left">
         Keep your home safe, fresh, and germ-free with our expert house sanitation services.
We use modern equipment and approved sanitation methods to eliminate bacteria, odors, and harmful
 contaminants — ensuring a healthier environment for you and your family.
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

export default Residential
