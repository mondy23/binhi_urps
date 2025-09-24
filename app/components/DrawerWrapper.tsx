"use client";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import Drawer from "./Drawer";
import Header from "./Header";
import MobileDrawer from "./MobileDrawer";

export default function DrawerWrapper({ children }: { children: React.ReactNode }) {
  const [isDesktopDrawerOpen, setDesktopDrawerOpen] = useState(false);
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden w-full relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full">
        <Drawer open={isDesktopDrawerOpen} />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col flex-1 h-full w-full">
        {/* Desktop Drawer Toggle */}
        <button
          className="hidden md:flex absolute top-32 left-0 z-30 h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 ease-in-out"
          onClick={() => setDesktopDrawerOpen(!isDesktopDrawerOpen)}
          aria-label="Toggle drawer"
        >
          <span
            className={`transition-transform duration-300 ease-in-out ${
              isDesktopDrawerOpen ? "rotate-0" : "rotate-180"
            }`}
          >
            <IoIosArrowBack />
          </span>
        </button>

        {/* Header */}
        <div className="h-14 shrink-0 w-full z-20 relative">
          <Header
            open={isDesktopDrawerOpen}
            onToggleMenu={() => setMobileDrawerOpen(true)} // This only opens mobile drawer
          />
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-2 w-full pb-20 z-10">
          {children}
        </div>
      </div>

      {/* Mobile Drawer (top of everything) */}
      <MobileDrawer
        open={isMobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </div>
  );
}
