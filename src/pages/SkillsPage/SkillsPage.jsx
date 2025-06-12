import React from 'react'
import SkillsBarGraph from '../../components/rechart'
import useScrollToTop from '../../hooks/useScrollToTop';

function SkillsPage() {
    useScrollToTop()
    return (
        <>
            <div className="bg-[url('/skills.jpg')] bg-center bg-cover h-[40%] lg:h-[60%] w-screen flex justify-center sm:justify-start items-center"></div>
            <div className=' w-[90%] m-auto flex flex-wrap items-center justify-between'>
                <div className='w-full m-auto sm:w-[80%] md:w-[45%] md:m-0'>
                    <SkillsBarGraph />
                </div>
                <div className=' md:w-[50%] pb-4 md:p-0 '>
                    <p className='mt-4'>
                        I am a dedicated and results-oriented frontend developer with a strong foundation in React.js, Tailwind CSS, and JavaScript. With hands-on experience in developing responsive and user-friendly web applications, I specialize in transforming complex ideas into elegant solutions.
                    </p>
                    <p className='mt-4'>
                        My technical expertise spans frontend technologies, backend development with Node.js and Express, and database management using MongoDB. I am also proficient in utilizing state management libraries like Zustand, ensuring efficient and scalable application performance.
                    </p>
                    <p className='mt-4'>
                        Throughout my journey, I have honed my problem-solving skills by overcoming technical challenges and delivering high-quality solutions. During my internship at One Tick Technology, I developed an e-commerce platform, implementing a modern UI with optimized API calls using Axios, resulting in a seamless user experience.
                    </p>
                    <p className='mt-4'>
                        Passionate about continuous learning, I strive to stay updated with emerging technologies. I aspire to be a valuable team member and leader, contributing to impactful projects that drive innovation and user satisfaction.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SkillsPage