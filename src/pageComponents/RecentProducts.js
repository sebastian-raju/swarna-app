import Aos from 'aos';
import React, { useEffect } from 'react'

function RecentProducts() {

  useEffect(()=>{
    Aos.init();
   },[]);

  return (
    <>
     {/* our recent products */}
     <div className="w-[100%] flex justify-center pb-[80px] bg-sub">
        <div className="w-[100%] max-w-container grid grid-cols-12 pt-[100px] items-center mx-[30px] vsm:mx-[50px]">
          <div className="col-span-12 mlg:col-span-7 flex flex-col items-start  py-[0px] pe-[0px] mlg:py-[40px] mlg:pe-[40px] ">
            <div className="selection-subheading text-[11px]" style={{letterSpacing:"5px"}}>
              OUR RECENT PRODUCTS
            </div>
            <div className="mt-[10px] text-[26px] leading-[35px] vsm:text-heading vsm:leading-[40px] w-[100%] mlg:max-w-[420px]">
                Jewels Enhanced with rings, 
                necklaces, earrings, bracelets,
                and more.
            </div> 

            <div className="subcontainer-selection grid grid-cols-12 h-[100%] gap-[20px] mt-[20px]">
              <div className="col-span-12 order-[2] mlg:order-[1] mlg:col-span-7 flex flex-col justify-end items-start">
                <div>
                  Praesent maximus est a ligula ultricies, sit amet ornare dui mattis. 
                  Donec ac mi dui. Donec commodo ultrices elit eu sodales. 
                  Maecenas ut orci hendrerit.
                </div>
                <div className="mt-[20px] flex items-center gap-2 bg-black py-[13px] px-[30px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                  <button className=" text-[14px] text-white">
                    Know More
                  </button>
                  <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                    <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                  </div>
                </div>
              </div>

              <div className="col-span-12 order-[1] mlg:order-[2] mlg:col-span-5 overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
                <img src="https://i.postimg.cc/CxGWj6jK/recent-Img2.jpg" className="rounded-full mlg:rounded-t-full h-[400px] w-[100%] object-cover" alt=""/>
              </div>
            </div>
          </div>

          <div className="hidden mlg:block mlg:col-span-5 h-[650px] ps-[50px] border-l-0 mlg:border-l border-slate-950/5 overflow-hidden" data-aos="fade-left" data-aos-duration="1000">
            <img src="https://i.postimg.cc/52dhQMQG/hero.jpg" className="w-[100%] h-[100%] object-cover" alt=""/>
          </div>
        </div>
      </div> 
    </>
  )
}

export default RecentProducts
