import { motion } from "framer-motion";
import AnimatedCard, { containerVariant } from "./AnimatedCard";

const skills = [
  {
    id: 1,
    title: "Python",
    theme: "Programming fundamentals and problem solving.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
  {
    id: 2,
    title: "C",
    theme: "Core programming concepts with logic building.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
  },
  {
    id: 3,
    title: "C++",
    theme: "Object-oriented programming and DSA basics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

export default function SkillsDevelopment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <h1 className="text-4xl font-bold text-center mb-14">
          Skills Development
        </h1>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skills.map((skill) => (
            <AnimatedCard
              key={skill.id}
              title={skill.title}
              theme={skill.theme}
              image={skill.image}
              accentGradient="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
