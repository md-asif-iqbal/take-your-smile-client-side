import React, { useEffect } from 'react';

import Reviews from '../Reviews/Reviews';
import Summery from '../Summery/Summery';
import Banner from '../Banner/Banner';
import PageTitle from '../../shared/PageTitle/PageTitle';

import Sponsorship from '../../shared/Sponsorship/Sponsorship';
import Services from '../Services/Services';
import Gallery from '../Gallery/Gallery';
import FAQ from '../FAQ/FAQ';
import Modal from '../../shared/Modal/Modal';
import RecentEvents from '../../RecentEvents/RecentEvents';
import OurLiveEvent from '../../LiveEvent/OurLiveEvent ';

const Home = () => {

    return (
        <div>
            <PageTitle title="Take Your Smile" />
            <Banner/>
            <Services />
            <OurLiveEvent />
            <Sponsorship />
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Summery></Summery>
            <RecentEvents></RecentEvents>
            <FAQ />
            <Modal />

        </div>
    );
};

export default Home;