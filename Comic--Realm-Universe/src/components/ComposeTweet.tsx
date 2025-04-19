import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import {
  ImageIcon,
  Smile,
  VideoIcon,
  Map,
  Plus,
  X,
  Loader2,
} from "lucide-react";
import { useFeed } from "@/contexts/FeedContext";

const ComposeTweet: React.FC = () => {
  const { currentUser, addPost } = useFeed();
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (!content.trim() && images.length === 0) return;

    setIsLoading(true);
    await addPost({
      id: Math.random().toString(),
      content,
      images,
      timestamp: new Date().toISOString(),
      user: currentUser,
      likes: 0,
      comments: 0,
      reposts: 0,
      liked: false,
      bookmarked: false,
    });
    setContent("");
    setImages([]);
    setIsLoading(false);
    setIsExpanded(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="relative overflow-hidden border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#1f2937] hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#1f2937] transition-shadow duration-200 mb-6">
      <div className="p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        {/* Colorful accent strip at the top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4F79] via-[#FFE66D] to-[#4FC4FF]"></div>

        <div className="flex gap-4">
          <Avatar className="h-12 w-12 ring-4 ring-black dark:ring-gray-600 shadow-lg">
            <AvatarImage
              src={currentUser.avatar}
              alt={currentUser.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-[#FF4F79] text-white font-comic-accent">
              {currentUser.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div
              className="min-h-[80px] w-full bg-[#F9F9F9] dark:bg-gray-800 rounded-lg p-3 mb-3 font-comic-body text-base border-2 border-black dark:border-gray-600 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#333] focus-within:shadow-[1px_1px_0px_#000] dark:focus-within:shadow-[1px_1px_0px_#333] transition-shadow"
              onClick={() => setIsExpanded(true)}
            >
              <textarea
                placeholder="What's happening in your comic world?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[60px] bg-transparent resize-none outline-none placeholder:text-muted-foreground dark:placeholder:text-gray-400 dark:text-white"
              />
            </div>

            <AnimatePresence>
              {images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 gap-2 mb-3"
                >
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={image}
                        alt={`Uploaded ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border-4 border-black dark:border-gray-600 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#1f2937]"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-1 border-2 border-black dark:border-gray-600 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#1f2937] opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#4FC4FF] hover:text-[#0077A0] dark:text-[#4FC4FF] dark:hover:text-[#0077A0] active:scale-90 transition-transform duration-100"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#FF4F79] hover:text-[#CC2D4C] dark:text-[#FF4F79] dark:hover:text-[#CC2D4C] active:scale-90 transition-transform duration-100"
                >
                  <VideoIcon size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#FFE66D] hover:text-[#E0BC00] dark:text-[#FFE66D] dark:hover:text-[#E0BC00] active:scale-90 transition-transform duration-100"
                >
                  <Smile size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#14B8A6] hover:text-[#0E8A7B] dark:text-[#14B8A6] dark:hover:text-[#0E8A7B] active:scale-90 transition-transform duration-100"
                >
                  <Map size={20} />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <AnimatePresence>
                  {content.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="text-sm font-medium"
                    >
                      <span
                        className={`${
                          content.length > 280
                            ? "text-red-500"
                            : "text-muted-foreground dark:text-gray-400"
                        }`}
                      >
                        {content.length}
                      </span>
                      <span className="text-muted-foreground dark:text-gray-400">
                        /280
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  variant="comic"
                  size="sm"
                  className="relative overflow-hidden disabled:opacity-50 active:scale-90 transition-transform duration-100"
                  disabled={
                    isLoading ||
                    (!content.trim() && images.length === 0) ||
                    content.length > 280
                  }
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-1" />
                      Post
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ComposeTweet;
