import React from 'react'

function GetInTouch() {
  return (
    <>
      <div className="w-[100%] grid grid-cols-12 bg-main get-touch-container">
        <div className='col-span-12 md:col-span-6 min-h-[300px] vsm:min-h-[450px]' >
        </div>

        <div className="col-span-12 md:col-span-6 bg-opacity-35 bg-zinc-800 backdrop-filter backdrop-blur-[25px]">
          <div className="py-[70px] px-[24px] md:p-[70px] text-white">
            <div className="text-heading leading-[30px]  ">
              Get In Touch Today!
            </div>

            <div className='sub-title text-body mt-[15px]'>
              Cras convallis a augue non ullamcorper. Maecenas nec tempor nulla, nec semper mauris. In vitae urna justo. Quisque at nulla pellentesque.
            </div>

            <div className='mt-[30px] flex flex-col gap-[20px]'>
              <input type="text" placeholder='Name' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.2)] placeholder:text-[13px] outline-none cursor-text rounded-md' />
              <input type="text" placeholder='Phone Number' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.2)] placeholder:text-[13px] outline-none cursor-text rounded-md'/>
              <input type='text' placeholder='Date' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.2)] placeholder:text-[13px] outline-none cursor-text rounded-md'/>
              <textarea type="text" rows={5} placeholder='Message' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.2)] placeholder:text-[13px] outline-none cursor-text rounded-md'/> 
            </div>
            
            <div className="mt-[20px] vsm:max-w-[190px] flex justify-center vsm:justify-start items-center gap-2 bg-black py-[13px] px-[30px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
              <button className=" text-[14px] text-white">
                Send Message
              </button>
              <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default GetInTouch
