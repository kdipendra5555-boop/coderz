import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FocusSection() {
  return (
    <section className="bg-[#F7F9F8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            What we focus on
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            At Coderz Cafe, we help college and school students to build strong
            foundations in coding, logic, and problem-solving
            through structured learning and guidance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Item 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-full bg-[#E6F0EA] flex items-center justify-center mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5F8D6B]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Coding Foundations
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Age-appropriate coding concepts taught step-by-step
              to help students learn with clarity.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-full bg-[#E6F0EA] flex items-center justify-center mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5F8D6B]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Logical Thinking
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Students develop problem-solving skills that help
              them think clearly and independently.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-full bg-[#E6F0EA] flex items-center justify-center mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5F8D6B]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Guided Mentorship
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Continuous guidance and support to ensure students
              learn confidently and responsibly.
            </p>
          </motion.div>

        </div>

        {/* CTA WITH ROUTE */}
        <div className="mt-14 text-center">
          <Link
            to="/our-approach"
            className="
              inline-block
              px-8 py-3 rounded-full
              bg-[#1F2933] text-white
              text-sm sm:text-base font-medium
              hover:bg-black transition
            "
          >
            Learn More About Our Approach
          </Link>
        </div>

      </div>
    </section>
  );
}
