import React from 'react';
import FAQ from '../FAQ/FAQ';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Summery from '../Summery/Summery';

const Home = () => {
    return (
        <div>

            <Services/>
           <Gallery></Gallery>
           <Reviews></Reviews>
           <Summery></Summery>
           <FAQ/>
        </div>
    );
};

export default Home;