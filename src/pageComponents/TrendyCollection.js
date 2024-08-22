import React from 'react'
import TrendyCard from '../components/TrendyCard'

function TrendyCollection({trendyProducts}) {
  return (
    <>
     <div className="w-[100%] grid grid-cols-12 bg-sub">
        <div className='col-span-12 md:col-span-6 trendy-collection-container'>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="p-[24px] vsm:p-[30px] pt-[70px] pb-[70px] md:p-[70px]">
            <div className="selection-subheading text-[11px] mb-[15px]" style={{letterSpacing: "5px"}}>
              OUR RECENT PRODUCTS
            </div>
            <div className="text-[28px] vsm:text-heading leading-[30px]">
              Trendy Design Collections
            </div>

            <div className="trendy-collection flex items-center overflow-x-scroll flex-nowrap gap-[25px] py-[40px]">


              { trendyProducts.length > 0 ? 
                trendyProducts.map(product => <TrendyCard key={product?.id} product={product}/>)
                :
                <div>Loading</div>
              }

              
            </div>
            
          </div>
        </div>
      </div> 
    </>
  )
}

export default TrendyCollection
