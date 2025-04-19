import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bookmark,
  BookOpen,
  Clock,
  Heart,
  MessageSquare,
  Star,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFeed } from "@/contexts/FeedContext";
import Sidebar from "@/components/Sidebar";

const BookmarkCard = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-lg border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="aspect-[4/5] w-full relative">
      <img
        src={post.images?.[0] || post.image || "/placeholder.svg"}
        alt={post.title || post.content}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-4 text-white w-full">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <div className="flex-1 truncate">
              <h3 className="font-['Mori'] text-sm font-bold">
                {post.user.name}
              </h3>
              <p className="font-['Comic_Neue'] text-xs opacity-90">
                @{post.user.username}
              </p>
            </div>
          </div>
          <p className="font-['Comic_Neue'] text-sm line-clamp-3 mb-2">
            {post.content}
          </p>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Heart size={14} /> {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare size={14} /> {post.comments}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full"
            >
              <Star
                size={16}
                className="text-yellow-400"
                fill={post.bookmarked ? "currentColor" : "none"}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Bookmarks = () => {
  const { posts } = useFeed();
  const bookmarkedPosts = posts.slice(0, 8);

  return (
    <div className="flex min-h-screen bg-[#FFF9EC] dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="Comic-panel w-full p-4 md:p-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-['Mori'] text-black dark:text-white">
                Your Bookmarks
              </h1>
              <motion.button
                whileTap={{ scale: 0.92, rotate: -6 }}
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                className="Comic-button bg-white hover:bg-white border-black text-black dark:bg-gray-900 dark:text-white dark:border-white flex items-center px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              >
                <Clock size={18} className="mr-2" /> Recent
              </motion.button>
            </div>
            <p className="font-['Comic_Neue'] text-gray-700 dark:text-gray-300 text-lg">
              Save posts to read later or revisit your favorite content!
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="mt-8">
            <TabsList className="w-full bg-[#FFF9EC] dark:bg-gray-900 border-b-2 border-black dark:border-white">
              <TabsTrigger
                value="all"
                className="flex-1 font-['Mori'] text-lg
                  data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black
                  dark:data-[state=active]:bg-[#FFD700] dark:data-[state=active]:text-black dark:data-[state=active]:border-white
                  rounded-t-lg dark:bg-gray-900 dark:text-white transition-colors"
              >
                All Bookmarks
              </TabsTrigger>
              <TabsTrigger
                value="posts"
                className="flex-1 font-['Mori'] text-lg
                  data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black
                  dark:data-[state=active]:bg-[#FF3860] dark:data-[state=active]:text-white dark:data-[state=active]:border-white
                  rounded-t-lg dark:bg-gray-900 dark:text-white transition-colors"
              >
                <Bookmark size={16} className="mr-2" /> Posts
              </TabsTrigger>
              <TabsTrigger
                value="stories"
                className="flex-1 font-['Mori'] text-lg
                  data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black
                  dark:data-[state=active]:bg-[#00A7E1] dark:data-[state=active]:text-white dark:data-[state=active]:border-white
                  rounded-t-lg dark:bg-gray-900 dark:text-white transition-colors"
              >
                <BookOpen size={16} className="mr-2" /> Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {bookmarkedPosts.length > 0 ? (
                  bookmarkedPosts.map((post) => (
                    <BookmarkCard key={post.id} post={post} />
                  ))
                ) : (
                  <div className="col-span-full">
                    <EmptyBookmarks />
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="posts" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {bookmarkedPosts.slice(0, 6).map((post) => (
                  <BookmarkCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stories" className="mt-6">
              <EmptyBookmarks type="stories" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const EmptyBookmarks = ({ type = "bookmarks" }) => (
  <Card className="border-4 border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
    <CardContent className="p-8 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Bookmark size={64} className="mx-auto mb-4 text-gray-400 dark:text-gray-500" />
        <p className="text-2xl font-['Mori'] mb-4 dark:text-white">No {type} yet!</p>
        <p className="font-['Comic_Neue'] mb-6 dark:text-gray-300">
          {type === "stories"
            ? "Start bookmarking exciting Comic stories to read later!"
            : "Save posts by clicking the bookmark icon to read them later!"}
        </p>
        <Button className="comic-button bg-[#FF3860] hover:bg-[#FF3860] text-white border-black dark:border-white">
          {type === "stories" ? "Discover Stories" : "Explore Posts"}
        </Button>
      </motion.div>
    </CardContent>
  </Card>
);

export default Bookmarks;
