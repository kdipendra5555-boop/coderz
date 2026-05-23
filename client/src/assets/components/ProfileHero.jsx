import { motion } from "framer-motion";

export default function ProfileHero() {
  return (
    <section
      className="
        w-full
        flex
        items-start md:items-center
        justify-center
        pt-20 md:pt-28
        px-4
      "
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-bold text-gray-700">
              DK
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
        >
          Dipendra Kumar
        </motion.h1>

        {/* Gradient Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="
            mt-2
            text-sm sm:text-base
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            animate-gradient
          "
        >
          Learner • Developer • Coderz Cafe
        </motion.p>
      </div>
    </section>
  );
}
