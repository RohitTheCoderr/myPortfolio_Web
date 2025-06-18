import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const LoadingCircle = ({icon: Icon, text}) => {
      React.useEffect(() => {
          AOS.init();
        }, []);
  return (
    <>
    {/* <div className=" w-full flex justify-center group" >
      <div className="relative h-[6rem] md:h-[8rem] w-[6rem] md:w-[8rem]  rotate-45 border-[7px] border-white group-hover:border-[#ff0000] animate-[move_0.5s_linear_infinite_alternate-reverse] flex items-center justify-center group-hover:animate-none  ">
        <div className="h-[4.7rem] md:h-[6.7rem] w-[4.7rem] md:w-[6.7rem]  border-x-[#ff0000] border-y-black border-double border-transparent group-hover:border-x-[#000000] border-[7px]  group-hover:animate-none flex items-center justify-center">
          <Icon className={`text-4xl md:text-[4rem] group-hover:text-[#ff0000] text-black  rotate-[-45deg]`} />
        </div>
      </div>
    </div>
     */}

       <div className="w-full flex justify-center">
                <div className="relative group w-32 md:w-40 h-32 md:h-40 bg-[#0D1117] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#161B22] p-4 rounded-full border-4 border-[#fff] group-hover:border-[#ff0000] transition-all duration-300">
                        <Icon className="text-3xl md:text-4xl text-white group-hover:text-[#ff0000] transition-all duration-300 rotate-0" />
                    </div>

                    <p className="text-[#C9D1D9] text-sm md:text-base font-medium group-hover:text-[#ff0000] transition-all duration-300">
                        {text}
                    </p>
                </div>
            </div>
    </>
  );
};

export default LoadingCircle;
