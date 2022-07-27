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


function App() {
  return (
     
      <div className="relative">
             
             <Routes>
               <Route path='/' element={<Events/>}></Route>
               <Route path='/home' element={<HomeWithNav/>}>
                 
               </Route>
               <Route path='/gallery' element={<EventGallery/>}>
                 <Route index element={<AllGallery/>}></Route>
                 <Route path='socialgallery' element={<SocialGallery/>}></Route>
                 <Route path='nonprofitgallery' element={<NonProfitGallery/>}></Route>
                 <Route path='weddinggallery' element={<WeddingGallery/>}></Route>
                 <Route path='corporategallery' element={<CorporateGallery/>}></Route>
               </Route>
             </Routes>
            <Footer/>
    </div>
  );
}

export default App;
