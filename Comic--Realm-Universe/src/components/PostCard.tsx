import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Post } from "@/types/feedTypes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Repeat2,
  Heart,
  Star,
  Share,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useFeed } from "@/contexts/FeedContext";

const alwaysCenterImages = [
  '/superman.jpg',
  '/ant man.jpg',
  '/ant-man.jpg',
  // Add more image filenames/paths here if needed
];

interface PostCardProps {
  post: Post;
  compact?: boolean; // New prop to control size
}

interface ImageFitFaceProps {
  src: string;
}

const ImageFitFace: React.FC<ImageFitFaceProps> = ({ src }) => {
  const [objectPos, setObjectPos] = useState<'object-top' | 'object-center'>('object-center');

  useEffect(() => {
    // If the image is in the always-center list, force object-center
    if (alwaysCenterImages.some((name) => src.toLowerCase().includes(name))) {
      setObjectPos('object-center');
    }
  }, [src]);

  return (
    <div className="w-full mt-2 aspect-[5/4] rounded-xl border-2 border-black dark:border-gray-600 overflow-hidden relative bg-gray-100 dark:bg-gray-800 max-h-[420px]">
      <img
        src={src}
        alt="Post visual"
        className={`absolute inset-0 w-full h-full object-cover ${objectPos}`}
        draggable="false"
        onLoad={e => {
          // Only auto-detect if not in the always-center list
          if (!alwaysCenterImages.some((name) => src.toLowerCase().includes(name))) {
            const img = e.currentTarget;
            if (img.naturalHeight > img.naturalWidth) {
              setObjectPos('object-top'); // Portrait: show top (face)
            } else {
              setObjectPos('object-center'); // Landscape: center
            }
          }
        }}
      />
    </div>
  );
};

