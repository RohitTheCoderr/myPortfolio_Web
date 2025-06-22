import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const Project_part = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS animations
    }, []);

    return (
        <div className="w-screen py-12 bg-bg h-auto">
            <h2
                className="text-4xl text-center uppercase font-DM font-Five text-heading"
                data-aos="fade-down"
            >
                My Projects
            </h2>

            {/* <div className="flex w-[90%] mx-auto flex-wrap justify-between gap-8 mt-8"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-8 mt-8">
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/actingScl/actingScl.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">Acting School</h3>
                        <p className="text-sm text-white">Designed and developed independently</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/shopeaseP/shopease.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">E-commerce</h3>
                        <p className="text-sm text-white">Collaborated with the team</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="/projectsImg/aarogyaIndia/home.png"
                        alt="aarogyaIndia"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">Aarogya India website</h3>
                        <p className="text-sm text-white">Currently working on this website with backend team</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="/projectsImg/lead_mana_sys/home.png"
                        alt="lead management"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">Lead Management System</h3>
                        <p className="text-sm text-white">Designed and developed independently</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/atifram/home.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase">Attifram</h3>
                        <p className="text-sm text-white">Designed and developed independently</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/srcemP/srcem.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase tracking-wide">S.R.C.E.M.</h3>
                        <p className="text-sm text-white">Collaborated with the team</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/wiztiep/wiztie.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase tracking-wide">Wiztie</h3>
                        <p className="text-sm text-white">Collaborated with the team</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-auto cursor-pointer border-[1px] border-primary rounded-lg shadow-lg relative group overflow-hidden flex items-center" data-aos="zoom-in">
                    <img
                        src="projectsImg/foodZilla/foodZilla.png"
                        alt="tree"
                        className="block w-full h-full  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-full w-full h-full bg-gradient-to-t from-heading via-primary to-transparent text-text opacity-0 group-hover:top-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-bold uppercase tracking-wide">FoodZilla</h3>
                        <p className="text-sm text-white">Designed and developed independently</p>
                        <Link to={"/projects"}>
                            <button className="mt-4 px-4 py-2 bg-text text-white rounded-md shadow-md  transition-all duration-300">
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
