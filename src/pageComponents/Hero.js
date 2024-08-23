import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react'

function Hero() {

  const [dropShow, setDropShow] = useState(false);

  useEffect(()=>{
    Aos.init();
   },[]);

   let menuRef = useRef();

   useEffect(()=>{
    let handler = (event) => {
      if(!menuRef.current.contains(event.target)){
        setDropShow(false);
      }
    }
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
   },[])

  return (
    <>
      {/* hero section */}
      <div className='bg-hero'>
      <div className=" py-[30px] w-[100%] hidden mlg:flex justify-center gap-[35px] vsm:gap-[40px] item-center">
        <div className="dropdown">
          <button className="btn dropdown-toggle border-0" type="button" style={{fontSize: "14px"}} data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#home">Action</a></li>
            <li><a className="dropdown-item" href="#home">Another action</a></li>
            <li><a className="dropdown-item" href="#home">Something else here</a></li>
          </ul>
        </div>
  
        {/* <div className="dropdown">
          <button className="btn dropdown-toggle border-0" type="button" style={{fontSize: "14px"}} data-bs-toggle="dropdown" aria-expanded="false">
            Collection
          </button>
          <ul className="dropdown-menu" style={{width:"100%"}}>
            <li><a className="dropdown-item" href="#home">Action</a></li>
            <li><a className="dropdown-item" href="#home">Another action</a></li>
            <li><a className="dropdown-item" href="#home">Something else here</a></li>
          </ul>
        </div> */}

        <div className='' ref={menuRef}>
          <div className='relative'>
            <div className='text-[14px] px-[12px] py-[6px] cursor-pointer flex items-center gap-[5px]' onClick={()=>{setDropShow(prev => !prev)}}>Collection<span className=''><img src="./assets/shapes/drop-down-arrow.png" className='w-[7px] h-[7px]' alt="" /></span></div>
            { dropShow &&
              <div className='absolute h-[20px] w-[20px] bg-white top-[34px] left-[33px] pointer' data-aos="zoom-out" data-aos-duration="500"></div>
            }
          </div>
         
          {
            dropShow &&
            <div className='absolute top-[200px] left-[21%] xl:left-[27%] right-[10px] bg-white text-[13px] z-[3] rounded-lg p-2 cursor-pointer shadow-md' data-aos="fade-right" data-aos-duration="100">
           <div className='grid grid-cols-12 gap-[20px]'>
              <div className='col-span-3'>
                <div className=' w-[100%] text-black text-[15px] font-semibold drpdwn py-3 px-3 rounded-md'>Home Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Bridal Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Antique Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Special Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Other Collections</div>
              </div>

              <div className='col-span-3'>
                <div className=' w-[100%] text-black text-[15px] font-semibold drpdwn py-3 px-3 rounded-md'>Bridal Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Bridal Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Antique Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Special Collections</div>
                
              </div>

              <div className='col-span-3'>
                <div className=' w-[100%] text-black text-[15px] font-semibold drpdwn py-3 px-3 rounded-md'>Antique Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Bridal Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Antique Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Special Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Other Collections</div>
              </div>

              <div className='col-span-3'>
                <div className=' w-[100%] text-black text-[15px] font-semibold drpdwn py-3 px-3 rounded-md'>Special Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Bridal Collections</div>
                <div className='w-[100%] text-black text-[13px] drpdwn py-3 px-3 rounded-md'>Antique Collections</div>
               
              </div>
           </div>
            </div>
          }
        </div>
       
  
        <div className="dropdown">
          <button className="btn dropdown-toggle border-0" type="button" style={{fontSize: "14px"}} data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#home">Action</a></li>
            <li><a className="dropdown-item" href="#home">Another action</a></li>
            <li><a className="dropdown-item" href="#home">Something else here</a></li>
          </ul>
        </div>
  
        <div className="text-[14px] flex items-center">Best Seller</div>
  
        <div className="dropdown">
          <button className="btn dropdown-toggle border-0" type="button" style={{fontSize: "14px"}} data-bs-toggle="dropdown" aria-expanded="false">
            Earrings
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#home">Action</a></li>
            <li><a className="dropdown-item" href="#home">Another action</a></li>
            <li><a className="dropdown-item" href="#home">Something else here</a></li>
          </ul>
        </div>
  
        <div className="dropdown">
          <button className="btn dropdown-toggle border-0" type="button" style={{fontSize: "14px"}} data-bs-toggle="dropdown" aria-expanded="false">
            Necklaces
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#home">Action</a></li>
            <li><a className="dropdown-item" href="#home">Another action</a></li>
            <li><a className="dropdown-item" href="#home">Something else here</a></li>
          </ul>
        </div>
  
        <div className="text-[14px] flex items-center">Blogs</div>
  
        <div className="text-[14px] flex items-center">Contacts</div>
        
      </div>
    </div>

    {/* carousel starting */}
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">

      {/* first carousel item */}
      <div class="carousel-item active">
          <div className="main-hero-section px-[20px] esm:px-[40px] sm:px-[50px] pt-[50px] pb-[60px] mlg:pb-[30px] vsm:pt-[70px] mlg:pt-[0px] w-[100%] flex flex-col items-center justify-center relative bg-hero h-[680px] vsm:h-[580px]">
            <div className="w-[100%] max-w-container grid grid-cols-12 items-center">
    
            <div className="col-span-12 mlg:col-span-8 translate-y-[-10px]">
              <div className="w-[100%] grid grid-cols-12 items-end gap-[25px] md:gap-[50px] overflow-hidden">
                <div className="col-span-12 vsm:col-span-6 sm:col-span-5 md:col-span-4 flex items-start rounded-t-full rounded-b-full overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
                  <img src="https://i.postimg.cc/XYKkGykV/newHero.jpg" className=" h-[290px] w-[100%] vsm:h-[400px] object-cover" alt=""/>
                </div>
                <div className="col-span-12 vsm:col-span-6 sm:col-span-7 md:col-span-8 flex items-start flex-col justify-center">
                  <div className="hero-sub-heading text-[11px] text-black" style={{letterSpacing:"10px"}}>
                    GLAMOROUS LIFE
                  </div>
                  <div className="hero-heading text-heading sm:text-[40px] leading-[40px] sm:leading-[60px]">
                    Redefining Elegance with
                    Unique Charms
                  </div>
                  <div className="text-[12px] mt-[10px]">
                    Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus.
                  </div>
    
                  <button className="mt-[20px] flex items-center gap-2 bg-white hover:bg-slate-200 transition-all delay-[30ms] py-[13px] px-[30px] cursor-pointer">
                    <div className=" text-[14px]">
                      Know More
                    </div>
                    <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-black text-white">
                      <img src="./assets/shapes/right.svg" className="w-[10px]" alt=""/>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          <div className="hidden mlg:block col-span-12 mlg:col-span-4 self-end translate-y-[40px] mb-[60px]">
            <div className="grid grid-cols-12 gap-[10px]">
              <div className="col-span-3 self-end overflow-hidden flex justify-center mlg:justify-start">
                <img src="https://i.postimg.cc/pVgSKzz8/small.jpg" className="h-[60px] w-[60px] object-cover rounded-lg" alt=""/>
              </div>
              <div className="col-span-9 flex justify-center overflow-hidden">
                <div className="w-[100%] overflow-hidden max-h-[430px] max-w-[300px]" data-aos="fade-left" data-aos-duration="1000">
                  <img src="https://i.postimg.cc/jq90KfxR/hero4.jpg" className="rounded-t-full object-cover h-[100%] w-[100%]" alt=""/>
                </div>
              </div>
            </div>
          </div>
              
            </div>


          <div className='w-[100%] max-w-container grid grid-cols-12'>
            <div className='col-span-12 mlg:col-span-6 text-body hidden mlg:flex mlg:justify-start'></div>
            <div className="col-span-12 mlg:col-span-6 text-body hidden mlg:flex mlg:justify-end justify-end">
              <div className='max-w-[423px]'>Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo.</div>                
              </div>
          </div> 
    
          <div className="absolute bottom-[10px] vsm:bottom-[60px] left-[16%] vsm:left-[18%]">
            <img src="./assets/images/picmixmaker.gif" className='w-[120px] h-[100px]' alt="" />
          </div>
    
          <div className="absolute top-[27px] md:top-[20px] right-[10%] md:right-[26%]">
            <img src="./assets/images/sparkle.gif" className='w-[150px] h-[120px]' alt="" />
          </div>

          </div>
        </div>

        {/* second carousel item */}
        <div class="carousel-item ">
          <div className="main-hero-section px-[20px] esm:px-[40px] sm:px-[50px] pt-[50px] pb-[60px] mlg:pb-[88px] vsm:pt-[70px] mlg:pt-[20px] w-[100%] flex flex-col items-center justify-center relative bg-hero h-[680px] vsm:h-[580px]">
            <div className="w-[100%] max-w-container grid grid-cols-12 items-center gap-y-[30px] md:gap-[50px]">
    
            <div className='col-span-12 md:col-span-5'>
              <div className='w-[100%] h-[270px] md:h-[430px] xlg:h-[460px] rounded-t-full overflow-hidden'>
                <img src="./assets/images/sara.jpg" className='h-[100%] w-[100%]' style={{objectFit:"cover", objectPosition:"top"}} alt="" />
              </div>
            </div>

            <div className='col-span-12 md:col-span-7'>
              <div className='text-[11px] text-black" style={{letterSpacing:"10px"}} uppercase' style={{letterSpacing:"10px"}}>
                Graceful Allure
              </div>
              <div className='text-heading sm:text-[40px] leading-[40px] sm:leading-[60px]'>
              Jewelry that Tells Your Story
              </div>
              <div className='text-[12px] mt-[10px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam ad laborum dolor. Unde veniam beatae molestias labore. Pariatur blanditiis sapiente nihil laborum accusamus error Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, minus?
              </div>

              <button className="mt-[20px] flex items-center gap-2 bg-white hover:bg-slate-200 transition-all delay-[30ms] py-[13px] px-[30px] cursor-pointer">
                    <div className=" text-[14px]">
                      Know More
                    </div>
                    <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-black text-white">
                      <img src="./assets/shapes/right.svg" className="w-[10px]" alt=""/>
                    </div>
                  </button>
            </div>
              
            </div>
    
            <div className='hidden md:block absolute bottom-[14%] left-[43%]'>
              <img src="./assets/images/jewel15.jpg" className='hidden mlg:block mlg:w-[50px] mlg:h-[50px] rounded-md' style={{objectFit:"cover"}} alt="" />
            </div>

            <div className="absolute bottom-[10px] top-[30px] left-[65%] md:top-[30px] md:left-[32%]">
            <img src="./assets/images/picmixmaker.gif" className='w-[120px] h-[100px]' alt="" />
          </div>

          </div>
        </div>
        
      </div>

      {/* carousel nav buttons */}

      <div className='w-[100%] flex justify-center bg-hero'>
        <div className=" w-[100%] max-w-container grid grid-cols-12 items-center">
              <div className="col-span-12 mlg:col-span-8 text-[12px] flex mlg:justify-start justify-center mb-[20px] mlg:mb-[0px] items-center gap-3 mlg:ps-[60px] mlg:translate-y-[-52px]">
                <span type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><img src="./assets//shapes/longLeft.svg" alt=""/></span> <span type="button" data-bs-target="#carouselExample" data-bs-slide="next"><img src="./assets//shapes/longRight.svg" alt=""/></span>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
