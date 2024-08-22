import React from 'react'

function SubNavbar() {
  return (
    <>
       <div className="w-[100%] flex justify-center items-center bg-black h-[50px] vsm:h-[50px] text-white z-10">
        <div className="flex vsm:justify-between w-[100%] justify-center max-w-container px-[10px] items-center flex-wrap gap-[10px]">
          <div className="first-section flex gap-[50px]">
            <div className="social-media flex gap-[20px] items-center">
              <img src="./assets/icons/threads.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
              <img src="./assets/icons/instagram.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
              <img src="./assets/icons/facebook.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
              <img src="./assets/icons/youtube.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
              <img src="./assets/icons/twitter.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
            </div>
            <div className="sub-navbar-options hidden lg:flex gap-[50px]  lg:text-[14px] ">
              <div className='text-white hover:text-gray-300 transition-all delay-[30ms] cursor-pointer'>My Account</div>
              <div className='text-white hover:text-gray-300 transition-all delay-[30ms] cursor-pointer'>Wishlist</div>
              <div className='text-white hover:text-gray-300 transition-all delay-[30ms] cursor-pointer'>Support</div>
            </div>
          </div>

          <div className="second-section hidden md:flex text-[12px] vsm:text-[14px]">
            Customer Support (+21 456 589 2369)
          </div>
        </div>
      </div> 
    </>
  )
}

export default SubNavbar
