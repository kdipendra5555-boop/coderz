import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaGithub,
  FaTelegram,
} from "react-icons/fa6";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-gray-400">
      {/* ⚠️ NOTE: no mt / pt from outside — footer sticks cleanly */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold text-white tracking-wide">
              Coderz Cafe
            </h2>

            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Helping school and college students build strong foundations
              in coding, logic, and future-ready digital skills.
            </p>

            
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Courses", path: "/courses" },
                { name: "Events", path: "/events" },
                { name: "Donate", path: "/donate" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollTop}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-sm">
              <li>📍 Kanpur, Uttar Pradesh</li>
              <li>📧 cafecoderz@gmail.com</li>
              <li>📞 +91 8303146551</li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-5">
              Stay in Touch
            </h3>

            <p className="text-sm mb-4">
              Updates on programs, workshops & learning journeys.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-[#020617] text-sm text-white
                  border border-gray-700
                  focus:outline-none
                  focus:ring-2 focus:ring-[#5F8D6B]
                "
              />
              <button
                type="submit"
                className="
                  w-full py-3 rounded-lg
                  bg-[#5F8D6B] text-white
                  text-sm font-medium
                  hover:bg-[#4E7C5E]
                  transition
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-16 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Coderz Cafe. All rights reserved.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">

              {/* You tube */}
              <Link to="https://youtube.com/@coderzcafe?si=NdiMesHrk8GZtIDy">
              <SocialIcon><FaYoutube /></SocialIcon>
              </Link>

              {/* Instagram */}
              <Link to="">
              <SocialIcon><FaInstagram /></SocialIcon>
              </Link>
              
              <Link>
              </Link>
              <SocialIcon><FaLinkedin /></SocialIcon>
              <SocialIcon><FaFacebook /></SocialIcon>
              <SocialIcon><FaXTwitter /></SocialIcon>
              <SocialIcon><FaGithub /></SocialIcon>
              <Link to="https://t.me/coderzcafe">
              <SocialIcon><FaTelegram /></SocialIcon>
              </Link>
              

            </div>

            <div className="flex gap-6">
              <Link to="/privacy-policy" onClick={scrollTop} className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={scrollTop} className="hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* 🔹 SOCIAL ICON */
function SocialIcon({ children }) {
  return (
    <div
      className="
        w-11 h-11 rounded-xl
        bg-white/5
        flex items-center justify-center
        text-gray-400
        hover:text-white
        hover:bg-[#5F8D6B]/20
        hover:-translate-y-1
        transition-all duration-300
        cursor-pointer
      "
    >
      {children}
    </div>
  );
}
