import React from 'react';
import { usePathname } from "next/navigation";
import UserDropdown from './ProfileBtn';
import { IoIosMenu } from 'react-icons/io';

// Helper function
const formatPathname = (pathname: string): string => {
    if (pathname === "/") return "Dashboard";
    return pathname
        .replace("/", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
};

interface HeaderProps {
    open: boolean;
    onToggleMenu?: () => void; // optional callback for tap
}

const Header: React.FC<HeaderProps> = ({ open, onToggleMenu }) => {
    const pathname = usePathname();
    return (
        <div className='flex justify-between p-4'>
            <div
                className={`flex items-center gap-4 pt-4 font-bold text-xl md:text-2xl text-gray-700 transition-all duration-900  ${open ? "opacity-0" : "opacity-100"
                    }`}
            >
                {/* Static Menu Icon */}
                <button onClick={onToggleMenu} className="md:hidden p-2 rounded-lg bg-white shadow cursor-default select-none transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105">

                    <IoIosMenu size={28} className="text-gray-700" />
                </button>
                {formatPathname(pathname)}
            </div>
            <UserDropdown />
        </div>
    );
};

export default Header;

