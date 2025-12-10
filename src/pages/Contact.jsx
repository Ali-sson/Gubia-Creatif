import React from "react";
import HeroContact from "../components/HeroContact";
import image from "../assets/ContactImage.jpeg";
import Footer from "../components/Footer";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <HeroContact />
    <div className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full hidden md:block">
          <img
            src={image}
            alt="Cleaning service contact"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8">

          {/* Contact Info */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-yellow-500 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+234 80 2893 3263</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-yellow-500 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">Gubiacreatif@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Header */}
          <h2 className="text-2xl font-semibold text-black-600">Send Us Your Enquiry</h2>
          <div className="w-20 h-1 bg-yellow-500 mt-2 mb-8"></div>

          {/* FORM WITH FORMSPREE */}
          <form
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Message*"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>

        
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

