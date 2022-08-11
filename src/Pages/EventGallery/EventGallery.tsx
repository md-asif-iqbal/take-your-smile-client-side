import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { AiOutlineHeart } from 'react-icons/ai';
import "./EventGallery.css"
import NavBar from '../shared/NavBar/NavBar';
import Loading from '../shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
const EventGallery = () => {
 
    return (
        <div>
              <NavBar />
            <div className="hero min-h-[400px]" style={{backgroundImage: "url(https://www.adlerplanetarium.org/wp-content/uploads/welcome-gallery-21.jpg)"}}>
            <div className="hero-overlay bg-gray-500 bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content my-32">
                <div className="max-w-4/5">
                <p className="mb-5 text-2xl md:text-4xl text-white">To get started planning, please tell us a bit <br /> more about your event!</p>
                </div>
            </div>
            </div>

{/* Gallery */}
               <div>
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
               </div>
          
            <Outlet></Outlet>
        </div>
    );
};

export default EventGallery;