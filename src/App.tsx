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


import Corporate from './Pages/Events/Corporate';

import Login from './Pages/Authentication/Login';

import NonProfit from './Pages/Events/NonProfit';
import Social from './Pages/Events/Social';
import Weedings from './Pages/Events/Weedings';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';


import NavBar from './Pages/shared/NavBar/NavBar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact/Contact';



function App() {
  return (
      <div className="relative">
             <Routes>
               <Route path='/' element={<Events/>}></Route>
               <Route path='/home' element={<HomeWithNav />}></Route>
                <Route path='/social' element={<Social></Social>}></Route>
                <Route path='/weeding' element={<Weedings></Weedings>}></Route>
                <Route path='/corporate' element={<Corporate></Corporate>}></Route>
                <Route path='/nonprofit' element={<NonProfit></NonProfit>}></Route>
                
               <Route path='/gallery' element={<EventGallery/>}>
                 <Route index element={<AllGallery/>}></Route>
                 <Route path='socialgallery' element={<SocialGallery/>}></Route>
                 <Route path='nonprofitgallery' element={<NonProfitGallery/>}></Route>
                 <Route path='weddinggallery' element={<WeddingGallery/>}></Route>
                 <Route path='corporategallery' element={<CorporateGallery/>}></Route>
               </Route>
               <Route path='/login' element={<Login />} />
               <Route path='/contact' element={<Contact />} />

             </Routes>
            <Footer/>
            <ToastContainer />

    </div>
  );
}

export default App;
