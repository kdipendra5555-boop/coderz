import React from "react";
import { Link } from "react-router-dom";

export default function ProgramsSection() {
  return (
    <section className="bg-[#F9FAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">

        {/* HEADER */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-indigo-600 mb-3">
            Our Programs
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Structured learning for every stage
          </h2>

          <p className="mt-5 text-base text-gray-600 leading-relaxed">
            Each program is carefully designed to match a child’s age,
            curiosity, and learning ability — building strong foundations for
            the future.
          </p>
        </div>

        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Primary Program",
              age: "Classes 1 – 5",
              desc: "Focus on curiosity, logical thinking, and basic coding concepts through play-based learning.",
              link: "/primary",
            },
            {
              title: "Middle School Program",
              age: "Classes 6 – 8",
              desc: "Develop problem-solving skills, structured coding, and computational thinking.",
              link: "/middle",
            },
            {
              title: "Senior Program",
              age: "Classes 9 – 12",
              desc: "Advanced concepts including real-world projects, AI basics, and career-oriented skills.",
              link: "/senior",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {item.age}
              </p>

              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <Link
                to={item.link}
                className="inline-block mt-6 text-sm font-medium text-indigo-600 hover:underline"
              >
                View program →
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
