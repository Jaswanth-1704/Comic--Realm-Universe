import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  Bookmark,
  User,
  Settings,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const MobileNav: React.FC = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { icon: Home, label: "Home", path: "/feed" },
    { icon: Search, label: "Explore", path: "/search" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Bookmark, label: "Bookmarks", path: "/bookmarks" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden border-t-4 border-black dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[0_-4px_0px_#000] dark:shadow-[0_-4px_0px_#1f2937] z-50">
      <nav className="flex justify-around items-center p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center p-2 rounded-lg ${
                  isActive
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-muted-foreground dark:text-gray-400"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-['Comic Neue'] mt-1">
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="flex flex-col items-center justify-center p-2 rounded-lg text-muted-foreground dark:text-gray-400"
        >
          {darkMode ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
          <span className="text-xs font-['Comic Neue'] mt-1">
            {darkMode ? "Light" : "Dark"}
          </span>
        </motion.button>
      </nav>
    </div>
  );
};

export default MobileNav;
