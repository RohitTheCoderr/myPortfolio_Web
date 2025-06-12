// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavItem = ({ to, icon: Icon, tooltip, liStyle, IconStlye, iconbg, tooltipStyle, href }) => {
//   return (
//     <li className={`group relative flex items-center justify-center ${liStyle}`}>
//       {!href ?
//         <Link to={to}>
//             <div className={`bg-black p-[3px] md:p-2 rounded-full group-hover:translate-y-[-10px] transition-transform ${iconbg}`}>
//               <Icon className={` text-2xl group-hover:text-[#ff0000] ${IconStlye}`} />
//             </div> 
//         </Link>
//          :
//         <a href={href}>
//           <div className={`rounded-full p-[0.4rem] group-hover:translate-y-[-10px] transition-transform ${iconbg}`}>
//             <Icon className={`text-2xl group-hover:text-[#ff0000] ${IconStlye}`} />
//           </div>
//         </a>
//       }
//       <span className={`text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] opacity-0 group-hover:opacity-100 transition-opacity ${tooltipStyle}`}>
//         {tooltip}
//       </span>
//     </li>
//   );
// };

// export default NavItem;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, icon: Icon, tooltip, liStyle, IconStlye, iconbg, tooltipStyle, href }) => {
  return (
    <li className={`group relative flex items-center justify-center ${liStyle}`}>
      {!href ? (
        <NavLink to={to} >
          {({ isActive }) => (
            <>
              <div
                className={`bg-black p-[5px] md:p-2 rounded-full transition-transform 
                  group-hover:translate-y-[-10px] 
                  ${isActive ? 'translate-y-[-10px]' : ''} 
                  ${iconbg}`}
              >
                <Icon
                  className={`text-2xl transition-colors 
                    group-hover:text-[#ff0000] 
                    ${isActive ? '!text-[#ff0000]' : ''} 
                    ${IconStlye}`}
                />
              </div>
              <span
                className={`text-[#ff0000] text-[10px] min-w-[3rem] w-full max-md:-ml-2 max-md:text-center sm:text-[14px] md:text-sm font-Five absolute 
                  top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] 
                  transition-opacity 
                  ${isActive ? 'opacity-100' : 'opacity-0'} 
                  group-hover:opacity-100 
                  ${tooltipStyle}`}
              >
                {tooltip}
              </span>
            </>
          )}
        </NavLink>
      ) : (
        <a href={href}>
          <div
            className={`rounded-full p-[0.4rem] group-hover:translate-y-[-10px] transition-transform ${iconbg}`}
          >
            <Icon className={`text-2xl group-hover:text-[#ff0000] ${IconStlye}`} />
          </div>
          <span
            className={`text-[#ff0000] text-[10px] sm:text-[14px] md:text-sm font-Five absolute 
              top-[-1.7rem] sm:top-[-2rem] md:top-[-2.5rem] 
              opacity-0 group-hover:opacity-100 transition-opacity 
              ${tooltipStyle}`}
          >
            {tooltip}
          </span>
        </a>
      )}
    </li>
  );
};

export default NavItem;
