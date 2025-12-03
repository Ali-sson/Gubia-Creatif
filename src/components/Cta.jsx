import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Send } from 'lucide-react';

// CTASection.jsx
// A responsive, accessible Call-To-Action section with:
// - "Request a Free Quote" sliding form
// - "Chat With Us" WhatsApp quick action button
// Built with Tailwind CSS and Framer Motion. Export default component.

export default function CTASection() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const waNumber = '234 8028933263'; // replace with your WhatsApp number in international format (no +)

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function validate() {
    return form.name.trim() && (form.phone.trim() || form.email.trim());
  }

async function handleSubmit(e) {
  e.preventDefault();
  if (!validate()) return;

  setSubmitting(true);

  try {
    const res = await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setSubmitting(false);
      setSent(true);

      setForm({ name: '', phone: '', email: '', message: '' });

      setTimeout(() => setSent(false), 4000);
    } else {
      setSubmitting(false);
      alert("Form submission failed. Try again.");
    }

  } catch (error) {
    setSubmitting(false);
    alert("Network error. Try again.");
  }
}

  const whatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I\'d like a free quote for cleaning services.')}`;

  return (
    <section data-aos={window.innerWidth < 768 ? "fade-up" : "zoom-in"} data-aos-delay="500"
    className="mb-20 px-6 py-5 bg-[#0d0d0d] text-white rounded-2xl shadow-2xl max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Hero + actions */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready for a cleaner space?</h2>
          <p className="mt-3 text-gray-300">Choose one of the quick options below — get a free quote or chat with us instantly on WhatsApp.</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => setOpen(prev => !prev)}
              className="inline-flex items-center gap-3 bg-[#FFC928] text-black font-semibold px-5 py-3 rounded-xl shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-400/30"
              aria-expanded={open}
            >
              <Send className="w-5 h-5" />
              Request a Free Quote
            </button>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/5 focus:outline-none"
            >
              <MessageCircle className="w-5 h-5" />
              Chat With Us
            </a>

            <a
              href={`tel:+${waNumber}`}
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-400">We typically respond within a few hours. For urgent requests use the phone button.</p>
        </div>

        {/* Right: Slide-over Quote Form */}
        <div className="relative">
          <AnimatePresence>
            {open ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold">Request a Free Quote</h3>
                <p className="text-sm text-gray-300 mt-1">Fill a few details and we will get back with a tailored quote.</p>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-sm text-gray-200">Full name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-200">Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="0801 234 5678"
                        inputMode="tel"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-200">Email</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="you@example.com"
                        inputMode="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-200">Message (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Tell us what areas you want cleaned, frequency, and any specifics"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={!validate() || submitting}
                      className="inline-flex items-center gap-2 bg-[#FFC928] text-black font-semibold px-4 py-2 rounded-lg shadow hover:opacity-95 disabled:opacity-60"
                    >
                      {submitting ? 'Sending...' : 'Send Request'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      Cancel
                    </button>

                    <div className="ml-auto text-xs text-gray-400">No spam — we respect your privacy</div>
                  </div>
                </form>

                {/* Success toast */}
                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="mt-3 inline-block bg-green-600/90 text-white px-3 py-2 rounded-md text-sm"
                    >
                      Quote request sent — we will contact you shortly!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-white/3 rounded-2xl"
              >
                <p className="text-sm text-gray-300">Quick tip: the form only needs your name plus phone or email — we’ll handle the rest.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating WhatsApp CTA (mobile-friendly) */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 md:hidden inline-flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" /> Chat With Us
      </a>
    </section>
  );
}
