import { Link } from "react-router-dom"
import React from "react"
export const Button = ({ name, type, style, btStyle, onClick, context, link, download }) => {
  return (
    <>
      <div className='mt-12 flex '>
        {download ?
          <a href={download} download="Rohit_CV.pdf" > <span className='group flex cursor-pointer'>
            <div className={` group-hover:bg-text group-hover:text-white text-base xl:text-xl font-bold h-[3rem] xl:h-[4rem] px-8 xl:px-10 text-text capitalize border-[1px] flex items-center border-r-0 border-text ${style}`}>
              {context}
            </div>
            <button className={`h-[3rem] xl:h-[4rem] w-[5rem] transition-transform group-hover:bg-bg group-hover:border-[1px] group-hover:border-text text-2xl xl:text-3xl group-hover:text-text font-extrabold ${btStyle}`}>
              →
            </button>
          </span>
          </a > :

          <Link to={link} > <span className='group flex cursor-pointer'>
            <div className={` bg-heading text-white group-hover:bg-white group-hover:text-text text-base xl:text-xl font-bold h-[3rem] xl:h-[4rem] px-8 xl:px-10 capitalize group-hover:border-[1px] border-white group-hover:border-text flex items-center border-r-0  ${style}`}>
              {context}
            </div>
            <button className={` h-[3rem] xl:h-[4rem] w-[5rem] transition-transform bg-white text-text group-hover:bg-text text-2xl xl:text-3xl border-[1px] border-text group-hover:text-white font-extrabold ${btStyle}`}>
              →
            </button>
          </span>
          </Link >
        }
      </div>
    </>
  )
}

