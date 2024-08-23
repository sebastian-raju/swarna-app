import Aos from 'aos'
import React, { useEffect } from 'react'

function Footer() {

  useEffect(()=>{
    Aos.init();
   },[]);


  return (
    <>
     <div className='w-[100%] flex justify-center bg-footer'>  
        <div className='footer w-[100%] max-w-container pt-[50px] sm:pt-[70px] mx-[30px] vsm:mx-[50px] text-white'>
            <div className='grid grid-cols-12 mb-[50px] gap-y-[50px] sm:gap-[50px]'>
              <div className='col-span-12 sm:col-span-5 mlg:col-span-3'>
                <img src="./assets/logos/swarnaFooter.svg" className='w-[150px]' alt="" />
                <div className='mt-[20px] text-[11px] max-w-[200px]'>
                  Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo.
                </div>
                <div className="social-media flex gap-[20px] items-center mt-[20px]">
                  <img src="./assets/icons/threads.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
                  <img src="./assets/icons/instagram.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
                  <img src="./assets/icons/facebook.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
                  <img src="./assets/icons/youtube.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
                  <img src="./assets/icons/twitter.svg" className="vsm:w-[15px] vsm:h-[15px] w-[14px] h-[14px]" alt=""/>
                </div>
              </div>
  
              <div className='col-span-12 sm:col-span-7 mlg:col-span-5'>
                <div className='w-[100%] grid grid-cols-12 gap-[20px]'>
                  <div className="col-span-4 flex flex-col items-start">
                    <div className='flex flex-col gap-[16px]'>
                      <div className='text-[15px] sm:text-[17px] mb-[13px]'>
                        Pages
                      </div>
                      <div className='text-[11px] sm:text-[12px]'>Home 1</div>
                      <div className='text-[11px] sm:text-[12px]'>Home 2</div>
                      <div className='text-[11px] sm:text-[12px]'>Shop All</div>
                      <div className='text-[11px] sm:text-[12px]'>Our Story</div>
                      <div className='text-[11px] sm:text-[12px]'>Blog</div>
                      <div className='text-[11px] sm:text-[12px]'>FAQs</div>
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col items-start">
                    <div className='flex flex-col gap-[16px]'>
                      <div className='text-[15px] sm:text-[17px] mb-[13px]'>
                        Links
                      </div>
                      <div className='text-[11px] sm:text-[12px]'>Clothing</div>
                      <div className='text-[11px] sm:text-[12px]'>Handbags</div>
                      <div className='text-[11px] sm:text-[12px]'>Philosophy</div>
                      <div className='text-[11px] sm:text-[12px]'>Our Story</div>
                      <div className='text-[11px] sm:text-[12px]'>Journal</div>
                      <div className='text-[11px] sm:text-[12px]'>Brand</div>
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col items-start">
                    <div className='flex flex-col gap-[16px]'>
                      <div className='text-[15px] sm:text-[17px] mb-[13px]'>
                        Resources
                      </div>
                      <div className='text-[11px] sm:text-[12px]'>FAQ/Return</div>
                      <div className='text-[11px] sm:text-[12px]'>Privacy/Terms</div>
                      <div className='text-[11px] sm:text-[12px]'>Gift Cards</div>
                      <div className='text-[11px] sm:text-[12px]'>Sizing Guide</div>
                      <div className='text-[11px] sm:text-[12px]'>Accessibility</div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className='col-span-12 mlg:col-span-4'>
                <div className="selection-subheading text-[12px]" data-aos="fade-left" data-aos-duration="1000" style={{letterSpacing:"7px"}}>
                  NEWSLETTER
                </div>
                <div className="mt-[10px] text-[40px] leading-[40px] w-[100%] mlg:max-w-[420px]" data-aos="fade-left" data-aos-duration="1000">
                  Join Today
                </div> 
                <div className='footer-input mt-[18px] relative w-[100%]'>
                  <input type="text" className='ps-[23px] py-[14px] w-[100%] bg-transparent border border-white placeholder:text-body rounded-full outline-none' placeholder='Enter Your Mail Id Here' name="" id="" data-aos="fade-left" data-aos-duration="1000"/>
                  <div className='absolute right-[7px] top-[7px] flex justify-center items-center bg-white px-[10px] py-[12px] rounded-full'>
                    <img src="./assets/shapes/send.svg" className='w-[20px]' alt="" />
                  </div>
                </div>

                <div className='mt-[18px] text-[12px]' data-aos="fade-left" data-aos-duration="1000">
                  I agree with the <span className='font-semibold underline'>terms & conditions</span>
                </div>

              </div>
            </div>
            <div className='w-[100%] h-[0.5px] bg-white'></div>

            <div className='py-[30px] flex w-[100%] justify-between'>
              <div className='text-[12px]'>
                ©Designthemes all rights Reserved
              </div>
              <div className='text-right text-[12px]'>
              Terms And Condition   |   Privacy Policy
              </div>
            </div>
        </div>
      </div> 
    </>
  )
}

export default Footer
