import React from 'react';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Summery from '../Summery/Summery';

const Home = () => {
    return (
        <div>
        
           <Gallery></Gallery>
           <Reviews></Reviews>
           <Summery></Summery>
        </div>
    );
};

export default Home;