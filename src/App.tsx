import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './Pages/dashboard/Dashboard';

import AllGallery from './Pages/EventGallery/AllGallery';
import CorporateGallery from './Pages/EventGallery/CorporateGallery';
import EventGallery from './Pages/EventGallery/EventGallery';
import NonProfitGallery from './Pages/EventGallery/NonProfitGallery';
import SocialGallery from './Pages/EventGallery/SocialGallery';
import WeddingGallery from './Pages/EventGallery/WeddingGallery';

import Events from './Pages/Events/Events';
import HomeWithNav from './Pages/Home/Home/HomeWithNav';
import Footer from './Pages/shared/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact/Contact';
import Weedings from './Pages/Events/Weedings';
import Corporate from './Pages/Events/Corporate';
import Social from './Pages/Events/Social';
import NonProfit from './Pages/Events/NonProfit';
import Login from './Pages/Authentication/Login';
import OurStory from './Pages/OurStory/OurStory';
import NavBar from './Pages/shared/NavBar/NavBar';
import UpdateProfile from './Pages/dashboard/UpdateProfile';
import Reviews from './Pages/dashboard/Reviews';
import Booking from './Pages/dashboard/Booking';
import Users from './Pages/dashboard/Users';
import MakeAdmin from './Pages/dashboard/MakeAdmin';
import AllBooking from './Pages/dashboard/AllBooking';
import Update from './Pages/dashboard/Profile/Update';
import Profile from './Pages/dashboard/Profile/Profile';




function App() {
  return (
      <div className="relative">
             <Routes>
               <Route path='/' element={<Events/>}></Route>

               <Route path='/home' element={<HomeWithNav/>}></Route>
               <Route path='dashboard' element={<Dashboard></Dashboard>}>
                 <Route path='allbooking' element={<AllBooking></AllBooking>}></Route>
                 <Route path='booking' element={<Booking></Booking>}></Route>
                 {/* <Route path='profile' element={<UpdateProfile></UpdateProfile>}></Route> */}
                 <Route path='reviews' element={<Reviews></Reviews>}></Route>
                 <Route path='users' element={<Users></Users>}></Route>
                 <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
                 <Route path='profile/update' element={<Update />} />
                 <Route path='profile' element={<Profile/>} />
               </Route>
      
               {/* <NavBar/> */}
               
               
               <Route path='/home' element={<HomeWithNav />}></Route>
               <Route path='/ourstory' element={<OurStory />}></Route>
               <Route path='/weddings' element={<Weedings />}></Route>
               <Route path='/corporate' element={<Corporate />}></Route>
               <Route path='/social' element={<Social />}></Route>
               <Route path='/nonprofit' element={<NonProfit />}></Route>
               <Route path='/contactus' element={<Contact />}></Route>
               <Route path='/login' element={<Login />}></Route>
                
               <Route path='/gallery' element={<EventGallery/>}>
                <Route index element={<AllGallery/>}></Route>
                 <Route path='socialgallery' element={<SocialGallery/>}></Route>
                 <Route path='nonprofitgallery' element={<NonProfitGallery/>}></Route>
                 <Route path='weddinggallery' element={<WeddingGallery/>}></Route>
                 <Route path='corporategallery' element={<CorporateGallery/>}></Route>
               </Route>

               

             </Routes>
            <Footer/>
            <ToastContainer />

    </div>
  );
}

export default App;
