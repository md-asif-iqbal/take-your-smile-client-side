import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import BlogsOne from './Pages/Blogs/BlogsOne';
import BlogsThree from './Pages/Blogs/BlogsThree';
import Events from './Pages/Events/Events';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import HomeWithNav from './Pages/Home/Home/HomeWithNav';
import Footer from './Pages/shared/Footer/Footer';
import NavBar from './Pages/shared/NavBar/NavBar';


function App() {
  return (
     
      <div className="relative">
             
             <Routes>
               <Route path='/' element={<Events/>}></Route>
               <Route path='/home' element={<HomeWithNav/>}></Route>
               <Route path='/blog' element={<Blogs></Blogs>}></Route>
               <Route path='/blogs' element={<BlogsOne></BlogsOne>}></Route>
               <Route path='/bloges' element={<BlogsThree></BlogsThree>}></Route>
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