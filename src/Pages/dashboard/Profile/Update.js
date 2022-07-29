import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../shared/PageTitle/PageTitle';
const Update = () => {
    const [user] = useAuthState(auth);
    const { register,reset, formState: { errors }, handleSubmit} = useForm();
    const imgStorageKey = '58d3c7355cf533547f2645e98915da5c';
    const onSubmit = data => {
        const email = user?.email;
        const name= user?.displayName;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                const img = result?.data?.url;
                console.log(img);
                const userInfo = {
                    name: name,
                    email: email,
                    userName: data.userName,
                    study: data.study,
                    image: img,
                    phone: data.phone,
                    division: data.division,
                    distic: data.distic,
                    linkedin: data.linkedin,
                    github: data.github
                }
                //send fata on database
                fetch(`http://localhost:8000/user/${email}`, {
                    method: "PUT",
                    headers: {
                    'content-type': "application/json",
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(insertData => {
                    return toast.success('You are Successfully Update Profile!')
                })
            }
        })
        reset();
    }
    return (
    <div className='container flex h-full mb-20 md:mt-10'>
            <div className="card w-full md:w-10/12 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="block">
                <p className='text-left text-red-500'>
                {errors.userName?.type === 'required' && <span>{errors.userName.message}</span>}
                </p>
                <div className="input-field">
                <input  type="text" placeholder="User Name"  {...register("userName", { required: {
                    value: true,
                    message: 'User Name is required*'
                } })} />
                </div>
                <div className="input-field">
                <input type="email" value={user?.email} disabled/>
                </div>   
                <div className="input-field">
                    <input type="text" name='seller' value={user?.displayName} disabled />
                </div>
                <p className='mb-3 text-red-500'> {errors.phone?.type === 'required' && "Phone is required*"}</p>
                <div className="input-field">
                    <input type="text" name='phone' placeholder="Phone"  {...register("phone", { required: true })} />
                </div>
            
                <div className="input-field">
                    <input type="text" name='study' placeholder="Company Name"  {...register("company")} />
                </div>
                <p className='mb-3 text-red-500'> {errors.division?.type === 'required' && "division is required*"}</p>
                <div className="input-field">
                    <input type="text" name='division' placeholder="Division"  {...register("division", { required: true })} />
                </div>
                <p className='mb-3 text-red-500'> {errors.distic?.type === 'required' && "District is required*"}</p>
                <div className="input-field">
                    <input type="text" name='distic' placeholder="District"  {...register("distic", { required: true })} />
                </div>
                <p className='mb-3 text-red-500'> {errors.image?.type === 'required' && "Image is required*"}</p>    
                <div className='flex items-center space-x-6 my-5'>
                

                <div className="shrink-0">
                    <img className="object-cover w-16 h-16 rounded-full"
                    src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg" alt="..." />
                </div>
                <label className="block ">
                    <span className="sr-only cursor-pointer ">Product Image</span>
                    <input type="file" name='image'
                    className="block cursor-pointer w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"  {...register("image")} />
                </label>
                </div>
           
                <div className='text-center'>
                    <button className="btn btn-block btn-primary text-white" type='submit'>All Save</button>
                </div>
                </form>
               
            </div>
            </div>
            <PageTitle title="Update Profile" />

        </div>
    );
};

export default Update;