import React, { useEffect } from 'react'
import './styles/SelectionCard.css'
import Aos from 'aos';


function SelectionCard({product}) {
  const { id, name, image } = product

  useEffect(()=>{
    Aos.init();
   },[])

  return (
    <>
      <div className={`w-[250px] ${id%2===0 ? "h-[250px]" : "h-[366px]"} flex-shrink-0 selection-card relative hover:scale-[1.05] transition-all delay-[40ms]`} data-aos="zoom-in" data-aos-duration="1000">
        <img src={image} className="w-[100%] h-[100%] object-cover" alt=""/>
        <div className="mt-[20px] text-[14px]">{name}</div>
        <div className='absolute view-more py-1.5 bg-black text-white bottom-[10px] right-[10px] left-[10px] flex justify-center items-center'>
          VIEW MORE
        </div>
      </div>
    </>
  )
}

export default SelectionCard
