import { signOut } from "firebase/auth";
import { isError, useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useUser from "../../../hooks/User/UseUser";
import Loading from "../Loading/Loading";
import useAdmin from "../../../hooks/Admin/useAdmin";

const NavEnd = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin]:any  =  useAdmin(user);
  const [users]:any  =  useUser(user);
  const email = user?.email;
  const { isLoading, error, data, refetch } = useQuery(['data'], () =>
  fetch(`https://secure-escarpment-79738.herokuapp.com/user/${email}`, {
    method: "GET",
     headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
     }
}).then(res =>res.json())
)
if (isLoading) {
  // return <div className='h-40 mt-10'>{<Loading />}</div>

}

if (isError) {
 
}
refetch();
  

 
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
 
    <li className=' text-white cursor-pointer uppercase'><Link to='/articles' className='transition-all duration-300'>Article</Link></li>


    <li className=' text-white  cursor-pointer uppercase'><Link to='/contactus'
      className='transition-all duration-300'> Contact Us</Link></li>
    {user ? <li className=' text-white  cursor-pointer uppercase'>

      {/* Start */}
      <div className="dropdown dropdown-end">
        <label id="0" className=" m-1"> <button className=" transition-all duration-300 uppercase"  >

        <div className="avatar ">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {
                   data?.image ? <img src={data?.image} alt={data.name} className="w-12 h-12"  /> : <img src="https://i.ibb.co/rwGPsQ9/profile.jpg" alt={data?.name} className="w-14 h-14" />}
                    </div>
                    </div></button> </label>
        <ul id="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded  w-52">

          <div
            className="bg-neutral uppercase px-1 py-2 w-64 mt-4  rounded max-w-screen origin-center  right-0 appear-done enter-done"
          >

{
                   users?.role === "user" && <>
                    <Link className="flex items-center px-3 py-3 cursor-pointer  text-base-100 text-sm focus:outline-none" to="/favorites"> My Favorites</Link>
                    <Link className="flex items-center px-3 py-3 cursor-pointer text-base-100 text-sm focus:outline-none" to="/profiles"> Profile </Link>
                    <Link className="flex items-center px-3 py-3 cursor-pointer text-base-100 text-sm focus:outline-none" to="/yourbookings"> Your Bookings</Link>

                    <Link className="flex items-center px-3 py-3 cursor-pointer text-base-100 text-sm focus:outline-none" to="/availablejob">Apply for Employee</Link>
                                        </> }
                      {
                      admin?.role === "Admin" && <Link className="flex items-center px-3 py-3 cursor-pointer text-base-100 text-sm focus:outline-none" to="/admin"> Admin DashBoard</Link>}

                      <button className="flex w-full items-center px-3 py-3 cursor-pointer  text-base-100 text-sm focus:outline-none" onClick={logout} >LOGOUT</button>
                        </div>
                        </ul>
                      </div>
                       {/* end */}

                     </li> : <li className=' text-base-100  cursor-pointer uppercase'><Link to='/login' 
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