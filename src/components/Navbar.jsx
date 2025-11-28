import React, {useState} from "react";
import {Link} from "react-router-dom";



const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#0D0D0D] shadow-md shadow-white/40  w-full fixed top-0 left-0 z-50
    ">
        <div className="text-2xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#FFC928]">Gubia+ Creatif</h1>

            <ul className="hidden md:flex space-x-6 text-[#FFFFFF] font-medium">
                <li><Link to="/" 
                  className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Home</Link></li>
                <li><Link to="/about" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">About</Link></li>
                <li><Link to="/services" className="pb-1 border-b-2 border-transparent hover:border-[#FFC928] text-base">Services</Link></li>
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
                <li><Link to="/services" onClick={()=>setOpen(false)}>Services</Link></li>
                <li><Link to="/booking" onClick={()=>setOpen(false)}>Booking</Link></li>
                 <li><Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>
            </ul>
        )}
    </nav> 
  )
}

export default Navbar
