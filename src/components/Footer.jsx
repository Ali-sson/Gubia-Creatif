// Footer.jsx
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[white] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* LOGO AND CONTACT */}
        <div>
          <h1 className="text-3xl font-bold text-[#FFC928]">gubia+Creatif</h1>
          <div className="mt-4 space-y-3 text-gray-700">
            <p className="flex items-center gap-2 text-white">
              <FaPhone className="text-[#FFC928]" /> +234 80 2893 3263
            </p>                                    
            <p className="flex items-center gap-2 text-white">
              <FaEnvelope className="text-[#FFC928]" /> Gubiacreatif@gmail.com
            </p>
            <p className="flex items-center gap-2 text-white">
              <FaMapMarkerAlt className="text-[#FFC928]" /> 
              20 Dadi Street, Narayi, Kaduna State
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-[#FFC928]">Services</h3>
          <ul className="space-y-2 text-white">
            <li>Floor Cleaning</li>
            <li>Office Cleaning</li>
            <li>Upholstery Cleaning</li>
            <li>Moving Services</li>
            <li>End of Tenancy Cleaning</li>
            <li>Post Construction Clean-up</li>
          </ul>
        </div>

        {/* HELP AND INFORMATION */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-[#FFC928]">Help & Information</h3>
          <ul className="space-y-2 text-white">
            <li>About Us</li>
            <li>Client Reviews</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* JOIN BUTTON */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-[#FFC928]">Become a gubia+ Creatif Cleaner!</h3>
          <p className="text-white mb-4">
            Want to join our team and develop your professional skills?
            We offer fantastic opportunities for growth in a supportive environment.
          </p>

          <button className="bg-[#FFC928] text-black px-5 py-2 rounded-lg shadow hover:bg-[#D4A017] transition">
            Apply to Join Us
          </button>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-10 border-t border-[white] pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <p className="text-white text-sm">© 2024 gubia+ Creatif. All Rights Reserved.</p>

        <div className="flex gap-4 text-white mt-4 md:mt-0">
          <span className="bg-[#3b5998] p-2 rounded-full cursor-pointer"><FaFacebookF /></span>
          <span className="bg-[#1DA1F2] p-2 rounded-full cursor-pointer"><FaTwitter /></span>
          <span className="bg-[#E1306C] p-2 rounded-full cursor-pointer"><FaInstagram /></span>
        </div>
      </div>
    </footer>
  );
}
