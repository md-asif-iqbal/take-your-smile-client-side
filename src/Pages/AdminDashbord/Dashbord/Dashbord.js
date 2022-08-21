import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import NavBar from '../../shared/NavBar/NavBar';
import Mobiledash from './Mobiledash';

const Dashbord = () => {
    const [user] = useAuthState(auth)

    const dashbord =
        <>
            <div className="pb-2 px-2 pt-3">
                <div className="hover:border-r-2 border-white px-2 my-2 mx-auto cursor-pointer">
                    <NavLink to="/admin" className="flex items-center">
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">Dasboard</p>
                    </NavLink>
                </div>
            </div>
            <div className="pb-2 px-2 ">
                <div className="hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
                    <NavLink to="blogPost" className="flex items-center">

                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">Blog Post</p>
                    </NavLink>
                </div>
            </div>
            <div className="pb-2 px-2 ">
                <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
                    <NavLink to="allbookings/bookings" className="flex items-center">
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">All Booking</p>
                    </NavLink>
                </div>
            </div>

            <div className="pb-2 px-2 ">
                <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
                    <NavLink to="eventpost" className="flex items-center">
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">Gallery Post</p>
                    </NavLink>
                </div>
            </div>

            <div className="pb-2 px-2 ">
                <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex  cursor-pointer">
                    <NavLink to="product" className="flex items-center">
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">Product</p>
                    </NavLink>
                </div>
            </div>
            <div className="pb-2 px-2 ">
                <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
                    <NavLink to="articlepost" className="flex items-center">
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">Artical Post</p>
                    </NavLink>
                </div>
            </div>
            <div className="pb-2 px-2 ">
                <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex  cursor-pointer">
                    <NavLink to="user" className="flex items-center">
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">All User</p>
                    </NavLink>
                </div>
            </div>
            <div>
                <img src={user?.photoURL} className="pt-20 w-20 mx-auto rounded-[50%]" alt="" />
            </div>
        </>

    return (
        <div>
            <NavBar />
            <Mobiledash />
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col h-auto">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side h-[550px]">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="rounded-2xl  ml-0 md:ml-10 w-44  bg-blue-900 ">
                        {dashbord}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Dashbord;