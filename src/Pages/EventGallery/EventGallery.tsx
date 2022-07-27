import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { AiOutlineHeart } from 'react-icons/ai';
import "./EventGallery.css"
const EventGallery = () => {
    return (
        <div>
             

{/* Gallery */}
               
          <nav className="flex items-center lg:text-lg text-gray-500 font-bold justify-between max-w-3xl p-4 mx-auto">
            <h1>All</h1>

            <ul className="flex items-center space-x-1 text-xs lg:text-lg font-bold text-gray-500">
                <li className="">
                <h5 className="px-3 py-2 rounded-lg hidden lg:block"> Sort Events: </h5>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg">
                <CustomLink to='/gallery'> All </CustomLink>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg">
                <CustomLink to='/gallery/corporategallery'> Corporate </CustomLink>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg">
                <CustomLink to='/gallery/nonprofitgallery'> Non-Profit </CustomLink>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg">
                <CustomLink to='/gallery/socialgallery'> Social</CustomLink>
                </li>
                <li className="px-1 lg:px-2 py-2 rounded-lg">
                <CustomLink to='/gallery/weddinggallery'> Weddings </CustomLink>
                </li>

                
            </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default EventGallery;