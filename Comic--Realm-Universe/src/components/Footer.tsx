import React from "react";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] border-t-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute bottom-0 left-0 comic-pattern w-full h-20 opacity-10"></div>

      <div className="absolute top-10 left-10 opacity-10">
        <img
          src="https://api.dicebear.com/7.x/icons/svg?icon=sakura"
          className="w-24 h-24"
          alt="sakura"
        />
      </div>
      <div className="absolute top-20 right-20 opacity-10">
        <img
          src="https://api.dicebear.com/7.x/icons/svg?icon=ninjaHead"
          className="w-16 h-16"
          alt="ninja"
        />
      </div>

      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-12 w-12 rounded-full bg-[#FF4F79] border-3 border-black flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-['Bangers']">
                  C
                </span>
              </div>
              <span className="text-2xl font-bold font-['Mori'] tracking-wide text-[#1A1A1A]">
                Comic Realm
              </span>
            </div>
            <div className="comic-panel-small p-4 bg-white">
              <p className="text-sm text-[#333]">
                Your ultimate comic community platform! Connect with fellow
                fans, share art, and dive deep into your favorite series.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#FF4F79] flex items-center justify-center border-2 border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Twitter size={16} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#4FC4FF] flex items-center justify-center border-2 border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Instagram size={16} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#FFE66D] flex items-center justify-center border-2 border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Youtube size={16} className="text-black" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center border-2 border-black hover:translate-y-[-2px] transition-transform"
                >
                  <Github size={16} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-['Mori'] tracking-wide text-xl text-[#1A1A1A] Comic-highlight inline-block">
              READS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FF4F79] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FF4F79] rounded-full"></span>
                  Latest Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FF4F79] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#4FC4FF] rounded-full"></span>
                  Popular Series
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FF4F79] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FFE66D] rounded-full"></span>
                  Genres
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FF4F79] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FF4F79] rounded-full"></span>
                  Authors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-['Bangers'] tracking-wide text-xl text-[#1A1A1A] comic-highlight inline-block"></h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#4FC4FF] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#4FC4FF] rounded-full"></span>
                  Forums
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#4FC4FF] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FF4F79] rounded-full"></span>
                  Fan Art
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#4FC4FF] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FFE66D] rounded-full"></span>
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#4FC4FF] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#4FC4FF] rounded-full"></span>
                  Cosplay
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-['Bangers'] tracking-wide text-xl text-[#1A1A1A] comic-highlight inline-block"></h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FFE66D] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FFE66D] rounded-full"></span>
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FFE66D] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#4FC4FF] rounded-full"></span>
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FFE66D] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FF4F79] rounded-full"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#555] hover:text-[#FFE66D] transition-colors flex items-center gap-1"
                >
                  <span className="inline-block w-2 h-2 bg-[#FFE66D] rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="comic-panel p-6 flex flex-col md:flex-row justify-between items-center bg-white">
          <p className="text-sm text-[#555] mb-4 md:mb-0 font-semibold">
            © 2025 Comic Realm —{" "}
            <span className="font-['Mori'] tracking-wide">
              Where Comics Come Alive!
            </span>
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#555] hover:text-[#FF4F79] font-semibold transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-[#555] hover:text-[#4FC4FF] font-semibold transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-[#555] hover:text-[#FFE66D] font-semibold transition-colors"
            >
              Cookies
            </a>
            <a
              className="text-sm text-[#555] hover:text-[#4FC4FF] font-semibold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
