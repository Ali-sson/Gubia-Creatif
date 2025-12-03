import React from 'react';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import hero from '../assets/hero-cleaner-removebg-preview.png';
import cleaner from '../assets/image-cleaner2.jpg';
import client from '../assets/client.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { faLeaf} from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";


import { FaHome } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaCity } from "react-icons/fa";


import { Link } from "react-router-dom";






const Home = () => {
  return (
    <>
    <section className="bg-[linear-gradient(120deg,#0d0d0d_0%,#1a1a1a_60%,#ffde59_95%)]
     py-0 mb-10 min-h-screen flex items-center">
  {/* <div
    className="absolute inset-0 bg-cover bg-center opacity-50 md:hidden"
    style={{ backgroundImage: `url(${hero})` }}
  ></div> */}
{/* Yellow bubbles / foam */}
<div className="absolute inset-0 pointer-events-none">

  {/* Big bright bubble */}
  <div className="absolute w-56 h-56 bg-[#FFD84A] rounded-full blur-[70px] opacity-80 top-5 left-0"></div>

  {/* Large soft bubble */}
  <div className="absolute w-40 h-40 bg-[#FFEA95] rounded-full blur-[60px] opacity-70 top-32 right-5"></div>

  {/* Medium bubble */}
  <div className="absolute w-28 h-28 bg-[#FFF2BF] rounded-full blur-[50px] opacity-75 bottom-12 left-12"></div>
</div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Professional and Affordable cleaning Service in Kaduna.
          </h1>

          <p data-aos={window.innerWidth < 768 ? "fade-up" : "fade-right"} data-aos-delay="500" 
          className="text-gray-100 mt-4 text-lg">
            Experience a higher standard of cleanliness — delivering spotless
            homes, offices, and commercial spaces with care, precision, and a
            commitment that goes beyond ordinary cleaning.
          </p>

          <div 
           className="mt-8 flex gap-4 ">
            <button className="bg-[#FFC928] text-black px-6 py-3 rounded-lg hover:bg-[#D4A017] transition cursor-pointer">
              Book a Cleaning
            </button>

           <Link 
  to="cta"
  smooth={true}
  duration={600}
  offset={-80}  // adjust for navbar height
>
  <button className="border border-[#FFC928] text-[#FFC928] px-6 py-3 rounded-lg transition cursor-pointer hover:bg-[#FFC928] hover:text-black">
    Get a Free Quote
  </button>
</Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="zoom-in" data-aos-delay="500" className="flex justify-center hidden md:block">
          <img
            src={hero}
            alt="Cleaning service"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>

    
    <section className='max-w-7xl m-auto mb-10 flex py-10 px-10 justify-between bg-[white] text-black flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6'>
     <div data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} data-aos-delay="100"
      className='flex-1 md:mt-0'>
      <h1 className='text-2xl font-medium mb-4 border-t-4 border-[#FFC928] pt-2 inline-block'>Welcome To the</h1>
      <h2 className='text-3xl font-bold mb-4'>Best Cleaning Company in Kaduna</h2>
      <p className='mb-4 italic text-xl font-medium text-gray-600 tracking-tight'>
        Gubia + Creatif is Kaduna’s leading professional cleaning company. Established in 2023, we provide tailored cleaning
         solutions designed to meet the unique needs of our growing clientele. Your satisfaction is our top priority.</p>

         <p className='text-gray-500'>You get the best of cleaning when you use our services. We offer various cleaning services ranging from domestic household cleaning to commercial premises cleaning. You get maximum comfort and peace
           of mind when we do your cleaning for you. Meeting your needs and making your environment clean is paramount to us.</p>
     </div>
 

           {/* First Card section */}
     <div data-aos="fade-up" data-aos-delay="500">
      <div className='max-w-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 rounded-xl md:mt-30'>
        <FontAwesomeIcon icon={faBroom} className="text-[#FFC928] text-6xl mb-4" />

        <h1 className='text-2xl font-bold mb-4'>Professional Cleaning Processes.</h1>
        <p className='text-gray-500'>Be sure your building gets the best professional treatment</p>
           </div>

           <div className='max-w-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 rounded-xl mt-6'>
        <FontAwesomeIcon icon={faLeaf} className="text-[#FFC928] text-6xl mb-4" />

        <h1 className='text-2xl font-bold mb-4'>Eco Friendly Cleaning Products.</h1>
        <p className='text-gray-500'>We use products that are eco-friendly</p>
           </div>

           </div>

           {/* second Card section */}

     <div data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} data-aos-delay="500">
      <div className='max-w-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 rounded-xl mt-6'>
           <FontAwesomeIcon icon={faCertificate} className="text-[#FFC928] text-6xl mb-4" />

        <h1 className='text-2xl font-bold mb-4'>Certified Cleaning Staff</h1>
        <p className='text-gray-500'>We’ll clean your offices with the best and appropriate types of equipment</p>
           </div>

           <div className='max-w-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 rounded-xl mt-6'>
        <FontAwesomeIcon icon={faToolbox} className="text-[#FFC928] text-6xl mb-4" />

        <h1 className='text-2xl font-bold mb-4'>The Best Of Cleaning Equipments.</h1>
        <p className='text-gray-500'>We’ll clean your offices with the best and appropriate types of equipment</p>
           </div>

           </div>


    </section>

    {/* Service OverView */}

    <section data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} data-aos-delay="500"
    className='flex justify-center flex-col items-center text-center px-10 py-0'>

      <h3 className='text-2xl font-medium mb-4 border-t-4 border-[#FFC928] pt-6 inline-block'>At gubia+ Creatif</h3>
      <h1 className='text-3xl text-gray-900 font-bold mb-4 tracking-normal'>Meeting Your Needs And Making Your Environment Clean <br /> Is Paramount To Us.</h1>
      <p className='text-gray-900'>We offer various cleaning services ranging from domestic household cleaning to commercial premises cleaning.
         You get maximum <br/>  comfort and peace of mind when we do your cleaning for you</p>

