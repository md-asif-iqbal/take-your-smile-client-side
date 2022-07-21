import React from 'react';
import RecentEvents from '../../RecentEvents/RecentEvents';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Summery from '../Summery/Summery';

const Home = () => {
    return (
        <div>

            <Services></Services>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Summery></Summery>
            <RecentEvents></RecentEvents>
        </div>
    );
};

export default Home;