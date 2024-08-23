import React from 'react'

function ProfessionalTeam() {
  return (
    <>
      <div className="w-[100%] flex flex-col items-center px-[24px] sm:px-[50px] pt-[70px] pb-[60px] bg-main">
        <div className="w-[100%] max-w-container">
          <div className="text-body text-center" style={{letterSpacing: "7px"}}>OUR TEAM MEMBERS</div>
          <div className="text-heading text-center mt-[5px]">Our Professional Team</div>

          <div className="mt-[70px] grid grid-cols-12 gap-y-[20px] vsm:gap-y-[50px] gap-[20px] vsm:gap-[28px]">
            <div className="col-span-6 md:col-span-4 lg:col-span-3 pro-card">
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
            <div className="col-span-6 md:col-span-4 lg:col-span-3 pro-card">
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
            <div className="col-span-6 md:col-span-4 lg:col-span-3 pro-card">
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
            <div className="col-span-6 md:col-span-4 lg:col-span-3 pro-card">
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
    </>
  )
}

export default ProfessionalTeam
