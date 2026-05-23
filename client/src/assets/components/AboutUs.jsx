import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {

  // Basic SEO (React 19 safe)
  useEffect(() => {
    document.title =
      "About Coderz Cafe | Coding for School, College & Passionate Coders";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Coderz Cafe is a modern learning and community-driven platform for school students, college learners, and passionate coders to learn coding and grow with technology."
      );
    }
  }, []);

  const stats = [
    { value: "50+", label: "Schools & Colleges" },
    { value: "5,000+", label: "Students Impacted" },
    { value: "100+", label: "Projects Built" },
    { value: "10+", label: "Tech Programs" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#F6FBF7] to-[#EEF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            About Coderz Cafe
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            A Place Where Learning, Coding, and Curiosity Come Together
          </p>
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            "photo-1522202176988-66273c2fd55f",
            "photo-1531482615713-2afd69097998",
            "photo-1519389950473-47ba0277781c",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={`https://images.unsplash.com/${img}`}
              alt="Coderz Cafe learning environment"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + i * 0.1 }}
              className="h-72 w-full rounded-3xl object-cover shadow-lg"
            />
          ))}
        </div>

        {/* ================= INTRO ================= */}
        <div className="mt-20 max-w-4xl mx-auto space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            <strong>Coderz Cafe</strong> is a modern learning and community-driven
            platform built for school students, college learners, and passionate
            coders who want to learn, explore, and grow through technology.
          </p>

          <p>
            We believe that coding is not just a subject or a career option —
            it is a powerful skill and mindset that helps individuals think
            logically, solve problems creatively, and build solutions for the
            real world. At Coderz Cafe, we aim to make coding simple, practical,
            and accessible for everyone, regardless of age, background, or prior
            experience.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-md"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= OUR MISSION ================= */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Our mission is to simplify coding education and make it meaningful
            for learners at every stage.
          </p>

          <ul className="mt-6 list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg">
            <li>Introduce coding at the school level in a fun and age-appropriate way</li>
            <li>Help college students develop practical, industry-relevant skills</li>
            <li>Support passionate learners and self-taught coders in building strong foundations</li>
            <li>Encourage logical thinking, creativity, and problem-solving through hands-on learning</li>
          </ul>

          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            We focus less on memorization and more on understanding,
            experimentation, and real-world application.
          </p>
        </div>

        {/* ================= WHAT WE DO ================= */}
        <div className="mt-24 max-w-4xl mx-auto space-y-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            What We Do
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">For Schools</h3>
            <p className="mt-2 text-gray-700 text-base sm:text-lg">
              We partner with schools to introduce students to coding and digital
              skills from an early stage. Our school programs focus on building
              logical thinking and computational skills, making learning
              interactive and engaging, and encouraging creativity through
              projects and activities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              For College Students
            </h3>
            <p className="mt-2 text-gray-700 text-base sm:text-lg">
              For college learners, we provide skill-focused programs that bridge
              the gap between theory and practice. Our approach helps students
              gain hands-on experience with real projects, strengthen core
              programming concepts, and prepare for internships, careers, and
              advanced learning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              For Passionate Coders
            </h3>
            <p className="mt-2 text-gray-700 text-base sm:text-lg">
              Coderz Cafe is also a space for individuals who learn coding out of
              curiosity and passion. Whether you are a beginner or an experienced
              learner, we help you improve your problem-solving skills, explore
              modern technologies such as web development and AI, and build
              confidence through continuous learning and practice.
            </p>
          </div>
        </div>

        {/* ================= LEARNING APPROACH ================= */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Learning Approach
          </h2>

          <ul className="mt-6 list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg">
            <li>Project-based learning</li>
            <li>Clear and simple explanations</li>
            <li>Step-by-step skill development</li>
            <li>Real-world examples and use cases</li>
            <li>A supportive and learner-friendly environment</li>
          </ul>

          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            We encourage learners to ask questions, experiment freely, and grow
            at their own pace.
          </p>
        </div>

        {/* ================= WHO IS IT FOR ================= */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Who Coderz Cafe Is For
          </h2>

          <ul className="mt-6 list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg">
            <li>School students discovering coding for the first time</li>
            <li>College students seeking practical technical skills</li>
            <li>Passionate coders learning independently</li>
            <li>Educators and institutions looking for modern tech education support</li>
          </ul>

          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            There are no age limits or strict entry barriers — only curiosity and
            a willingness to learn.
          </p>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Why Choose Coderz Cafe
          </h2>

          <ul className="mt-6 list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg">
            <li>Beginner-friendly and inclusive learning environment</li>
            <li>Practical, skill-focused programs</li>
            <li>Emphasis on real-world problem solving</li>
            <li>Community-driven learning culture</li>
            <li>Continuous guidance and support</li>
          </ul>

          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            We don’t just teach coding — we help learners build confidence,
            discipline, and a strong technical mindset.
          </p>
        </div>

        {/* ================= VISION ================= */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Vision
          </h2>

          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Our vision is to create a learning ecosystem where anyone with
            curiosity can learn to code, build meaningful projects, and grow
            with technology.
          </p>

          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            We aim to reach learners across schools, colleges, and communities,
            and empower them with skills that remain relevant in a fast-changing
            digital world.
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-28 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Join the Coderz Cafe Community
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-base sm:text-lg">
            Whether you are a school looking to introduce coding, a college
            student preparing for the future, or a passionate coder eager to
            learn and build — Coderz Cafe is your place to learn, grow, and
            create.
          </p>

          <p className="mt-3 text-gray-700">
            Together, let’s shape the future — one line of code at a time.
          </p>

          <button className="mt-8 px-10 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition shadow-md">
            Get Started with Coderz Cafe
          </button>
        </div>

      </div>
    </section>
  );
}
