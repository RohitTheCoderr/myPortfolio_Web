import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaRProject, FaMobileAlt } from 'react-icons/fa';
import { GiGraduateCap, GiSkills } from 'react-icons/gi';
import NavItem from "../../components/cards/NavItem";

const Header = ({ img }) => {
  const navItems = [
    { to: '/', icon: FaUserCircle, tooltip: 'About me' },
    // { to: '/education', icon: GiGraduateCap, tooltip: 'Education' },
    { to: '/skills', icon: GiSkills, tooltip: 'Skills' },
    { to: '/projects', icon: FaRProject, tooltip: 'Projects' },
    { to: '/contact', icon: FaMobileAlt, tooltip: 'Contact' },
  ];

  return (
    <>
      <div className=" shadow-lg bg-text  py-2 fixed w-full z-50">
        {/* <div className="w-[95%] sm:w-[90%] mx-auto h-[5rem] md:h-[7rem] flex justify-between items-end flex-wrap "> */}
        <div className="w-[95%] sm:w-[90%] mx-auto h-[4rem] flex justify-between items-end flex-wrap ">

          <div className="cursor-pointer  flex items-center my-auto font-thin">
            <Link to="/"><div className="text-primary uppercase font-sans font-semibold text-[20px] lg:text-3xl">Rohit</div></Link>
          </div>
          {/* <Navbarcard/> */}
          <div className="w-auto h-auto">
            {/* <div className="flex justify-end gap-0 sm:gap-1 md:gap-4 "> */}
            <div className="flex justify-end gap-3 sm:gap-6 ">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                  
                    isActive
                      ? "text-bg text-sm sm:text-base border-b-[0.19rem] border-primary transition-all duration-300 pb-2 "
                      : " text-white text-sm sm:text-base hover:border-b-[0.19rem] hover:border-primary transition-all duration-300 pb-2 "
                  
                  }
                >
                  {item.tooltip}
                </NavLink>

                // <NavItem key={index} to={item.to} icon={item.icon} tooltip={item.tooltip} liStyle={"w-[3rem] sm:w-[4rem] md:w-[5rem] "} IconStlye={"text-white sm:text-3xl md:text-4xl"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
