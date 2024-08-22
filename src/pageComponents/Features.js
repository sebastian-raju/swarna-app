import React from 'react'

function Features() {
  return (
    <>
      <div className="w-[100%] border-t border-b border-r-0 border-l-0 border-black flex justify-center bg-main">
      <div className="w-[100%] max-w-container grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 h-[100%] border-b border-r-0 md:border-b-0 md:border-r border-black p-5 relative" >
          <div className="text-[23px]">
            100
            <br/>
            Happy Customers
          </div>
          <div className="text-body mt-[8px]">
            Where Elegance Finds Its Extraordinary Artistry
            Who Crave a One-of-a-Kind Sparkle.
          </div>
          <div className="absolute w-[40px] top-[25px] right-[25px]"><img src="./assets/logos/happyCustormers.svg" alt=""/></div>
        </div>
        <div className="col-span-12 md:col-span-3 h-[100%] border-b border-r-0 md:border-b-0 md:border-r border-black p-5 relative">
          <div className="text-[23px]">
            05
            <br/>
            Business Owned          
          </div>
          <div className="text-body mt-[8px]">
            Captivatingly ClassNamey Jewelry for the Discerning
            Unveiling the Essence of Timelessness.
          </div>
          <div className="absolute w-[40px] top-[25px] right-[25px]"><img src="./assets/logos/businessOwned.svg" alt=""/></div>
        </div>
        <div className="col-span-12 md:col-span-3 h-[100%] border-b border-r-0 md:border-b-0 md:border-r border-black p-5 relative">
          <div className="text-[23px]">
            1k
            <br/>
            Blog Articles
          </div>
          <div className="text-body mt-[8px]">
            Exceptional Craftsmanship, Unparalleled Elegance
            Where Effortless Glamour Meets Class.
          </div>
          <div className="absolute w-[40px] top-[25px] right-[25px]"><img src="./assets/logos/blogArticles.svg" alt=""/></div>
        </div>
        <div className="col-span-12 md:col-span-3 h-[100%] border-b-0 border-r-0 md:border-b-0 md:border-r-0 border-black p-5 relative">
          <div className="text-[23px]">
            15k
            <br/>
            New Designs
          </div>
          <div className="text-body mt-[8px]">
            Accessorize Your Life with Fierce Charisma
            For Those Who Dare to Shine Bright.
          </div>
          <div className="absolute w-[40px] top-[25px] right-[25px]"><img src="./assets/logos/newDesigns.svg" alt=""/></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features
