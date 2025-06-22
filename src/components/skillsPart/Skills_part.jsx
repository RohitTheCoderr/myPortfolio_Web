import React from 'react'
import LoadingCircle from '../cards/Skills_sping'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiRedux,SiTypescript } from "react-icons/si";
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
   { icon: SiTypescript, text: "TypeScript" },
]

function Skills_part() {
   React.useEffect(() => {
      AOS.init();
   }, []);

   return (
      <div className='w-screen py-12 bg-white  h-auto'>
         <h2 className='text-4xl text-center uppercase font-DM font-Five text-heading' data-aos="fade-down"> My Skills </h2>
         <div className='w-[90%] h-auto m-auto mt-12 flex flex-wrap justify-center gap-6 '>
            {SkillData.map((item, index) => (
               <div className=' ' data-aos="fade-up">
                  <LoadingCircle key={index} icon={item.icon} text={item.text} />
                  {/* <h1 className='text-center mt-12 font-semibold'>
                     {item.text}
                  </h1> */}
               </div>
            ))}
         </div>
         <div className='flex justify-center'>
               <Button context="Know more" style="" btStyle="" link="skills"/>
         </div>

      </div>
   )
}

export default Skills_part