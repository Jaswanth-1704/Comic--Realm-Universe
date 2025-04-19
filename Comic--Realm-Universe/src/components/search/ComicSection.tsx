import React from "react";
import { motion } from "framer-motion";
import { Star, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Comic {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
  genres: string[];
}

interface ComicSectionProps {
  Comics: Comic[];
}

const ComicSection = ({ Comics }: ComicSectionProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-['Bangers'] text-xl text-black dark:text-white">Featured Comics</h3>
        <motion.button
          type="button"
          whileTap={{ scale: 0.92, boxShadow: '0 0 18px 2px #FFD70088' }}
          className="manga-button border border-black bg-white text-black transition-all duration-150 px-4 py-2 rounded-md flex items-center gap-2 focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-white shadow-sm hover:shadow-lg active:scale-95 focus:scale-95"
        >
          <Filter size={16} className="mr-2" /> Filter Comics
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Comics.map((comic, index) => (
          <motion.div
            key={comic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-lg border-3 border-black overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer group"
          >
            <div className="relative aspect-[2/3] overflow-hidden">
              <img
                src={comic.cover}
                alt={comic.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-[#FFD700] text-black border-2 border-black font-['Bangers']">
                  <Star size={14} className="mr-1" fill="black" />
                  {comic.rating}
                </Badge>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-['Bangers'] text-xl mb-1 line-clamp-1 text-black dark:text-white">
                {comic.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 font-['Comic_Neue']">
                {comic.author}
              </p>
              <div className="flex flex-wrap gap-2">
                {comic.genres.map((genre, idx) => (
                  <Badge
                    key={idx}
                    className="bg-[#E5E7EB] text-black border border-black font-['Comic_Neue']"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ComicSection;
