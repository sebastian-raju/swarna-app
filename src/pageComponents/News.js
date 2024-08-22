import Aos from 'aos';
import React, { useEffect } from 'react'

function News() {

  useEffect(()=>{
    Aos.init();
   },[]);

  return (
    <>
      <div className="w-[100%] flex flex-col items-center px-[24px] sm:px-[50px] pt-[100px] pb-[120px] bg-sub">
        <div className="w-[100%] max-w-container">
          <div className="text-[10px] mb-[15px]" style={{letterSpacing:"5px"}}>NEWS UPDATES</div>
          <div className="w-[100%] grid grid-cols-12 items-center gap-[20px]">
            <div className="col-span-12 md:col-span-7">
              <div className="text-heading w-[100%] md:max-w-[350px] leading-[40px]">
                Recent News  & Blogs 
                Updates
              </div> 
            </div>
            <div className="col-span-12 md:col-span-5 text-body">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
              layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
              using 'Content here, content here', making it look like readable English. Many desktop publishing packages
            </div>
          </div>
          <div className="h-[0.2px] w-[100%] mt-[50px] mb-[50px] bg-slate-700"></div>

          <div className="flex flex-nowrap overflow-x-scroll gap-[30px] pb-[60px] blog-section">
            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/bYKygW20/news1.avif" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/4x1FC0Mb/person1.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/T1Xr3d5y/news2.jpg" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/gj9KLyQ2/person4.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] text-[12px]" style={{letterSpacing:"2px"}}>
                22.DEC.2023, By Rahmi
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/kMxQhbLW/news3.jpg" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/gj9KLyQ2/person4.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] text-[12px]" style={{letterSpacing:"2px"}}>
                22.DEC.2023, By Rahmi
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/dt68JKs1/news4.jpg" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/gj9KLyQ2/person4.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] text-[12px]" style={{letterSpacing:"2px"}}>
                22.DEC.2023, By Rahmi
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default News
