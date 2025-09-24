import React from "react";
import { IoIosClose } from "react-icons/io";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose} // close when clicking outside
      />

      {/* Drawer Panel */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black"
            aria-label="Close menu"
          >
            <IoIosClose size={30} />
          </button>
        </div>

        {/* Drawer Content */}
        <nav className="px-4 py-2">
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-800 hover:underline">Dashboard</a></li>
            <li><a href="#" className="text-gray-800 hover:underline">Customers</a></li>
            <li><a href="#" className="text-gray-800 hover:underline">Reports</a></li>
            <li><a href="#" className="text-gray-800 hover:underline">Admin</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileDrawer;
