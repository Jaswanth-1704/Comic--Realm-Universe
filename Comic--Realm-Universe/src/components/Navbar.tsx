import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { themeColor } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b-4 border-black">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-10 w-10 rounded-full bg-comic-red border-2 border-black flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <Link to="/" className="text-xl font-bold font-['Mori']">
            Comic Realm
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button
              variant="outline"
              className="comic-button border-2 border-[#FF3860] bg-gradient-to-r from-[#FF3860] via-[#FFD700] to-[#14B8A6] text-white hover:from-[#FFD700] hover:to-[#FF3860] hover:text-black hover:scale-105 transition-all shadow-lg font-bold px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <span className="transition-colors">
                <Link to="/feed">Login</Link>
              </span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button className="comic-button bg-comic-blue hover:bg-comic-blue/90 border-black">
              <span className="text-black hover:text-black transition-colors">
                <Link to="/feed">Sign Up Free!</Link>
              </span>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden container py-4 pb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col gap-4 comic-panel-small p-4">
            <div className="flex flex-col gap-2 mt-2">
              <Button
                variant="outline"
                className="comic-button border-2 border-[#FF3860] bg-gradient-to-r from-[#FF3860] via-[#FFD700] to-[#14B8A6] text-white hover:from-[#FFD700] hover:to-[#FF3860] hover:text-black hover:scale-105 transition-all shadow-lg font-bold px-6 py-2 rounded-lg flex items-center gap-2"
              >
                <span className="transition-colors">
                  <Link to="/feed">Login</Link>
                </span>
              </Button>
              <Button className="comic-button bg-comic-blue hover:bg-comic-blue/90 text-white hover:text-white w-full justify-center border-black">
                <Link to="/feed">Sign Up Free!</Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
