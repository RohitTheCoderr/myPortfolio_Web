// import React from 'react'

// function EducationPage() {
//     return (
//         <>
//             <div className="bg-[url('/educationpage.png')] bg-center bg-cover h-[60%] w-screen flex justify-center sm:justify-start items-center ">
//                 <div className='absolute sm:left-[10%] lg:left-[15%] text-center sm:text-start  tracking-wider'>
//                     <h1 className='text-4xl sm:text-3xl md:text-5xl lg:text-7xl text-[#ffffff] uppercase font-bold mb-2 md:mb-4'> my Education</h1>
//                     <h4 className='text-[#ff0000] text-xl md:text-2xl font-semibold'>A Journey of Knowledge and Growth</h4>
//                 </div>
//             </div>

//             <div className="w-[90%] h-auto mx-auto mt-12 flex flex-wrap md:flex-nowrap justify-center md:justify-between lg:justify-normal items-center gap-8 md:gap-4 lg:gap-12">
//                 {/* Image Section */}
//                 <div className="relative w-full h-[35rem] gap-2 mx-auto text-sm sm:text-base md:w-[55%] lg:w-[60%]">
//                     <div className='w-full flex justify-between'>
//                         <img src="/ugClg/front.jpg" alt="" className=" w-[32%]" />
//                         <img src="/ugClg/gate.jpg" alt="" className=" w-[32%]" />
//                         <img src="/ugClg/lab.jpg" alt="" className=" w-[32%]" />
//                     </div>
//                     <div className='flex justify-between'>
//                           <img src="/ugClg/img2.jpg" alt="" className="w-[49%] " />
//                           <img src="/ugClg/img1.jpg" alt="" className=" w-[49%]" />
//                     </div>
//                 </div>
//                 {/* Content Section */}
//                 <div className="w-full text-sm sm:text-base mx-auto md:w-[55%] lg:w-[45%] font-DM text-slate-700">
//                     <h2 className="text-3xl font-bold text-[#ff0000] mb-4">Matrix Education</h2>
//                     <div className="mb-4">
//                         <p className="font-medium text-gray-700">Duration</p>
//                         <p>2018</p>
//                     </div>
//                     <div className="p-4 border rounded-lg shadow-md mb-4">
//                         <h3 className="text-xl font-semibold text-[#ff0000]">Achievements</h3>
//                         <p className="text-gray-600">Top percentile in exams with 74.6%</p>
//                     </div>
//                     <p className="text-gray-700">
//                         <span className="text-6xl font-Poppins">M</span>y journey through Matrix
//                         Education provided me with an excellent foundation in mathematics,
//                         science, and problem-solving. It fostered my growth both academically and
//                         personally.
//                     </p>
//                 </div>
//             </div>
//             <div className="w-[90%] h-auto mx-auto mt-12 flex flex-wrap md:flex-nowrap justify-center md:justify-between lg:justify-normal items-center gap-8 md:gap-4 lg:gap-12">
//                 {/* Image Section */}
//                 <div className="w-full text-sm sm:text-base mx-auto md:w-[55%] lg:w-[45%] font-DM text-slate-700">
//                     <h2 className="text-3xl font-bold text-[#ff0000] mb-4">Matrix Education</h2>
//                     <div className="mb-4">
//                         <p className="font-medium text-gray-700">Duration</p>
//                         <p>2018</p>
//                     </div>
//                     <div className="p-4 border rounded-lg shadow-md mb-4">
//                         <h3 className="text-xl font-semibold text-[#ff0000]">Achievements</h3>
//                         <p className="text-gray-600">Top percentile in exams with 74.6%</p>
//                     </div>
//                     <p className="text-gray-700">
//                         <span className="text-6xl font-Poppins">M</span>y journey through Matrix
//                         Education provided me with an excellent foundation in mathematics,
//                         science, and problem-solving. It fostered my growth both academically and
//                         personally.
//                     </p>
//                 </div>
//                 <div className="relative w-full h-[35rem] gap-2 mx-auto text-sm sm:text-base md:w-[55%] lg:w-[60%]">
//                     <div className='w-full flex justify-between'>
//                         <img src="/ugClg/front.jpg" alt="" className=" w-[32%]" />
//                         <img src="/ugClg/gate.jpg" alt="" className=" w-[32%]" />
//                         <img src="/ugClg/lab.jpg" alt="" className=" w-[32%]" />
//                     </div>
//                     <div className='flex justify-between'>
//                           <img src="/ugClg/img2.jpg" alt="" className="w-[49%] " />
//                           <img src="/ugClg/img1.jpg" alt="" className=" w-[49%]" />
//                     </div>
//                 </div>

