import React from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"
        />

        <div className="relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-6xl md:text-7xl font-comic-accent font-bold text-black dark:text-white mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Your Social Universe for{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F79] to-[#4FC4FF]"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                    color: ["#FF4F79", "#4FC4FF"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Comic Fans
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-comic-body mb-8"
              whileHover={{ scale: 1.01 }}
            >
              Connect with fellow comic enthusiasts, share your favorite
              moments, and discover new stories in a community made for true
              fans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 font-bold border-4 border-[#FF3860] shadow-[8px_8px_0px_#FF3860] transition-all duration-200 text-white bg-gradient-to-r from-[#FF3860] via-[#4FC4FF] to-[#FF3860] bg-[length:200%_200%] bg-left hover:bg-right hover:shadow-[4px_4px_0px_#FF3860]"
                  asChild
                >
                  <Link to="/feed">Join the Universe</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-[#23272f] to-[#4FC4FF] text-white font-bold border-4 border-[#4FC4FF] shadow-[8px_8px_0px_#4FC4FF] hover:from-[#4FC4FF] hover:to-[#23272f] hover:shadow-[4px_4px_0px_#4FC4FF] transition-all duration-200"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced decorative elements with more dynamic animations */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [-10, 10, -10],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 -left-4 w-24 h-24 bg-[#FF4F79] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [10, -10, 10],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 -right-4 w-24 h-24 bg-[#4FC4FF] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [-5, 5, -5],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/2 left-1/2 w-24 h-24 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
