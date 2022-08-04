import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
const DesktopNav = () => {
  const navigation = (
    <>
      <li className=" text-white  cursor-pointer">
        <Link to="/home" className="transition-all duration-300 uppercase">
          Home
        </Link>
      </li>
      <li className=" text-white transition-all duration-300 cursor-pointer uppercase">
        <div className="dropdown dropdown-hover">
          <label id="0" className=" m-1">
            Portfolio
          </label>
          <ul
            id="0"
            className="dropdown-content rounded menu p-2 shadow bg-base-100     text-black w-52"
          >
            <li className=" text-black cursor-pointer uppercase">
              <Link
                to="/gallery"
                className="transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Event Gallery
              </Link>
            </li>
            <li className=" text-black cursor-pointer uppercase">
              <Link
                to="/blogs"
                className="transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Blogs
              </Link>
            </li>
            <li className=" hover:bg-primary hover:text-white  cursor-pointer uppercase">
              <Link to="/ourstory" className="transition-all duration-300">
                Our Story
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className=" text-white  cursor-pointer uppercase">
        <Link to="/dashboard" className="transition-all duration-300">
          Dashboard
        </Link>
      </li>

      <li className=" text-white  cursor-pointer uppercase">
        <Link to="/corporate" className="transition-all duration-300">
          Corporate
        </Link>
      </li>
      <li className=" text-white  cursor-pointer uppercase">
        <Link to="/nonprofit" className="transition-all duration-300">
          Non-Profit
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <ul className="flex space-x-8  capitalize text-sm">{navigation}</ul>
    </nav>
  );
};

export default DesktopNav;
