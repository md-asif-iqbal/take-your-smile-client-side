import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import NavBar from '../NavBar/NavBar';
type Inputs = {
    title: string,
    description: string,
    url: string

  };
const SponsorPost = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async(data) => 
    {
        const title = data.title;
        const image = data.url;
        const description = data.description;
        const sponsor = {title, image, description};
        fetch(`http://localhost:8000/sponsor/${'62f3f718523ed1f561a8cf90'}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sponsor)
        })
        .then(res => res.json())
        .then(data => {
           
                toast.success("New Sponsor Added!")
            
            
         
        })
        reset()
    };
    return (
        <>
        <div className='hero  min-w-screen flex  px-2 md:px-0  mx-auto  items-center gap-5 my-14 md:my-32'>
               <div className="card flex-shrink-0 bg-white w-full lg:w-5/6 max-w-lg shadow-2xl ">
                <h2 className='text-2xl font-bold text-center my-10 uppercase text-secondary'>Add Sponsor On This Application</h2>
                <form  className='p-0 flex-row '  onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <p className='text-left text-red-500 my-4'>
                    {errors.title?.type === 'required' && <span>{errors.title.message}</span>}
                    </p>
                    <div className="form-control">
                    
                        <input type="text" placeholder="Enter Sponsor Title" className="input input-bordered bg-white input-primary" {...register("title", { required: {
                        value: true,
                        message: 'Title is required*'
                        } })} />
                    </div>
                    <p className='text-left text-red-500 my-4'>
                    {errors.url?.type === 'required' && <span>{errors.url.message}</span>}
                    </p>
                    <div className="form-control">
                    
                        <input type="url" placeholder="Enter Body Image URL" className="input input-bordered input-primary bg-white" {...register("url", { required: {
                        value: true,
                        message: 'URL is required*'
                        } })} />
                    </div>
              
                    <p className='text-left text-red-500 my-4'>
                        {errors.description?.type === 'required' && <span>{errors.description.message}</span>}
                    </p>
                    <div className="form-control">
         
                    <textarea className="textarea textarea-primary h-32 bg-white" placeholder="Please explain details..." {...register("description", { required: {
                    value: true,
                    message: 'Write Some Text*'
                } })}></textarea>
                  
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary uppercase" type='submit'>Add New Sponsor</button>
                    </div>
                </div>
                    </form>
                </div>
        </div>
        </>
    );
};

export default SponsorPost;