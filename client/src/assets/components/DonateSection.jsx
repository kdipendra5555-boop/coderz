import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DonateSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F6FBF7] to-[#EEF6F0] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 sm:p-12">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Support coding education <br />
                for school students
              </h2>

              <p className="mt-5 text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                Your donation helps us bring quality coding education,
                logical thinking, and future-ready skills to students
                studying in schools across India.
              </p>

              {/* IMPACT POINTS */}
              <div className="mt-6 space-y-2 text-sm text-gray-700">
                <p>✔ Free coding workshops in schools</p>
                <p>✔ Learning resources for students</p>
                <p>✔ Teacher training & curriculum support</p>
              </div>

              {/* CTA (ROUTED) */}
              <Link
                to="/donate"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
                }
                className="
                  mt-8 inline-flex items-center justify-center
                  px-8 py-3 rounded-full
                  bg-emerald-600 text-white font-semibold
                  shadow-md hover:shadow-lg
                  hover:bg-emerald-700
                  hover:-translate-y-0.5 transition
                "
              >
                Donate Now
              </Link>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-6 text-center">

              <StatCard
                value="100+"
                label="Schools Reached"
                bg="bg-emerald-50"
                text="text-emerald-600"
              />

              <StatCard
                value="10K+"
                label="Students Impacted"
                bg="bg-indigo-50"
                text="text-indigo-600"
              />

              <StatCard
                value="500+"
                label="Workshops Conducted"
                bg="bg-purple-50"
                text="text-purple-600"
              />

              <StatCard
                value="50+"
                label="Trainers & Mentors"
                bg="bg-gray-50"
                text="text-gray-700"
              />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* -------- STAT CARD -------- */
function StatCard({ value, label, bg, text }) {
  return (
    <div className={`${bg} rounded-2xl p-6 shadow-sm`}>
      <h3 className={`text-3xl font-bold ${text}`}>{value}</h3>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
}
