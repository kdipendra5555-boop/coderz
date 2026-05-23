import { Users, Star, BookOpen, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ===== COUNT UP (STARTS ONLY ON VIEW) ===== */
function useCountUp(target, startAnimation, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, startAnimation, duration]);

  return count;
}

export default function HappyLearners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const learners = useCountUp(25000, isInView);
  const courses = useCountUp(120, isInView);
  const rating = useCountUp(48, isInView); // 4.8
  const completion = useCountUp(95, isInView);

  const stats = [
    {
      icon: Users,
      value: `${learners.toLocaleString()}+`,
      label: "Happy Learners",
    },
    {
      icon: BookOpen,
      value: `${courses}+`,
      label: "Quality Courses",
    },
    {
      icon: Star,
      value: `${(rating / 10).toFixed(1)}/5`,
      label: "Average Rating",
    },
    {
      icon: Award,
      value: `${completion}%`,
      label: "Completion Rate",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-indigo-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Trusted by thousands of happy learners
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join learners across India who are building real-world skills and
            advancing their careers with Coderz Cafe.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="
                  relative bg-white rounded-2xl border
                  p-8 text-center
                  shadow-sm hover:shadow-2xl
                  transition
                "
              >
                {/* HOVER GLOW RING */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-indigo-200 transition" />

                {/* ICON */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Icon className="text-indigo-600" size={28} />
                  </div>
                </motion.div>

                {/* VALUE */}
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {item.value}
                </h3>

                {/* LABEL */}
                <p className="mt-2 text-sm text-gray-600 tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