//             </div>
//         </>

//     )
// }

// export default EducationPage
import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const EducationSection = ({ mainHead, title, subtitle, duration, achievements, description, images, isImageLeft }) => {
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
            className={`w-[90%] h-auto mx-auto mt-12 flex flex-wrap md:flex-nowrap ${isImageLeft ? 'flex-row' : 'flex-row-reverse'
                } justify-center md:justify-between lg:justify-normal items-center gap-2 md:gap-8 my-4`}
        >
            {/* Image Section */}
            <div className="w-full text-sm sm:text-base md:w-[55%] lg:w-[60%]" >
                <div className="w-full flex justify-between" data-aos="flip-up">
                    {images.slice(0, 3).map((img, index) => (
                        <img key={index} src={img} alt="" className="w-[32%]" />
                    ))}
                </div>
                <div className="w-full flex justify-between mt-4" data-aos="flip-up">
                    {images.slice(3).map((img, index) => (
                        <img key={index} src={img} alt="" className="w-[49%]" />
                    ))}
                </div>
            </div>
            {/* Content Section */}
            <div className="w-full mx-auto md:w-[55%] lg:w-[45%] h-auto font-DM text-slate-700  text-center">
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-[#ff0000]'>{mainHead}</h1>
                <div className='my-2'>
                    <h2 className="text-xl lg:text-2xl italic font-semibold ">{title}</h2>
                    <h4 className="text-lg text-[#ff0000] font-semibold">Duration : {duration}</h4>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

function EducationPage() {
    const educationData = [
        {
            mainHead: "Matriculation (10th)",
            title: 'Adarsh Public School, Baniya Wara Ballabgarh',
            subtitle: 'Baniya Wara Ballabgarh',
            duration: '2018',
            achievements: 'Secured 75% in board exams.',
            description: "My 10th-grade education laid a strong foundation for my academic journey, nurturing my passion for mathematics and science. I achieved a commendable 75% in the board examinations ",
            images: ['/ugClg/front.jpg', '/ugClg/gate.jpg', '/ugClg/lab.jpg', '/ugClg/img2.jpg', '/ugClg/img1.jpg'],
        },
        {
            mainHead: "Intermediate (12th)",
            title: 'Govt. S.S. School, Chandawali Ballabgarh',
            subtitle: 'Chandawali Ballabgarh',
            duration: '2018-2020',
            achievements: 'Achieved 80% in board exams with a Commerce background.',
            description: '12th grade was a pivotal phase where I strengthened my analytical and problem-solving skills.',
            images: ['/pgClg/front.avif', '/pgClg/gate.jpg', '/pgClg/computerLab.jpg', '/pgClg/Library2.avif', '/pgClg/main.jpg'],
        },
        {
            mainHead: "Bachelor of Computer Application",
            title: 'Pt. J. L. N. College, Sector-16A Faridabad',
            subtitle: 'Sector-16A Faridabad',
            duration: '2020-2023',
            achievements: 'Graduated with a 70% aggregate in BCA.',
            description: 'My undergraduate studies provided me with a strong foundation in computer science and programming.',
            images: ['/ugClg/front.jpg', '/ugClg/gate.jpg', '/ugClg/lab.jpg', '/ugClg/img2.jpg', '/ugClg/img1.jpg'],
        },
        {
            mainHead: "Master of Computer Application",
            title: 'Govt. P. G. College, Sector-9 Gurgaon',
            subtitle: 'Sector-9 Gurgaon',
            duration: '2024-2026',
            achievements: 'Target Specialized in Advanced Computing with an 8.7 CGPA.',
            description: 'My postgraduate studies deepened my understanding of software development and research methodologies.',
            images: ['/pgClg/front.avif', '/pgClg/gate.jpg', '/pgClg/computerLab.jpg', '/pgClg/Library2.avif', '/pgClg/main.jpg'],
        },
    ];

    return (
        <>
            {/* Header Section */}
            <div className="bg-[url('/educationpage.png')] bg-center bg-cover h-[60%] w-screen flex justify-center sm:justify-start items-center">
                <div className="absolute sm:left-[10%] lg:left-[15%] text-center sm:text-start tracking-wider">
                    <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-7xl text-[#ffffff] uppercase font-bold mb-2 md:mb-4">
                        My Education
                    </h1>
                    <h4 className="text-[#ff0000] text-xl md:text-2xl font-semibold">A Journey of Knowledge and Growth</h4>
                </div>
            </div>

            {/* Education Sections */}
            {educationData.map((edu, index) => (
                <EducationSection key={index} isImageLeft={index % 2 === 0} {...edu} />
            ))}
        </>
    );
}

export default EducationPage;
