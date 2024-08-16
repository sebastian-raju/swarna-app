import React from 'react'
import './styles/SelectionCard.css'


function SelectionCard({product}) {
  const { id, name, image } = product
  return (
    <>
      <div className={`w-[250px] ${id%2===0 ? "h-[250px]" : "h-[366px]"} flex-shrink-0 selection-card relative`}>
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
