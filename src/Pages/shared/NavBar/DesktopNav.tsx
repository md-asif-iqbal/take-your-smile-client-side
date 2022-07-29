import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
const DesktopNav = () => {


    const navigation = <>
                            <li className=' text-white  cursor-pointer'><Link to='/home' 
                            className='transition-all duration-300 uppercase'> Home</Link></li>
                            
                            <li className=' text-white  cursor-pointer uppercase'><Link to='/dashboard' 
                            className='transition-all duration-300'> DashBoard</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/corporate' 
                            className='transition-all duration-300'> Corporate</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/nonprofit' 
                            className='transition-all duration-300'> Non-Profit</Link></li>
                             

    </>

    return (
      <nav>
      <ul className='flex space-x-8  capitalize text-sm'>
          {navigation}
      </ul>
  </nav>
);
};

export default DesktopNav;