<section className="px-1  py-2">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

    {/* LEFT IMAGE */}
    <div className="flex justify-center">
      <img
        src={cleaner}
        alt="Cleaning service"
        className="w-full max-w-md rounded-xl shadow-lg object-cover"
      />
    </div>

    {/* RIGHT SIDE SERVICES */}
    <div className="flex flex-col space-y-5">

      {/* Service 1 */}
      <div className="md:flex items-center gap-4 shadow-lg w-full max-w-lg p-6 md:p-5 rounded-xl">
        <FaHome className="text-7xl text-[#FFC928] flex-shrink-0 md:mb-2" />
        <div>
          <h1 className="text-2xl font-bold text-left mb-2">Residential Cleaning</h1>
          <p className='text-left text-gray-500'>Enjoy a spotless and comfortable home with our reliable residential cleaning service.</p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="md:flex items-center gap-4 shadow-lg w-full max-w-lg p-6 md:p-5 rounded-xl">
        <FaIndustry className="text-7xl text-[#FFC928] flex-shrink-0 md:mb-2" />
        <div>
          <h1 className="text-2xl font-bold text-left mb-2">Industrial/Green Cleaning</h1>
          <p className='text-left text-gray-500'>Powerful industrial cleaning with eco-friendly methods that keep your facility spotless and safe for the environment.</p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="md:flex items-center gap-4 shadow-lg p-5 rounded-xl">
        <FaCity className="text-7xl text-[#FFC928] flex-shrink-0 md:mb-2" />
        <div>
          <h1 className="text-2xl font-bold text-left mb-2">Commercial Cleaning</h1>
          <p className='text-left text-gray-500'>Professional cleaning solutions that keep your business space spotless, welcoming, and ready for productivity every day.</p>
        </div>
      
      </div>
    </div>
  </div>
