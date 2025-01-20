import React, { useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Navbarcard from "../../components/cards/navbarcard";
import { FaUserCircle, FaRProject,FaMobileAlt } from 'react-icons/fa';
import { GiGraduateCap, GiSkills } from 'react-icons/gi';
// import { FaMobileAlt } from 'react-icons/md';
import NavItem from "../../components/cards/NavItem";
import { FaContao } from "react-icons/fa6";
// import NavItem from './NavItem'; 

const Header = ({ img }) => {
  const navItems = [
    { to: '/', icon: FaUserCircle, tooltip: 'About me' },
    { to: '/education', icon: GiGraduateCap, tooltip: 'Education' },
    { to: '/skills', icon: GiSkills, tooltip: 'Skills' },
    { to: '/projects', icon: FaRProject, tooltip: 'Projects' },
    { to: '/contact', icon: FaMobileAlt, tooltip: 'Contact' },
  ];

  return (
    <>
      <div className="h-[5rem] md:h-[7rem] shadow-lg bg-slate-100 flex justify-between items-end px-2 sm:px-4 md:px-12 py-2 fixed w-full z-50">
        <div className="cursor-pointer h-[5rem] flex items-center my-auto font-thin">
          <Link to="/"><div className="text-[#FF0000] uppercase font-sans font-semibold text-2xl">Rohit</div></Link>
        </div>
        {/* <Navbarcard/> */}
        <div className="w-auto h-auto">
          <div className="flex justify-center gap-0 sm:gap-1 md:gap-4">
            {navItems.map((item, index) => (
              <NavItem key={index} to={item.to} icon={item.icon} tooltip={item.tooltip} liStyle={"w-[3rem] sm:w-[4rem] md:w-[5rem] "} IconStlye={"text-white sm:text-3xl md:text-4xl"}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
