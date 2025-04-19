import React from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { faker } from "@faker-js/faker";

// Generate trending topics
const generateTrendingTopics = () => {
  // Add Bruce Wayne as a fixed first topic
  const bruceWayneTopic = {
    id: "bruce-wayne-1",
    topic: "Bruce Wayne",
    image: "/Batman_1_preview_2.jpg", // The image is already in the public folder
    posts: 245000,
  };

  const topicImageMap = {
    "Spider-Man": "/spider-man-beyond-the-spidervers.jpg",
    Superman: "/Superman.jpeg",
    "Wonder Woman": "/wonder-woman-new-comic-daniel-sa.jpg",
    Flash: "/Flash.jpg",
    Homelander: "/Mortal-Kombat-1-Homelander-trail.jpg",
    Deadpool: "/Deadpool.jpg",
    Vision: "/vision.jpg",
    Wolverine: "/wolverine.jpg",
  };

  const otherTopics = Array.from({ length: 4 }, () => {
    const topic = faker.helpers.arrayElement(Object.keys(topicImageMap));
    return {
      id: faker.string.uuid(),
      topic,
      image: topicImageMap[topic],
      posts: faker.number.int({ min: 1000, max: 500000 }),
    };
  });

  return [bruceWayneTopic, ...otherTopics];
};

// Generate who to follow
const generateWhoToFollow = () => {
  return Array.from({ length: 3 }, (_, index) => {
    const username = faker.internet.userName().toLowerCase();
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}-${index}`,
      verified: faker.datatype.boolean(0.3),
    };
  });
};

const TrendingSidebar: React.FC = () => {
  const trendingTopics = generateTrendingTopics();
  const whoToFollow = generateWhoToFollow();

  return (
    <div className="w-80 h-screen sticky top-0 hidden lg:flex flex-col p-4 space-y-4 overflow-y-auto">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-muted rounded-full border-0 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
        />
      </motion.div>

      {/* Trending */}
      <Card className="bg-background/60 backdrop-blur-md">
        <CardContent className="p-4">
          <h2 className="font-bold text-xl mb-4">Trends for you</h2>

          {trendingTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="py-3 hover:bg-muted/50 px-2 rounded-lg cursor-pointer group"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex-1">
                    <p className="font-semibold text-sm">#{topic.topic}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {topic.posts.toLocaleString()} posts
                    </p>
                  </div>
                  {topic.image && (
                    <motion.div
                      className="h-16 w-16 rounded-lg overflow-hidden border-2 border-black shadow-lg"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      <img
                        src={topic.image}
                        alt={topic.topic}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  )}
                </div>
                <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                  <X size={16} />
                </span>
              </div>
            </motion.div>
          ))}

          <a
            href="#"
            className="text-primary text-sm hover:underline block mt-2"
          >
            Show more
          </a>
        </CardContent>
      </Card>

      {/* Who to follow */}
      <Card className="bg-background/60 backdrop-blur-md">
        <CardContent className="p-4">
          <h2 className="font-bold text-xl mb-4">Who to follow</h2>

          {whoToFollow.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 py-3 hover:bg-muted/50 px-2 rounded-lg cursor-pointer"
            >
              <motion.img
                src={user.avatar}
                alt={user.name}
                className="h-10 w-10 rounded-full"
                whileHover={{ scale: 1.1 }}
              />

              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-sm truncate">{user.name}</p>
                  {user.verified && (
                    <span className="text-primary text-xs">✓</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  @{user.username}
                </p>
              </div>

              <motion.button
                className="bg-foreground text-background rounded-full px-4 py-1 text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow
              </motion.button>
            </motion.div>
          ))}

          <a
            href="#"
            className="text-primary text-sm hover:underline block mt-2"
          >
            Show more
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
