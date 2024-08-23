import Aos from 'aos';
import React, { useEffect } from 'react'

function TrendyCard({product}) {

  const { name, image,category, price } = product;

  useEffect(()=>{
    Aos.init();
   },[])

  return (
    <>
      <div className="w-[305px] vsm:w-[295px] flex flex-col flex-shrink-0 items-start" data-aos="fade-left" data-aos-duration="1000">
        <img src={image} className="h-[320px] w-[100%] object-cover" alt=""/>
        <div className="w-[100%] flex justify-between items-end mt-[20px]">
          <div className=" text-[13px] text-[#868686] uppercase" style={{letterSpacing: "7px", lineHeight: "13px"}}>{category}</div>
          <img src="./assets/icons/like.svg" className="w-[18px]" alt=""/>
        </div>
        <div className="text-[18px] mt-[15px]">
          {name}
        </div>
        <div className="mt-[15px] flex gap-[15px] items-center">
          <div className="text-[13px] text-[#969696] line-through">59.00</div>
          <div className="text-[14px] text-black ">{price}.00</div>
        </div>
      </div>
    </>
  )
}

export default TrendyCard
