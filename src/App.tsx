import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login';
import Events from './Pages/Events/Events';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import HomeWithNav from './Pages/Home/Home/HomeWithNav';
import Footer from './Pages/shared/Footer/Footer';
import NavBar from './Pages/shared/NavBar/NavBar';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
     
      <div className="relative">
             <Routes>
               <Route path='/' element={<Events/>}></Route>
               <Route path='/home' element={<HomeWithNav/>}></Route>
               <Route path='/login' element={<Login />} />
             </Routes>
            <Footer/>
            <ToastContainer />
    </div>
  );
}

export default App;


// {/* <div className="relative">
//       <NavBar/>
//       <Banner/>
//       <Home></Home>

//     </div> */}