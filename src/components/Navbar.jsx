import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openServices, setOpenServices] = useState(false); // FIXED

  return (
    <nav className="bg-[#0D0D0D] shadow-md shadow-white/40  w-full fixed top-0 left-0 z-50
    ">
        <div className="text-2xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#FFC928]">Gubia+ Creatif</h1>

           <ul className="hidden md:flex items-center space-x-6 text-[#FFFFFF] font-medium">

                <li><Link to="/" 
                  className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Home</Link></li>
                <li><Link to="/about" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">About</Link></li>

        <li 
  className="relative group"

  onMouseEnter={() => setOpenServices(true)}   // desktop hover
  onMouseLeave={() => setOpenServices(false)}  // desktop hover close
>
  <button
    onClick={() => setOpenServices(prev => !prev)} // mobile click
  className="pt-2 border-b-2 border-transparent hover:border-[#FFC928] text-base flex items-center gap-1"
>
    Services

    {/* dropdown icon */}
    <span
      className={`text-xs transition-transform duration-200 ${
        openServices ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  {/* Dropdown menu */}
  <ul
    className={`absolute left-0 bg-white text-black shadow-lg rounded-md w-60 py-2 z-50 transition-all duration-200 
    ${openServices ? "block" : "hidden"} 
    group-hover:block`}  // for desktop
  >
    <li>
      <Link 
      to="/services/residential-cleaning"

        className="block px-4 py-2 hover:bg-gray-100 text-base"
        onClick={() => setOpenServices(false)}
      >
        Residential Cleaning
      </Link>
    </li>

  
    <li>
      <Link 
        to="/services/industrial" 
        className="block px-4 py-2 hover:bg-gray-100 text-base"
        onClick={() => setOpenServices(false)}
      >
        Industrial/Green Cleaning
      </Link>
    </li>

    <li>
      <Link 
        to="/services/commercial" 
        className="block px-4 py-2 hover:bg-gray-100 text-base "
        onClick={() => setOpenServices(false)}
      >
       Commercial Cleaning
      </Link>
    </li>
  </ul>
</li>

                
                 <li><Link to="/booking" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Booking</Link></li>
                <li><Link to="/contact" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Contact</Link></li>
               
            </ul>

  <button 
    className="bg-[#FFC928] text-black text-base px-4 py-2 rounded-lg hover:bg-[#D4A017] transition 
    cursor-pointer hidden md:block "
  >
    Get a Quote
  </button>



            <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer text-3xl text-white">
                {open ? <>&#10005;</> : <>&#9776;</>}

            </div>
        </div>
        {open && (
            <ul className="md:hidden shadow-md px-6 py-4 space-y-4 font-medium bg-[#0D0D0D] text-white">
                <li><Link to="/" onClick={()=>setOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={()=>setOpen(false)}>About</Link></li>
                <li className="text-white">
  <button
    onClick={() => setOpenServices(prev => !prev)}
    className="flex items-center gap-2"

  >
    Services
    <span
      className={`text-sm transition-transform duration-200 ${
        openServices ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  {/* Mobile dropdown */}
  {openServices && (
    <ul className="pl-4 mt-2 space-y-2">
      <li>
        <Link
          to="/services/residential-cleaning"
          onClick={() => { setOpen(false); setOpenServices(false); }}
          className="block py-1"
        >
          Residential Cleaning
        </Link>
      </li>


      <li>
        <Link
          to="/services/industrial"
          onClick={() => { setOpen(false); setOpenServices(false); }}
          className="block py-1"
        >
          Industrial/Green Cleaning
        </Link>
      </li>

      <li>
        <Link
          to="/services/commercial"
          onClick={() => { setOpen(false); setOpenServices(false); }}
          className="block py-1"
        >
            Commercial Cleaning
        </Link>
      </li>
    </ul>
  )}
</li>

                <li><Link to="/booking" onClick={()=>setOpen(false)}>Booking</Link></li>
                 <li><Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>
            </ul>
        )}
    </nav> 
  )
}

export default Navbar
