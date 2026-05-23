import {
  Code2,
  Braces,
  FileCode,
  Atom,
  Server,
  Boxes,
  Leaf,
  Flame,
  Coffee,
  Terminal,
} from "lucide-react";

export default function TechMarquee() {
  const techs = [
    { name: "HTML", icon: FileCode, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: Braces, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: Code2, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React Js", icon: Atom, url: "https://react.dev" },
    { name: "Node Js", icon: Server, url: "https://nodejs.org" },
    { name: "Express Js", icon: Boxes, url: "https://expressjs.com" },
    { name: "Django", icon: Leaf, url: "https://www.djangoproject.com" },
    { name: "Spring Boot", icon: Flame, url: "https://spring.io/projects/spring-boot" },
    { name: "PHP", icon: Code2, url: "https://www.php.net" },
    { name: "Java", icon: Coffee, url: "https://www.oracle.com/java/" },
    { name: "Python", icon: Terminal, url: "https://www.python.org" },
    { name: "C / C++", icon: FileCode, url: "https://en.cppreference.com" },
    { name: "Rust", icon: Code2, url: "https://www.rust-lang.org" },
  ];

  return (
    <div className="relative w-full bg-black py-6 overflow-hidden">

      {/* ===== INLINE CSS (NO CONFIG FILE) ===== */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          display: flex;
          gap: 3.5rem;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }

        .marquee-wrapper:hover .marquee {
          animation-play-state: paused;
        }

        .tech-text {
          background: linear-gradient(
            90deg,
            #f3f4f6,
            #d1d5db,
            #9ca3af
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          width: 90px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, black, transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, black, transparent);
        }
      `}</style>

      {/* BLUR EDGES */}
      <div className="fade-left" />
      <div className="fade-right" />

      {/* MARQUEE */}
      <div className="marquee-wrapper">
        <div className="marquee">

          {[...techs, ...techs].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4
                  text-2xl md:text-3xl font-semibold
                  cursor-pointer
                  hover:scale-105 transition
                "
              >
                {/* ICON */}
                <Icon size={28} className="text-gray-300" />

                {/* TEXT */}
                <span className="tech-text tracking-wide">
                  {tech.name}
                </span>
              </a>
            );
          })}

        </div>
      </div>
    </div>
  );
}
