import React from 'react';
import { RiTeamFill} from 'react-icons/ri';
import { TiTick} from 'react-icons/ti';
import {BsFillHeartFill} from 'react-icons/bs';
import {GiShakingHands} from 'react-icons/gi';
import {RiVipDiamondLine} from 'react-icons/ri';

const Services = () => {
    return (
        <div className='container mx-auto my-10 px-2'>
            <h2 className='text-xl font-bold capitalize text-rose-500 md:text-2xl lg:text-4xl text-center my-10'>Our Services</h2>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><RiTeamFill className="text-5xl h-28 w-28 p-5 text-rose-500 border-2 border-rose-500  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Corporate Events</h2>
                <p className=''><span className='inline-block text-rose-500'><TiTick /></span> Product Launches</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Sales Events</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Conferences</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Trade Shows</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div> 
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><BsFillHeartFill className="text-5xl h-28 w-28 p-5 text-rose-500 border-2 border-rose-500  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Non-Profit Events
</h2>
                <p className=''><span className='inline-block text-rose-500'><TiTick /></span> Product Launches</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Sales Events</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Conferences</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Trade Shows</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div>
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><GiShakingHands className="text-5xl h-28 w-28 p-5 text-rose-500 border-2 border-rose-500  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Social Events</h2>
                <p className=''><span className='inline-block text-rose-500'><TiTick /></span> Product Launches</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Sales Events</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Conferences</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Trade Shows</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div>
            <div className="card min-w-1/4 bg-base-100 shadow-xl">
            <div className="pt-10 flex justify-center">
               <a href="/"><RiVipDiamondLine className="text-5xl h-28 w-28 p-5 text-rose-500 border-2 border-rose-500  rounded-full cursor-pointer" /></a> 
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center mb-5">Weddings</h2>
                <p className=''><span className='inline-block text-rose-500'><TiTick /></span> Product Launches</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Sales Events</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Conferences</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Trade Shows</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span> Customer Appreciation Parties</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>Photography</p>
                <p><span className='inline-block text-rose-500'><TiTick /></span>more...</p>
            
                <div className="card-actions">
                <button className="btn btn-primary capitalize mt-10 btn-block text-lg">details</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Services;