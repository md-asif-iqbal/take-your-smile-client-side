import React from 'react';
import { useForm,  SubmitHandler  } from 'react-hook-form';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading/Loading';

type Inputs = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  };
const Registation = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const { register,reset, handleSubmit,watch, formState: { errors } } = useForm<Inputs>();
    let errorMessage;
    if (error) {

        return (
          <>
          {
            toast.error(error.message)
          }
          </>
          )
  }
    if (loading) {
      return <div className='h-40 mt-10'>{<Loading />}</div>
    }

    if(user){
   
      return(
        <>
          {
            toast.success('Welcome! Registration SuccessFull')
          }
        </>
        )
  
   }
    const onSubmit: SubmitHandler<Inputs> = async(data) => 
    {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirm = data.confirmPassword;
        if (password === confirm) {
          await createUserWithEmailAndPassword(email, password)
         
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
                            

                            return ("Your passwords do no match")
                        }
                      },
                })} />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
            </form>
           
    );
};
// fv
export default Registation;