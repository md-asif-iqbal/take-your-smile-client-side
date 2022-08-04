import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const NavMobile = () => {
    const [user] = useAuthState(auth);
  let photo:any = user?.photoURL;
  let names:any = user?.displayName;
  console.log(photo);
 const navigate = useNavigate();
 const logout = () =>{
   signOut(auth);
    navigate('/login')
   localStorage.removeItem('accessToken');
 }
    const navigation = <>
                <li className=' text-white  cursor-pointer'><Link to='/home' 
                className='transition-all duration-300 uppercase'> Home</Link></li>
                <li className=' text-white  cursor-pointer uppercase'><Link to='/ourstory' 
                className='transition-all duration-300'> Our Story</Link></li>
                <li className=' text-white  cursor-pointer uppercase'><Link to='/corporate' 
                className='transition-all duration-300'> Corporate</Link></li>
                <li className=' text-white  cursor-pointer uppercase'><Link to='/nonprofit' 
                className='transition-all duration-300'> Non-Profit</Link></li>
                <li className=' text-white  cursor-pointer'><Link to='/weddings' 
                            className='transition-all duration-300 uppercase'> Weddings</Link></li>

                            <li className=' text-white  cursor-pointer uppercase'><Link to='/social' 
                            className='transition-all duration-300'> Social</Link></li>
                              {
                               user ? <li className=' text-white  cursor-pointer uppercase'><Link to='/dashboard' 
                               className='transition-all duration-300'> DashBoard</Link></li>: ''
                             }
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/contactus' 
                            className='transition-all duration-300'> Contact Us</Link></li>
                            {user ?  <li className=' text-white  cursor-pointer uppercase'>
                           
                              {/* Start */}
                              <div className="dropdown dropdown-end">
                                <label id="0" className=" m-1"> <button className= " transition-all duration-300 uppercase"  > 

                                    <div className="avatar ">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                      user ?<img src={photo} alt={names} />
                                      : names
                                    }
                                    </div>
                                    </div>
                                 </button> </label>
                                <ul id="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded  w-52">
                                  
                                <div
                                      className="bg-white uppercase px-1 py-2 w-64 mt-4  rounded max-w-screen origin-center text-black right-0 appear-done enter-done"
                                    >
                                      <a
                                        className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
                                        href="/likes"
                                      >
                                        My Likes
                                      </a>
                                      <a
                                        className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
                                        href="/favorites"
                                      >
                                        My Favorites
                                      </a>
                                      <Link
                                        className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
                                        to="/profiles"
                                      >
                                        Profile
                                      </Link>
                                      <a
                                        className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
                                        href="/settings"
                                      >
                                        Your Bookings
                                      </a>
                                      <button
                                        className="flex w-full items-center px-3 py-3 cursor-pointer  hover:bg-gray-200 font-light text-sm focus:outline-none"
                                         onClick={logout}
                                      >
                                        LOGOUT
                                      </button>
                                    </div>
                                                                      
                                </ul>
                              </div>
                              {/* end */}
                            
                            </li> : <li className=' text-white  cursor-pointer uppercase'><Link to='/login' 
                            className='transition-all duration-300 '> Login</Link></li>}
                            


</>
    const [isOpen, setIsOpen] = useState(false);

    const circleVariants = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,
            },
        },
    };

    const ulVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            },
        },
    };

    return (
        <nav className='relative'>
            <div
                onClick={() => setIsOpen(true)}
                className='cursor-pointer '
            >
                <MenuAlt3Icon className='w-8 h-8' />
            </div>

            {/* circle */}
            <motion.div
                variants={circleVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : 'hidden'}
                className='w-4 h-4 rounded-full bg-primary fixed top-0 right-0'
            ></motion.div>

            <motion.ul
                variants={ulVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : ''}
                className={`${isOpen ? 'right-0' : '-right-full'
                    } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer absolute top-8 right-8'
                >
                    <XIcon className='w-8 h-8' />
                </div>
                {navigation}
            </motion.ul>
        </nav>
    );
};

export default NavMobile;