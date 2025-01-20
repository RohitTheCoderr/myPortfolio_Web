import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Intro() {
    React.useEffect(() => {
          AOS.init();
        }, []);
  return (
    <div id='aboutme' className='w-screen py-12 bg-[#efefef] h-auto'>
      <h2 className='text-4xl text-center uppercase font-DM font-Five'  data-aos="fade-down"> About me </h2>
      <div className='w-[90%]  h-auto m-auto mt-12 flex flex-wrap md:flex-nowrap justify-center md:justify-between lg:justify-normal items-center gap-8 md:gap-2 md:space-x-2 lg:space-x-12'>
        <div className=' h-[14rem] sm:h-[20rem] lg:h-[25rem] xl:h-[30rem] w-[14rem] sm:w-[20rem] lg:w-[25rem] xl:w-[30rem] shadow-[#ff0000] shadow-[1px_2px_20px_1px_rgba(0,0,0,0.3)]  flex justify-center items-center rounded-full ' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"><img src="/rohit-crope.jpg" alt="" className='h-full w-full bg-black rounded-full ' /></div>
        <div className='w-full text-sm sm:text-base m-auto  md:w-[55%] lg:w-[45%] font-DM text-slate-700 h-auto '>
          <p> <span className='text-6xl font-Poppins '>A</span> passionate Frontend Developer with a knack for creating engaging and responsive web applications. I graduated with a <span className='text-[#ff0000] font-semibold'>Bachelor of Computer Applications</span> from Pt. J.L.N. College, Faridabad (Maharshi Dayanand University) and I completed a 6-month internship at One Tick Technology, where I honed my technical and problem-solving skills by working on real-world projects.</p>
          <p> With expertise in <span className='text-[#ff0000] font-Five'> React.js, JavaScript, Tailwind CSS, and backend</span> technologies like  <span className='text-[#ff0000] font-Five'>Node.js</span>,  <span className='text-[#ff0000] font-Five'>Express</span>, and <span className='text-[#ff0000] font-Five'>MongoDB</span>.</p>
          <p>  I value teamwork, discipline, and continuous learning. Whether it’s troubleshooting code or collaborating on innovative ideas, I bring dedication and a solution-oriented mindset to every challenge. My goal is to grow as a developer and leader, contributing meaningfully to impactful projects.</p>
          <p>  Let’s connect and create something extraordinary together!</p>
        </div>
      </div>
    </div>
  )
}

export default Intro