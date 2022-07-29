import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../shared/NavBar/NavBar';
import './Events'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import weeding1 from '../../Images/Weeding2.avif'
import weeding2 from '../../Images/Weeding3.avif'
import weeding3 from '../../Images/weeding4.avif'
import { AiOutlineHeart } from 'react-icons/ai';
import RecentEvents from "../RecentEvents/RecentEvents";

import Packages from "../Packages/Packages";

import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
import PageTitle from "../shared/PageTitle/PageTitle";



export default class Weedings extends Component {
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
                <PageTitle title="Weeding Event" />

                {/* <img className='w-full' src={banner} alt="" /> */}
                <div className='banner-weeding pt-8'>
                    <h1 className='text-3xl lg:text-6xl align-middle  text-center font-semibold ' style={{ marginTop: '200px', paddingBottom: '200px', color: 'white' }}>WEEDING PLANNING</h1>

                </div>
                <div className=' w-3/5 mx-auto my-20'>
                    <h3 style={{ color: '#444', lineHeight: '44px', wordSpacing: '4px' }} className='text-2xl lg:text-2xl align-middle  text-center  font-semibold ,'>Planning you're wedding, but no idea where to start? Take Heart!</h3>
                    <p style={{ color: '#676767', lineHeight: '30px', wordSpacing: '3px' }} className='text-center pt-11 text-base'>

                        Whether you need a day-of coordinator or full service planning from your proposal to your big day, we have you covered!
                    </p>
                </div>

                <p style={{ color: '#c62127' }} className='text-center text-2xl mb-12'><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16" >
                    <div className="pb-9">
                        <div className="w-3/4 mx-auto">
                            <Slider {...settings}>
                                {/* <div> bhkhgk</div> */}
                                <div >
                                    <img style={{ width: '100%' }} src={weeding1} alt="" />
                                </div>
                                <div>
                                    <img style={{ width: '100%' }} src={weeding2} alt="" />
                                </div>
                                <div>
                                    <img style={{ width: '100%' }} src={weeding3} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="w-3/4 pl-4 ">
                        <h1 className="text-2xl lg:text-4xl mb-5" style={{ color: '#444', fontWeight: '600' }}>SERVICES INCLUDE</h1>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Photography </span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Wedding Ceremony </span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Floral Design </span></p>
                        <p className="mb-2  "> <AiOutlineHeart className="inline-block align-middle mr-3 text-primary" /><span> Receptions</span></p>
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
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text" placeholder="Your Email Address" className=" my-3 input-lg  w-full max-w-xs block " required={true} />
                                    </div>
                                    <div className="lg:flex ">
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text" placeholder="Your Phone Number" className="input-lg mx-3 my-3  w-full max-w-xs block " required={true} />
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text" placeholder="Your Company Name" className="input-lg  my-3  w-full max-w-xs block " required={true} />
                                    </div>
                                    <div className="w-full ">
                                        <input style={{ backgroundColor: '#3b3b3b' }} type="text " placeholder="Date/Time of year preference Name" className="mx-3 my-3  input-lg  w-full max-w-2xl block " required={true} />

                                    </div>
                                    <div className="w-full ">
                                        <textarea style={{ height: '200px', backgroundColor: '#3b3b3b' }} className=" input-lg mx-3 my-3 pt-4 w-full " placeholder="Tell us more about your event - don't hold back" required={true}></textarea>

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
                            <Link to='/contactus'>
                                <button className="contact-button flex align-middle">
                                    <span className="contact">CONTACT US </span>
                                    <p className="pl-3 text-2xl ">   <BsChatDots className="chat-icon" /></p>
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>
                <Packages></Packages>
                <RecentEvents></RecentEvents>
            </div>
        );
    };

}