import { FiUser, FiBox } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: <AiOutlineHome size={24} /> },
  { to: "/about", label: "About", icon: <FiUser size={24} /> },
  { to: "/resume", label: "Resume", icon: <IoDocumentTextOutline size={24} /> },
  { to: "/works", label: "Works", icon: <FiBox size={24} /> },
  { to: "/contact", label: "Contact", icon: <RiContactsBook3Line size={24} /> },
];

const baseClass =
  "rounded-md cursor-pointer font-poppins font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out";
const activeClass = "text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]";
const inactiveClass =
  "bg-white text-gray-lite dark:bg-[#212425] dark:text-[#A6A6A6] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
      <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black">
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5"></div>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex my-12">
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
              >
                <span className="mr-2 text-xl">{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}
