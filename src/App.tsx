import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/dashboard/Dashboard';
import Events from './Pages/Events/Events';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import HomeWithNav from './Pages/Home/Home/HomeWithNav';
import Footer from './Pages/shared/Footer/Footer';
import NavBar from './Pages/shared/NavBar/NavBar';
import UpdateProfile from './Pages/dashboard/UpdateProfile';
import Reviews from './Pages/dashboard/Reviews';
import Booking from './Pages/dashboard/Booking';
import Users from './Pages/dashboard/Users';
import MakeAdmin from './Pages/dashboard/MakeAdmin';
import AllBooking from './Pages/dashboard/AllBooking';


function App() {
  return (
     
      <div className="relative">
             
             <Routes>
               <Route path='/' element={<Events/>}></Route>
               <Route path='/home' element={<HomeWithNav/>}></Route>
               <Route path='dashboard' element={<Dashboard></Dashboard>}>
                 <Route path='allbooking' element={<AllBooking></AllBooking>}></Route>
                 <Route path='booking' element={<Booking></Booking>}></Route>
                 <Route path='profile' element={<UpdateProfile></UpdateProfile>}></Route>
                 <Route path='reviews' element={<Reviews></Reviews>}></Route>
                 <Route path='users' element={<Users></Users>}></Route>
                 <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
               </Route>
             </Routes>
            <Footer/>
    </div>
  );
}

export default App;


{/* <div className="relative">
      <NavBar/>
      <Banner/>
      <Home></Home>

    </div> */}