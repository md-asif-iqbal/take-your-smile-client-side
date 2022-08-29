import React, { useEffect } from 'react';
import './Service.css'
import { RiTeamFill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { BsFillHeartFill } from 'react-icons/bs';
import { GiShakingHands } from 'react-icons/gi';
import { RiVipDiamondLine } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container mx-auto my-10 px-2'>
            <div className='text-center leading-6 px-2'>
                <h2
                    data-aos="fade-up"
                    data-aos-easing="gradient(0,0,1000)"
                    data-aos-duration="1700"
                    className='text-2xl font-bold capitalize text-primary dark:text-white md:text-2xl lg:text-4xl my-5'>Our Services</h2>
                <h4
                    data-aos="fade-up"
                    data-aos-easing="gradient(0,0,1200)"
                    data-aos-duration="1900"
                    className=' text-base font-bold md:text-xl text-gray-500 capitalize'>Planning an event but no idea where to start? Take Heart!</h4>
                <p
                    data-aos="fade-up"
                    data-aos-easing="gradient"
                    data-aos-duration="2100"
                    className='text-base	 md:text-lg text-gray-500 w-full md:w-4/5 mx-auto my-5 md:my-10'>We have you covered. Take Heart Events partners with local vendors to create fun, unique and innovative events tailored just for you or your organization. We have a variety of event planning experience; including weddings, social, corporate and non-profit events.</p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-gray-500 px-2'>
                <div data-aos="fade-down-right" data-aos-duration="1300" data-aos-easing="ease-in-sine" className="card min-w-1/4 shadow-xl">
                    <div
                        className="pt-10 flex justify-center">
                        <a href="/"><RiTeamFill className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a>
                    </div>
                    <div className="card-body">
                        <h2 data-aos="zoom-out-right" data-aos-duration="3000" className="card-title text-center justify-center mb-5">Corporate Events</h2>
                        <p data-aos="zoom-out-left" data-aos-duration="2400" className=''><span className='inline-block text-primary'><TiTick /></span> Product Launches</p>
                        <p data-aos="zoom-out-left" data-aos-duration="2200"><span className='inline-block text-primary'><TiTick /></span> Sales Events</p>
                        <p data-aos="zoom-out-left" data-aos-duration="2000"><span className='inline-block text-primary'><TiTick /></span> Conferences</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1800"><span className='inline-block text-primary'><TiTick /></span> Trade Shows</p>

                        <p data-aos="zoom-out-left" data-aos-duration="1600"><span className='inline-block text-primary'><TiTick /></span> Holiday Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1400"><span className='inline-block text-primary'><TiTick /></span> Customer  Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1200"><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1000"><span className='inline-block text-primary'><TiTick /></span>more...</p>

                        <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000" className="card-actions">
                            <button className="btn capitalize  btn-block text-lg">details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-duration="1300" data-aos-easing="ease-in-sine" className="card min-w-1/4 shadow-xl">
                    <div className="pt-10 flex justify-center">
                        <a href="/"><BsFillHeartFill className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a>
                    </div>
                    <div className="card-body">
                        <h2 data-aos="zoom-out-right" data-aos-duration="3000" className="card-title text-center justify-center mb-5">Non-Profit Events</h2>
                        <p data-aos="zoom-out-left" data-aos-duration="2400" className=''><span className='inline-block text-primary'><TiTick /></span>Talent Show</p>
                        <p data-aos="zoom-out-left" data-aos-duration="2200"><span className='inline-block text-primary'><TiTick /></span>Concert </p>
                        <p data-aos="zoom-out-left" data-aos-duration="2000"><span className='inline-block text-primary'><TiTick /></span>Art Show</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1800"><span className='inline-block text-primary'><TiTick /></span> Conferences</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1600"><span className='inline-block text-primary'><TiTick /></span> Trade Shows</p>

                        <p data-aos="zoom-out-left" data-aos-duration="1400"><span className='inline-block text-primary'><TiTick /></span>Appreciation Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1200"><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1000"><span className='inline-block text-primary'><TiTick /></span>more...</p>

                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                            className="card-actions">
                            <button className="btn capitalize btn-block text-lg">details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-duration="1300" data-aos-easing="ease-in-sine"
                    className="card min-w-1/4 shadow-xl">
                    <div className="pt-10 flex justify-center">
                        <a href="/"><GiShakingHands className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a>
                    </div>
                    <div className="card-body ">
                        <h2 data-aos="zoom-out-right" data-aos-duration="3000" className="card-title text-center justify-center mb-5">Social Events</h2>
                        <p data-aos="zoom-out-left" data-aos-duration="2400"><span className='inline-block text-primary'><TiTick /></span> Award ceremonies</p>
                        <p data-aos="zoom-out-left" data-aos-duration="2200"><span className='inline-block text-primary'><TiTick /></span> Birthday Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="2000"><span className='inline-block text-primary'><TiTick /></span> Anniversary Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1800"><span className='inline-block text-primary'><TiTick /></span> Retirement Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1600"><span className='inline-block text-primary'><TiTick /></span>  Celebrations</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1400"><span className='inline-block text-primary'><TiTick /></span> Religious events</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1200"><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1000"><span className='inline-block text-primary'><TiTick /></span>more...</p>

                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                            className="card-actions">
                            <button className="btn capitalize btn-block text-lg">details</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="1300" data-aos-easing="ease-in-sine" className="card min-w-1/4  shadow-xl">
                    <div className="pt-10 flex justify-center">
                        <a href="/"><RiVipDiamondLine className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a>
                    </div>
                    <div className="card-body">
                        <h2 data-aos="zoom-out-right" data-aos-duration="3000" className="card-title justify-center mb-5 text-center">Weddings</h2>
                        <p data-aos="zoom-out-left" data-aos-duration="2400" className=''><span className='inline-block text-primary'><TiTick /></span>Wedding Ceremony </p>
                        <p data-aos="zoom-out-left" data-aos-duration="2200"><span className='inline-block text-primary'><TiTick /></span> Floral Design </p>
                        <p data-aos="zoom-out-left" data-aos-duration="2000"><span className='inline-block text-primary'><TiTick /></span> Receptions</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1800"><span className='inline-block text-primary'><TiTick /></span> Rehearsal Dinners</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1600"><span className='inline-block text-primary'><TiTick /></span>Engagement Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1400"><span className='inline-block text-primary'><TiTick /></span>Anniversary Parties</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1200"><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                        <p data-aos="zoom-out-left" data-aos-duration="1000"><span className='inline-block text-primary'><TiTick /></span>more...</p>

                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                            className="card-actions">
                            <button className="btn    capitalize btn-block text-lg">details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;