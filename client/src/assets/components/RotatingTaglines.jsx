import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Code2,
  Rocket,
  Users,
  CheckCircle,
  Sparkles,
  PlayCircle,
  Flame,
} from "lucide-react";

export default function RotatingTaglines() {
  const lines = [
    {
      text: "Learn by Doing. Build for the Real World.",
      icon: Code2,
    },
    {
      text: "From Beginner to Builder — Start Coding Today",
      icon: Rocket,
    },
    {
      text: "More Than Courses, We Build Coders",
      icon: Users,
    },
    {
      text: "Practice • Projects • Progress",
      icon: CheckCircle,
    },
    {
      text: "Code Smarter. Create Better.",
      icon: Sparkles,
    },
    {
      text: "Your Coding Journey Starts Here",
      icon: PlayCircle,
    },
    {
      text: "Turning Passion Into Programming",
      icon: Flame,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const Icon = lines[index].icon;

  return (
    <div className="h-20 flex justify-center items-center overflow-hidden -mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {/* ICON */}
          <Icon className="text-indigo-600" size={26} />

          {/* TEXT */}
          <p
            className="
              text-xl md:text-2xl
              font-semibold
              text-gray-700
              tracking-wide
              text-center
            "
          >
            {lines[index].text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
