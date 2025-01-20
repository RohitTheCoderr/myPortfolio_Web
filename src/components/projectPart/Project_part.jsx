import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const Project_part = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS animations
    }, []);

    return (
        <div className="w-screen py-12 bg-[#efefef] h-auto">
            <h2
                className="text-4xl text-center uppercase font-DM font-Five text-[#ff0000]"
                data-aos="fade-down"
            >
                My Projects
            </h2>

            <div className="flex flex-wrap justify-center gap-8 mt-8">

                <div className="h-[13rem] sm:h-[16rem] w-[20rem] sm:w-[25rem] cursor-pointer border-2 border-gray-300 rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/actingScl/actingScl.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-black via-gray-800 to-transparent text-[#ff0000] opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">Acting School</h3>
                        <p className="text-sm">BY - ROHIT</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-[#ff0000] text-white rounded-md shadow-md hover:bg-[#cc0000] transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="h-[13rem] sm:h-[16rem] w-[20rem] sm:w-[25rem] cursor-pointer border-2 border-gray-300 rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/atifram/home.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-black via-gray-800 to-transparent text-[#ff0000] opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">Attifram</h3>
                        <p className="text-sm">BY - ROHIT</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-[#ff0000] text-white rounded-md shadow-md hover:bg-[#cc0000] transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-[13rem] sm:h-[16rem] w-[20rem] sm:w-[25rem] cursor-pointer border-2 border-gray-300 rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/shopeaseP/shopease.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-black via-gray-800 to-transparent text-[#ff0000] opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">E-commerce</h3>
                        <p className="text-sm">BY - ROHIT</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-[#ff0000] text-white rounded-md shadow-md hover:bg-[#cc0000] transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="h-[13rem] sm:h-[16rem] w-[20rem] sm:w-[25rem] cursor-pointer border-2 border-gray-300 rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/srcemP/srcem.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-black via-gray-800 to-transparent text-[#ff0000] opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase tracking-wide">S.R.C.E.M.</h3>
                        <p className="text-sm mt-2">Collaborated with the team</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-[#ff0000] text-white rounded-md shadow-md hover:bg-[#cc0000] transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-[13rem] sm:h-[16rem] w-[20rem] sm:w-[25rem] cursor-pointer border-2 border-gray-300 rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/wiztiep/wiztie.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-black via-gray-800 to-transparent text-[#ff0000] opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase tracking-wide">Wiztie</h3>
                        <p className="text-sm mt-2">Collaborated with the team</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-[#ff0000] text-white rounded-md shadow-md hover:bg-[#cc0000] transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-[13rem] sm:h-[16rem] w-[20rem] sm:w-[25rem] cursor-pointer border-2 border-gray-300 rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/foodZilla/foodZilla.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-black via-gray-800 to-transparent text-[#ff0000] opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase tracking-wide">Wiztie</h3>
                        <p className="text-sm mt-2">Collaborated with the team</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-[#ff0000] text-white rounded-md shadow-md hover:bg-[#cc0000] transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Project_part;
