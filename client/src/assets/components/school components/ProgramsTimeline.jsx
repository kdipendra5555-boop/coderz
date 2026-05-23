import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timeline = [
  {
    cls: "Class 1–3",
    title: "Foundation Level",
    desc: "Fun-based learning to develop curiosity, confidence, and logical thinking.",
  },
  {
    cls: "Class 4–5",
    title: "Beginner Coding",
    desc: "Block-based coding and structured problem-solving skills.",
  },
  {
    cls: "Class 6–7",
    title: "Core Programming",
    desc: "Introduction to Python and text-based programming concepts.",
  },
  {
    cls: "Class 8–9",
    title: "Application Development",
    desc: "Web development basics and real-world project building.",
  },
  {
    cls: "Class 10–12",
    title: "Advanced & Career Ready",
    desc: "Advanced coding, AI basics, and portfolio development.",
  },
];

export default function ProgramsBrandAligned() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-[#EAF7F3] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT – CONTENT */}
        <div>
          {/* Label */}
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-[#2FBF9E]/15 text-[#0F2A44] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#2FBF9E]" />
            Coderz Café Programs
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0F2A44]">
            Structured Learning <br />
            <span className="text-[#2FBF9E]">
              for Classes 1–12
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm leading-relaxed text-[#6B7280] max-w-md">
            Our programs are carefully designed to match each stage of a student’s
            school journey. From early curiosity to advanced problem-solving,
            Coderz Café builds strong foundations in coding and logical thinking.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#6B7280] max-w-md">
            The curriculum is school-aligned, age-appropriate, and focused on
            real-world application—without unnecessary pressure.
          </p>

          {/* Key highlights */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-[#1F2933]">
            {[
              "School-aligned curriculum",
              "Age-wise learning path",
              "Practical & project-based",
              "Future-ready skills",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#2FBF9E] font-bold">✔</span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button className="inline-flex items-center gap-2 bg-[#2FBF9E] text-[#0F2A44] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition">
              View Full Curriculum
              <span>→</span>
            </button>
          </div>
        </div>

        {/* RIGHT – TIMELINE */}
        <div className="bg-white rounded-[28px] p-10 relative overflow-hidden shadow-sm">

          {/* Vertical Line */}
          <div className="absolute left-8 top-10 bottom-10 w-[2px] bg-[#EAF7F3]" />
          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-8 top-10 w-[2px] bg-[#2FBF9E] origin-top"
          />

          <div className="space-y-10 relative z-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-5"
              >
                {/* DOT */}
                <div className="w-4 h-4 mt-1 rounded-full bg-[#2FBF9E]" />

                {/* CONTENT */}
                <div>
                  <span className="text-xs font-medium text-gray-400">
                    {item.cls}
                  </span>
                  <h4 className="text-base font-semibold text-[#1F2933] mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#6B7280] mt-1 max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
