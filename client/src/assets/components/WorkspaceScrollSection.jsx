import { Link } from "react-router-dom";

export default function WorkspaceScrollSection() {
  return (
    <section className="bg-[#E9E3FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SCROLL CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[200vh]">

          {/* LEFT – STICKY */}
          <div className="relative">
            <div className="sticky top-28 h-fit flex flex-col justify-center py-24">

              <p className="text-gray-700 font-semibold mb-3">
                Learning Domains
              </p>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Explore future-ready <br />
                tech skill areas:
              </h1>

              {/* ROUTED CTA */}
              <Link
                to="/courses"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant", // or "smooth"
                  });
                }}
                className="
    inline-block
    mt-8 w-fit px-8 py-4 rounded-full
    bg-black text-white font-semibold
    hover:bg-gray-900 transition
  "
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* RIGHT – SCROLLING CARDS */}
          <div className="flex flex-col gap-8 py-24">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm max-w-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- DATA ---------------- */

const cards = [
  {
    title: "Artificial Intelligence",
    desc: "Learn how intelligent systems work, from basic AI concepts to real-world applications that power modern technology.",
  },
  {
    title: "Machine Learning",
    desc: "Understand how machines learn from data, build predictive models, and improve performance without explicit programming.",
  },
  {
    title: "DevOps & Web3",
    desc: "Explore modern deployment practices, cloud infrastructure, automation, and emerging Web3 technologies.",
  },
  {
    title: "Web Development",
    desc: "Build responsive and dynamic websites using frontend and backend technologies with real-world project experience.",
  },
  {
    title: "Data Science",
    desc: "Analyze data, uncover insights, and solve problems using statistics, programming, and data-driven approaches.",
  },
  {
    title: "Computer Subjects",
    desc: "Strengthen core computer science fundamentals including operating systems, networks, databases, and algorithms.",
  },
  {
    title: "Data Analytics",
    desc: "Learn to interpret data, create visualizations, and make informed decisions using analytical tools and techniques.",
  },
];
