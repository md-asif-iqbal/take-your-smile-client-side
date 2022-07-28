import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../Images/Weeding.jpg'
import image2 from '../../Images/party.jpeg'
import image3 from '../../Images/party2.jpg'
import image4 from '../../Images/party3.jpg'
import image5 from '../../Images/party4.avif'
import image6 from '../../Images/party5.jpg'
import './RecentEvents.css'



export default class RecentEvents extends Component {
    render() {
        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            autoplay: true,
            nextArrow: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
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
            <div style={{ backgroundColor: 'white' }} className="px-7 py-14">
                <h3 className="pb-7 text-3xl text-center" style={{ fontFamily: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}><strong>Recent <span className="text-primary">Events</span></strong></h3>
                <Slider  {...settings}>
                    <div className='px-3'>
                        <div className="banner1">
                            <img className='lg:h-80 h-20 image1' src={image1} alt="" />

                            <div className="custom-display1 lg:h-80 h-20"><p className="p-4     "> Take Your Smile has been helping to organize successful weeding events since 2014 in New York and here you will get the services of a wedding planner and event coordination.</p>
                                <div className=" text-center">
                                    <button className="btn btn-primary ">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="banner2">
                            <img className='lg:h-80 h-20 image2' src={image2} alt="" />

                            <div className="custom-display2 lg:h-80 h-20"><p className="p-4     "> Take Your Smile has been helping to organize successful birthday parties since 2014 in New York and here you will get the services of a birthday planner and event coordination.</p>
                                <div className=" text-center">
                                    <button className="btn btn-primary ">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="banner3">
                            <img className='lg:h-80 h-20 image3' src={image3} alt="" />

                            <div className="custom-display3 lg:h-80 h-20"><p className="p-4     "> Take Your Smile has been helping to organize successful weeding events since 2014 in New York and here you will get the services of a wedding planner and event coordination.</p>
                                <div className=" text-center">
                                    <button className="btn btn-primary ">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="banner4">
                            <img className='lg:h-80 h-20 image4' src={image4} alt="" />

                            <div className="custom-display4 lg:h-80 h-20"><p className="p-4     "> Take Your Smile has been helping to organize successful weeding events since 2014 in New York and here you will get the services of a wedding planner and event coordination.</p>
                                <div className=" text-center">
                                    <button className="btn btn-primary ">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="banner5">
                            <img className='lg:h-80 h-20 image5' src={image5} alt="" />

                            <div className="custom-display5 lg:h-80 h-20"><p className="p-4     "> Take Your Smile has been helping to organize successful weeding events since 2014 in New York and here you will get the services of a wedding planner and event coordination.</p>
                                <div className=" text-center">
                                    <button className="btn btn-primary ">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="banner6">
                            <img className='lg:h-80 h-20 image6' src={image6} alt="" />

                            <div className="custom-display6 lg:h-80 h-20"><p className="p-4 "> Take Your Smile has been helping to organize successful weeding events since 2014 in New York and here you will get the services of a wedding planner and event coordination.</p>
                                <div className=" text-center">
                                    <button className="btn btn-primary ">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}