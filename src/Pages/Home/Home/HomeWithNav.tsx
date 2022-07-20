import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Home from './Home';
const HomeWithNav = () => {
    return (
        <div  className='relative'>
        <NavBar/>
         <Banner/>
         <Home/>
        </div>
    );
};

export default HomeWithNav;