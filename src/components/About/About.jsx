import React from 'react'

export default function About() {
  return <>
    <div className="about mt-22 bg-[#1ABC9C] text-center flex items-center justify-center h-[84vh]">
      <div className="container mx-auto w-9/12">
        <h2 className='text-white my-9 font-bold uppercase text-5xl'>about component</h2>
        <div className='flex items-center justify-center gap-4 mb-5'>
          <div className="left w-19 h-[4.2px] bg-white"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <div className=" w-19 h-[4.2px] bg-white"></div>
        </div>
        <div className="flex flex-wrap  ">
          <div className="  w1-2/12 md:w-6/12 my-6 md:my-0 text-white pe-5 text-start">
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className=" w-12/12 md:w-6/12 text-white md:ps-5 text-start">
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy customization.</div>
        </div>
      </div>

    </div>

  </>



}
