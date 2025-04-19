import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  source: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="text-[#14B8A6]" />
        <h3 className="font-['Bangers'] text-xl text-black dark:text-white">Latest from Comic World</h3>
      </div>

      {news.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-lg border-3 border-black overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
        >
          <div className="md:flex">
            <div className="md:w-1/3 relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover aspect-video md:aspect-square transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                <Badge className="bg-[#14B8A6] border-2 border-white text-white">
                  {item.source}
                </Badge>
              </div>
            </div>
            <div className="p-4 md:w-2/3 md:border-l-3 md:border-black">
              <div className="hidden md:flex justify-between items-center mb-2">
                <Badge className="bg-[#14B8A6] border-2 border-black text-white font-['Comic_Neue']">
                  {item.source}
                </Badge>
                <span className="text-sm text-gray-500 dark:text-gray-300 font-['Comic_Neue']">
                  {item.date}
                </span>
              </div>
              <h3 className="font-['Bangers'] text-xl md:text-2xl mb-3 line-clamp-2 text-black dark:text-white">
                {item.title}
              </h3>
              <motion.button
                className="manga-button bg-[#FFD700] hover:bg-[#FFD700]/90 text-black border-2 border-black font-['Comic_Neue'] active:scale-95 focus:scale-95 transition-all duration-150 shadow-md hover:shadow-xl focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 px-6 py-2 rounded-md mt-2"
                whileTap={{ scale: 0.92, boxShadow: '0 0 18px 2px #FFD70088' }}
                type="button"
              >
                Read Full Story
              </motion.button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default NewsSection;
