import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, icon: Icon, tooltip, liStyle, IconStlye, iconbg, tooltipStyle, href }) => {
  return (
    <li className={`group relative flex items-center justify-center ${liStyle}`}>
      {!href ?
        <Link to={to}>
            <div className={`bg-black p-[3px] md:p-2 rounded-full group-hover:translate-y-[-10px] transition-transform ${iconbg}`}>
              <Icon className={` text-2xl group-hover:text-[#ff0000] ${IconStlye}`} />
            </div> 
        </Link>
         :
        <a href={href}>
          <div className={`rounded-full p-[0.4rem] group-hover:translate-y-[-10px] transition-transform ${iconbg}`}>
            <Icon className={`text-2xl group-hover:text-[#ff0000] ${IconStlye}`} />
          </div>
        </a>
      }
      <span className={`text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] opacity-0 group-hover:opacity-100 transition-opacity ${tooltipStyle}`}>
        {tooltip}
      </span>
    </li>
  );
};

export default NavItem;
