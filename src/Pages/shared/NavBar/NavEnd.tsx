import React from "react";
import { Link } from "react-scroll";
const NavEnd = () => {
    const navigation = [
        {
            name: 'WEDDINGS',
            href: 'weddings',
            
        },
       
        {
            name: 'SOCIAL',
            href: 'social',
        },
        {
            name: 'OUR STORY',
            href: 'story',
        },
        {
            name: 'CONTACT US',
            href: 'contact',
        },
        {
            name: 'LOGIN',
            href: 'login',
        },
        // {
        //     name: 'contact',
        //     href: 'contact',
        // },
    ];
    return (
        <nav>
        <ul className='flex space-x-8  capitalize text-sm'>
            {navigation.map((item, idx) => {
                return (
                    <li
                        className='text-white  cursor-pointer'
                        key={idx}
                    >
                        <Link
                            to={item.href}
                            
                            spy={true}
                            smooth={true}
                            duration={600}
                            offset={-70}
                            className='transition-all duration-300'
                        >
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
    );
};

export default NavEnd;