import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useAdmin from '../../../hooks/Admin/useAdmin';
import useUser from '../../../hooks/User/UseUser';
import { useQuery } from '@tanstack/react-query';

const NavMobile = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin]:any  =  useAdmin(user);
  const [users]:any  =  useUser(user);
  const email = user?.email;
  const { isLoading, error, data, refetch } = useQuery(['data'], () =>
  fetch(`https://secure-escarpment-79738.herokuapp.com/user/${email}`, {
    method: "GET",
     headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
     }
}).then(res =>res.json())
)

  const logout = () => {
    signOut(auth);
    navigate('/login')
    localStorage.removeItem('accessToken');
  }
  const navigation = <>
    <li className=' text-white  cursor-pointer'>
      <Link to='/home'  className='transition-all duration-300 uppercase'> Home</Link></li>
                             <li className=' text-white transition-all duration-300 cursor-pointer uppercase'>
                              <div className="dropdown dropdown-hover">
                                    <label id="0" className=" m-1">Portfolio</label>
                                    <ul id="0" className="dropdown-content rounded menu p-2 shadow drop-bg     text-white w-52">
                                      <li className=' text-secondary cursor-pointer uppercase'><Link to='/gallery' 
                                          className='transition-all duration-300 hover:bg-primary hover:text-white'>Event Gallery</Link></li>
                                      <li className=' text-secondary cursor-pointer uppercase'><Link to='/blogslike' 
                                          className='transition-all duration-300 hover:bg-primary hover:text-white'>Blogs</Link></li>
                                      <li className=' text-secondary cursor-pointer uppercase'><Link to='/donate' 
                                          className='transition-all duration-300 hover:bg-primary hover:text-white'>Donation</Link></li>
                                          <li className=' hover:bg-primary text-secondary hover:text-white  cursor-pointer uppercase'><Link to='/ourstory' 
                                          className='transition-all duration-300'> Our Story</Link></li>
                                    </ul>
                                  </div>
                              </li>
                            
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/corporate' 
                            className='transition-all duration-300'> Corporate</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/nonprofit' 
                            className='transition-all duration-300'> Non-Profit</Link></li>
                            <li className=' text-white  cursor-pointer'><Link to='/weddings'
      className='transition-all duration-300 uppercase'> Weddings</Link></li>

    <li className=' text-white  cursor-pointer uppercase'><Link to='/social'
      className='transition-all duration-300'> Social</Link></li>
 
    <li className=' text-white cursor-pointer uppercase'><Link to='/articles' className='transition-all duration-300'>Article</Link></li>


    <li className=' text-white  cursor-pointer uppercase'><Link to='/contactus'
      className='transition-all duration-300'> Contact Us</Link></li>
    {user ? <li className=' text-white  cursor-pointer uppercase'>

      {/* Start */}
      <div className="dropdown dropdown-end">
        <label id="0" className=" m-1"> <button className=" transition-all duration-300 uppercase"  >

        <div className="avatar ">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {
                   data?.image ? <img src={data?.image} alt={data.name} className="w-12 h-12"  /> : <img src="https://i.ibb.co/rwGPsQ9/profile.jpg" alt={data?.name} className="w-14 h-14" />}
                    </div>
                    </div></button> </label>
        <ul id="0" className="dropdown-content menu p-2 shadow drop-bg rounded  w-52">

          <div
            className="drop-bg uppercase px-1 py-2 w-64 mt-4  rounded max-w-screen origin-center  right-0 appear-done enter-done"
          >

              {
                   users?.role === "user" && <>
                    <Link className="flex items-center px-3 py-3 cursor-pointer  text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/favorites"> My Favorites</Link>
                    <Link className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/profiles"> Profile </Link>
                    <Link className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/yourbookings"> Your Bookings</Link>

                    <Link className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/availablejob">Apply for Employee</Link>
                                        </> }
                      {
                      admin?.role === "Admin" && <Link className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none  hover:bg-primary hover:text-white" to="/admin"> Admin DashBoard</Link>}

                      <button className="flex w-full items-center px-3 py-3 cursor-pointer  text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" onClick={logout} >LOGOUT</button>
                        </div>
                        </ul>
                      </div>
                       {/* end */}

                     </li> : <li className=' text-secondary  cursor-pointer uppercase'><Link to='/login' 
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