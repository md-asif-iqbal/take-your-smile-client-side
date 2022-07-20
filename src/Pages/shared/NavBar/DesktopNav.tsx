import React from "react";
import { Link } from "react-scroll";
const DesktopNav = () => {
<<<<<<< HEAD
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
        <ul className='flex space-x-12  capitalize text-xl'>
            {navigation.map((item, idx) => {
                return (
                    <li
                        className='text-white  cursor-pointer'
                        key={idx}
                    >
                        <Link
                            to={item.href}
                            activeClass="active"
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
=======
  const navigation = [
    {
      name: "home",
      href: "home",
    },
    {
      name: "Our Plans",
      href: "plans",
    },
    {
      name: "features",
      href: "features",
    },
    {
      name: "services",
      href: "services",
    },
    {
      name: "contact",
      href: "contact",
    },
  ];
  return (
    <nav>
      <ul className="flex space-x-12  capitalize text-2xl">
        {navigation.map((item, idx) => {
          return (
            <li className="text-white  cursor-pointer" key={idx}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={600}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
>>>>>>> 28ab2cebb1ef48ccbe764b3b8434b7e1c0bf390c
    </nav>
  );
};

export default DesktopNav;
