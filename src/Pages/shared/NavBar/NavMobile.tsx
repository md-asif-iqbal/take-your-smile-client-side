import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavMobile = () => {
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
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/gallery' 
                            className='transition-all duration-300'> Gallery</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/contactus' 
                            className='transition-all duration-300'> Contact Us</Link></li>
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/login' 
                            className='transition-all duration-300 '> Login</Link></li>
                

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