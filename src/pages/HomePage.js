import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles/HomePage.css'
import Aos from 'aos';
import { useMediaQuery } from '@mui/material';
import SubNavbar from '../pageComponents/SubNavbar';
import MainNavbar from '../pageComponents/MainNavbar';
import Hero from '../pageComponents/Hero';
import JewellerySelections from '../pageComponents/JewellerySelections';
import CompanyLogo from '../pageComponents/CompanyLogo';
import Features from '../pageComponents/Features';
import RecentProducts from '../pageComponents/RecentProducts';
import ShoppingBanner from '../pageComponents/ShoppingBanner';
import JewelCollection from '../pageComponents/JewelCollection';
import TrendyCollection from '../pageComponents/TrendyCollection';
import ProfessionalTeam from '../pageComponents/ProfessionalTeam';
import News from '../pageComponents/News';
import FeatureBanner from '../pageComponents/FeatureBanner';
import GetInTouch from '../pageComponents/GetInTouch';
import Footer from '../pageComponents/Footer';


function HomePage() {

  const [productList, setProductList] = useState([]);
  const [trendyProducts, setTrendyProducts] = useState([]);
  const islargeScreen = useMediaQuery('(min-width:500px)'); 

  useEffect(()=>{
    Aos.init();
   },[])
   

  // get all products
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
        <div className="fixed bottom-[0px] left-[0px] right-[0px] bg-black z-50 rounded-t-lg">
            <div className='grid grid-cols-12 p-1 items-center'>
              <div className='text-white col-span-4 w-[100%] flex justify-center p-[32px] rounded hover:bg-[rgb(172,128,93)]'><img src="./assets/icons/iso_search.svg" alt="" /></div>
              <div className='text-white col-span-4 w-[100%] flex justify-center p-[32px] rounded hover:bg-[rgb(172,128,93)]'><img src="./assets/icons/whiteProfile.svg" alt="" /></div>
              <div className='text-white col-span-4 w-[100%] flex justify-center p-[32px] rounded hover:bg-[rgb(172,128,93)]'><img src="./assets/icons/whiteWishlist.svg" alt="" /></div>
            </div>
        </div>
      }
      <SubNavbar/>
      <MainNavbar/>
      <Hero/>
      <JewellerySelections productList={productList}/>
      <CompanyLogo/>
      <Features/>
      <RecentProducts/>

      {/* hidden background image attachment */}
      <div className='image-container block mlg:hidden' style={{backgroundImage: "url('https://i.postimg.cc/qB9rmx1w/wallpaperflare-com-wallpaper-1.jpg')", height:"350px", width: "100%", backgroundRepeat:"no-repeat", backgroundAttachment: "fixed", backgroundPosition: "center"}}>
      </div>

      <ShoppingBanner/>
      <JewelCollection productList={productList} toggleButton={toggleButton}/> 
      <TrendyCollection trendyProducts={trendyProducts}/>
      <ProfessionalTeam/>
      <News/>
      <FeatureBanner/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default HomePage
