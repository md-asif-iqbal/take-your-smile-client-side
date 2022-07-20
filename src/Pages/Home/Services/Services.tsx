import React from 'react';
import { RiTeamFill} from 'react-icons/ri';
import { TiTick} from 'react-icons/ti';
import {BsFillHeartFill} from 'react-icons/bs';
import {GiShakingHands} from 'react-icons/gi';
import {RiVipDiamondLine} from 'react-icons/ri';

const Services = () => {
    return (
        <div className='container mx-auto my-10 px-2'>
            <div className='text-center leading-6 px-2'>
            <h2 className='text-2xl font-bold capitalize text-primary md:text-2xl lg:text-4xl my-5'>Our Services</h2>
            <h4 className=' text-base font-bold md:text-xl text-gray-500 capitalize'>Planning an event but no idea where to start? Take Heart!</h4>
            <p className='text-base	 md:text-lg text-gray-500 w-full md:w-4/5 mx-auto my-5 md:my-10'>We have you covered. Take Heart Events partners with local vendors to create fun, unique and innovative events tailored just for you or your organization. We have a variety of event planning experience; including weddings, social, corporate and non-profit events.</p>
            </div>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-gray-500 px-2'>
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><RiTeamFill className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Corporate Events</h2>
                <p className=''><span className='inline-block text-primary'><TiTick /></span> Product Launches</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Sales Events</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Conferences</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Trade Shows</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-primary'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary text-white capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div> 
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><BsFillHeartFill className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Non-Profit Events</h2>
                <p className=''><span className='inline-block text-primary'><TiTick /></span>Talent Show</p>
                <p><span className='inline-block text-primary'><TiTick /></span>Concert </p>
                <p><span className='inline-block text-primary'><TiTick /></span> Conferences</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Trade Shows</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-primary'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary text-white capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div>
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><GiShakingHands className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Social Events</h2>
                <p className=''><span className='inline-block text-primary'><TiTick /></span> Award ceremonies</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Birthday Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Anniversary Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Retirement Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Seasonal Celebrations</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Religious events</p>
                <p><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-primary'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary text-white capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div>
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><RiVipDiamondLine className="text-5xl h-28 w-28 p-5 text-primary border-2 border-primary  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Weddings</h2>
                <p className=''><span className='inline-block text-primary'><TiTick /></span>Wedding Ceremony </p>
                <p><span className='inline-block text-primary'><TiTick /></span> Floral Design </p>
                <p><span className='inline-block text-primary'><TiTick /></span> Receptions</p>
                <p><span className='inline-block text-primary'><TiTick /></span> Rehearsal Dinners</p>
                <p><span className='inline-block text-primary'><TiTick /></span>Engagement Parties</p>
                <p><span className='inline-block text-primary'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-primary'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary text-white capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Services;