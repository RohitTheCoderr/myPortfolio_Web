import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const LoadingCircle = ({icon: Icon}) => {
      React.useEffect(() => {
          AOS.init();
        }, []);
  return (
    <div className=" w-full flex justify-center group" data-aos="fade-up">
      <div className="relative h-[6rem] md:h-[8rem] w-[6rem] md:w-[8rem]  rotate-45 border-[7px] border-white group-hover:border-[#ff0000] animate-[move_0.5s_linear_infinite_alternate-reverse] flex items-center justify-center group-hover:animate-none  ">
        <div className="h-[4.7rem] md:h-[6.7rem] w-[4.7rem] md:w-[6.7rem]  border-x-[#ff0000] border-y-black border-double border-transparent group-hover:border-x-[#000000] border-[7px]  group-hover:animate-none flex items-center justify-center">
          <Icon className={`text-4xl md:text-[4rem] group-hover:text-[#ff0000] text-black  rotate-[-45deg]`} />
        </div>
      </div>
    </div>
  );
};

export default LoadingCircle;
