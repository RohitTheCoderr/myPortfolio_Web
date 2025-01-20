import React from 'react'
import Intro from '../../components/introPart/Intro'
import Navbarcard from '../../components/cards/navbarcard'
import Educationpart from '../../components/educationPart/Educationpart'
import { Button } from '../../components/formComponents/Buttons/Button'
import Skills_part from '../../components/skillsPart/Skills_part'
import Project_part from '../../components/projectPart/Project_part'
function Home() {
  return (
    <>
      <div className=' w-screen h-auto  bg-black flex justify-center items-center py-10 md:py-24 '>
        <div className='w-[95%] sm:w-[90%] m-auto flex flex-wrap-reverse sm:flex-nowrap justify-around items-center bg-cover gap-1 sm:gap-2 md:gap-4 '>
          <div className='font-sans my-[2rem] sm:my-0'>
            <h3 className='text-[#ffffff] my-2 text-sm sm:text-lg lg:text-xl '>Hello Everyone.</h3>
            <h1 className='text-[#FF0000] font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl'>I'm Rohit kumar</h1>
            <div className='text-white font-sans text-sm sm:text-xl lg:text-2xl  mt-[1rem]'>A Web developer specializing in MERN stack</div>
            {/* <div className='mt-12 flex  '><span className='group flex cursor-pointer'><div className=' group-hover:bg-white group-hover:text-black text-sm sm:text-base xl:text-xl font-bold h-[2rem] md:h-[3rem] xl:h-[4rem] px-4 md:px-8 xl:px-10 text-white capitalize border-[1px] flex items-center border-r-0 border-white'>download resume </div> <button className=' h-[2rem] md:h-[3rem] xl:h-[4rem] w-[3rem] sm:w-[4rem] md:w-[5rem] transition-transform  bg-white group-hover:bg-[#ff0000] text-2xl xl:text-3xl group-hover:text-white font-extrabold'>→</button></span> </div> */}
            <Button context=" download resume" style="" btStyle="bg-[#ff0000] text-white" download="/rohit kumar (1).pdf"/>
          </div>
          <div className=''>
            <div className='relative bg-[#ff0000] h-[14rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] w-[14rem] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] shadow-white shadow-[1px_2px_20px_1px_rgba(0,0,0,0.3)] flex justify-center items-center rounded-full '><img src="/rohit-crope.jpg" alt="" className='h-full w-full bg-black  rounded-full' /></div>
            <div className='relative mt-[-3rem] sm:mt-[-4rem] md:mt-[-5rem] xl:mt-[-7rem] top-0 h-[4rem] sm:h-[5rem] lg:h-[7rem] w-[4rem] sm:w-[5rem] lg:w-[7rem] xl:w-[7.8rem] xl:h-[7.8rem] shadow-white shadow-[1px_2px_20px_1px_rgba(0,0,0,0.3)] bg-transparent rounded-full '><img src="/rohit-crope.jpg" alt="" className='h-full w-full bg-black  rounded-full ' /></div>
            <div className='relative mt-[-1rem] md:mt-[-1.6rem] md:ml-[-0.6rem] xl:mt-[-2rem] top-0 h-[2rem] sm:h-[2.5rem] lg:h-[3rem] w-[2rem] sm:w-[2.5rem] lg:w-[3rem] xl:w-[4rem] xl:h-[4rem] shadow-white shadow-[1px_2px_20px_1px_rgba(0,0,0,0.3)] bg-transparent rounded-full '><img src="/rohit-crope.jpg" alt="" className='h-full w-full bg-black  rounded-full ' /></div>
            {/* <div className='relative mt-[-3rem] sm:mt-[-4rem] md:mt-[-5rem] xl:mt-[-7rem] top-0 h-[4rem] sm:h-[5rem] lg:h-[7rem] w-[4rem] sm:w-[5rem] lg:w-[7rem] xl:w-[7.8rem] xl:h-[7.8rem] shadow-white shadow-[1px_2px_20px_1px_rgba(0,0,0,0.3)] bg-transparent rounded-full '><div className='h-[6.3rem] w-[6.3rem] bg-transparent rounded-full '></div></div>
            <div className='relative mt-[-1rem] md:mt-[-1.6rem] md:ml-[-0.6rem] xl:mt-[-2rem] top-0 h-[2rem] sm:h-[2.5rem] lg:h-[3rem] w-[2rem] sm:w-[2.5rem] lg:w-[3rem] xl:w-[4rem] xl:h-[4rem] shadow-white shadow-[1px_2px_20px_1px_rgba(0,0,0,0.3)] bg-transparent rounded-full '><div className='h-[6.3rem] w-[6.3rem] bg-transparent rounded-full '></div></div> */}
          </div>
        </div>  
      </div>

      <div className="bg-[#ff0000] h-[2rem] sm:h-auto text-white overflow-hidden border-b-2 border-black">
        <div className="w-full scrolling-text py-1 md:py-2 lg:py-3 flex justify-around items-center ">
          <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-semibold italic font-DM ">Hello everyone</h1>
          <h1 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-semibold italic font-DM capitalize">Welcome to <span className='text-black font-semibold'> my portfolio</span> website</h1>
        </div>
        
      </div>
      <Intro />
      <Educationpart />
      <Skills_part/>
      <Project_part/>
    </>
  )
}

export default Home