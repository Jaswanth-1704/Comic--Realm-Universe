import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useFeed } from "@/contexts/FeedContext";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import { formatDistanceToNow } from "date-fns";

const Profile = () => {
  const { currentUser, posts } = useFeed();

  // Filter posts to show only the current user's posts
  let userPosts = posts.filter((post) => post.user?.id === currentUser?.id);
  // Add 2 extra posts from other users (not the same as current user's posts)
  const extraPosts = posts.filter((post) => post.user?.id !== currentUser?.id).slice(0, 2);
  userPosts = [...userPosts, ...extraPosts];

  const comicImages = [
    "/iron-man.jpg",
    "/Thor.jpg",
    "/Batman_1_preview_2.jpg",
    "/Deadpool.jpg",
    "/loki.jpg",
    "/wonder-woman-new-comic-daniel-sa.jpg",
    "/Victor Doom.jpg",
    "/vision.jpg",
  ];

  return (
    <div className="flex min-h-screen bg-[#FFF9EC] dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="Comic-panel w-full p-4 md:p-6 max-w-4xl mx-auto">
          {currentUser && (
            <div>
              {/* Header with cover image */}
              <div className="relative mb-24">
                <div className="h-48 w-full bg-gradient-to-r from-[#FFD700] to-[#FF3860] rounded-t-lg border-4 border-black"></div>
                <div className="absolute right-6 top-6">
                  <Button className="comic-button bg-white hover:bg-white border-black text-black font-bold font-comic-accent dark:border-white dark:text-white">
                    Edit Profile
                  </Button>
                </div>
                <motion.div
                  className="absolute -bottom-16 left-6 border-4 border-black bg-white rounded-full p-1 shadow-[4px_4px_0px_0px_#000] dark:border-white dark:bg-gray-900"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Avatar className="w-32 h-32">
                    <AvatarImage
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-[#FF3860] text-white text-2xl font-['Bangers']">
                      {currentUser.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              </div>

              {/* Profile info */}
              <div className="px-6 mt-4">
                <h1 className="text-2xl font-bold font-comic-heading dark:text-white">
                  {currentUser.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-2 font-comic-body">
                  @{currentUser.username}
                </p>
                <p className="mb-4 font-comic-body dark:text-gray-200">
                  Comic Writer | Digital artist | Marvel fan | Joined April 2025
                </p>

                <div className="flex gap-4 mb-6 font-comic-body">
                  <div className="font-bold">
                    <span className="mr-1">{currentUser.following}</span>
                    <span className="text-gray-600 dark:text-gray-400">Following</span>
                  </div>
                  <div className="font-bold">
                    <span className="mr-1">{currentUser.followers}</span>
                    <span className="text-gray-600 dark:text-gray-400">Followers</span>
                  </div>
                </div>

                <div className="mb-6">
                  <Badge className="bg-[#FF3860] mr-2 border-2 border-black font-comic-accent dark:border-white">
                    Otaku Level 9000
                  </Badge>
                  {currentUser.verified && (
                    <Badge className="bg-[#00A7E1] mr-2 border-2 border-black font-comic-accent dark:border-white">
                      Verified Artist
                    </Badge>
                  )}
                  <Badge className="bg-[#FFD700] border-2 border-black font-comic-accent dark:border-white">
                    Premium Member
                  </Badge>
                </div>
              </div>

              {/* Tabs for different content */}
              <Tabs defaultValue="posts" className="mt-4">
                <TabsList className="w-full bg-[#FFF9EC] dark:bg-gray-900 border-b-2 border-black dark:border-white">
                  <TabsTrigger
                    value="posts"
                    className="flex-1 font-comic-accent text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black dark:data-[state=active]:bg-[#FFD700] dark:data-[state=active]:text-black dark:data-[state=active]:border-white rounded-t-lg dark:bg-gray-900 dark:text-white transition-colors"
                  >
                    Posts
                  </TabsTrigger>
                  <TabsTrigger
                    value="media"
                    className="flex-1 font-comic-accent text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black dark:data-[state=active]:bg-[#FF3860] dark:data-[state=active]:text-white dark:data-[state=active]:border-white rounded-t-lg dark:bg-gray-900 dark:text-white transition-colors"
                  >
                    Media
                  </TabsTrigger>
                  <TabsTrigger
                    value="likes"
                    className="flex-1 font-comic-accent text-lg data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black dark:data-[state=active]:bg-[#00A7E1] dark:data-[state=active]:text-white dark:data-[state=active]:border-white rounded-t-lg dark:bg-gray-900 dark:text-white transition-colors"
                  >
                    Likes
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="posts" className="mt-4">
                  {userPosts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {userPosts.map((post, index) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="group relative overflow-hidden rounded-lg border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900"
                        >
                          <div className="aspect-[4/5] w-full relative">
                            <img
                              src={post.images && post.images.length > 0 ? post.images[0] : "/placeholder.svg"}
                              alt={post.content}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 p-4 text-white w-full">
                                <div className="flex items-center gap-2 mb-2">
                                  <img
                                    src={post.user.avatar}
                                    alt={post.user.name}
                                    className="w-8 h-8 rounded-full border-2 border-white dark:border-white"
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
                                      <span role="img" aria-label="likes">❤️</span> {post.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <span role="img" aria-label="comments">💬</span> {post.comments}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <Card className="border-4 border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <CardContent className="p-8 text-center">
                        <p className="text-xl font-comic-heading mb-4 dark:text-white">
                          No posts yet!
                        </p>
                        <p className="font-comic-body mb-6 dark:text-gray-300">
                          Share your first adventure with the community!
                        </p>
                        <Button className="comic-button bg-[#FF3860] hover:bg-[#FF3860] text-white border-black dark:border-white font-comic-accent">
                          Create New Post
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="media" className="mt-4">
                  <div className="grid grid-cols-3 gap-2">
                    {comicImages.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg border-2 border-black dark:border-white overflow-hidden hover:scale-105 transition-transform duration-200"
                      >
                        <img
                          src={image}
                          alt="Comic artwork"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="likes" className="mt-4">
                  {posts.filter((post) => post.liked).length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {posts
                        .filter((post) => post.liked)
                        .map((post, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="group relative overflow-hidden rounded-lg border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900"
                          >
                            <div className="aspect-[4/5] w-full relative">
                              <img
                                src={post.images && post.images.length > 0 ? post.images[0] : "/placeholder.svg"}
                                alt={post.content}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 p-4 text-white w-full">
                                  <div className="flex items-center gap-2 mb-2">
                                    <img
                                      src={post.user.avatar}
                                      alt={post.user.name}
                                      className="w-8 h-8 rounded-full border-2 border-white dark:border-white"
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
                                        <span role="img" aria-label="likes">❤️</span> {post.likes}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <span role="img" aria-label="comments">💬</span> {post.comments}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  ) : (
                    <Card className="border-4 border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <CardContent className="p-8 text-center">
                        <p className="text-xl font-comic-heading mb-4 dark:text-white">
                          No liked posts yet!
                        </p>
                        <p className="font-comic-body mb-6 dark:text-gray-300">
                          Like posts to see them here!
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
