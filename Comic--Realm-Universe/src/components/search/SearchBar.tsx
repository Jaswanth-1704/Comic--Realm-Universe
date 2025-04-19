import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center gap-2 p-2 rounded-lg border border-gray-300 dark:border-gray-700">
        <Search className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          placeholder="Search comics, characters, or users..."
          className="flex-1 border-0 bg-transparent text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          variant="ghost"
          size="icon"
          className="border border-black bg-white text-black hover:bg-gray-100 rounded-lg"
        >
          <Filter className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
