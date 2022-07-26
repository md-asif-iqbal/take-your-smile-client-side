import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Corporate from './Pages/Events/Corporate';
import Events from './Pages/Events/Events';
import NonProfit from './Pages/Events/NonProfit';
import Social from './Pages/Events/Social';
import Weedings from './Pages/Events/Weedings';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import HomeWithNav from './Pages/Home/Home/HomeWithNav';
import Footer from './Pages/shared/Footer/Footer';
import NavBar from './Pages/shared/NavBar/NavBar';


function App() {
  return (

    <div className="relative">

      <Routes>
        <Route path='/' element={<Events />}></Route>
        <Route path='/home' element={<HomeWithNav />}></Route>
        <Route path='/social' element={<Social></Social>}></Route>
        <Route path='/weeding' element={<Weedings></Weedings>}></Route>
        <Route path='/corporate' element={<Corporate></Corporate>}></Route>
        <Route path='/nonprofit' element={<NonProfit></NonProfit>}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;


{/* <div className="relative">
      <NavBar/>
      <Banner/>
      <Home></Home>

    </div> */}