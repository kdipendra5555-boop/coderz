import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  CheckCircle,
  BookOpen,
  Dumbbell,
  Users,
  Trophy,
  Briefcase,
} from "lucide-react";

const steps = [
  { title: "Explore", desc: "Discover programs, challenges, and learning opportunities designed for your growth.", icon: Compass },
  { title: "Select", desc: "Choose the right learning path based on your interests and future goals.", icon: CheckCircle },
  { title: "Learn", desc: "Learn concepts step-by-step through structured lessons and mentor guidance.", icon: BookOpen },
  { title: "Practice", desc: "Practice regularly with hands-on exercises and real-world problems.", icon: Dumbbell },
  { title: "Participate", desc: "Participate in hackathons, competitions, and collaborative activities.", icon: Users },
  { title: "Be a Winner", desc: "Showcase your skills, stand out, and gain recognition for your work.", icon: Trophy },
  { title: "Gain Experience", desc: "Build confidence and experience that prepares you for future opportunities.", icon: Briefcase },
];

export default function LearningJourney() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /**
   * 🔑 KEY FIX
   * - Cards total width ≈ 7 * 300px + gaps
   * - Translate enough pixels so last card fully comes into view
   */
  const x = useTransform(scrollYProgress, [0, 1], [0, -1600]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* TOP SPACE */}
      <div className="h-24 bg-white" />

      <section
        ref={sectionRef}
        className="
          relative
          bg-[#F7F9F8]
          h-[320vh]   /* 🔥 MORE SCROLL ROOM */
        "
      >
        {/* STICKY VIEW */}
        <div className="sticky top-24 h-[calc(100vh-6rem)] flex flex-col justify-center overflow-hidden">

          {/* HEADING */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Our 7-Step Learning Journey
            </h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              Scroll down to smoothly move forward in your learning journey.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative px-12">

            {/* BASE LINE */}
            <div className="absolute top-6 left-0 w-full h-[2px] bg-[#E2E8E5]" />

            {/* ANIMATED LINE */}
            <motion.div
              style={{ width: lineWidth }}
              className="absolute top-6 left-0 h-[2px] bg-[#5F8D6B]"
            />

            {/* CARDS */}
            <motion.div
              style={{ x }}
              className="flex gap-10 pt-12 will-change-transform"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 180 }}
                    className="
                      relative
                      min-w-[260px] sm:min-w-[280px]
                      bg-white
                      rounded-2xl
                      p-6
                      shadow-sm
                      hover:shadow-md
                    "
                  >
                    {/* DOT */}
                    <div className="absolute -top-[14px] left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-[#5F8D6B] border-4 border-white shadow" />
                    </div>

                    {/* ICON */}
                    <div className="w-10 h-10 rounded-full bg-[#E6F0EA]
                      flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[#5F8D6B]" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* BOTTOM SPACE */}
      <div className="h-24 bg-white" />
    </>
  );
}
