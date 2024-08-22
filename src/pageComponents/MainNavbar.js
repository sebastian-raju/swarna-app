import React from 'react'

function MainNavbar() {
  return (
    <>
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
                <div className="navbar-nav w-[100%] mlg:max-w-[340px] flex-grow  items-center">
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
                <div className='flex flex-col mlg:flex-row gap-[30px] mlg:ms-[90px] items-start mlg:items-center'>
                  {/* <div className="nav-item flex items-center cursor-pointer gap-[15px]">
                      <img src="./assets/icons/navSearch.svg" className='w-[15px]' alt="" />
                      <div className='text-body block mlg:hidden'>Search</div>
                    </div> */}
                    <div className="nav-item flex items-center cursor-pointer gap-[15px]">
                      <img src="./assets/icons/profile.svg" className='w-[15px] h-[15px]' alt="" />
                      <div className='text-body block mlg:hidden'>Profile</div>
                    </div>
                    <div className="nav-item flex items-center cursor-pointer gap-[15px]">
                      <img src="./assets/icons/wishlist.svg" className='w-[15px]' alt="" />
                      <div className='text-body block mlg:hidden'>Wishlist</div>
                    </div>
                    <div className="nav-item">
                      <button className='px-4 py-[13px] bg-[rgb(172,128,93)] text-white text-[14px] hover:bg-[#8d613b] transition-all delay-[30ms]'>Get Special Offers</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default MainNavbar
