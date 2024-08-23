import React from 'react'

function ShoppingBanner() {
  return (
    <>
       {/* hidden background image attachment */}
       <div className='image-container block mlg:hidden' style={{backgroundImage: "url('https://i.postimg.cc/qB9rmx1w/wallpaperflare-com-wallpaper-1.jpg')", height:"350px", width: "100%", backgroundRepeat:"no-repeat", backgroundAttachment: "fixed", backgroundPosition: "center"}}>
      </div>
      {/* banner for shopping collections */}
      <div className="w-[100%] h-[125px] bg-[#AC805D] flex item-center">
        <div className="py-[20px] gap-[70px] flex items-center flex-nowrap overflow-x-scroll banner px-[20px]">
            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>

            <div className=' w-[1px] h-[70px] bg-white text-white text-[1px]'>.</div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative border-white py-[20px] border-1 rounded-[50%]">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>

            <div className=' w-[1px] h-[70px] bg-white text-white text-[1px]'>.</div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative">
              <div className="self-center text-[19px]">Enamel jewellery</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>

            <div className=' w-[1px] h-[70px] bg-white text-white text-[1px]'>.</div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative  border-white py-[20px] border-1 rounded-[50%]">
              <div className="self-center text-[19px]">Akira Earrings</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>

            <div className=' w-[1px] h-[70px] bg-white text-white text-[1px]'>.</div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative">
              <div className="self-center text-[19px]">Diamond Earrings</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>

            <div className=' w-[1px] h-[70px] bg-white text-white text-[1px]'>.</div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative  border-white py-[20px] border-1 rounded-[50%]">
              <div className="self-center text-[19px]">Gold Earrings</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>

            <div className=' w-[1px] h-[70px] bg-white text-white text-[1px]'>.</div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>

            <div className=' w-[1px] h-[70px] bg-white text-white text-[1px]'>.</div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center relative  border-white py-[20px] border-1 rounded-[50%]">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <img src="./assets/shapes/star.svg" className='absolute w-[20px] h-[20px] top-[0px] right-[0px]' alt="" />
            </div>
            
        </div>
      </div>
    </>
  )
}

export default ShoppingBanner
