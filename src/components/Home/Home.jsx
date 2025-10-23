import React from 'react'
import child from '../../assets/child.svg'
export default function Home() {
  return <>
    <div className='bg-[#1ABC9C] pt-20 h-[82vh] mt-22'>
      <div className="flex items-center justify-center">
        <div className="main text-center flex items-center justify-center flex-col">
          <img src={child} alt="child" className='w-9/12' />
          <h1 className='text-white my-9 font-bold uppercase text-4xl'>start Framework</h1>
          <div className='flex items-center justify-center gap-4 mb-5'>
            <div className="left w-19 h-[4.2px] bg-white"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <div className=" w-19 h-[4.2px] bg-white"></div>
          </div>

          <h4 className='text-white text-md '>Graphic Artist - Web Designer - Illustrator</h4>
        </div>
      </div>
    </div>

  </>


}
