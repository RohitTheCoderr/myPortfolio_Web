import React from 'react'
import { FaUserCircle, FaRProject, FaMobileAlt } from "react-icons/fa";
import { GiSkills, GiGraduateCap } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import { NavLink } from 'react-router-dom';
function Navbarcard() {
    return (
        <div className='w-auto h-auto '>
            <div className='flex justify-center gap-0 sm:gap-1 md:gap-4 '>
                <li className="group relative flex items-center  w-[3rem] sm:w-[4rem] md:w-[5rem] justify-center">
                    {/* <NavLink to="/" className={({ isActive }) =>
                        isActive ? "group-translate-y-[-10px] transition-transform":""}><div className="bg-black p-[3px] md:p-2 rounded-full group-hover:translate-y-[-10px] transition-transform">
                        <FaUserCircle className="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#ff0000]" />
                    </div></NavLink>
                    <span className="text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] opacity-0 group-hover:opacity-100 transition-opacity">About me</span> */}


                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `group relative ${isActive ? "translate-y-[-10px]" : ""} transition-transform`
                        }
                    >
                        <div
                            className={`bg-black p-[3px] md:p-2 rounded-full transition-transform
                group-hover:translate-y-[-10px] 
                ${({ isActive }) => isActive ? "translate-y-[-10px]" : ""}`}
                        >
                            <FaUserCircle
                                className={`text-2xl sm:text-3xl md:text-4xl text-white transition-colors
                  group-hover:text-[#ff0000] 
                  ${({ isActive }) => isActive ? "text-[#ff0000]" : ""}`}
                            />
                        </div>
                        <span
                            className={`text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute 
                top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] 
                opacity-0 group-hover:opacity-100 transition-opacity 
                ${({ isActive }) => isActive ? "opacity-100" : ""}`}
                        >
                            About me
                        </span>
                    </NavLink>

                </li>
                {/* <li className="group relative flex items-center  w-[3rem] sm:w-[4rem] md:w-[5rem] justify-center">
                    <NavLink to="/education"> <div className="bg-black p-[3px] md:p-2 rounded-full group-hover:translate-y-[-10px] transition-transform">
                        <GiGraduateCap className="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#ff0000]" />
                    </div></NavLink>
                    <span className="text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] items-center opacity-0 group-hover:opacity-100 transition-opacity">Education</span>
                </li> */}
                <li className="group relative flex items-center w-[3rem] sm:w-[4rem] md:w-[5rem] justify-center">
                    <NavLink to="/education">
                        {({ isActive }) => (
                            <>
                                <div
                                    className={`bg-black p-[3px] md:p-2 rounded-full transition-transform
            ${isActive ? "translate-y-[-10px]" : ""}
            group-hover:translate-y-[-10px]`}
                                >
                                    <GiGraduateCap
                                        className={`text-2xl sm:text-3xl md:text-4xl text-white transition-colors
              ${isActive ? "text-[#0004ff]" : ""}
              group-hover:text-[#ffc400]`}
                                    />
                                </div>
                                <span
                                    className={`text-[#bfff00] text-[10px] sm:text-[14px] md:text-sm font-Five absolute
            top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] transition-opacity
            ${isActive ? "opacity-100" : "opacity-0"}
            group-hover:opacity-100`}
                                >
                                    Education
                                </span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li className="group relative flex items-center  w-[3rem] sm:w-[4rem] md:w-[5rem] justify-center">
                    <NavLink to="/skills"> <div className="bg-black p-[3px] md:p-2 rounded-full group-hover:translate-y-[-10px] transition-transform">
                        <GiSkills className="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#ff0000]" />
                    </div></NavLink>
                    <span className=" text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] items-center opacity-0 group-hover:opacity-100 transition-opacity">Skills</span>
                </li>
                <li className="group relative flex items-center  w-[3rem] sm:w-[4rem] md:w-[5rem] justify-center">
                    <NavLink to="/projects">  <div className="bg-black p-[3px] md:p-2 rounded-full group-hover:translate-y-[-10px] transition-transform">
                        <FaRProject className="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#ff0000]" />
                    </div></NavLink>
                    <span className=" text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] opacity-0 group-hover:opacity-100 transition-opacity">Project</span>
                </li>
                <li className="group relative flex items-center  w-[3rem] sm:w-[4rem] md:w-[5rem] justify-center">
                    <NavLink to="/contact">  <div className="bg-black p-[3px] md:p-2 rounded-full group-hover:translate-y-[-10px] transition-transform">
                        <FaMobileAlt className="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#ff0000]" />
                    </div></NavLink>
                    <span className=" text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
                </li>
            </div>

        </div>
    )
}

export default Navbarcard