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

const activeClass = "text-white bg-primary";

const inactiveClass =
  "bg-background text-foreground hover:text-white hover:bg-primary";

export default function Navbar() {
  return (
    <header className="flex items-center top-0 left-0 w-full lg:static z-[1111111111] px-4 lg:px-0 dark:bg-background">
      <nav className="flex-1 flex justify-center py-6">
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
