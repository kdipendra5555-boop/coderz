import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const subtitles = [
  "with powerful tools to build smarter",
  "with powerful tools to create unique",
  "with powerful tools to make easier",
];

export default function AiTool() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white flex items-center relative overflow-hidden px-6 md:px-12">
      
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">

        {/* LEFT IMAGE */}
        <img
          src="/Group 49 (1).jpg"
          alt="AI Illustration"
          className="
            w-[220px]
            md:w-[320px]
            lg:w-[380px]
            rounded-b-3xl
            mt-6
            ml-4
            md:mt-10
            md:ml-8
          "
        />

        {/* RIGHT TEXT */}
        <div className="text-center md:text-left -mt-4">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black -mt-2">
            Explore Best AI
          </h1>

          {/* 🔥 AUTO-CHANGING SUBTITLE */}
          <div className="relative h-[1.6em] my-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute w-full text-lg md:text-xl text-gray-800"
              >
                {subtitles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* EXPLORE USE BUILD */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex justify-center md:justify-start gap-3">
            <motion.span
              animate={{ color: ["#000000", "#14b8a6", "#2563eb", "#000000"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Explore!
            </motion.span>

            <motion.span
              animate={{ color: ["#14b8a6", "#2563eb", "#000000", "#14b8a6"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Use!
            </motion.span>

            <motion.span
              animate={{ color: ["#2563eb", "#000000", "#14b8a6", "#2563eb"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Build!
            </motion.span>
          </h2>
        </div>
      </div>

       

      {/* 🔥 BOTTOM GRADIENT */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "300% 300%",
          backgroundImage:
            "linear-gradient(90deg, #205d8bff, #2e2828ff, #27464dff)",
        }}
      />

     
    </section>

    

    
  );
}
