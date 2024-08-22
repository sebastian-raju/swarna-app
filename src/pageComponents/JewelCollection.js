import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import ProductContainer from './ProductContainer';
import ProductContainer2 from './ProductContainer2';
import ProductContainer3 from './ProductContainer3';



const RenderComponent = ({index, productList}) =>{
    switch(index) {
      case 1: return <ProductContainer productList={productList}/>
      break;
      case 2: return <ProductContainer2 productList={productList}/>
      break;
      case 3: return <ProductContainer3 productList={productList}/>
      break;
      default:
      break;
    }
}


function JewelCollection({productList, toggleButton}) {

  const [isSelected, setIsSelected] = useState(1);

  useEffect(()=>{
    Aos.init();
   },[]);

  return (
    <>
       <div className="w-[100%] flex flex-col items-center pt-[120px] bg-main pb-[120px]">
        <div className="w-[100%] max-w-container px-6 flex flex-col items-center">
          <div className="text-body text-center" style={{letterSpacing: "7px"}}>NEW JEWELLERY</div>
          <div className="text-[28px] vsm:text-heading text-center mt-[5px]">Gold & Diamond Jewel Collection</div>
          <div className="mt-[35px] flex justify-center gap-[15px] w-[100%]">
            
            <button className="w-[100%] max-w-[300px] text-[11px] vsm:text-body border border-black py-2 flex justify-center text-center items-center traditional button" onClick={()=>{
              toggleButton(".traditional");
              setIsSelected(prev => prev = 2);
              }}>Traditional Jewels</button>

            <button className="w-[100%] max-w-[300px] text-[11px] vsm:text-body border bg-color border-black py-2 flex justify-center text-center items-center bridal button" onClick={()=>{
              toggleButton(".bridal");
              setIsSelected(prev => prev = 1);
              }}>Bridal Jewels</button>

            <button className="w-[100%] max-w-[300px] text-[11px] vsm:text-body border border-black py-2 flex justify-center text-center items-center antique button" onClick={()=>{
              toggleButton(".antique");
              setIsSelected(prev => prev = 3);
              }}>Antique Jewels</button>
          </div>

          {/* <div className="flex flex-nowrap overflow-x-scroll gold-collection-container vsm:overflow-x-hidden pb-[40px] vsm:grid vsm:grid-cols-12 gap-y-[60px] gap-[28px] mt-[50px] vsm:mt-[80px] w-[100%]">

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

          </div> */}
          <RenderComponent index={isSelected} productList={productList}/>

          <div className="w-[100%] flex justify-center mt-[30px]">
            <div className="mt-[20px] flex items-center gap-2 bg-black py-[13px] px-[30px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
              <button className=" text-[14px] text-white">
                View All Products
              </button>
              <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JewelCollection
