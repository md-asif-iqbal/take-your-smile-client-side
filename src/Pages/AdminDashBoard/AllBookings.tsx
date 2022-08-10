import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const AllBookings = () => {
    return (
        <div>
            <header className="border-b border-gray-100 ">
  <div
    className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
  >
    <div className="flex items-center justify-center  flex-1">
      <nav
        className="hidden lg:uppercase  lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-16 lg:flex"
      >
        <Link
          to="/admindashboard/allbookings/bookings"
          className="block h-16 text-white leading-[4rem] border-b-4 border-transparent hover:text-rose-600 hover:border-current"
        >
          All Bookings
        </Link>

        <CustomLink
          to="/admindashboard/allbookings/payment"
          
        >
            <p className="block h-16 text-white leading-[4rem] border-b-4 border-transparent hover:text-rose-600 hover:border-current"> Payment</p>
          
        </CustomLink>

        <Link
          to="/admindashboard/allbookings/cancelled"
          className="block h-16 text-white leading-[4rem] border-b-4 border-transparent hover:text-rose-600 hover:border-current"
        >
          Cancelled
        </Link>

        <Link
          to="/admindashboard/allbookings/pandding"
          className="block h-16 text-white leading-[4rem] border-b-4 border-transparent hover:text-rose-600 hover:border-current"
        >
          Pandding
        </Link>
      </nav>
    </div>
  </div>
</header>
<Outlet></Outlet>

        </div>
    );
};

export default AllBookings;