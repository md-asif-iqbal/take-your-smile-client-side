import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllGallery from './Pages/EventGallery/AllGallery';
import CorporateGallery from './Pages/EventGallery/CorporateGallery';
import EventGallery from './Pages/EventGallery/EventGallery';
import NonProfitGallery from './Pages/EventGallery/NonProfitGallery';
import SocialGallery from './Pages/EventGallery/SocialGallery';
import WeddingGallery from './Pages/EventGallery/WeddingGallery';

import Events from './Pages/Events/Events';
import HomeWithNav from './Pages/Home/Home/HomeWithNav';
import Footer from './Pages/shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact/Contact';
import Weedings from './Pages/Events/Weedings';
import Corporate from './Pages/Events/Corporate';
import Social from './Pages/Events/Social';
import NonProfit from './Pages/Events/NonProfit';
import OurStory from './Pages/OurStory/OurStory';

import Booking from './Pages/dashboard/Booking';
import Users from './Pages/dashboard/Users';
import MakeAdmin from './Pages/dashboard/MakeAdmin';
import AllBooking from './Pages/dashboard/AllBooking'
import Update from './Pages/dashboard/Profile/Update';
import Profile from './Pages/dashboard/Profile/Profile';


import RequireAuth from './Pages/shared/RequireAuth/RequireAuth';

import Login from './Pages/Authentication/Login';
// import Blogs from './Pages/Blogs/Blogs';
import BlogsOne from './Pages/Blogs/BlogsOne';
import BlogsThree from './Pages/Blogs/BlogsThree';
import SingleEvent from './Pages/EventGallery/SingleEvent';
import Error from './Pages/shared/Error/Error';
import Review from './Pages/dashboard/Review';
import UploadEvents from './Pages/dashboard/UploadEvents';
import Dashboard from './Pages/dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import Likes from './Pages/Likes/Posts';
import Posts from './Pages/Likes/Posts';
import AdminDashBoard from './Pages/AdminDashBoard/AdminDashBoard';
import DashboardAdmin from './Pages/AdminDashBoard/DashboardAdmin';
import AllBookings from './Pages/AdminDashBoard/AllBookings';
import BlogPosts from './Pages/AdminDashBoard/BlogPosts';
import GalleryPost from './Pages/AdminDashBoard/GalleryPost';
import Messages from './Pages/AdminDashBoard/Messages';
import Products from './Pages/AdminDashBoard/Products';
import Settings from './Pages/AdminDashBoard/Settings';

function App() {


  return (
    <div className="relative">

      <Routes>
        <Route path='/' element={<Events />}></Route>

        <Route path="/admindashboard" element={<AdminDashBoard></AdminDashBoard>}>
          <Route index element={<DashboardAdmin></DashboardAdmin>}></Route>
          <Route path='allbookings' element={<AllBookings></AllBookings>}></Route>
          <Route path='blogposts' element={<BlogPosts></BlogPosts>}></Route>
          <Route path='gallerypost' element={<GalleryPost></GalleryPost>}></Route>
          <Route path='messages' element={
            <Messages></Messages>}>
          </Route>
          <Route path='allproducts' element={<Products></Products>}></Route>
          <Route path='settings' element={<Settings></Settings>}>
          </Route>
        </Route>



        <Route path='/home' element={<HomeWithNav />}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='allbooking' element={<AllBooking></AllBooking>}></Route>
          <Route path='booking' element={<Booking></Booking>}></Route>

          {/* <Route path='profile' element={<UpdateProfile></UpdateProfile>}></Route> */}
          <Route path='reviews' element={<Review></Review>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='uploadEvents' element={<UploadEvents />}></Route>

          <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='profile/update' element={<Update />} />
          <Route index element={<Profile />} />
        </Route>

        {/* <NavBar/> */}

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogsone' element={<BlogsOne></BlogsOne>}></Route>
        <Route path='/blogsthree' element={<BlogsThree></BlogsThree>}></Route>

        <Route path='/home' element={<HomeWithNav />}></Route>
        <Route path='/ourstory' element={<OurStory />}></Route>
        <Route path='/weddings' element={<Weedings />}></Route>
        <Route path='/corporate' element={<Corporate />}></Route>
        <Route path='/social' element={<Social />}></Route>
        <Route path='/nonprofit' element={<NonProfit />}></Route>
        <Route path='/contactus' element={<RequireAuth>
          <Contact />
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/gallery' element={<EventGallery />}>
          <Route index element={<AllGallery />}></Route>
          <Route path='socialgallery' element={<SocialGallery />}></Route>
          <Route path='nonprofitgallery' element={<NonProfitGallery />}></Route>
          <Route path='weddinggallery' element={<WeddingGallery />}></Route>
          <Route path='corporategallery' element={<CorporateGallery />}></Route>
        </Route>

        <Route path='/likes' element={<Posts></Posts>}></Route>

        <Route path='/singlegallery' element={<SingleEvent />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>

      <Footer />
      <ToastContainer />


    </div>
  );
}

export default App;
