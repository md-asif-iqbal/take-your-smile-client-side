import React, { useEffect, useState } from 'react';
// import DesktopNav from './DesktopNav';
import NavMobile from './NavMobile';

const NavBar = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
      });
    });
    return (
      <>
      <header
        className={`${bg ? 'bg-primary h-20' : 'h-24'
          } flex items-center fixed top-0 w-full px-5 text-white z-10 transition-all duration-300 `}
      >
        <div className='container mx-auto h-full flex items-center justify-evenly'>
          
          <div className='hidden lg:block'>
            {/* <DesktopNav /> */}
          </div>
          <div className='hidden lg:block'>
          <a href='/' className=''>
            <h3 className='text-2xl'>Take your Smile</h3>
          </a>
          </div>
          <div className='hidden lg:block'>
            {/* <DesktopNav /> */}
          </div>
          <div className='lg:hidden'>
            <NavMobile/>
          </div>
        </div>
      </header>
    </>
    );
};

export default NavBar;