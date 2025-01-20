import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-[30%] sm:w-[95%] md:w-[92%] lg:w-[85%] mt-[-4.2rem] sm:m-auto  h-auto relative z-50 ">
            {/* Mobile Hamburger Button */}
            <div className="relative z-10 mt-2 flex justify-between items-center px-2 sm:px-4 py-2 sm:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-[#071952] text-2xl focus:outline-none bg-gray-200 p-[0.59rem] rounded-full hover:bg-gray-300"
                >
                    {isMenuOpen ? <span><HiX /></span> : <span><HiMenu /></span>}
                </button>
            </div>
            {/* Navbar Menu */}
            <ul
                ref={menuRef}
                className={`${isMenuOpen ? "block relative" : "hidden"
                    } bg-slate-50 text-start sm:flex flex-col px-2 sm:flex-row sm:items-center flex sm:justify-between md:justify-around lg:justify-center h-auto sm:h-[3.5rem] mt-[-0.5px] sm:mt-1 md:gap-3 lg:gap-5 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium `}
            >
                {/* Home */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "  text-[#071952] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2"
                            : " hover:border-b-[0.19rem] hover:text-[#088395] hover:border-[#37b7c3] transition-all duration-300 pb-2"
                    }
                >
                    <li className="hover:text-[#088395]">Home</li>
                </NavLink>

                {/* Educations */}
                <li className=" relative group/parent cursor-pointer ">
                    <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
                        Educations
                        <RiArrowDropDownLine className="text-[24px]" />
                    </div>
                </li>

                {/* Skills */}
                <li className=" relative group cursor-pointer ">
                    <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
                    Skills
                        <RiArrowDropDownLine className="text-[24px]" />
                    </div>
                </li>

                {/*Projects */}
                <li className=" relative group cursor-pointer  ">
                    <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
                        Projects
                        <RiArrowDropDownLine className="text-[24px]" />
                    </div>
                </li>
               
                {/* Contact */}
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? " text-[#088395] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2 "
                            : " hover:border-b-[0.19rem] hover:border-[#37b7c3] transition-all duration-300 pb-2 "
                    }
                >
                    <li className="hover:text-[#088395] text-[#071952]">Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;
