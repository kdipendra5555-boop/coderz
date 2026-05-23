import React, { useRef, useEffect } from "react";
import {
  BookOpen,
  Brain,
  Code2,
  Users,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseTimeline() {
  const scrollRef = useRef(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 1.2;
    const ease = 0.08;

    const animate = () => {
      currentScroll.current +=
        (targetScroll.current - currentScroll.current) * ease;

      el.scrollLeft = currentScroll.current;

      if (Math.abs(targetScroll.current - currentScroll.current) > 0.5) {
        requestAnimationFrame(animate);
      } else {
        isAnimating.current = false;
      }
    };

    const onWheel = (e) => {
      e.preventDefault();

      targetScroll.current += e.deltaY * speed;
      targetScroll.current = Math.max(
        0,
        Math.min(targetScroll.current, el.scrollWidth - el.clientWidth)
      );

      if (!isAnimating.current) {
        isAnimating.current = true;
        requestAnimationFrame(animate);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const steps = [
    {
      icon: BookOpen,
      title: "Strong Foundation",
      desc: "Clear concepts and age-appropriate learning to build confidence early.",
    },
    {
      icon: Brain,
      title: "Thinking First",
      desc: "Logical thinking before moving to tools or syntax.",
    },
    {
      icon: Code2,
      title: "Practical Skills",
      desc: "Hands-on projects connected to real-world use.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      desc: "Teamwork, communication, and creativity.",
    },
    {
      icon: Rocket,
      title: "Future Readiness",
      desc: "Digital skills and coding exposure.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Guided",
      desc: "Structured and supportive environment.",
    },
  ];

  return (
    <section className="bg-[#F6FBF7]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-medium text-[#2FBF9E]">
            Why Choose Coderz Café
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#0F2A44]">
            A guided learning journey
          </h2>

          <p className="mt-4 text-sm text-[#6B7280]">
            Scroll vertically to explore how we guide students step by step.
          </p>
        </div>

        {/* HORIZONTAL TRACK */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden pb-2 cursor-grab"
        >
          {steps.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] bg-white rounded-2xl p-6 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2FBF9E]/15 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#2FBF9E]" />
              </div>

              <h3 className="text-base font-semibold text-[#1F2933] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#6B7280] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
