import React, {useState} from "react";
import {Link as RouterLink} from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#0D0D0D] shadow-md shadow-white/40  w-full fixed top-0 left-0 z-50
    ">
        <div className="text-2xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#FFC928]">Gubia+ Creatif</h1>

            <ul className="hidden md:flex space-x-6 text-[#FFFFFF] font-medium">
                <li><RouterLink to="/"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Home</RouterLink></li>
                <li><RouterLink to="/about" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">About</RouterLink></li>
                <li><RouterLink to="/services" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Services</RouterLink></li>
                <li><RouterLink to="/contact" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Contact</RouterLink></li>
            </ul>

          <ScrollLink 
  to="cta" 
  smooth={true} 
  duration={600} 
  offset={-80} // adjust for navbar height
>
  <button 
    className="bg-[#FFC928] text-black text-base px-4 py-2 rounded-lg hover:bg-[#D4A017] transition 
    cursor-pointer hidden md:block "
  >
    Get a Quote
  </button>
</ScrollLink>


            <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer text-3xl text-white">
                {open ? <>&#10005;</> : <>&#9776;</>}

            </div>
        </div>
        {open && (
            <ul className="md:hidden shadow-md px-6 py-4 space-y-4 font-medium bg-[#0D0D0D] text-white">
                <li><RouterLink to="/" onClick={()=>setOpen(false)}>Home</RouterLink></li>
                <li><RouterLink to="/about" onClick={()=>setOpen(false)}>About</RouterLink></li>
                <li><RouterLink to="/services" onClick={()=>setOpen(false)}>Services</RouterLink></li>
                <li><RouterLink to="/contact" onClick={()=>setOpen(false)}>Contact</RouterLink></li>
            </ul>
        )}
    </nav> 
  )
}

export default Navbar
