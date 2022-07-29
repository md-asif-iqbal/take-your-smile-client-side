import React, { useState } from 'react';
import "./authentication.css";
import { useForm,  SubmitHandler  } from 'react-hook-form';
import Registation from './Registation';
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import { toast } from 'react-toastify';
import NavBar from '../shared/NavBar/NavBar';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

type Inputs = {
    email: string,
    password: string,
    
  };
const Login = () => {
  const [email, setEmail] = useState();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit,reset, formState: { errors } } = useForm<Inputs>({mode: "onBlur"})
    let [btnStatus, setBtnStatus] = useState<String>('');
    let changeBtnStatus = (status:string )=> {
       setBtnStatus(status)
    }
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async(data) =>{
        const email = data.email;
        const password =data.password;
        if (email && password) {
          await signInWithEmailAndPassword(email, password);
          reset();
        }
        
    }
    if (error) {

      return (
        <>
        {
          toast.error(error.message)
        }
        </>
        )
    }
    if (loading || sending) {
      return <div className='h-40 mt-10'>{<Loading />}</div>
      
    };
   if(token){
   
      return(
        <>
          {
            toast.success('Thank You! Login SuccessFull')
          }
        </>
        )
  
   }
   if (user) {
    console.log(token);
   navigate('/home')
}

   const resetPassword = async() => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Please, Check Your Email");
    }else{
      toast.error('Please, Enter Email');
    }
  }
   
    return (
      <>
      <NavBar />
        <div id='container' className={btnStatus ===  'sign-up' ? "sign-up-mode" : ""}>
        <div className="forms-container">
          <div className="signin-signup">

            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="title">Sign in</h2>
             <p className=' text-red-500'>
                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span> }
             </p>
              <div className="input-field">
                <input type="email"  placeholder="Email" {...register("email", { required: {
                    value: true,
                    message: 'Email is required*',
                },
                 pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Provide a Valid Email',
                },
                onBlur: (e) => setEmail(e.target.value)
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
              
            <p className='text-lg'> Forgot Password?<button className="text-primary" onClick={resetPassword}> Please Reset</button> </p>

            <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
            </form>
           <SocialLogin />
          <Registation />
          </div>
        </div>
  
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
              Planning an event but no idea where to start? Take Heart!

              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={()=> changeBtnStatus("sign-up")}>
                Sign up
              </button>
            </div>
            <img src="../../images/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
              Planning an event but no idea where to start? Take Heart!

              </p>
              <button className="btn transparent" id='sign-in-btn' onClick={()=> changeBtnStatus("sign-in")}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
</>
    );
};
export default Login;