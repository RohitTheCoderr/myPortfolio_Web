// import React, { useEffect, useRef, useState } from 'react';
// import { FaPalette } from 'react-icons/fa';

// const themes = [
//   { name: 'blue', color: ['#3b82f6', '#1d4ed8', '#0f172a'] },
//   { name: 'red', color: ['#ef4444', '#b91c1c', '#7f1d1d'] },
//   { name: 'green', color: ['#22c55e', '#15803d', '#064e3b'] },
//   { name: 'purple', color: ['#a855f7', '#6b21a8', '#3b0764'] },
//   { name: 'midnight', color: ['#cbd5e1', '#a78bfa', '#6366f1'] }
// ];

// export default function ThemeSwitcher() {
//   const [theme, setTheme] = useState('default');
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef();

//   useEffect(() => {
//     document.documentElement.classList.remove(...themes.map(t => `theme-${t.name}`));
//     if (theme !== 'default') {
//       document.documentElement.classList.add(`theme-${theme}`);
//     }
//   }, [theme]);

//   useEffect(() => {
//     const handler = e => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener('click', handler);
//     return () => document.removeEventListener('click', handler);
//   }, []);

//   return (
//     <div className="fixed text-left top-32 right-2 z-50" ref={dropdownRef}>
//       {/* Palette Icon Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="h-12 w-12 rounded-full bg-primary text-white text-2xl flex items-center justify-center shadow-md"
//       >
//         🎨
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div className="absolute right-0 mt-2 flex flex-col gap-2 bg-white shadow-lg p-3 rounded-lg">
//           {themes.map(({ name, color }) => (
//             <button
//               key={name}
//               onClick={() => setTheme(name)}
//               title={name}
//               className="flex items-center gap-1 p-1 rounded hover:bg-gray-100 transition"
//             >
//               {color.map((c, i) => (
//                 <div
//                   key={i}
//                   className="h-4 w-4 rounded-full border border-gray-300"
//                   style={{ backgroundColor: c }}
//                 />
//               ))}
//               <span className="ml-2 capitalize text-sm text-gray-600">{name}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import { FaPalette } from 'react-icons/fa';

const themes = [
  { name: 'blue', color: ['#3b82f6', '#1d4ed8', '#0f172a'] },
  { name: 'red', color: ['#ef4444', '#b91c1c', '#7f1d1d'] },
  { name: 'green', color: ['#22c55e', '#15803d', '#064e3b'] },
  { name: 'purple', color: ['#a855f7', '#6b21a8', '#3b0764'] },
  { name: 'midnight', color: ['#cbd5e1', '#a78bfa', '#6366f1'] }
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('default');
  const [open, setOpen] = useState(false);
  const panelRef = useRef();

  useEffect(() => {
    document.documentElement.classList.remove(...themes.map(t => `theme-${t.name}`));
    if (theme !== 'default') {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  useEffect(() => {
    const handler = e => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed top-32 right-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="h-12 w-12 rounded-full bg-primary text-white text-2xl flex items-center justify-center shadow-md"
          title="Change Theme"
        >
          <FaPalette />
        </button>
      </div>

      {/* Side Drawer */}
      <div
        ref={panelRef}
        className={`fixed z-60 top-[6rem] md:top-[8rem] right-0 h-full w-54 md:w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Select Theme 🎨</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-4 flex flex-col gap-3">
          {themes.map(({ name, color }) => (
            <button
              key={name}
              onClick={() => setTheme(name)}
              className={`flex items-center gap-2 p-2 rounded-lg transition-all border shadow-md ${
                theme === name ? 'border-primary ring-[1px] ring-primary' : 'border-transparent'
              } hover:bg-gray-100`}
            >
              {color.map((c, i) => (
                <div
                  key={i}
                  className="h-5 w-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: c }}
                />
              ))}
              <span className="capitalize text-sm text-gray-700">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
