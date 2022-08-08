import { useForm,  SubmitHandler  } from 'react-hook-form';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword,useUpdateProfile  } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';
import Loading from '../../shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdminToken from '../../../hooks/useAdminToken';
import { useState } from 'react';

type Inputs = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    role: string,
    state: {
      from: Location;
    }
  };

const AdminRegistation = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const location = useLocation() as unknown as Inputs;
  const from = location.state?.from?.pathname || '/';
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useAdminToken(user, role);

  const { register,reset, handleSubmit,watch, formState: { errors } } = useForm<Inputs>();
    let errorMessage;
    if (error || updateError) {

        return (
          <>
          {
            toast.error(error?.message || updateError?.message)
          }
          </>
          )
  }
    if (loading || updating) {
      return <div className='h-40 mt-10'>{<Loading />}</div>
    }

    if(token){
      navigate(from, { replace: true })
    return(
      <>
        {
         toast.success('Thank You! Registation Successfull')
        }
      </>
      )
 }
    const onSubmit: SubmitHandler<Inputs> = async(data) => 
    {
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;
        const confirm = data?.confirmPassword;
        const role = data?.role;
        
        if (password === confirm) {
          setRole(role);
          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: name});
        }
        
        reset()
    };
 
    

    return (
        <form  className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
            <p className='text-red-500'>{errorMessage}</p>
            <h2 className="title">Sign up</h2>
            <p className='text-left text-red-500'>
                {errors.name?.type === 'required' && <span>{errors.name.message}</span>}
             </p>
            <div className="input-field">
                <input  type="text" placeholder="Full Name"  {...register("name", { required: {
                    value: true,
                    message: 'Full Name is required*'
                } })} />
            </div>
            <p className=' text-red-500'>
                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span> }
             </p>
            <div className="input-field">
                <input type="email" placeholder="Email" {...register("email", { required: {
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
                {errors.password?.type === 'required' && <span>{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span>{errors.password.message}</span> } 
                </p>
              <div className="input-field">
                <input  type="password" placeholder="Password" {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required*'
                    },
                    minLength: {
                        value: 8,
                        message: 'Enter At Least 8 Character'
                    }
                    })} />
              </div>
              <p className='text-left text-red-500'>
               
             </p>
              <div className="input-field">
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { 
                     validate: (val: string) => {
                        if (watch('password') !== val) {
                            return ("Your passwords don't match")
                        }
                      },
                })} />
              </div>
              <p className='text-left text-red-500'>
                {errors.role?.type === 'required' && <span>{errors.role.message}</span>}
             </p>
            <div className="w-full bg-white select-box border-2 border-primary rounded-full">
            <select className="select w-full border-none outline-none" {...register("role", { required: {
                    value: true,
                    message: 'Role Select is required*'
                } })}>
              <option disabled selected>Select Your Role! </option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Editor</option>
              <option>partner</option>
            </select>
           
            </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
           
    );
};

export default AdminRegistation;