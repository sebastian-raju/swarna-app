import React, { useEffect } from 'react'
import './styles/CollectionCard.css'
import Aos from 'aos';

function CollectionCard({product}) {
  const { name, image,category, price } = product;

  useEffect(()=>{
    Aos.init();
   },[])

  return (
    <>
      <div className="flex-shrink-0 vsm:flex-none vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start collection-card relative">
        <img src={image} className="h-[350px] w-[290px] vsm:w-[100%] object-cover" alt=""/>
        <div className="w-[100%] flex justify-between items-end mt-[20px]">
          <div className=" text-[13px] text-[#868686] uppercase" style={{letterSpacing:"7px",lineHeight:"13px"}}>{category}</div>
          <img src="./assets/icons/like.svg" className="w-[18px]" alt=""/>
        </div>
        <div className="text-[18px] mt-[15px] w-[100%]">
          {name}
        </div>
        <div className="mt-[15px] flex gap-[15px] sm:gap-[10px] items-center w-[100%]">
          <div className="text-[13px] text-[#969696] line-through">59.00</div>
          <div className="text-[14px] text-black ">{price}.00</div>
        </div>
        <div className="mt-[15px] flex justify-start items-center sm:gap-[12px] gap-[10px] w-[100%]">
          <div className="">
            <img src="./assets/shapes/Stars.svg" className="w-[100px]" alt=""/>
          </div>
          <div className="text-[14px]">4.5 Reviews</div>
        </div>
        <div className='add-cart absolute py-2 bg-black text-white top-[310px] left-[10px] right-[10px] flex justify-center items-center'>
          ADD CART
        </div>
        <div className='absolute card-options flex flex-col item-center gap-y-[7px] top-[20px] right-[20px]'>
          <div className='bg-black px-2 py-2 rounded-full flex justify-center items-center'>
            <img src="./assets/icons/iso_search.svg" className='w-[15px]' alt="" />
          </div>
          <div className='bg-black px-2 py-2 rounded-full flex justify-center items-center'>
            <img src="./assets/icons/iso_refresh.svg" className='w-[15px]' alt="" />
          </div>
          <div className='bg-black px-2 py-2 rounded-full flex justify-center items-center'>
            <img src="./assets/icons/iso_like.svg" className='w-[15px]' alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default CollectionCard
