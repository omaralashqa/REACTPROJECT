
import React, { useState } from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
export default function Portfolio() {

  const images = [port1, port2, port3, port1, port2, port3]
  const [block, setblock] = useState(false)
  const [ind, setind] = useState("null")
  return <>
    <div className="portofolio  h-max mt-35 ">
      <div className="container mx-auto w-10/12">
        <h2 className='text-[#2C3E50] my-9 font-bold uppercase text-3xl md:text-5xl text-center'>portfolio component</h2>
        <div className='flex items-center justify-center gap-4 mb-5'>
          <div className="left w-19 h-[4.2px] bg-[#2C3E50]"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#2C3E50]">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <div className=" w-19 h-[4.2px] bg-[#2C3E50]"></div>
        </div>
        <div className="cursol flex flex-wrap mb-8  ">

          {images.map((imgs, index) =>
            <div onClick={() =>{setind(imgs);setblock(true)}} className=" w-12/12 md:w-6/12 lg:w-4/12  px-4">
              <div className="inner md:px-0  mb-5 relative group cursor-pointer ">
                <div className="plus absolute bg-[#1ABA9F] top-0 left-0 right-0 bottom-0 rounded-2xl opacity-0 flex items-center justify-center  transition-all duration-500 ease-in-out  group-hover:opacity-75 ">
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
                <img src={imgs} index={index} alt="" className='rounded-2xl' />
              </div>
            </div>

          )}
        </div>
            {block==true?   <div  onClick={()=>setblock(false)} className="couselimg fixed flex top-0 left-0 bottom-0 right-0 z-50  justify-center items-center p-5 bg-[#C2DBFE]/50 ">
          <img src={ind} alt="" width={600} onClick={(e) => e.stopPropagation()} />
        </div>:""}
     
      </div>

    </div>

  
   
  </>


}