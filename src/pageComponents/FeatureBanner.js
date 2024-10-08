import Aos from 'aos'
import React, { useEffect } from 'react'

function FeatureBanner() {

  useEffect(()=>{
    Aos.init();
   },[]);

  return (
    <>
     <div className="w-[100%] bg-[#FFFFFF] flex justify-center pt-[40px] pb-[40px] px-[24px] vsm:px-[50px]">
        <div className="w-[100%] max-w-container ">
          <div className="flex flex-nowrap overflow-x-scroll vsm:overflow-x-hidden vsm:grid vsm:grid-cols-12 items-center gap-x-[50px] vsm:gap-x-[0px] gap-y-[20px] mlg:gap-[0px] featureBanner">
            <div className="pe-[0px] py-[15px] border-r-0  vsm:pe-[30px] vsm:py-[0px] vsm:col-span-6 mlg:col-span-3 vsm:border-r border-black flex flex-shrink-0 items-center gap-[20px] justify-center overflow-hidden" data-aos="fade-left" data-aos-duration="700">
              <img src="./assets/icons/reward.svg" className="w-[40px] h-[40px]" alt=""/>
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Reward Program</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
            <div className="px-[0px] py-[15px] vsm:ps-[30px] mlg:px-[30px] vsm:py-[0px] vsm:col-span-6 mlg:col-span-3 border-r-0 mlg:border-r border-black flex flex-shrink-0 items-center justify-center gap-[20px] overflow-hidden" data-aos="fade-left" data-aos-duration="700">
              <img src="./assets/icons/discount.svg" className="w-[40px] h-[40px]" alt="" />
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Special Discounts</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
            <div className=" vsm:pe-[30px] px-[0px] py-[15px] mlg:px-[30px] vsm:py-[0px] vsm:col-span-6 mlg:col-span-3 border-r-0 vsm:border-r border-black flex flex-shrink-0 items-center justify-center gap-[20px] overflow-hidden" data-aos="fade-left" data-aos-duration="700">
              <img src="./assets/icons/shipping.svg" className="w-[50px] h-[40px]" alt=""/>
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Fast shipping</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
            <div className="px-[0px] py-[15px] vsm:ps-[30px] vsm:py-[0px] vsm:col-span-6 mlg:col-span-3 flex flex-shrink-0 items-center gap-[20px] justify-center overflow-hidden" data-aos="fade-left" data-aos-duration="700">
              <img src="./assets/icons/greatPrices.svg" className="w-[40px] h-[40px]" alt=""/>
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Great prices</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default FeatureBanner
