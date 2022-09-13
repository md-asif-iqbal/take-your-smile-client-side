import React from 'react';
import './Service.css'
import { AiOutlineLine, AiOutlineTeam } from 'react-icons/ai';
import { BsSuitHeart } from 'react-icons/bs';
import { ImGlass2 } from 'react-icons/im';
import { IoDiamondOutline } from 'react-icons/io5';
const Fade = require("react-reveal/Fade")
const Services = () => {

    const services = [
        {
            id: 1,
            title: "Corporate Events",
            service1: "Product Launches",
            service2: "Sales Events",
            service3: "Conferences",
            service4: "Trade Shows",
            service5: "Holiday Parties",
            service6: "Customer Parties",
            service7: "Educational Seminar",
            icons: <AiOutlineTeam />
        },
        {
            id: 2,
            title: "Non-Profit Events",
            service1: "Welcome Home Parties",
            service2: "Talent Show",
            service3: "Conferences",
            service4: "Art Show",
            service5: "Holiday Parties",
            service6: "Customer Parties",
            service7: "Appreciation Parties",
            icons: <BsSuitHeart />
        }
        ,
        {
            id: 3,
            title: "Social Events",
            service1: " Award ceremonies",
            service2: "Retirement Parties",
            service3: "Birthday Parties ",
            service4: "Trade Shows",
            service5: "Celebrations",
            service6: "Religious events",
            service7: "Photography",
            icons: <ImGlass2 />
        },
        {
            id: 4,
            title: "Wedding Events",
            service1: "Wedding Ceremony",
            service2: "Floral Design",
            service3: "Receptions ",
            service4: "Anniversery Shows",
            service5: "Receptions Shows",
            service6: "Rehearsal Dinners",
            service7: "Photography",
            icons: <IoDiamondOutline />
        }
    ]
    return (
        <div className=' my-20 px-2'>
            <div className='text-center leading-6 px-2 relative '>
                <Fade top duration={2000}>
                    <h2 className='text-2xl font-bold capitalize text-primary md:text-2xl lg:text-4xl my-5 font-mono'>Our Services</h2>
                </Fade>
                <Fade left duration={8500}>
                <h1 className="md:text-[110px] text-5xl absolute left-1/3  top-0 -z-10 text-[#F7F7F7] text-center font-mono font-bold">Services</h1>
            </Fade>
                <Fade right duration={3000}>
                    <h4 className='font-mono text-base font-semibold md:text-xl text-secondary capitalize'>Planning an event but no idea where to start? Take Heart!</h4>
                </Fade>
                <Fade left duration={3500}>
                    <p className='text-base	 md:text-lg text-secondary w-full md:w-4/5 mx-auto my-2 md:my-4 font-mono'>We have you covered. Take Heart Events partners with local vendors to create fun, unique and innovative events tailored just for you or your organization. We have a variety of event planning experience; including weddings, social, corporate and non-profit events.</p>
                </Fade>
            </div>
            <div className='grid gap-5 grid-cols-1 container mx-auto md:grid-cols-2 lg:grid-cols-4 px-2'>
                {
                    services.map(item => (<div className="w-11/12 mx-auto">
                        <div className="pt-10 w-10/12 mx-auto">
                            <Fade bottom duration={3500}>
                                <div className="flex w-24 h-24 border-2 border-primary rounded-full cursor-pointer mx-auto"> <span className='text-4xl text-center py-7 text-primary mx-auto px-2'>{item.icons}</span> </div>
                            </Fade>
                        </div>
                        <div className="card-body font-mono text-secondary">
                            <Fade left duration={4000}>
                                <h2 className="font-mono text-xl font-semibold justify-center mb-5 text-center">{item.title}</h2>
                            </Fade>
                            <div className='ml-4'>
                                <Fade right duration={4500}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>{item.service1}</p>
                                </Fade>
                                <Fade left duration={5000}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>{item.service2}</p>
                                </Fade>
                                <Fade right duration={5500}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>{item.service3}</p>
                                </Fade>
                                <Fade left duration={6000}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>{item.service4}</p>
                                </Fade>
                                <Fade right duration={6500}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>{item.service5}</p>
                                </Fade>
                                <Fade left duration={7000}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>{item.service6}</p>
                                </Fade>
                                <Fade right duration={7500}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>{item.service7}</p>
                                </Fade>
                                <Fade left duration={8000}>
                                    <p className='text-lg flex items-center text-secondary'><span className='inline-block text-primary mr-4 text-lg'><AiOutlineLine /></span>more...</p>
                                </Fade>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div >
    );
};

export default Services;