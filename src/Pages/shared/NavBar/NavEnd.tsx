import { type } from "@testing-library/user-event/dist/type";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const NavEnd = () => {
  const [user] = useAuthState(auth);
 const navigate = useNavigate();
 const logout = () =>{
   signOut(auth);
    navigate('/login')
   localStorage.removeItem('accessToken');

 }
    const navigation = <>
                            <li className=' text-white  cursor-pointer'><Link to='/weddings' 
                            className='transition-all duration-300 uppercase'> Weddings</Link></li>

                            <li className=' text-white  cursor-pointer uppercase'><Link to='/social' 
                            className='transition-all duration-300'> Social</Link></li>
                             
                             {
                               user ? <li className=' text-white  cursor-pointer uppercase'><Link to='/dashboard' 
                               className='transition-all duration-300'> DashBoard</Link></li>: ''
                             }
                             <li className=' text-white  cursor-pointer uppercase'><Link to='/contactus' 
                            className='transition-all duration-300'> Contact Us</Link></li>
                            {user ?  <li className=' text-white  cursor-pointer uppercase'>
                            <button className= " transition-all duration-300 uppercase" onClick={logout} >Sign Out</button>
                            </li> : <li className=' text-white  cursor-pointer uppercase'><Link to='/login' 
                            className='transition-all duration-300 '> Login</Link></li>}
                            

    </>
    return (
        <nav>
        <ul className='flex space-x-8  capitalize text-sm'>
            
          {navigation}
        </ul>
    </nav>
    );
};

export default NavEnd;