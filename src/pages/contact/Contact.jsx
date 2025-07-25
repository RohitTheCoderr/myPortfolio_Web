

import React, { useState } from "react";
import { FaMobileAlt, FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import useScrollToTop from '../../hooks/useScrollToTop';
import NavItem from "../../components/cards/NavItem";
import emailjs from "@emailjs/browser";

function Contact() {
    useScrollToTop();

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .send(
                "service_600fays", // Replace with your actual Service ID
                "template_zz47i88", // Replace with your Template ID
                formData,
                "3MdbeSJOkbrN9IOP0" // Replace with your Public Key
            )
            .then(
                (response) => {
                    console.log("Email successfully sent!", response);
                    alert("Message sent successfully!");
                    setFormData({ name: "", mobile: "", email: "", message: "" });
                },
                (error) => {
                    console.log("Failed to send email:", error);
                    alert("Failed to send message. Please try again later.");
                    // setFormData({ name: "", mobile: "", email: "", message: "" });
                }
            )
            .finally(() => setIsLoading(false));
    };

    const navItems = [
        { href: "https://wa.me/9654853181?text=Hello!%20I'd%20like%20to%20know%20more%20about%20your%20services.", icon: FaWhatsapp, tooltip: 'Whatsapp' },
        { href: 'https://www.linkedin.com/in/rohit-kumar2003', icon: FaLinkedinIn, tooltip: 'Linkedin' },
        { href: 'https://github.com/RohitTheCoderr', icon: FaGithub, tooltip: 'Github' },
        { href: 'https://www.instagram.com/rohit_kr3181/?__pwa=1', icon: FaInstagram, tooltip: 'Instagram' },
    ];

    return (
        <section className="w-full relative bg-cover py-4 bg-bg">
            <div className="absolute inset-0 bg-opacity-30"></div>
            <div className="h-auto w-full relative pt-8">
                <div className="h-auto w-auto m-auto flex justify-around flex-wrap-reverse gap-4">
                    <div className="h-auto bg-black/5 backdrop-blur-lg py-2 border-[1px] border-primary rounded-lg">
                        <h1 className="text-primary text-2xl font-semibold text-center underline">Contact Information</h1>
                        <div className="w-[80%] m-auto sm:w-[70%] md:w-[30rem] sm:px-2 mt-10">
                            <div className="flex gap-4 my-4">
                                <FaMobileAlt className="text-xl text-text" />
                                <span className="text-text text-lg">+91-9654853181, 8595152392</span>
                            </div>
                            <div className="flex gap-4 my-4">
                                <AiOutlineMail className="text-xl text-text" />
                                <span className="text-text text-lg">rohitkumar9643017@gmail.com</span>
                            </div>
                            <div className="flex gap-4 my-4">
                                <FaLocationDot className="text-2xl text-text" />
                                <span className="text-text text-lg">Tirkha colony Ballabgarh Faridabad (Delhi NCR) Haryana</span>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-center gap-4">
                            {navItems.map((item, index) => (
                                <NavItem key={index} href={item.href} icon={item.icon} tooltip={item.tooltip} iconbg={""} liStyle={"w-[3rem]"} tooltipStyle={"text-text"} />
                            ))}
                        </div>
                    </div>

                    <div className="h-auto w-[28rem] flex flex-col items-center bg-black/5 backdrop-blur-lg py-2 border-[1px] border-primary rounded-lg">
                        <h1 className="text-primary text-2xl font-semibold underline">Get in Touch</h1>
                        <form onSubmit={sendEmail} className="mt-6 w-auto p-4 rounded-lg">
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className=" bg-transparent text-heading border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 mb-2 sm:mb-4" />
                            <input type="number" name="mobile" placeholder="Mobile No." value={formData.mobile} onChange={handleChange} required className=" bg-transparent text-heading border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem]  w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 mb-2 sm:mb-4" />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className=" bg-transparent text-heading border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem]  w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 mb-2 sm:mb-4"  />
                            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="bg-transparent text-heading border border-heading h-32 w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-4"></textarea>
                            <button type="submit" className="cursor-pointer border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full sm:text-[18px] md:text-[20px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg outline-none font-semibold bg-heading hover:bg-text uppercase text-white">
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;










// import React from "react";
// import { BsTelephoneFill } from "react-icons/bs";
// import { FaMobileAlt,FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { FaLocationDot,FaGithub, FaInstagram } from "react-icons/fa6";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import useScrollToTop from '../../hooks/useScrollToTop';
// import NavItem from "../../components/cards/NavItem";

// function Contact() {

//     useScrollToTop()

//     const navItems = [
//         { href: "https://wa.me/9654853181?text=Hello!%20I'd%20like%20to%20know%20more%20about%20your%20services.", icon: FaWhatsapp, tooltip: 'Whatsapp' },
//         { href: 'https://www.linkedin.com/in/rohit-kumar2003', icon: FaLinkedinIn, tooltip: 'Linkedin' },
//         { href: 'https://github.com/RohitTheCoderr', icon: FaGithub, tooltip: 'Github' },
//         { href: 'https://www.instagram.com/rohit_kr3181/?__pwa=1', icon: FaInstagram, tooltip: 'Instagram' },
//     ];
//     return (
//         <>
//             <section className="w-full relative bg-cover py-4 bg-center bg-no-repeat font-sans bg-black "
//             // style={{ backgroundImage: `url("enquirywallpaper1.jpg")` }}
//             >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-opacity-30"></div>

//                 <div className="h-auto w-full z-30 relative pt-8 ">
//                     <div className="h-auto w-auto m-auto flex justify-around flex-wrap-reverse gap-4 ">
//                         <div className="h-auto bg-white/5 backdrop-blur-lg py-2">
//                             <div><h1 className="text-white text-[1rem] sm:text-xl md:text-2xl lg:text-[2rem] xl:text-[2.2rem] font-semibold text-center underline capitalize">Contact information</h1></div>

//                             <div className="h-auto w-[80%] m-auto sm:w-[70%] md:w-[30rem] sm:px-2 mt-10">
//                                 <div className=" w-auto flex jusctify-center gap-4 my-4">
//                                     <FaMobileAlt className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
//                                     <span className="text-white text-[14px] sm:text-[18px]">+91-9654853181, 8595152392</span>
//                                 </div>

//                                 <div className=" w-auto flex jusctify-center gap-4 my-4">
//                                     <AiOutlineMail className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
//                                     <span className="text-white text-[14px] sm:text-[18px]">rohitkumar9643017@gmail.com</span>
//                                 </div>

//                                 <div className=" w-auto flex jusctify-center gap-4 my-4">
//                                     <span><FaLocationDot className="text-[18px] sm:text-2xl text-white" /></span>
//                                     <span className="text-white text-[14px] sm:text-[18px] ">Tirkha colony Ballabgarh Faridabad (Delhi NCR) Haryana </span>
//                                 </div>
//                             </div>
//                             <div className="w-auto mt-10 h-auto">
//                                 <div className="flex justify-center gap-0 sm:gap-1 md:gap-4">
//                                     {navItems.map((item, index) => (
//                                         <NavItem key={index} href={item.href} icon={item.icon} tooltip={item.tooltip} iconbg={"bg-white "} liStyle={"w-[3rem]"} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="h-auto w-[28rem] flex flex-col items-center bg-white/5 backdrop-blur-lg py-2 ">
//                             <h1 className="text-white text-[1rem] sm:text-xl md:text-2xl lg:text-[2rem] xl:text-[2.2rem] font-semibold underline capitalize">get in touch</h1>
//                             <form className="mt-1 sm:mt-2  md:mt-4 lg:mt-6 xl:mt-7 w-auto p-4 rounded-lg">
//                                 <input type="text" placeholder="Name" className=" bg-transparent text-heading border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4" />
//                                 <input type="number" placeholder="Mobile No." className=" bg-transparent text-heading border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem]  w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4" />
//                                 <input type="text" placeholder="Email" className=" bg-transparent text-heading border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem]  w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4" />
//                                 <textarea
//                                     name="Your Message"
//                                     id="footextArea"
//                                     placeholder="Your Message"
//                                     className="bg-transparent text-heading border-[1px] border-heading h-32 sm:h-40 md:h-48 lg:56 xl:h-64 w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4"
//                                 ></textarea>
//                                 <button className=" border-[1px] border-heading h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full sm:text-[18px] md:text-[20px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-4 outline-none font-bold bg-heading hover:bg-[#000000] uppercase text-white">send message</button>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default Contact



