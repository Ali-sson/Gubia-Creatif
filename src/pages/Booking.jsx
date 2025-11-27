import React, { useState } from "react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Booking() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const yourWhatsAppNumber = '2348028933263'; // Replace with your number

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (!form.name || !form.phone || !form.address || !form.service) {
      alert("Please fill all required fields.");
      return;
    }

    // SAVE form data in session storage (temporary)
    sessionStorage.setItem("bookingData", JSON.stringify(form));

    // Navigate to confirmation screen
    navigate("/booking-success");
  }

  return (
    <>
    <Hero />
    <div className="max-w-xl mx-auto p- mt-40">
      <h2 className="text-3xl font-bold mb-4 text-center italic">Book a Cleaning Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 rounded-lg shadow">
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />

        <input type="text" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" />

        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full p-2 border rounded" />

        <select name="service" value={form.service} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Service</option>
          <option value="Home Cleaning">Home Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
          <option value="Move-in / Move-out Cleaning">Move-in / Move-out Cleaning</option>
        </select>

        <div className="flex gap-4">
          <input type="date" name="date" value={form.date} onChange={handleChange} className="p-2 border rounded w-1/2" />
          <input type="time" name="time" value={form.time} onChange={handleChange} className="p-2 border rounded w-1/2" />
        </div>

        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Additional Notes" className="w-full p-2 border rounded h-24" />

        <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400 transition mb-20">
          Continue to Confirmation
        </button>
      </form>
    </div>

    <Footer />
    </>
  );
}
