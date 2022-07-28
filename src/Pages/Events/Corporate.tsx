import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../shared/NavBar/NavBar';
import './Events'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import social1 from '../../Images/Social1.avif'
import social2 from '../../Images/Social2.avif'
import social3 from '../../Images/Social3.avif'
import { AiOutlineHeart } from 'react-icons/ai';
import RecentEvents from "../RecentEvents/RecentEvents";
import Packages from "../Packages/Packages";


export default class Corporate extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div style={{ backgroundColor: 'white' }}>
                <NavBar></NavBar>

                {/* <img className='w-full' src={banner} alt="" /> */}
                <div className='banner-corporate pt-8'>
                    <h1 className='text-3xl lg:text-6xl align-middle  text-center font-semibold ' style={{ marginTop: '200px', paddingBottom: '200px', color: 'white' }}>CORPORATE EVENTS</h1>

                </div>
                <div className=' w-3/5 mx-auto my-20'>
                    <h3 style={{ color: '#444', lineHeight: '44px', wordSpacing: '4px' }} className='text-2xl lg:text-2xl align-middle  text-center  font-semibold ,'>Let Take Heart Events help wow your employees, clients or potential customers at your next event.</h3>
                    <p style={{ color: '#676767', lineHeight: '30px', wordSpacing: '3px' }} className='text-center pt-11 text-base'>

                        Strategic development, measurability of event goals and objectives, and accountability, paired with our innovative event designs are the driving force behind our corporate event planning techniques. From your new product launch, to your next company retreat, Take Heart! We have you covered!
                    </p>
                </div>

                <p style={{ color: '#c62127' }} className='text-center text-2xl mb-12'><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16" >
                    <div className="pb-9">
                        <div className="w-3/4 mx-auto">
                            <Slider {...settings}>
                                {/* <div> bhkhgk</div> */}
                                <div >
                                    <img style={{ width: '100%' }} src={social1} alt="" />
                                </div>
                                <div>
                                    <img style={{ width: '100%' }} src={social2} alt="" />
                                </div>
                                <div>
                                    <img style={{ width: '100%' }} src={social3} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="w-3/4 pl-4 ">
                        <h1 className="text-2xl lg:text-4xl mb-5" style={{ color: '#444', fontWeight: '600' }}>SERVICES INCLUDE</h1>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Product Launches</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Conferences</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Sales Events</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Customer Appreciation Events</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Anniversary Events</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Award Dinners</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Trade-Shows</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Holiday Parties and Outings</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Fashion carnival</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Educational seminar</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Rehearsal Dinners</span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Engagement Parties</span></p>


                    </div>

                </div>

                <div className="bg-primary" style={{ height: '10px' }}></div>
                <div className="py-16" style={{ backgroundColor: '#333333' }}>

                    <h1 className="text-neutral text-2xl pt-10 text-center pb-12">
                        <strong>Rates are determined on a case by case basis. Contact us for more information.</strong></h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16" >

                        <div className="mx-auto w-5/6" >
                            <div className="w-full text-neutral">
                                <form action="">

                                    <div className="lg:flex">
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text" placeholder="Your Name" className="input-lg w-full max-w-xs block mx-3 my-3" required={true} />
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text" placeholder="Your Email Address" className="mx-3 my-3 input-lg  w-full max-w-xs block " required={true} />
                                    </div>
                                    <div className="lg:flex ">
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text" placeholder="Your Phone Number" className="input-lg mx-3 my-3  w-full max-w-xs block " required={true} />
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text" placeholder="Your Company Name" className="input-lg mx-3 my-3  w-full max-w-xs block " required={true} />
                                    </div>
                                    <div className="flex ">
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text " placeholder="Date/Time of year preference Name" className="mx-3 my-3  input-lg  w-full max-w-2xl block " required={true} />

                                    </div>
                                    <div className="flex ">
                                        <textarea style={{ height: '300px', backgroundColor: '#3b3b3b' }} className=" input-lg mx-3 my-3 pt-4 w-full " placeholder="Tell us more about your event - don't hold back" required={true}></textarea>

                                    </div>
                                    <button typeof="submit" className="send-button mx-3">
                                        SEND
                                    </button>
                                </form>


                            </div>
                        </div>
                        <div className="pl-4">
                            <h1 className="text-3xl text-neutral mb-7">ADDITIONAL EVENTS WE PLAN INCLUDE:</h1>
                            <div className="text-xl text-neutral">
                                <p className="pb-3"><FontAwesomeIcon className="text-primary pr-3" icon={faAngleRight}></FontAwesomeIcon > Luncheons</p>
                                <p className="pb-3"><FontAwesomeIcon className="text-primary pr-3" icon={faAngleRight}></FontAwesomeIcon> Galas</p>
                                <p className="pb-3"><FontAwesomeIcon className="text-primary pr-3" icon={faAngleRight}></FontAwesomeIcon> Fairs / Expos</p>
                                <p className="pb-3"><FontAwesomeIcon className="text-primary pr-3" icon={faAngleRight}></FontAwesomeIcon> Auctions</p>
                                <p className="pb-3"><FontAwesomeIcon className="text-primary pr-3" icon={faAngleRight}></FontAwesomeIcon> Unique Fundraisers</p>
                            </div>
                            <p className="text-neutral text-xl mt-7">Can’t find the answers you need? Get in touch!</p>
                            <button className="contact-button">
                                CONTACT US
                            </button>
                        </div>


                    </div>
                </div>

                <RecentEvents></RecentEvents>
                <Packages></Packages>
            </div>
        );
    };

}