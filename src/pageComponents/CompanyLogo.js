import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import Aos from 'aos';

function CompanyLogo() {
  useEffect(()=>{
    Aos.init();
   },[])

  return (
    <>
      <div className="w-[100%] vsm:px-[50px] flex justify-center items-center bg-main">
      <div  className="w-[100%] vsm:max-w-container overflow-hidden" >
        <div className="companies-row w-[100%] max-w-container mt-[70px] overflow-hidden select-none mb-[70px]" data-aos="fade-right" data-aos-duration="1000">
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
    </>
  )
}

export default CompanyLogo
