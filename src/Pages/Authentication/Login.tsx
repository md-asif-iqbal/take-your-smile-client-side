import React, { useState } from 'react';
import "./authentication.css";
import { BsFacebook, BsGoogle} from 'react-icons/bs';

const Login = () => {
 let [btnStatus, setBtnStatus] = useState<String>('');
 let changeBtnStatus = (status:string )=> {
    setBtnStatus(status)
 }
    return (
        <div id='container' className={btnStatus ===  'sign-up' ? "sign-up-mode" : ""}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <input name='email' type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <input name='password' type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <BsFacebook />
                </a>
              
                <a href="/" className="social-icon">
                  <BsGoogle />
                </a>
              
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
              
                <input name='name' type="text" placeholder="Full Name" />
              </div>
              <div className="input-field">
                <input name='email' type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <input name='password' type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <input name='comfirm' type="password" placeholder="Confirm Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
              <a href="/" className="social-icon">
                  <BsFacebook />
                </a>
              
                <a href="/" className="social-icon">
                  <BsGoogle />
                </a>
              </div>
            </form>
          </div>
        </div>
  
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id='sign-in-btn' onClick={()=> changeBtnStatus("sign-in")}>
                Sign in
              </button>
            </div>
            <img src="../../images/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Login;