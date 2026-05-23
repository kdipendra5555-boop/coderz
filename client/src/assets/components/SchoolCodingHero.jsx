import React from "react";
import { Link } from "react-router-dom";

export default function SchoolCodingHero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F6FBF7] to-[#EEF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE (SINGLE – NO SLIDER) */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg sm:max-w-xl">
              <div
                className="
                  bg-white/95 backdrop-blur
                  p-4 sm:p-5
                  rounded-2xl
                  shadow-xl
                  overflow-hidden
                "
              >
                <div className="relative h-[260px] sm:h-[340px] lg:h-[380px] overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                    alt="School coding education"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Make <br />
              <span className="text-indigo-600">coding</span> <br />
              easy <br />
              in school
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
              Empower schools with age-appropriate coding education,
              logical thinking, and future-ready digital skills.
            </p>

            <Link to="/join-school">
              <button
                className="
                  mt-8 px-8 py-3
                  rounded-full
                  bg-black text-white
                  font-medium
                  hover:bg-gray-900
                  transition
                  shadow-md
                "
              >
                Join as a School
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
