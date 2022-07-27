import React from "react";
import { Link } from "react-router-dom";

const NavEnd = () => {
    const navigation = <>
                            <li className=' text-white  cursor-pointer'><Link to='/weddings' 
                            className='transition-all duration-300 uppercase'> Weddings</Link></li>

                            <li className=' text-white  cursor-pointer uppercase'><Link to='/social' 
                            className='transition-all duration-300'> Social</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/gallery' 
                            className='transition-all duration-300'> Gallery</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/contactus' 
                            className='transition-all duration-300'> Contact Us</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/login' 
                            className='transition-all duration-300 '> Login</Link></li>

    </>
    return (
        <nav>
        <ul className='flex space-x-8  capitalize text-sm'>
            
          {navigation}
        </ul>
    </nav>
    );
};

export default NavEnd;