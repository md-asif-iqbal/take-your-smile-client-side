import React from "react";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";
const DesktopNav = () => {

    const navigation = [
        {
            name: 'HOME',
            href: 'home',
            
        },
        {
            name: 'ABOUT',
            href: 'about',
        },
        {
            name: 'CORPORATE',
            href: 'corporate',
        },
        {
            name: 'NON-PROFIT',
            href: 'nonprofit',
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

export default DesktopNav;
