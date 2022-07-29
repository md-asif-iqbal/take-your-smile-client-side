import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link } from "react-router-dom";

const NavEnd = () => {
    const navigation = <>
                            <li className=' text-white  cursor-pointer'><Link to='/weddings' 
                            className='transition-all duration-300 uppercase'> Weddings</Link></li>

                            <li className=' text-white  cursor-pointer uppercase'><Link to='/social' 
                            className='transition-all duration-300'> Social</Link></li>
                             
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/gallery' 
                            className='transition-all duration-300'>
                              <div className="dropdown dropdown-hover">
                                    <label id="0" className=" m-1">Portfolio</label>
                                    <ul id="0" className="dropdown-content rounded menu p-2 shadow bg-base-100     text-black w-52">
                                      <li className=' text-black cursor-pointer uppercase'><Link to='/gallery' 
                                          className='transition-all duration-300 hover:bg-primary hover:text-white'>Event Gallery</Link></li>
                                      <li className=' text-black cursor-pointer uppercase'><Link to='/blogs' 
                                          className='transition-all duration-300 hover:bg-primary hover:text-white'>Blogs</Link></li>
                                          <li className=' hover:bg-primary hover:text-white  cursor-pointer uppercase'><Link to='/ourstory' 
                                          className='transition-all duration-300'> Our Story</Link></li>
                                    </ul>
                                  </div>
                              
                              </Link></li>
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