import React, { useRef } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { BsTelephoneOutbound} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useForm,  SubmitHandler  } from 'react-hook-form';
import { toast } from 'react-toastify';
import PageTitle from '../shared/PageTitle/PageTitle';
type Inputs = {
    name: string,
    email: string,
    phone: string,
    company: string,
    message: string,
    date: string,
    event: string
  };
const Contact = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const form:any = useRef();
    const onSubmit: SubmitHandler<Inputs> = async(data) => 
    {
        
        emailjs.sendForm('take-your-smile', 'template_wireu27', form.current, 'NVoyRWy1HhJ-3DfFm')
        .then((result) => {
            return toast.success("Thank You! Send Message Success.")
            
            
        }, (error) => {
            return toast.error(error.text)
        });
        
        
        reset()
    };
    return (
        <div className='contactUs'>
            <PageTitle title="Contact Us" />
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
            <div className="hero min-h-screen min-w-screen flex flex-col-reverse px-2 md:px-0  lg:flex-row-reverse mx-auto justify-center items-center gap-5 my-16">
             
                <div className="card flex-shrink-0 w-full lg:w-5/6 max-w-lg shadow-2xl ">
                <form  className='p-0 flex-row' ref={form}  onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <p className='text-left text-red-500'>
                    {errors.name?.type === 'required' && <span>{errors.name.message}</span>}
                    </p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Full Name*</span>
                        </label>
                        <input type="text" placeholder="Enter Full Name" className="input input-bordered input-primary" {...register("name", { required: {
                        value: true,
                        message: 'Full Name is required*'
                        } })} />
                    </div>
                    <p className=' text-red-500'>
                        {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span>{errors.email.message}</span> }
                    </p>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Email*</span>
                    </label>
                    <input type="email" placeholder="Enter Email" className="input input-bordered input-primary" {...register("email", { required: {
                    value: true,
                    message: 'Email is required*'
                },
                 pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Provide a Valid Email',
                }
                  })} />
                   
                    </div> 
                    <p className='text-left text-red-500'>
                        {errors.date?.type === 'required' && <span>{errors.date.message}</span>}
                    </p>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Event Date*</span>
                    </label>
                    <input type="date" className="input input-bordered input-primary" {...register("date", { required: {
                    value: true,
                    message: 'Date is required*'
                    } })} />
                   
                    </div>
                    <p className='text-left text-red-500'>
                        {errors.phone?.type === 'required' && <span>{errors.phone.message}</span>}
                    </p>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Phone Number*</span>
                    </label>
                    <input type="text" placeholder="Enter Phone" className="input input-bordered input-primary" {...register("phone", { required: {
                    value: true,
                    message: 'Number is required*'
                    } })} />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Company Name</span>
                    </label>
                    <input type="text" placeholder="Company Name" className="input input-bordered input-primary" {...register("company")} />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">What Type Of Event Are You Planning?*</span>
                    </label>
                    <select className="select select-primary w-full" {...register("event", { required: {
                    value: true,
                    message: 'Event Select is required*'
                    } })}>
                        <option disabled selected className='text-secondary'>What Type Of Event Are You Planning?*</option>
                        <option className='text-secondary'>Corporate Events</option>
                        <option className='text-secondary'>Non-Profit Events</option>
                        <option className='text-secondary'>Social Events</option>
                        <option className='text-secondary'>Weddings</option>
                    </select>
                 
                    </div>
                    <p className='text-left text-red-500'>
                        {errors.message?.type === 'required' && <span>{errors.message.message}</span>}
                    </p>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Explain Details*</span>
                    </label>
                    <textarea className="textarea textarea-primary h-32" placeholder="Please explain details..." {...register("message", { required: {
                    value: true,
                    message: 'Write Some Text*'
                } })}></textarea>
                  
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary uppercase" type='submit'>Send Message</button>
                    </div>
                </div>
                    </form>
                </div>
                <div className="card w-full  lg:w-1/5 shadow-xl  lg:text-left z-0 bg-primary">
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