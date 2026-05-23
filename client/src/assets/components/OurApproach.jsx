import { motion } from "framer-motion"
import Navbar from "./Navbar";
import {
  Layers,
  TrendingUp,
  Code2,
  Users,
  ShieldCheck,
} from "lucide-react";


const steps = [
  {
    id: 1,
    title: "Strong Foundations",
    subtitle: "School Students",
    desc: "We introduce young learners to coding through logic, structured thinking, and simple problem-solving. The goal is to build clarity, curiosity, and confidence from an early stage.",
    icon: Layers,
  },
  {
    id: 2,
    title: "Progressive Learning",
    subtitle: "Middle & Senior Classes",
    desc: "As students grow, we move toward structured programming, algorithms, and real-life problem scenarios that strengthen analytical and independent thinking.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Practical Skill Building",
    subtitle: "College Level",
    desc: "College students focus on hands-on development, projects, tools, and workflows that help bridge the gap between academic learning and industry needs.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Mentorship & Career Guidance",
    subtitle: "All Learners",
    desc: "Continuous mentorship, doubt support, and guidance on projects, competitions, internships, and career direction based on each learner’s stage.",
    icon: Users,
  },
  {
    id: 5,
    title: "Responsible & Ethical Learning",
    subtitle: "Core Values",
    desc: "We emphasize ethics, teamwork, discipline, and responsible use of technology—skills that matter beyond coding and careers.",
    icon: ShieldCheck,
  },
];

export default function OurApproach() {
  return (
    <section className="bg-[#F7F9F8] py-28">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Our Learning Approach
          </h1>
          <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            A thoughtfully designed journey that supports students from
            school foundations to college-ready, real-world skills —
            with mentorship at every step.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="hidden sm:block absolute left-1/2 top-0 w-px bg-[#DDE8E2]"
          />

          <div className="space-y-24">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="relative grid grid-cols-1 sm:grid-cols-2 gap-12 items-center"
                >
                  {/* CARD */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`${
                      isLeft ? "sm:pr-20" : "sm:pl-20 sm:col-start-2"
                    }`}
                  >
                    <div className="bg-white rounded-3xl p-9 shadow-sm hover:shadow-md transition">
                      <div className="flex items-center gap-5 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-[#E6F0EA] flex items-center justify-center">
                          <Icon className="text-[#5F8D6B]" size={26} />
                        </div>

                        <div>
                          <h2 className="text-lg font-semibold text-gray-900">
                            {step.title}
                          </h2>
                          <p className="text-xs uppercase tracking-wide text-gray-500">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* DOT */}
                  <div className="hidden sm:flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="w-5 h-5 rounded-full bg-[#5F8D6B] border-4 border-white shadow"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <p className="text-gray-700 text-sm sm:text-base">
            Interested in learning with us or partnering with Coderz Cafe?
          </p>
          <button
            className="
              mt-6 px-10 py-3 rounded-full
              bg-[#1F2933] text-white
              font-medium
              hover:bg-black transition
            "
          >
            Get in Touch
          </button>
        </div>

      </div>
      
    </section>
  );
}
