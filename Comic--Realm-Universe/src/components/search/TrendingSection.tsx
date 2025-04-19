import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";

interface TrendingTopic {
  id: number;
  name: string;
  count: string;
}

interface TrendingSectionProps {
  trendingTopics: TrendingTopic[];
}

const TrendingSection = ({ trendingTopics }: TrendingSectionProps) => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8 px-2"
      >
        <Zap className="text-[#FFD700] animate-pulse" size={32} />
        <h3 className="font-['Bangers'] text-2xl md:text-3xl bg-gradient-to-r from-[#FFD700] to-[#FF3860] bg-clip-text text-transparent drop-shadow-lg">
          Hot in Comic Universe
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {trendingTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            whileHover={{ scale: 1.035, boxShadow: '0 8px 32px 0 #FFD70055' }}
            whileTap={{ scale: 0.98, rotate: -2 }}
            className="relative flex flex-col justify-between bg-white/90 dark:bg-gray-900/80 border-2 border-black dark:border-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden min-h-[110px]"
          >
            <motion.div
              className="absolute -top-5 -left-5 rotate-12 z-0"
              animate={{ x: [0, 10, -10, 0], opacity: [0.15, 0.23, 0.15, 0.15] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="block w-16 h-16 bg-[#FFD700] rounded-full blur-2xl opacity-70"></span>
            </motion.div>
            <div className="flex items-center gap-4 z-10 relative">
              <span className="font-['Bangers'] text-2xl md:text-3xl text-[#FF3860] bg-[#FFD700] w-11 h-11 flex items-center justify-center rounded-full border-2 border-black group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#FF3860] group-hover:text-[#FFD700] transition-all duration-300">
                #{index + 1}
              </span>
              <div>
                <h3 className="font-['Comic_Neue'] font-bold text-lg md:text-xl group-hover:text-[#FF3860] dark:group-hover:text-[#FFD700] transition-colors text-black dark:text-white">
                  {topic.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-['Comic_Neue']">
                  {topic.count}
                </p>
              </div>
            </div>
            <motion.div
              className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              initial={{ scale: 0.7, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <TrendingUp size={28} className="text-[#FFD700] drop-shadow-lg" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
