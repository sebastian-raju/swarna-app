import React from 'react'
import SelectionCard from '../components/SelectionCard'

function JewellerySelections({productList}) {
  return (
    <>
     <div className="w-[100%] px-[30px] vsm:px-[50px] flex justify-center items-center flex-col bg-main">
      <div className="w-[100%] max-w-container mt-[100px]">
        <div className="selection-subheading text-[11px]" style={{letterSpacing:"5px"}}>
          OUR CATEGORIES WORK
        </div>
        <div className="mt-[10px] text-[28px] vsm:text-heading vsm:leading-[40px]">
          Our selection of Jewellery
        </div>
        <div className="selection-container flex items-start gap-4 mt-[40px] overflow-x-scroll h-[500px] flex-nowrap" data-aos="zoom-in" data-aos-duration="1000">
          
          { productList.length > 0 ? 
            productList.map(product => <SelectionCard key={product?.id} product={product}/>)
            :
            <>
            <div className='w-[250px] h-[366px] bg-orange-100 flex-shrink-0'></div>
            <div className='w-[250px] h-[250px] bg-orange-100  flex-shrink-0'></div>
            <div className='w-[250px] h-[366px] bg-orange-100  flex-shrink-0'></div>
            <div className='w-[250px] h-[250px] bg-orange-100  flex-shrink-0'></div>
            <div className='w-[250px] h-[366px] bg-orange-100  flex-shrink-0'></div>
            <div className='w-[250px] h-[250px] bg-orange-100  flex-shrink-0'></div>
            <div className='w-[250px] h-[366px] bg-orange-100  flex-shrink-0'></div>
            </>


          }

        </div>
      </div>
    </div> 
    </>
  )
}

export default JewellerySelections
