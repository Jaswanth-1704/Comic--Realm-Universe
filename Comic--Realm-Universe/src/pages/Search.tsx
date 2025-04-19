import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, BookOpen, Newspaper } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/search/SearchBar";
import TrendingSection from "@/components/search/TrendingSection";
import PeopleSection from "@/components/search/PeopleSection";
import ComicSection from "@/components/search/ComicSection";
import NewsSection from "@/components/search/NewsSection";

// Mock trending topics
const trendingTopics = [
  { id: 1, name: "Spider-Man: Beyond the Spider-Verse", count: "156K posts" },
  { id: 2, name: "Batman: The Dark Alliance", count: "128K posts" },
  { id: 3, name: "Superman: Legacy", count: "98K posts" },
  { id: 4, name: "Wonder Woman: New World", count: "87K posts" },
  { id: 5, name: "X-Men: Rise of Mutants", count: "76K posts" },
];

// Mock users data
const users = [
  {
    id: 1,
    name: "Comic Master",
    username: "comicmaster",
    avatar: "/Batman_1_preview_2.jpg",
    verified: true,
    bio: "DC Comics Official Artist | Batman Series Illustrator 🦇",
  },
  {
    id: 2,
    name: "Marvel Legend",
    username: "marvellegend",
    avatar: "/iron-man.jpg",
    verified: true,
    bio: "Marvel Comics Contributor | Digital Artist 🎨",
  },
  {
    id: 3,
    name: "Comic Collector",
    username: "comiccollector",
    avatar: "/spider-man-beyond-the-spidervers.jpg",
    verified: false,
    bio: "Rare Comics Collector | Comic History Expert 📚",
  },
  {
    id: 4,
    name: "Hero Artist",
    username: "heroartist",
    avatar: "/wonder-woman-new-comic-daniel-sa.jpg",
    verified: false,
    bio: "Superhero Comic Artist | Traditional Art Specialist ✏️",
  },
];

// Mock Comic data
const Comics = [
  {
    id: 1,
    title: "Spider-Man: New Generation",
    author: "Marvel Comics",
    cover: "/spider-man-beyond-the-spidervers.jpg",
    rating: 4.9,
    genres: ["Superhero", "Action"],
  },
  {
    id: 2,
    title: "Batman: Dark Knight Returns",
    author: "DC Comics",
    cover: "/Batman_1_preview_2.jpg",
    rating: 4.8,
    genres: ["Detective", "Action"],
  },
  {
    id: 3,
    title: "Wonder Woman: New Era",
    author: "DC Comics",
    cover: "/wonder-woman-new-comic-daniel-sa.jpg",
    rating: 4.7,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: 4,
    title: "Iron Man: Future Tech",
    author: "Marvel Comics",
    cover: "/iron-man.jpg",
    rating: 4.6,
    genres: ["Sci-Fi", "Action"],
  },
  {
    id: 5,
    title: "Deadpool: Maximum Effort",
    author: "Marvel Comics",
    cover: "/Deadpool.jpg",
    rating: 4.7,
    genres: ["Comedy", "Action"],
  },
  {
    id: 6,
    title: "Loki: God of Mischief",
    author: "Marvel Comics",
    cover: "/loki.jpg",
    rating: 4.5,
    genres: ["Fantasy", "Adventure"],
  },
];

// Mock news data
const news = [
  {
    id: 1,
    title: "DC Comics Announces New Batman Series for 2025",
    date: "Today",
    image: "/Batman_1_preview_2.jpg",
    source: "DC Comics News",
  },
  {
    id: 2,
    title: "Marvel Reveals Next Spider-Verse Saga",
    date: "Yesterday",
    image: "/spider-man-beyond-the-spidervers.jpg",
    source: "Marvel Insider",
  },
  {
    id: 3,
    title: "Wonder Woman Comic Series Wins Industry Award",
    date: "2 days ago",
    image: "/wonder-woman-new-comic-daniel-sa.jpg",
    source: "Comic News Network",
  },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <div className="flex min-h-screen bg-background dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="Comic-panel w-full p-4 md:p-6 max-w-4xl mx-auto bg-card dark:bg-gray-900 rounded-xl">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="w-full bg-background dark:bg-gray-900 border-b-2 border-black">
              <TabsTrigger
                value="trending"
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FFD700] data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <TrendingUp size={16} className="mr-2" /> Trending
              </TabsTrigger>
              <TabsTrigger
                value="people"
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#FF3860] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <Users size={16} className="mr-2" /> People
              </TabsTrigger>
              <TabsTrigger
                value="Comic"
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#00A7E1] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <BookOpen size={16} className="mr-2" /> Comic
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className="flex-1 font-['Bangers'] text-lg data-[state=active]:bg-[#14B8A6] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-black rounded-t-lg"
              >
                <Newspaper size={16} className="mr-2" /> News
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="mt-4">
              <TrendingSection trendingTopics={trendingTopics} />
            </TabsContent>

            <TabsContent value="people" className="mt-4">
              <PeopleSection users={users} />
            </TabsContent>

            <TabsContent value="Comic" className="mt-4">
              <ComicSection Comics={Comics} />
            </TabsContent>

            <TabsContent value="news" className="mt-4">
              <NewsSection news={news} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Search;
