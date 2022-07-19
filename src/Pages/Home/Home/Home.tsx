import React from 'react';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Summery from '../Summery/Summery';

const Home = () => {
    return (
        <div>
           <Summery></Summery>
           <Gallery></Gallery>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;