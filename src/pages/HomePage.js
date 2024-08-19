import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import SelectionCard from '../components/SelectionCard'
import axios from 'axios';
import CollectionCard from '../components/CollectionCard';
import TrendyCard from '../components/TrendyCard';
import './styles/HomePage.css'
import Aos from 'aos';
import { useMediaQuery } from '@mui/material';


function HomePage() {

  const [productList, setProductList] = useState([]);
  const [trendyProducts, setTrendyProducts] = useState([]);
  const islargeScreen = useMediaQuery('(min-width:500px)'); 

  useEffect(()=>{
    Aos.init();
   },[])

  const getProductList = async() => {
    const response = await axios.get('https://swarna-server.onrender.com/products');
    if(response.status >= 200 || response.status < 300){
      setProductList(response?.data);
      const trend = response?.data.slice(0,4);
      setTrendyProducts(trend);
    } 
  }

  useEffect(()=>{
    getProductList();
  },[])


  const toggleButton = (button) => {
    const jsButton = document.querySelector(button);
      const allButtons = document.querySelectorAll('.button');
      
      if(jsButton.classList.contains('bg-color')){
        return jsButton.classList.remove('bg-color');
      }

      allButtons.forEach(button => button.classList.remove('bg-color'));

      jsButton.classList.add('bg-color');
  }



  return (
    <>

      {
        islargeScreen === false &&
        <div className="fixed bottom-[5px] left-[5px] right-[5px] bg-black z-50 rounded-md">
            <div className='grid grid-cols-12 p-1 items-center'>
              <div className='text-white col-span-4 w-[100%] flex justify-center p-4 rounded-lg'><img src="./assets/icons/iso_search.svg" alt="" /></div>
              <div className='text-white col-span-4 w-[100%] flex justify-center p-4 rounded-lg'><img src="./assets/icons/whiteProfile.svg" alt="" /></div>
              <div className='text-white col-span-4 w-[100%] flex justify-center p-4 rounded-lg'><img src="./assets/icons/whiteWishlist.svg" alt="" /></div>
            </div>
        </div>
      }

      {/* sub-navbar */}
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

      {/* main-navbar */}
      <section className=" w-[100%] z-10 sticky top-0">
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"rgb(255, 249, 244)"}}>
          <div className="container-lg px-4 py-2 vsm:py-4 overflow-hidden" style={{backgroundColor:"rgb(255, 249, 244)"}}>
            <a className="navbar-brand block mlg:hidden overflow-hidden" href="#home"><img src="./assets/logos/navLogo.svg" style={{width:"125px"}} alt=""/></a>
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <a className="navbar-brand" href="#home"><img src="./assets/logos/navLogo.svg" style={{width:"150px"}} alt=""/></a>  
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="w-[100%] flex flex-col px-[30px] mlg:px-[0px] mt-[20px] mlg:mt-[0px]  gap-[20px] mlg:gap-[0px] items-start mlg:items-center mlg:flex-row mlg:justify-between">
                <div className="navbar-nav w-[100%] mlg:max-w-[340px] flex-grow  items-center pe-3">
                  <div className="d-flex w-[100%] mlg:max-w-[340px] align-items-center relative" role="search">
                  <input className="w-[100%] placeholder:text-[12px] py-2 px-4 ring-1 ring-slate-950/5 rounded-full outline-none cursor-pointer" type="search" placeholder="Search Products" aria-label="Search"/>
                  <div className='absolute right-[15px]'><img src="./assets/icons/search.svg" className='w-[18px]' alt="" /></div>
                </div>
                </div>
                <a className="navbar-brand hidden mlg:block" href="#home"><img src="./assets/logos/navLogo.svg" style={{width:"150px"}} alt=""/></a>
                {/* <form className="d-flex align-items-center" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className='flex flex-col mlg:flex-row gap-[30px] items-start mlg:items-center'>
                  {/* <div className="nav-item flex items-center cursor-pointer gap-[15px]">
                      <img src="./assets/icons/navSearch.svg" className='w-[15px]' alt="" />
                      <div className='text-body block mlg:hidden'>Search</div>
                    </div> */}
                    <div className="nav-item flex items-center cursor-pointer gap-[15px]">
                      <img src="./assets/icons/profile.svg" className='w-[15px] h-[16px]' alt="" />
                      <div className='text-body block mlg:hidden'>Profile</div>
                    </div>
                    <div className="nav-item flex items-center cursor-pointer gap-[15px]">
                      <img src="./assets/icons/wishlist.svg" className='w-[15px]' alt="" />
                      <div className='text-body block mlg:hidden'>Wishlist</div>
                    </div>
                    <div className="nav-item">
                      <button className='px-4 py-[13px] bg-[#AC805D] text-white text-[14px] hover:bg-[#8d613b] transition-all delay-[30ms]'>Get Special Offers</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>


      {/* hero section */}
    <div className='bg-hero'>
      <div className=" py-[30px] w-[100%] hidden mlg:flex justify-center gap-[40px] item-center">
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
  
        <div className="dropdown">
          <button className="btn dropdown-toggle border-0" type="button" style={{fontSize: "14px"}} data-bs-toggle="dropdown" aria-expanded="false">
            Collection
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#home">Action</a></li>
            <li><a className="dropdown-item" href="#home">Another action</a></li>
            <li><a className="dropdown-item" href="#home">Something else here</a></li>
          </ul>
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
  
  
      <div className="main-hero-section px-[30px] vsm:px-[50px] pb-[50px] pt-[50px] vsm:pt-[70px] mlg:pt-[30px] w-[100%] flex flex-col items-center justify-center relative">
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
          <div className="hidden mlg:block col-span-12 mlg:col-span-4 self-end translate-y-[40px]">
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
         <div className="mt-[60px] w-[100%] max-w-container grid grid-cols-12 items-center">
          <div className="col-span-12 mlg:col-span-8 text-[12px] flex mlg:justify-start justify-center mb-[20px] mlg:mb-[0px] items-center gap-3 mlg:ps-[60px]">
            <span><img src="./assets//shapes/longLeft.svg" alt=""/></span> 1/4 <span><img src="./assets//shapes/longRight.svg" alt=""/></span>
          </div>
          <div className="col-span-12 mlg:col-span-4 text-body flex mlg:justify-start justify-center">
            Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo.
          </div>
        </div>
  
        <div className="absolute bottom-[115px] vsm:bottom-[95px] left-[17%] vsm:left-[20%]">
          {/* <img src="./assets/shapes/glitter.svg" className="w-[70px] h-[70px]" alt=""/> */}
          <img src="./assets/images/picmixmaker.gif" className='w-[120px] h-[100px]' alt="" />
          {/* <img src="./assets/images/sparkle.gif" className='w-[90px] h-[70px]' alt="" /> */}
        </div>
  
        <div className="absolute top-[27px] md:top-[20px] right-[10%] md:right-[26%]">
          {/* <img src="./assets/shapes/verticalStar.svg" className="w-[80px] h-[80px]" alt=""/> */}
          <img src="./assets/images/sparkle.gif" className='w-[150px] h-[120px]' alt="" />
        </div>
  
      </div>
    </div>


    {/* our selection of jewellery */}

    <div className="w-[100%] px-[50px] flex justify-center items-center flex-col bg-main">
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


    {/* company logos */}

    <div className="w-[100%] vsm:px-[50px] flex justify-center items-center bg-main">
      <div  className="w-[100%] vsm:max-w-container overflow-hidden" >
        <div className="companies-row w-[100%] max-w-container mt-[70px] overflow-hidden select-none mb-[70px]" data-aos="fade-right" data-aos-duration="1000">
            {/* <div className="each-company flex justify-between gap-4 items-center flex-shrink-0 min-w-[100%]">
              <img src="./assets/logos/maskan.svg" class="w-[135px]" alt=""/>
        
              <img src="./assets/logos/sequencer.svg" class="w-[135px]" alt=""/>
        
              <img src="./assets/logos/nomak.svg" class="w-[135px]" alt=""/>
        
              <img src="./assets/logos/arcadium.svg" class="w-[135px]" alt=""/>
        
              <img src="./assets/logos/modern.svg" class="w-[135px]" alt=""/>
        
            </div> */}
            <Marquee speed={100} className=''>
              <div>
                <img src="./assets/logos/maskan.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/sequencer.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/nomak.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/arcadium.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/modern.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/maskan.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/sequencer.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/nomak.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/arcadium.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
              <div>
                <img src="./assets/logos/modern.svg" className="w-[135px] me-[110px]" alt=""/>
              </div>
            </Marquee>
        </div>
      </div>
    </div>


    {/* features grid */}
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


    {/* our recent products */}
      <div className="w-[100%] flex justify-center pb-[80px] bg-sub">
        <div className="w-[100%] max-w-container grid grid-cols-12 pt-[100px] items-center mx-[50px]">
          <div className="col-span-12 mlg:col-span-7 flex flex-col items-start  py-[0px] pe-[0px] mlg:py-[40px] mlg:pe-[40px] ">
            <div className="selection-subheading text-[11px]" style={{letterSpacing:"5px"}}>
              OUR RECENT PRODUCTS
            </div>
            <div className="mt-[10px] text-[26px] leading-[35px] vsm:text-heading vsm:leading-[40px] w-[100%] mlg:max-w-[420px]">
                Jewels Enhanced with rings, 
                necklaces, earrings, bracelets,
                and more.
            </div> 

            <div className="subcontainer-selection grid grid-cols-12 h-[100%] gap-[20px] mt-[20px]">
              <div className="col-span-12 order-[2] mlg:order-[1] mlg:col-span-7 flex flex-col justify-end items-start">
                <div>
                  Praesent maximus est a ligula ultricies, sit amet ornare dui mattis. 
                  Donec ac mi dui. Donec commodo ultrices elit eu sodales. 
                  Maecenas ut orci hendrerit.
                </div>
                <div className="mt-[20px] flex items-center gap-2 bg-black py-[13px] px-[30px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                  <button className=" text-[14px] text-white">
                    Know More
                  </button>
                  <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                    <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                  </div>
                </div>
              </div>

              <div className="col-span-12 order-[1] mlg:order-[2] mlg:col-span-5 overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
                <img src="https://i.postimg.cc/CxGWj6jK/recent-Img2.jpg" className="rounded-full mlg:rounded-t-full h-[400px] w-[100%] object-cover" alt=""/>
              </div>
            </div>
          </div>

          <div className="hidden mlg:block mlg:col-span-5 h-[650px] ps-[50px] border-l-0 mlg:border-l border-slate-950/5 overflow-hidden" data-aos="fade-left" data-aos-duration="1000">
            <img src="https://i.postimg.cc/52dhQMQG/hero.jpg" className="w-[100%] h-[100%] object-cover" alt=""/>
          </div>
        </div>
      </div>


      {/* hidden background image attachment */}
      <div className='image-container block mlg:hidden' style={{backgroundImage: "url('https://i.postimg.cc/qB9rmx1w/wallpaperflare-com-wallpaper-1.jpg')", height:"400px", width: "100%", backgroundRepeat:"no-repeat", backgroundAttachment: "fixed", backgroundPosition: "center"}}>
      </div>


      {/* banner for shopping collections */}
      <div className="w-[100%] h-[125px] bg-[#AC805D] flex item-center">
        <div className="py-[20px] flex items-center flex-nowrap overflow-x-scroll banner">
            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <button className="bg-white px-3 py-1 text-black text-[11px] self-start translate-y-[1px]">Shop The collections</button>
              <img src="./assets/images/picmixmaker.gif" className='w-[65px] h-[65px]' alt="" />
            </div>
            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <button className="bg-white px-3 py-1 text-black text-[11px] self-start translate-y-[1px]">Shop The collections</button>
              <img src="./assets/images/picmixmaker.gif" className='w-[65px] h-[65px]' alt="" />
            </div>
            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <button className="bg-white px-3 py-1 text-black text-[11px] self-start translate-y-[1px]">Shop The collections</button>
              <img src="./assets/images/picmixmaker.gif" className='w-[65px] h-[65px]' alt="" />
            </div>
            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <button className="bg-white px-3 py-1 text-black text-[11px] self-start translate-y-[1px]">Shop The collections</button>
              <img src="./assets/images/picmixmaker.gif" className='w-[65px] h-[65px]' alt="" />
            </div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <button className="bg-white px-3 py-1 text-black text-[11px] self-start translate-y-[1px]">Shop The collections</button>
              <img src="./assets/images/picmixmaker.gif" className='w-[65px] h-[65px]' alt="" />
            </div>

            <div className="text-white flex-shrink-0 px-[20px] flex gap-[10px] item-center">
              <div className="self-center text-[19px]">Pearl Earrings</div>
              <button className="bg-white px-3 py-1 text-black text-[11px] self-start translate-y-[1px]">Shop The collections</button>
              <img src="./assets/images/picmixmaker.gif" className='w-[65px] h-[65px]' alt="" />
            </div>
            
        </div>
      </div>


      {/* gold and diamond jewel collection */}
      <div className="w-[100%] flex flex-col items-center pt-[120px] bg-main pb-[120px]">
        <div className="w-[100%] max-w-container px-6 flex flex-col items-center">
          <div className="text-body text-center" style={{letterSpacing: "7px"}}>NEW JEWELLERY</div>
          <div className="text-[28px] vsm:text-heading text-center mt-[5px]">Gold & Diamond Jewel Collection</div>
          <div className="mt-[35px] flex justify-center gap-[15px] w-[100%]">
            
            <button className="w-[100%] max-w-[300px] text-[11px] vsm:text-body border border-black py-2 flex justify-center text-center items-center traditional button" onClick={()=>{toggleButton(".traditional")}}>Traditional Jewels</button>

            <button className="w-[100%] max-w-[300px] text-[11px] vsm:text-body border bg-color border-black py-2 flex justify-center text-center items-center bridal button" onClick={()=>{toggleButton(".bridal")}}>Bridal Jewels</button>

            <button className="w-[100%] max-w-[300px] text-[11px] vsm:text-body border border-black py-2 flex justify-center text-center items-center antique button" onClick={()=>{toggleButton(".antique")}}>Antique Jewels</button>
          </div>

          <div className="grid grid-cols-12 gap-y-[60px] gap-[28px] mt-[50px] vsm:mt-[80px] w-[100%]">
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

          <div className="w-[100%] flex justify-center mt-[50px]">
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


      {/* trendy collections */}
      <div className="w-[100%] grid grid-cols-12 bg-sub">
        <div className='col-span-12 md:col-span-6 trendy-collection-container'>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="p-[30px] pt-[70px] pb-[70px] md:p-[70px]">
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


      {/* our professional team */}
      <div className="w-[100%] flex flex-col items-center px-[24px] sm:px-[50px] pt-[100px] pb-[120px] bg-main">
        <div className="w-[100%] max-w-container">
          <div className="text-body text-center" style={{letterSpacing: "7px"}}>OUR TEAM MEMBERS</div>
          <div className="text-heading text-center mt-[5px]">Our Professional Team</div>

          <div className="mt-[70px] grid grid-cols-12 gap-y-[50px] gap-[28px]">
            <div className="col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 pro-card">
              <img src="https://i.postimg.cc/4x1FC0Mb/person1.jpg" className="w-[100%] object-cover main-img" alt=""/>
              <div className="mt-[20px] w-[100%] flex flex-col items-center">
                <div className="text-[17px]">Dr. Nisha Koshi</div>
                <div className="text-[10px] mt-[5px]" style={{letterSpacing: "5px"}}>jewel Designer</div>
                <div className='socials mt-[15px] flex gap-[15px] items-center'>
                  <img src="./assets/icons/blackThreads.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackInstagram.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackFacebook.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackYoutube.svg" className='w-[15px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackTwitter.svg" className='w-[13px] h-[11px]' alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 pro-card">
              <img src="https://i.postimg.cc/pdGGrFPm/person2.jpg" className=" w-[100%] object-cover main-img" alt=""/>
              <div className="mt-[20px] w-[100%] flex flex-col items-center">
                <div className="text-[17px]">Dr . Marikasano</div>
                <div className="text-[10px] mt-[5px]" style={{letterSpacing: "5px"}}>jewel Designer</div>
                <div className='socials mt-[15px] flex gap-[15px] items-center'>
                  <img src="./assets/icons/blackThreads.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackInstagram.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackFacebook.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackYoutube.svg" className='w-[15px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackTwitter.svg" className='w-[13px] h-[11px]' alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 pro-card">
              <img src="https://i.postimg.cc/0jmcVXDS/person3.jpg" className=" w-[100%] object-cover main-img" alt=""/>
              <div className="mt-[20px] w-[100%] flex flex-col items-center">
                <div className="text-[17px]">Dr . Enrichana</div>
                <div className="text-[10px] mt-[5px]" style={{letterSpacing: "5px"}}>jewel Designer</div>
                <div className='socials mt-[15px] flex gap-[15px] items-center'>
                  <img src="./assets/icons/blackThreads.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackInstagram.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackFacebook.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackYoutube.svg" className='w-[15px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackTwitter.svg" className='w-[13px] h-[11px]' alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-12 vsm:col-span-6 md:col-span-4 lg:col-span-3 pro-card">
              <img src="https://i.postimg.cc/gj9KLyQ2/person4.jpg" className=" w-[100%] object-cover main-img" alt=""/>
              <div className="mt-[20px] w-[100%] flex flex-col items-center">
                <div className="text-[17px]">Dr . Nainikka</div>
                <div className="text-[10px] mt-[5px]" style={{letterSpacing: "5px"}}>jewel Designer</div>
                <div className='socials mt-[15px] flex gap-[15px] items-center'>
                  <img src="./assets/icons/blackThreads.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackInstagram.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackFacebook.svg" className='w-[13px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackYoutube.svg" className='w-[15px] h-[13px]' alt="" />
                  <img src="./assets/icons/blackTwitter.svg" className='w-[13px] h-[11px]' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recent news and blogs */}
      <div className="w-[100%] flex flex-col items-center px-[24px] sm:px-[50px] pt-[100px] pb-[120px] bg-sub">
        <div className="w-[100%] max-w-container">
          <div className="text-[10px] mb-[15px]" style={{letterSpacing:"5px"}}>NEWS UPDATES</div>
          <div className="w-[100%] grid grid-cols-12 items-center gap-[20px]">
            <div className="col-span-12 md:col-span-7">
              <div className="text-heading w-[100%] md:max-w-[350px] leading-[40px]">
                Recent News  & Blogs 
                Updates
              </div> 
            </div>
            <div className="col-span-12 md:col-span-5 text-body">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
              layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
              using 'Content here, content here', making it look like readable English. Many desktop publishing packages
            </div>
          </div>
          <div className="h-[0.2px] w-[100%] mt-[50px] mb-[50px] bg-slate-700"></div>

          <div className="flex flex-nowrap overflow-x-scroll gap-[30px] pb-[60px] blog-section">
            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/bYKygW20/news1.avif" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/4x1FC0Mb/person1.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/T1Xr3d5y/news2.jpg" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/gj9KLyQ2/person4.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] text-[12px]" style={{letterSpacing:"2px"}}>
                22.DEC.2023, By Rahmi
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/kMxQhbLW/news3.jpg" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/gj9KLyQ2/person4.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] text-[12px]" style={{letterSpacing:"2px"}}>
                22.DEC.2023, By Rahmi
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
              <div className='relative'>
                <img src="https://i.postimg.cc/dt68JKs1/news4.jpg" className="object-cover w-[280px] sm:w-[405px] h-[200px] sm:h-[300px]" alt=""/>
                <div className='absolute bottom-[12px] left-[12px] right-[12px] p-1.5 px-2 flex justify-start items-center gap-[15px] bg-opacity-35 bg-zinc-950 backdrop-filter backdrop-blur-[3px]'>
                  <div className='w-[33px] h-[33px]'>
                    <img src="https://i.postimg.cc/gj9KLyQ2/person4.jpg" className='rounded-full h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                 
                  <div className='flex flex-col items-start'>
                    <div className='text-[13px] font-semibold text-white'>By Adarsh</div>
                    <div className='text-[11px] text-white'>Posted on 22.Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] text-[12px]" style={{letterSpacing:"2px"}}>
                22.DEC.2023, By Rahmi
              </div>
              <div className="mt-[10px] text-[17px] w-[280px] sm:w-[405px]">
                Accessorize Your Life with Fierce Charisma
              </div>
              <div className="mt-[10px] text-body  w-[280px] sm:w-[405px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>

              <div className="mt-[20px] flex items-center gap-2 bg-black py-[10px] px-[15px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
                <button className=" text-[12px] text-white">
                  View All Products
                </button>
                <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                  <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>


      {/* feature banner */}
      <div className="w-[100%] bg-[#FFFFFF] flex justify-center pt-[50px] pb-[50px] px-[24px] vsm:px-[50px]">
        <div className="w-[100%] max-w-container ">
          <div className="grid grid-cols-12 items-center gap-y-[20px] mlg:gap-[0px]">
            <div className="pe-[0px] py-[15px] border-r-0  vsm:pe-[30px] vsm:py-[0px] col-span-12 vsm:col-span-6 mlg:col-span-3 vsm:border-r border-black flex items-center gap-[20px] justify-center overflow-hidden" data-aos="fade-left" data-aos-duration="300">
              <img src="./assets/icons/reward.svg" className="w-[40px] h-[40px]" alt=""/>
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Reward Program</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
            <div className="px-[0px] py-[15px] vsm:ps-[30px] mlg:px-[30px] col-span-12 vsm:col-span-6 mlg:col-span-3 border-r-0 mlg:border-r border-black flex items-center justify-center gap-[20px] overflow-hidden" data-aos="fade-left" data-aos-duration="300">
              <img src="./assets/icons/discount.svg" className="w-[40px] h-[40px]" alt="" />
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Special Discounts</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
            <div className=" vsm:pe-[30px] px-[0px] py-[15px] mlg:px-[30px] col-span-12 vsm:col-span-6 mlg:col-span-3 border-r-0 vsm:border-r border-black flex items-center justify-center gap-[20px] overflow-hidden" data-aos="fade-left" data-aos-duration="300">
              <img src="./assets/icons/shipping.svg" className="w-[50px] h-[40px]" alt=""/>
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Fast shipping</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
            <div className="px-[0px] py-[15px] vsm:ps-[30px] col-span-12 vsm:col-span-6 mlg:col-span-3 flex items-center gap-[20px] justify-center overflow-hidden" data-aos="fade-left" data-aos-duration="300">
              <img src="./assets/icons/greatPrices.svg" className="w-[40px] h-[40px]" alt=""/>
              <div className="min-w-[107px]">
                <div className="text-[14px] mb-[5px]">Great prices</div>
                <div className="text-[10px]">Morbi tristique felis.</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* get in touch today */}
      <div className="w-[100%] grid grid-cols-12 bg-main get-touch-container">
        <div className='col-span-12 md:col-span-6 min-h-[300px] vsm:min-h-[450px]' >
        </div>

        <div className="col-span-12 md:col-span-6 bg-opacity-35 bg-zinc-900 backdrop-filter backdrop-blur-[5px]">
          <div className="py-[70px] px-[30px] md:p-[70px] text-white">
            <div className="text-heading leading-[30px]  ">
              Get In Touch Today!
            </div>

            <div className='sub-title text-body mt-[15px]'>
              Cras convallis a augue non ullamcorper. Maecenas nec tempor nulla, nec semper mauris. In vitae urna justo. Quisque at nulla pellentesque.
            </div>

            <div className='mt-[30px] flex flex-col gap-[20px]'>
              <input type="text" placeholder='Name' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.3)] placeholder:text-[13px] outline-none cursor-text rounded-md' />
              <input type="text" placeholder='Phone Number' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.3)] placeholder:text-[13px] outline-none cursor-text rounded-md'/>
              <input type='text' placeholder='Date' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.3)] placeholder:text-[13px] outline-none cursor-text rounded-md'/>
              <textarea type="text" rows={5} placeholder='Message' name="" id="" className='w-[100%] px-[15px] py-[10px] bg-transparent placeholder:text-white shadow-[inset_0_0px_15px_rgba(0,0,0,0.3)] placeholder:text-[13px] outline-none cursor-text rounded-md'/> 
            </div>
            
            <div className="mt-[20px] vsm:max-w-[190px] flex justify-center vsm:justify-start items-center gap-2 bg-black py-[13px] px-[30px] cursor-pointer hover:bg-slate-800 transition-all delay-[30ms]">
              <button className=" text-[14px] text-white">
                Send Message
              </button>
              <div className="flex justify-center items-center px-[7px] rounded-full py-[8px] bg-white text-black">
                <img src="./assets/shapes/blackRight.svg" className="w-[10px] text-black" alt=""/>
              </div>
            </div>
            
          </div>
        </div>
      </div>


      {/* footer */}
      <div className='w-[100%] flex justify-center bg-footer'>  
        <div className='footer w-[100%] max-w-container pt-[50px] sm:pt-[80px] mx-[50px] text-white'>
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

export default HomePage
