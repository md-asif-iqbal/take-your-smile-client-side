import React from "react";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";
const DesktopNav = () => {

    const navigation = [
        {
            name: 'home',
            href: 'home',
        },
        {
            name: 'Our Plans',
            href: 'plans',
        },
        {
            name: 'features',
            href: 'features',
        },
        {
            name: 'services',
            href: 'services',
        },
        // {
        //     name: 'contact',
        //     href: 'contact',
        // },
    ];
    return (
      <nav>
      <ul className='flex space-x-8  capitalize text-lg'>
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
