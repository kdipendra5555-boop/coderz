export default function WorkspaceSection() {
  return (
    <section className="w-full min-h-screen bg-[#E9E3FF] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-semibold text-gray-700">
              Google Workspace
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Enjoy Google Workspace <br />
            built into your email with:
          </h1>

          <button
            className="mt-8 w-fit px-8 py-4 rounded-full
            bg-black text-white font-semibold
            hover:bg-gray-900 transition"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT SCROLLABLE CARDS */}
        <div className="relative">
          <div
            className="h-[420px] overflow-y-auto pr-2 space-y-6
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm"
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
    title: "Security you can trust",
    desc: "Keep your inbox and users safe with anti-phishing and spam protection that blocks more than 99.9% of attacks.",
  },
  {
    title: "Plenty of storage",
    desc: "Store up to 5TB securely in the cloud, far more than a personal account.",
  },
  {
    title: "Professional business email",
    desc: "Create a professional email address that matches your domain name.",
  },
  {
    title: "Collaboration tools",
    desc: "Work together in real time with Docs, Sheets, Slides, and Meet.",
  },
  {
    title: "Admin control",
    desc: "Easily manage users, devices, and security settings from one place.",
  },
  {
    title: "Anywhere access",
    desc: "Access your work from anywhere, on any device, anytime.",
  },
  {
    title: "Reliable uptime",
    desc: "Google Workspace offers industry-leading uptime and reliability.",
  },
];
