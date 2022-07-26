import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { BsTelephoneOutbound} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className="hero min-h-[400px]" style={{backgroundImage: "url(https://i.ibb.co/bLs1wrf/img2.jpg)"}}>
            <div className="hero-overlay bg-gray-500 bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content my-32">
                <div className="max-w-4/5">
                <p className="mb-5 text-2xl md:text-4xl text-white">To get started planning, please tell us a bit <br /> more about your event!</p>
                </div>
            </div>
            </div>

            {/* Contact Form */}
            <div className="hero min-h-screen min-w-screen flex flex-col-reverse px-2  lg:flex-row-reverse mx-auto justify-center items-center gap-5 my-16">
             
                <div className="card flex-shrink-0 w-full lg:w-3/5 max-w-lg shadow-2xl ">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name*</span>
                    </label>
                    <input type="text" placeholder="Enter Full Name" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email*</span>
                    </label>
                    <input type="email" placeholder="Enter Email" className="input input-bordered input-primary" />
                   
                    </div> 
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Event Date*</span>
                    </label>
                    <input type="date" className="input input-bordered input-primary" />
                   
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number*</span>
                    </label>
                    <input type="text" placeholder="Enter Phone" className="input input-bordered input-primary" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" placeholder="Company Name" className="input input-bordered input-primary" />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">What Type Of Event Are You Planning?*</span>
                    </label>
                    <div className='flex items-center justify-evenly'>
                        <label className="label cursor-pointer">
                        <span className="label-text mr-5 font-bold">Wedding</span> 
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text mr-5 font-bold">Non-Profit</span> 
                            <input type="checkbox"  className="checkbox checkbox-primary" />
                        </label>
                        </div>
                        <div className='flex items-center justify-evenly'>
                    <label className="label cursor-pointer">
                        <span className="label-text mr-5 font-bold">Social Event</span> 
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                    </label>
                    
                    <label className="label cursor-pointer">
                        <span className="label-text mr-5 font-bold">Corporate Event</span> 
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                    </label>
                    </div>
                 
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Explain Details*</span>
                    </label>
                    <textarea className="textarea textarea-primary h-32" placeholder="Please explain details..."></textarea>
                  
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary uppercase" type='submit'>Send Message</button>
                    </div>
                </div>
                </div>
                <div className="card w-full  lg:w-2/5 shadow-xl  lg:text-left z-0 bg-primary">
                <div className="card-body">
                    <h2 className="card-title text-xl text-white">Phone</h2>
                    <p className='text-lg text-white flex items-center gap-5'><BsTelephoneOutbound /><span><a href="tel:01881220413" >01881220413</a></span></p>
                     <h2 className="card-title text-xl text-white">E-mail</h2>
                    <p className='text-lg text-white flex items-center gap-5'><AiOutlineMail /><span><a href="mailto:ranaarju20@gmail.com" >ranaarju20@gmail.com</a></span></p>
                    <h2 className="card-title text-xl text-white">Address</h2>
                    <p className='text-lg text-white flex items-center gap-5'><FaMapMarkerAlt /><span>Dhaka, Bangladesh</span></p>
                  
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default Contact;