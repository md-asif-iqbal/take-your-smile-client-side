import { type } from "@testing-library/user-event/dist/type";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-scroll";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/Admin/useAdmin";

const NavEnd = () => {
  const [user] = useAuthState(auth);
  const [admin]: any = useAdmin(user);
  // console.log(admin);

  const photo: any = user?.photoURL;
  let names: any = user?.displayName;
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/login')
    localStorage.removeItem('accessToken');

  }
  const navigation = <>
    <li className=' text-white  cursor-pointer'><Link to='/weddings'
      className='transition-all duration-300 uppercase'> Weddings</Link></li>

    <li className=' text-white  cursor-pointer uppercase'><Link to='/social'
      className='transition-all duration-300'> Social</Link></li>
    {/* {
                              admin?.role === 'Admin' && <li className=' text-white cursor-pointer uppercase'><Link to='/articles' className='transition-all duration-300'>Blogs</Link></li>
                            } */}
    <li className=' text-white cursor-pointer uppercase'><Link to='/articles' className='transition-all duration-300'>Article</Link></li>

    {/* {
                               user ? <li className=' text-white  cursor-pointer uppercase'><Link to='/dashboard' 
                               className='transition-all duration-300'> DashBoard</Link></li>: ''
                             } */}
    <li className=' text-white  cursor-pointer uppercase'><Link to='/contactus'
      className='transition-all duration-300'> Contact Us</Link></li>
    {user ? <li className=' text-white  cursor-pointer uppercase'>

      {/* Start */}
      <div className="dropdown dropdown-end">
        <label id="0" className=" m-1"> <button className=" transition-all duration-300 uppercase"  >

          <div className="avatar ">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {
                user ? <img src={user.photoURL} alt={names} />
                  : <img src="https://i.ibb.co/FqYD4K3/download-2.png" alt={names} />


              }
            </div>
          </div>
        </button> </label>
        <ul id="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded  w-52">

          <div
            className="bg-white uppercase px-1 py-2 w-64 mt-4  rounded max-w-screen origin-center text-black right-0 appear-done enter-done"
          >

            <a
              className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
              href="/favourites"
            >
              My Favorites
            </a>
            <Link
              className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
              to="/profiles"
            >
              Profile
            </Link>
            <a
              className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
              href="/settings"
            >
              Your Bookings
            </a>

            <Link
              className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
              to="/availablejob"
            >
              Apply for Employee
            </Link>
            <Link
              className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
              to="/admindashboard"
            >
              Admin DashBoard
            </Link>
            <button
              className="flex w-full items-center px-3 py-3 cursor-pointer  hover:bg-gray-200 font-light text-sm focus:outline-none"
              onClick={logout}
            >
              LOGOUT
            </button>
          </div>

        </ul>
      </div>
      {/* end */}

    </li> : <li className=' text-white  cursor-pointer uppercase'><Link to='/login'
      className='transition-all duration-300 '> Login</Link></li>}


  </>
  return (
    <nav>
      <ul className='flex space-x-8 items-center capitalize  text-sm'>

        {navigation}
      </ul>
    </nav>
  );
};

export default NavEnd;