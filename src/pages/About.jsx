import React from 'react'
import HeroAbout from '../components/HeroAbout'
import AboutImg from '../assets/AboutImage.jpeg'
import { CheckCircle } from "lucide-react";
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <HeroAbout />
      <div className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'> 
          <div>
            <h1 data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} 
            className='text-2xl font-medium mb-4 border-t-4 border-[#FFC928] pt-2 inline-block'>About Us</h1>
            <p >Welcome to our cleaning service! We are dedicated to providing top-notch cleaning solutions for homes and businesses. Our team of experienced professionals uses eco-friendly products to ensure a safe and healthy environment for our clients.</p>
            <p>Our services include regular house cleaning, deep cleaning, office cleaning, and specialized services such as carpet and upholstery cleaning. We pride ourselves on our attention to detail and commitment to customer satisfaction.</p>
            <p><a href="/contact" className="text-blue-500 underline">Contact us </a> today to learn more about our services and how we can help keep your space clean and tidy!</p>
          </div>

          <div>
            <img src={AboutImg} alt="About Us" />
          </div>
        </div>
      </div>

      <hr />






    <section className="py-20 px-6 md:px-16">
      <div data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} 
      className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h2 
         className="text-2xl md:text-3xl font-bold mb-10 border-t-4 border-[#FFC928] pt-2 inline-block">
          Why Choose Us
        </h2>

        {/* Content Items */}
        <div className="space-y-10">
          
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <CheckCircle className="text-[#FFC928] w-7 h-7 mt-1 shrink-0" />
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We’re available 24/7 to clean your building, office, or business 
              at your convenience, designing cleaning schedules that ensure a 
              safe and clean environment for your staff and clients
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <CheckCircle className="text-[#FFC928] w-7 h-7 mt-1 shrink-0" />
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We’re at the forefront of cleaning technology, using the latest 
              machines and equipment to deliver exceptional results.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <CheckCircle className="text-[#FFC928] w-7 h-7 mt-1 shrink-0" />
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Our team of experts is highly trained to operate and maintain 
              equipment, ensuring we can tackle even the most difficult cleaning 
              tasks with ease. From industrial cleaning to large-scale contracts, 
              we have the capabilities and expertise to get the job done.
            </p>
          </div>

        </div>
      </div>
    </section>
  



        <Footer />
    </div>
  
  )
}

export default About
