import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#F6FBF7]">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">

        {/* LABEL */}
        <span className="inline-block mb-3 text-sm font-medium text-[#2FBF9E]">
          About Coderz Café
        </span>

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0F1F3D] leading-snug">
          A Modern Learning Program
          <span className="block text-[#2FBF9E]">
            for School Students
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
          Coderz Café partners with schools to deliver structured coding and
          technology education for Classes 1 to 12 — focusing on clarity,
          creativity, and confidence.
        </p>

        {/* IMAGE */}
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop"
            alt="Students learning coding"
            className="w-full max-w-xl mx-auto h-64 object-cover rounded-xl"
          />
        </div>

        {/* EXTRA TEXT */}
        <p className="mt-8 text-sm text-gray-600 max-w-2xl mx-auto">
          We believe coding is not just about computers — it’s about developing
          logical thinking, problem-solving skills, and a growth mindset from an
          early age.
        </p>

        {/* FEATURES */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            {
              title: "School-Aligned Curriculum",
              desc: "Fits naturally into school schedules and academic goals.",
            },
            {
              title: "Age-Appropriate Learning",
              desc: "Separate learning paths for junior, middle, and senior students.",
            },
            {
              title: "Hands-On & Practical",
              desc: "Project-based learning that keeps students engaged.",
            },
            {
              title: "Expert Mentors",
              desc: "Experienced educators trained to teach young minds.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl p-5 text-left"
            >
              <h4 className="text-sm font-semibold text-[#0F1F3D]">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
