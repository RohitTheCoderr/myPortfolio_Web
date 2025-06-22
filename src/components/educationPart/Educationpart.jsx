import React, { useState } from 'react'
import { GiSchoolBag } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { Button } from '../formComponents/Buttons/Button';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
function Educationpart() {
    React.useEffect(() => {
        AOS.init();
    }, []);


    // for motion 
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };


    return (
        <div className='w-screen py-12 bg-bg h-auto'
            onMouseMove={handleMouseMove}>
            <motion.div
                className="fixed w-6 h-6 rounded-full pointer-events-none bg-text"
                style={{
                    top: cursorPosition.y,
                    left: cursorPosition.x,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: [1, 1.5, 1],
                    transition: { duration: 0.5, repeat: Infinity },
                }}
            />
            <h2 className='text-4xl text-center uppercase italic font-DM font-Five text-heading' data-aos="fade-down"> My education </h2>
            <div className=' w-[90%] h-auto m-auto mt-12 flex flex-wrap md:flex-nowrap justify-center md:justify-between lg:justify-normal items-center gap-8 md:gap-2 md:space-x-2 lg:space-x-12'>
                <div className='w-full text-sm sm:text-base m-auto  md:w-[55%] lg:w-[45%] font-DM text-slate-700 h-auto '>
                    <p> <span className='text-6xl font-Poppins '>A</span> journey of growth and learning that began in high school continues to shape my career as a developer.
                        I completed my 10th and 12th grades with a focus on computer and mathematics, laying the foundation for my interest in technology.
                        I went on to earn a <span className='text-heading font-semibold'>Bachelor of Computer Applications</span> from Pt. J.L.N. College, Faridabad
                        (Maharshi Dayanand University). Currently, I am pursuing my <span className='text-heading font-semibold'>Master of Computer Applications</span> from GC Sector 9, Gurugram.
                    </p>
                    <p>
                        During my academic journey, I completed a 6-month internship at One Tick Technology, where I worked on real-world projects and refined my technical and problem-solving skills.
                    </p>
                        <Button context="Know more" style=" " btStyle="text-text border-[1px] border-text" link="education" />
                </div>
                <div className='w-[32rem] '>
                    <div className=" relative flex flex-col items-center overflow-hidden h-[35rem]">
                        {/* Central Stick */}
                        <div className="w-[0.8rem] bg-text h-full rounded-xl"></div>

                        {/* Capsule Info Boxes */}
                        <div className="absolute left-0 flex items-center group cursor-pointer " data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                            <div className="w-[16rem] rounded-full text-center bg-text h-[8rem] text-white px-4 flex flex-col justify-center" >
                                <div className='bg-white group-hover:bg-primary cursor-pointer group-hover:text-white group-hover:border-[1px] border-white  text-primary text-2xl w-[4rem] h-[2rem] flex justify-center items-center rounded-full m-auto my-0'><GiSchoolBag /></div>
                                <h4 className="text-sm font-semibold">Secondary (10th)</h4>
                                <p className="text-[12px] text-primary ">Adarsh public School | 2016 - 18</p>
                                <p className="text-[12px] ">Scored distinction in Mathematics and Science.</p>
                            </div>
                        </div>
                        <div className="absolute top-[9rem] right-0 flex items-center group cursor-pointer" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
                            <div className="w-[16rem] rounded-full text-center bg-text h-[8rem] text-white px-4 flex flex-col justify-center">
                                <div className='bg-white group-hover:bg-primary cursor-pointer group-hover:text-white group-hover:border-[1px] border-white text-primary text-2xl w-[4rem] h-[2rem] flex justify-center items-center rounded-full m-auto my-0'><BiSolidSchool /></div>
                                <h4 className="text-sm font-semibold">Higher Secondary (12th)</h4>
                                <p className="text-[12px] text-primary ">G.S.S.S Chandawali | 2018 - 20</p>
                                <p className="text-[12px] ">Majored in Commerce with a focus on Mathematics and Account.</p>
                            </div>
                        </div>

                        <div className="absolute top-[18rem] left-0 flex items-center group cursor-pointer" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                            <div className="w-[16rem] rounded-full text-center bg-text h-[8rem] text-white px-4 flex flex-col justify-center">
                                <div className='bg-white group-hover:bg-primary cursor-pointer group-hover:text-white group-hover:border-[1px] border-white text-primary text-2xl w-[4rem] h-[2rem] flex justify-center items-center rounded-full m-auto my-0'><FaLaptopCode /></div>
                                <h4 className="text-sm font-semibold">Bachelor of Computer Applications</h4>
                                <p className="text-[12px] text-primary ">Pt.J.L.N College sec-16-A Fbd. | 2020 - 23</p>
                                <p className="text-[12px] ">Focused on Web Development, and Programming.</p>
                            </div>
                        </div>
                        <div className="absolute top-[27rem] right-0 flex items-center group cursor-pointer" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
                            <div className="w-[16rem] rounded-full text-center bg-text h-[8rem] text-white px-4 flex flex-col justify-center">
                                <div className='bg-white group-hover:bg-primary cursor-pointer group-hover:text-white group-hover:border-[1px] border-primary text-primary text-2xl w-[4rem] h-[2rem] flex justify-center items-center rounded-full m-auto my-0'><IoSchoolSharp /></div>
                                <h4 className="text-sm font-semibold">Master of Computer Applications </h4>
                                <p className="text-[12px] text-primary ">GC Sec 9, Gurugram University | 2023 - 26</p>
                                <p className="text-[12px] ">Specializing in Advanced Software Development.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Educationpart