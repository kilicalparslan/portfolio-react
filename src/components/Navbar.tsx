import { FiUser, FiBox } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]  ">
      <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black ">
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
          <a className="text-5xl font-semibold" href="/"></a>
        </div>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex my-12 ">
          <li className=" ">
            <a
              className="text-white linked bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r  dark:text-[#A6A6A6] transition-all duration-300 ease-in-out"
              href="/home/homePage"
            >
              <span className="mr-2 text-xl">
                <AiOutlineHome size={24} />
              </span>
              Home
            </a>
          </li>
          <li className=" ">
            <a
              className="rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] transition-all duration-300 ease-in-out "
              href="/home/about"
            >
              <span className="mr-2 text-xl">
                <FiUser size={24} />
              </span>
              About
            </a>
          </li>
          <li className=" ">
            <a
              className="rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] transition-all duration-300 ease-in-out"
              href="/home/resume"
            >
              <span className="mr-2 text-xl">
                <IoDocumentTextOutline size={24} />
              </span>
              Resume
            </a>
          </li>
          <li className=" ">
            <a
              className="rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] transition-all duration-300 ease-in-out"
              href="/home/works"
            >
              <span className="mr-2 text-xl">
                <FiBox size={24} />
              </span>
              Works
            </a>
          </li>

          <li className=" ">
            <a
              className="rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] transition-all duration-300 ease-in-out"
              href="/home/contact"
            >
              <span className="mr-2 text-xl">
                <RiContactsBook3Line size={24} />
              </span>
              Contact
            </a>
          </li>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}
