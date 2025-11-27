import React, { useEffect, useState } from "react";

export default function BookingSuccess() {
  const [booking, setBooking] = useState(null);
  const yourWhatsAppNumber = "2348028933263";

  useEffect(() => {
    const data = sessionStorage.getItem("bookingData");
    if (data) setBooking(JSON.parse(data));
  }, []);

  if (!booking) return <p className="p-6 text-center">No booking data found.</p>;

  // Prepare WhatsApp message
  const message = `
New Cleaning Booking Confirmation:

👤 Name: ${booking.name}
📞 Client Phone: ${booking.phone}
📍 Address: ${booking.address}

🧹 Service: ${booking.service}
📅 Date: ${booking.date}
⏰ Time: ${booking.time}

📝 Notes: ${booking.notes || "None"}

Customer already confirmed on website.
  `;

  const waURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
      <p className="text-gray-700 mb-6">Thank you for booking with us. Below is your booking summary:</p>

      <div className="bg-white p-5 rounded-lg shadow text-left space-y-2">
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>
        <p><strong>Address:</strong> {booking.address}</p>
        <p><strong>Service:</strong> {booking.service}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Time:</strong> {booking.time}</p>
        <p><strong>Notes:</strong> {booking.notes || "None"}</p>
      </div>

      <a
        href={waURL}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
      >
        Send to WhatsApp
      </a>

      <p className="mt-4 text-gray-600">You will be redirected to WhatsApp to finalize your booking.</p>
    </div>
  );
}
