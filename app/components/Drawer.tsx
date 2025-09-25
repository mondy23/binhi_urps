import { useRouter, usePathname } from "next/navigation";
import {
    FaUsers,
    FaChartBar,
    FaUserShield,
} from "react-icons/fa"; // Font Awesome icons
import { MdSpaceDashboard } from "react-icons/md";

interface DrawerProps {
    open: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ open }) => {
    const pathname = usePathname();
    const router = useRouter();
    const items = [
        { title: "Dashboard", icon: <MdSpaceDashboard />, path: "/" },
        { title: "Customers", icon: <FaUsers />, path: "/customers" },
        { title: "Reports", icon: <FaChartBar />, path: "/reports" },
        { title: "Admin", icon: <FaUserShield />, path: "/admin" },
    ];

    return (
        <div
            className={`shadow-lg pt-55 transition-all duration-500 ${open ? "w-64 p-6" : "w-16 p-1"
                }`}
        >
            {/* Logo */}
            <div
                className={`absolute left-16 top-28 transition-all duration-500 ${open
                    ? "w-[48px] h-[48px] translate-x-0 translate-y-0"
                    : "w-[38px] h-[38px] -translate-x-13 -translate-y-20"
                    } bg-[var(--primaryColor)] rounded-full`}
            >
                <div
                    className={`${open ? "w-[28px] h-[28px]" : "w-[20px] h-[20px]"
                        } transition-all duration-500 bg-amber-200 rounded-full`}
                ></div>
            </div>

            {/* Brand name */}
            <h1
                className={`absolute left-30 top-32 font-bold text-2xl text-gray-700 transition-all duration-600 ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
            >
                Binhi
            </h1>

            {/* Sidebar items */}
            <ul className="space-y-4">
                {items.map((item) => {
                    const isActive = pathname === item.path;
                    return (<li
                        key={item.title}
                        onClick={() => router.push(item.path)}
                        className={`${isActive ? "bg-[var(--activeItemColor)]" : ""} group rounded-2xl px-4 py-2 flex gap-4 items-center transition-all duration-500 hover:bg-[var(--activeItemColor)] cursor-pointer`}
                    >
                        {/* Icon with dynamic color */}
                        <span className={`transition-all duration-500 ${isActive ? "text-black":"text-[var(--inactiveTextColor)]"} group-hover:text-black text-xl`}>
                            {item.icon}
                        </span>

                        {/* Title */}
                        <h1
                            className={`transition-all duration-500 ${open
                                ? isActive
                                  ? "opacity-100 text-black"
                                  : "opacity-100 text-[var(--inactiveTextColor)] group-hover:text-black"
                                : "opacity-0"
                                }`}
                        >
                            {item.title}
                        </h1>
                    </li>)
                })}
            </ul>
        </div>
    );
};

export default Drawer;
