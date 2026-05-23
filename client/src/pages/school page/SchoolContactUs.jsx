import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function SchoolContactUs() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F6FBF7] to-[#EEF6F0] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Contact Our School
          </h1>
          <p className="mt-4 text-gray-600">
            We’d love to hear from you. Reach out for admissions, programs, or
            any general queries.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col justify-between">

            <div>
              <h2 className="text-2xl font-semibold mb-6">
                School Contact Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white" />
                  <p>
                    ABC Public School<br />
                    Main Road, City Name<br />
                    State, India
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-white" />
                  <p>+91 98765 43210</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-white" />
                  <p>info@abcschool.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 rounded-xl overflow-hidden border border-white/30">
              <iframe
                title="School Location"
                src="https://www.google.com/maps?q=India&output=embed"
                className="w-full h-52"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