</section>
    </section>
      <div className='flex justify-center py-2 m-20 border-b-2 border-[#FFC928] px-10'>
      <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition">
            View All Services
          </button>
          </div>
   


    
    <section data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} data-aos-delay="500"
     className='max-w-7xl m-auto flex py-6 px-10 justify-between bg-[white] text-black flex-col md:flex-row space-y-6 md:space-y-0
     md:space-x-6'>
     <div className='flex-1'>
      <h1 className='text-2xl font-medium mb-4 border-t-4 border-[#FFC928] pt-2 inline-block'> 
What They Say</h1>
      <h2 className='text-3xl font-bold mb-4'>Gubia+ Creatif – Delivering exceptional cleaning services</h2>
      <p className='mb-4 italic text-xl font-medium text-gray-600 tracking-tight'>
      Your satisfaction is our priority — we deliver the highest quality cleaning every time.</p>

         <p className='text-gray-500'>You enjoy comfort and peace of mind when we handle your cleaning. 
          Keeping your environment spotless and meeting your needs is our top priority.</p>
     </div>
 

           {/* First Card section */}
     <div>
      <div className='max-w-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 rounded-xl'>
        <p className='italic text-xl font-medium text-gray-600 tracking-tight text-center'>Professional, polite, and thorough. The team did an outstanding job and left my home spotless—better 
          than it has ever been. Fantastic value for money. I would absolutely recommend them</p>
          <div className='flex justify-center py-5'>
        {/* <FontAwesomeIcon icon={faBroom} className="text-[#FFC928] text-6xl mb-4 flex justify-center" /> */}
      <img 
  src={client} 
  className="w-20 rounded-[50px] shadow-lg"
  alt="image"
  py-5
/>
  </div>
        <h1 className='text-2xl font-bold text-center'>Ali James.</h1>
        <p className='text-center italic text-gray-500'>Satisfied Customer</p>

      
           </div>
           </div>

           {/* second Card section */}

     <div>
      <div className='max-w-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 rounded-xl'>
        <p className='italic text-xl font-medium text-gray-600 tracking-tight text-center'>What an excellent team! Their customer service is top-notch. They arrived on time and were very thorough. 
          I was so happy with the detailed work done and would recommend them to anyone, anytime, anywhere. Thanks again</p>

         <div className='flex justify-center py-5'>
        {/* <FontAwesomeIcon icon={faBroom} className="text-[#FFC928] text-6xl mb-4 flex justify-center" /> */}
      <img 
  src={client} 
  className="w-20 rounded-[50px] shadow-lg"
  alt="image"
  py-5
/>
  </div>
        <h1 className='text-2xl font-bold text-center'>Ali James.</h1>
        <p className='text-center italic text-gray-500'>Satisfied Customer</p>
           </div>
           </div>
    </section>
<div className='flex justify-center py-20'>
      <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition">
            More Reviews
          </button>
          </div>

{/*  
 <div className="relative">
  {/* White outline 
  <svg
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    className="w-96 h-96 fill-white absolute top-0 left-0"
  >
    <path d="
      M308.5 157.5
      c25 20 40 55 28 88
      s-50 56 -90 66
      s-83 7 -122 -12
      s-67 -54 -71 -93
      s20 -76 57 -101
      s87 -35 134 -23
      s69 33 94 55z"
    />
  </svg>

  {/* Blue blob 
  <svg
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    className="w-80 h-80 fill-blue-500 absolute top-8 left-18"
  >
    <path d="
      M308.5 157.5
      c25 20 40 55 28 88
      s-50 56 -90 66
      s-83 7 -122 -12
      s-67 -54 -71 -93
      s20 -76 57 -101
      s87 -35 134 -23
      s69 33 94 55z"
    />
  </svg>

  {/* Your cleaner image 
  <img
    src={hero}
    alt="cleaner"
    className="relative z-20 w-64 mx-auto"
  />
</div> */}


<section id="cta">
  <Cta />
</section>

<Footer />
    </>
  )

}



export default Home
