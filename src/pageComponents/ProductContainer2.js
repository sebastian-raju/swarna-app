import React from 'react'
import CollectionCard from '../components/CollectionCard'

function ProductContainer2({productList}) {
  return (
    <>
      <div className="flex flex-nowrap overflow-x-scroll gold-collection-container vsm:overflow-x-hidden pb-[40px] vsm:grid vsm:grid-cols-12 gap-y-[60px] gap-[28px] mt-[50px] vsm:mt-[80px] w-[100%]"  data-aos="fade-right" data-aos-duration="500">
            {/* <!-- card-container --> */}

            { productList.length > 0 ? 
              productList.map(product => <CollectionCard key={product?.id} product={product}/>)
              :
              <>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            <div className='col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start h-[500px] bg-orange-100'></div>
            </>
            }

          </div>
    </>
  )
}

export default ProductContainer2
