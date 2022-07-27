import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../../shared/NavBar/NavBar';

import Home from './Home';
const HomeWithNav = () => {
    return (
        <div  className='relative'>
        <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>}></Route>

         </Routes>
         
        </div>
    );
};

export default HomeWithNav;