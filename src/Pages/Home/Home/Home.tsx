import React, { useEffect } from 'react';

import RecentEvents from '../../RecentEvents/RecentEvents';
import FAQ from '../FAQ/FAQ';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Summery from '../Summery/Summery';
import Banner from '../Banner/Banner';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Sponsorship from '../../shared/Sponsorship/Sponsorship';
const Home = () => {

    return (
        <div>
            <PageTitle title="Take Your Smile" />
            <Banner/>
            <Services />
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Summery></Summery>
            <RecentEvents></RecentEvents>
            <FAQ />
            <Sponsorship />
            {/* <Modal /> */}
            
        </div>
    );
};

export default Home;