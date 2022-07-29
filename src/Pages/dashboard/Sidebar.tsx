import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState("block");
  const handleDisplay = () => {
    setSidebar("none");
    if (sidebar === "none") {
      setSidebar("block");
    }
  };
  return (
    <div className="flex flex-col absolute  md:static mr-20 h-full p-3  dark:bg-gray-900 dark:text-gray-100 mx-auto">
      <div className="space-y-3">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button onClick={handleDisplay} className="p-2 hover:shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-gray-100"
            >
              <rect width="352" height="32" x="80" y="96"></rect>
              <rect width="352" height="32" x="80" y="240"></rect>
              <rect width="352" height="32" x="80" y="384"></rect>
            </svg>
          </button>
        </div>

        <div className="flex-1 justify-center">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm hover:shadow-md">
              <Link
                to="/dashboard/allbooking"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span className="text-2xl">
                  <AiOutlineShoppingCart />
                </span>
                <span style={{ display: `${sidebar}` }}>Booking</span>
              </Link>
            </li>
            {/* <li className="rounded-sm hover:shadow-md">
					<Link to="/dashboard/booking"  className="flex items-center p-2 space-x-3 rounded-md">
						<span className='text-2xl'><AiOutlineShoppingCart/></span>
						<span style={{display: `${sidebar}`}}>Booking</span>
					</Link>
				</li> */}

            <li className="rounded-sm hover:shadow-md">
              <Link
                to="/dashboard/reviews"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span className="text-2xl">
                  <VscOpenPreview />
                </span>
                <span style={{ display: `${sidebar}` }}>Reviews</span>
              </Link>
            </li>
            <li className="rounded-sm hover:shadow-md">
              <Link
                to="/dashboard/users"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span className="text-2xl">
                  <BiUserCircle />
                </span>
                <span style={{ display: `${sidebar}` }}>Users</span>
              </Link>
            </li>
            <li className="rounded-sm hover:shadow-md">
              <Link
                to="/dashboard/profile"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span className="text-2xl">
                  <FaUserEdit />
                </span>
                <span style={{ display: `${sidebar}` }}>Update Profile</span>
              </Link>
            </li>
            <li className="rounded-sm hover:shadow-md">
              <Link
                to="/dashboard/admin"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span className="text-2xl">
                  <MdOutlineAdminPanelSettings />
                </span>
                <span style={{ display: `${sidebar}` }}>Admin</span>
              </Link>
            </li>
            <li className="rounded-sm hover:shadow-md">
              <Link
                to="/dashboard/uploadEvents"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <span className="text-2xl">
                  <MdOutlineAdminPanelSettings />
                </span>
                <span style={{ display: `${sidebar}` }}>Complete Events</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-lg dark:bg-gray-500"
        />
        <div>
          <h2
            className="text-lg font-semibold"
            style={{ display: `${sidebar}` }}
          >
            Leroy Jenkins
          </h2>
          <span className="flex items-center space-x-1">
            <a
              style={{ display: `${sidebar}` }}
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-400"
            >
              View profile
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
