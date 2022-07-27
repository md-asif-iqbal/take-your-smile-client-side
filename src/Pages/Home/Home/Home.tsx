import React from 'react';
import RecentEvents from '../../RecentEvents/RecentEvents';
import FAQ from '../FAQ/FAQ';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Summery from '../Summery/Summery';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Services />
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Summery></Summery>
            <RecentEvents></RecentEvents>
            <FAQ />
        </div>
    );
};

export default Home;