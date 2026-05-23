import React, { useState } from "react";
import Navbar from "../assets/components/Navbar";
import Info from "../assets/components/Info";

const API = "http://https://https://coderz-1.onrender.com/api/school";

export default function SchoolForm() {
  const [formData, setFormData] = useState({
    school: "",
    board: "",
    city: "",
    state: "",
    person: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
      setFormData({
        school: "",
        board: "",
        city: "",
        state: "",
        person: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("❌ School form submit error:", err);
      setError("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#f8fafc] px-4 py-16">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mt-12 mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Partner With Us for School Coding
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Bring structured, age-appropriate coding education to your school
          and prepare students for the future.
        </p>
      </div>

      <Navbar />

      {/* FORM CARD */}
      <div
        id="school-form"
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
      >
        {/* IMAGE */}
        <div className="hidden lg:block relative h-full">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
            alt="School coding"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FORM */}
        <div className="p-6 sm:p-10">
          {!success ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                School Details
              </h2>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <input
                  className="input"
                  name="school"
                  placeholder="School Name"
                  value={formData.school}
                  onChange={handleChange}
                  required
                />

                <select
                  className="input"
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  required
                >
                  <option value="">Board</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>

                <input
                  className="input"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />

                <input
                  className="input"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />

                <input
                  className="input"
                  name="person"
                  placeholder="Contact Person"
                  value={formData.person}
                  onChange={handleChange}
                />

                <input
                  className="input"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  className="input sm:col-span-2"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                <textarea
                  className="input sm:col-span-2 resize-none"
                  rows="4"
                  name="message"
                  placeholder="Requirements / Message"
                  value={formData.message}
                  onChange={handleChange}
                />

                {error && (
                  <p className="sm:col-span-2 text-red-600 text-sm">
                    {error}
                  </p>
                )}

                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-xl text-white font-semibold transition ${
                      loading
                        ? "bg-indigo-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    {loading ? "Submitting..." : "Submit School Enquiry"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* SUCCESS */
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 mb-6 animate-bounce">
                ✅
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 max-w-sm">
                Your details have been submitted successfully.
                Our academic team will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </div>

      <Info />

      {/* INPUT STYLE */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            font-size: 14px;
            outline: none;
          }
          .input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99,102,241,0.15);
          }
        `}
      </style>
    </section>
  );
}
