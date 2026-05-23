import React, { useState } from "react";
import { motion } from "framer-motion";

const API = "http://https://coderz-1.onrender.com";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent! We will reach you soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#F7F9F8] to-[#EEF4F0] py-16 sm:py-20 relative overflow-hidden">

      {/* Floating soft shape */}
      <motion.div
        {...floatAnimation}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E6F0EA] opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Have questions about school coding programs, donations,
            or partnerships? We’d love to hear from you.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT INFO */}
            <div className="bg-[#E6F0EA] p-8 sm:p-12 relative">
              <motion.div
                {...floatAnimation}
                className="absolute bottom-6 right-6 w-28 h-28 rounded-full bg-white/50"
              />

              <h3 className="text-2xl font-extrabold text-gray-900">
                Let’s talk
              </h3>

              <p className="mt-4 text-sm sm:text-base max-w-sm text-gray-700">
                Whether you are a school, parent, volunteer, or donor —
                we’re here to help you.
              </p>

              <div className="mt-8 space-y-4 text-sm text-gray-800">
                <p>📍 Kanpur, Uttar Pradesh</p>
                <p>📧 cafecoderz@gmail.com</p>
                <p>📞 +91 8303146551</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-8 sm:p-12 relative">

              <motion.div
                {...floatAnimation}
                className="absolute top-6 right-6 w-20 h-20 rounded-full bg-[#E6F0EA] opacity-50"
              />

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#5F8D6B]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#5F8D6B]"
                />

                <input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#5F8D6B]"
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#5F8D6B]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full py-3 rounded-lg
                    bg-[#1F2933] text-white font-semibold
                    hover:bg-black transition shadow-md
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