const PostCard: React.FC<PostCardProps> = ({ post, compact = false }) => {
  const { likePost, bookmarkPost } = useFeed();
  const [isHovered, setIsHovered] = useState(false);
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);
  const [isBookmarkAnimating, setIsBookmarkAnimating] = useState(false);

  const handleLikeClick = () => {
    setIsLikeAnimating(true);
    likePost(post.id);
    // Reset after animation completes
    setTimeout(() => setIsLikeAnimating(false), 1000);
  };

  const handleBookmarkClick = () => {
    setIsBookmarkAnimating(true);
    bookmarkPost(post.id);
    // Reset after animation completes
    setTimeout(() => setIsBookmarkAnimating(false), 1000);
  };

  // Adjust styles based on the compact prop
  const cardClass = compact
    ? "action-panel rounded-sm overflow-hidden bg-white dark:bg-gray-900 border border-black dark:border-gray-700 p-2"
    : "action-panel rounded-lg overflow-hidden bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700";

  return (
    <motion.div
      className={cardClass}
      whileHover={{ y: -3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        boxShadow: compact ? "2px 2px 0px #000000" : "8px 8px 0px #000000",
      }}
    >
      <CardContent className="p-4 relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        {/* Profile and header section */}
        <div className="flex items-center gap-3 mb-3">
          <Link to={`/profile/${post.user.id}`}>
            <Avatar className="h-12 w-12 ring-2 ring-black dark:ring-gray-600">
              <AvatarImage src={post.user.avatar} alt={post.user.name} className="object-cover" />
              <AvatarFallback className="bg-[#FF4F79] text-white font-comic-accent">
                {post.user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold font-comic-accent text-black dark:text-white truncate">
                {post.user.name}
              </span>
              {post.user.verified && (
                <Badge className="h-5 bg-[#FFE66D] text-black border-2 border-black px-1 rounded-full flex items-center">
                  <Sparkles size={10} className="mr-1" />
                  <span className="text-xs">Pro</span>
                </Badge>
              )}
              <span className="text-muted-foreground text-sm font-comic-body dark:text-gray-400 truncate">
                @{post.user.username}
              </span>
              <span className="text-muted-foreground text-xs mx-1 dark:text-gray-400">
                · {formatDistanceToNow(post.createdAt, { addSuffix: true })}
              </span>
            </div>
          </div>
        </div>
        {/* Post content as a speech bubble */}
        <div className="relative mb-3">
          <div className="rounded-2xl border-2 border-black dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#333] font-comic-body text-base leading-relaxed">
            {post.content}
            {/* Optionally, add emoji rendering here if needed */}
          </div>
        </div>
        {/* Post image section */}
        {post.images && post.images.length > 0 && (
          <ImageFitFace src={post.images[0]} />
        )}
      </CardContent>
      {/* Reaction bar */}
      <CardFooter className="p-0">
        <div className="w-full flex justify-between items-center px-4 py-2 border-t-2 border-black dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-2xl">
          <motion.button
            className="flex items-center gap-1 text-[#4FC4FF] hover:text-[#0077A0] transition-colors dark:text-[#4FC4FF] dark:hover:text-[#0077A0]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageSquare size={18} />
            <span className="text-xs font-bold font-comic-accent">
              {post.comments}
            </span>
          </motion.button>
          <motion.button
            className="flex items-center gap-1 text-[#14B8A6] hover:text-[#0E8A7B] transition-colors dark:text-[#14B8A6] dark:hover:text-[#0E8A7B]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Repeat2 size={18} />
            <span className="text-xs font-bold font-comic-accent">
              {post.reposts}
            </span>
          </motion.button>
          <motion.button
            className="flex items-center gap-1 text-[#FF4F79] hover:text-[#CC2D4C] transition-colors dark:text-[#FF4F79] dark:hover:text-[#CC2D4C]"
            onClick={handleLikeClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {post.liked ? (
                <motion.div
                  key="liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1 text-[#FF4F79]"
                >
                  <motion.div
                    whileTap={{ scale: 1.4 }}
                    animate={
                      isLikeAnimating
                        ? { scale: [1, 1.5, 0.8, 1.2, 1] }
                        : { scale: 1 }
                    }
                    transition={
                      isLikeAnimating
                        ? {
                            duration: 0.8,
                            times: [0, 0.2, 0.5, 0.8, 1],
                            ease: "easeInOut",
                          }
                        : { type: "spring", stiffness: 400, damping: 17 }
                    }
                    className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000] dark:bg-gray-800 dark:border-gray-600 dark:shadow-[2px_2px_0px_#333]"
                  >
                    <Heart size={18} fill="currentColor" />
                  </motion.div>
                  <span className="text-xs font-bold font-comic-accent">
                    {post.likes}
                  </span>
                  {isLikeAnimating && (
                    <motion.div
                      className="absolute"
                      initial={{ opacity: 1, scale: 0.3, y: 0 }}
                      animate={{ opacity: 0, scale: 2, y: -30 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-[#FF4F79] text-xl opacity-70">
                        ❤️
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="not-liked"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="flex items-center gap-1 text-[#FF4F79] hover:text-[#CC2D4C]"
                >
                  <motion.div
                    className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000] dark:bg-gray-800 dark:border-gray-600 dark:shadow-[2px_2px_0px_#333]"
                    whileHover={{ y: -2 }}
                  >
                    <Heart size={18} />
                  </motion.div>
                  <span className="text-xs font-bold font-comic-accent">
                    {post.likes}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button
            className="flex items-center gap-1 text-[#FFE66D] hover:text-[#E0BC00] transition-colors dark:text-[#FFE66D] dark:hover:text-[#E0BC00]"
            onClick={handleBookmarkClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {post.bookmarked ? (
                <motion.div
                  key="bookmarked"
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 5, opacity: 0 }}
                  className="text-[#FFE66D]"
                >
                  <motion.div
                    whileTap={{ scale: 1.2 }}
                    animate={
                      isBookmarkAnimating
                        ? { rotate: [-10, 10, -10, 10, 0], y: [0, -5, 0] }
                        : { rotate: 0 }
                    }
                    transition={
                      isBookmarkAnimating
                        ? { duration: 0.6, ease: "easeInOut" }
                        : { type: "spring", stiffness: 400, damping: 17 }
                    }
                    className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000] dark:bg-gray-800 dark:border-gray-600 dark:shadow-[2px_2px_0px_#333]"
                  >
                    <Star size={18} fill="currentColor" />
                  </motion.div>
                  {isBookmarkAnimating && (
                    <motion.div
                      className="absolute top-0 right-0 left-0"
                      initial={{ opacity: 1, scale: 0.3, y: 0 }}
                      animate={{ opacity: 0, scale: 1.5, y: -20 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-[#FFE66D] text-xl flex justify-center">
                        ✨
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="not-bookmarked"
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  className="text-[#FFE66D] hover:text-[#E0BC00]"
                >
                  <motion.div
                    className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000] dark:bg-gray-800 dark:border-gray-600 dark:shadow-[2px_2px_0px_#333]"
                    whileHover={{ y: -2 }}
                  >
                    <Star size={18} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button
            className="flex items-center gap-1 text-[#8B5CF6] hover:text-[#6D45C6] transition-colors dark:text-[#8B5CF6] dark:hover:text-[#6D45C6]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0px_#000] dark:bg-gray-800 dark:border-gray-600 dark:shadow-[2px_2px_0px_#333]">
              <Share size={18} />
            </div>
          </motion.button>
        </div>
      </CardFooter>
    </motion.div>
  );
};

export default PostCard;
