import React from 'react'

export default function Footer() {
  return <>
    <div className="main bg-[#2C3E50] text-white py-20">
      <div className="container mx-auto w-11/12">
        <div className="flex flex-wrap text-center">
          <div className="w-12/12 md:w-4/12  ">
            <h3 className='font-bold text-2xl ' >LOCATION</h3>
            <h4 className='mb-6 mt-4'>2215 John Daniel Drive</h4>
            <h4>Clark, MO 65243</h4>
          </div>
          <div className="w-12/12 md:w-4/12 my-15 md:my-0">
            <h3 className='font-bold text-2xl '>AROUND THE WEB</h3>
            <div className="icons mt-5 flex items-center justify-center gap-2">
              <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-facebook text-lg"></i>
              </div>
              <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </div>
              <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </div>
              <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-discord text-lg"></i>
              </div>
            </div>

          </div>
          <div className="w-12/12 md:w-4/12 ">
            <h3 className='font-bold text-2xl  mb-3' >ABOUT FREELANCER</h3>
            <h4>Freelance is a free to use, licensed Bootstrap theme created by Route</h4>

          </div>
        </div>
      </div>
    </div>

    <div className="copyright bg-[#1A252F]">
      <h2 className='text-white text-center py-7'>Copyright © Your Website 2025</h2>
    </div>
  </>
}
