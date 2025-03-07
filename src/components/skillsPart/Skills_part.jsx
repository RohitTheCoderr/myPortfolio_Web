import React from 'react'
import LoadingCircle from '../cards/Skills_sping'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiZulip } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Button } from '../formComponents/Buttons/Button';

const SkillData = [
   { icon: SiMongodb, text: "MongoDB" },
   { icon: SiExpress, text: "Express.js" },
   { icon: FaReact, text: "React.js" },
   { icon: FaNode, text: "Node.js" },
   { icon: IoLogoJavascript, text: "javaScript" },
   { icon: RiTailwindCssLine, text: "Tailwind CSS" },
   { icon: FaHtml5, text: "HTML5" },
   { icon: FaCss3Alt, text: "CSS3" },
   { icon: SiRedux, text: "Redux" },
   { icon: SiZulip, text: "Zustand" },
]

function Skills_part() {
   React.useEffect(() => {
      AOS.init();
   }, []);

   return (
      <div className='w-screen py-12 bg-[#efefef]  h-auto'>
         <h2 className='text-4xl text-center uppercase font-DM font-Five text-[#ff0000]' data-aos="fade-down"> My Skills </h2>
         <div className='w-[90%] h-auto m-auto mt-12 flex flex-wrap justify-center gap-6 border-black'>
            {SkillData.map((item, index) => (
               <div className='w-[12rem] h-[14rem]  '>
                  <LoadingCircle key={index} icon={item.icon} />
                  <h1 className='text-center mt-12 font-semibold'>

                     {item.text}
                  </h1>
               </div>
            ))}
         </div>
         <div className='flex justify-center'>
               <Button context="Know more" style="border-[#000000] bg-[#ff0000] group-hover:border-black" btStyle="bg-[#000000] text-white" link="skills"/>
         </div>

      </div>
   )
}

export default Skills_part