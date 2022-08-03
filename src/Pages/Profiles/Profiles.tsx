import React, { useState } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import './Profiles.css'
import { BsFillCameraFill } from 'react-icons/bs';
import { FaTransgender } from 'react-icons/fa';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { RiH1 } from 'react-icons/ri';
import { fas } from '@fortawesome/free-solid-svg-icons';
const Profiles = () => {
    const [edits , setEdits]:any=useState(false);
    const [gender, setGender]:any= useState();
    const [names , setNames]:any = useState();
    const [genderData,setGenderDatas]:any=useState();
    const [user]=useAuthState(auth);
    let photo:any = user?.photoURL;

    const edit=()=>{
        setEdits(true);
    }
    const edited=(event:any)=>{
        // event.preventdefault();
        setGender(event.target.value);
        // setEdits(false);
    }
    const saveGData=()=>{
        setGenderDatas(gender);
        setEdits(false);
    }
    const cancelGData =()=>{
        setGender('');
        setGenderDatas('');
        setEdits(false);
    }
    const changeName=()=>{

    }
// console.log(datas);

    return (
        <div className='bg-gray-600'>
            <NavBar></NavBar>
                       <h1 className='text-white opacity-0'>Profile here</h1>
                <div>
                    
  
<div className="bg-gray-300 font-sans antialiased ">
    <div className="container mx-auto my-56 ">
        <div>

            <div className="bg-white  relative  shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                <div  className="flex justify-center relative group profileimg ">

                        <img src={photo} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md  border-4 border-white transition duration-200 transform hover:scale-110  "/>

                        <label htmlFor='3'
                            className="transition-all texthover z-10 transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-1"
                        >
                               
                                <p className=" text-white mx-auto absolute -mt-10 font-bold text-4xl">
                                <BsFillCameraFill/>
                                </p>
                                <p className='text-white  text-xl'>
                                    Edit
                                </p>
                            
                            </label>
                            <input type="checkbox" id="3" className="modal-toggle" />
                                <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="3" className="  btn-sm btn-circle absolute right-1 top-4">
                                        <span className='text-rose-600 text-xl'> 
                                       <ImCross/> </span>
                                    </label>
                                    <div className="avatar ">
                                        <div className="w-28 ml-44 rounded-full">
                                            <img src={photo}/>
                                        </div>
                                        </div>
                                        <div className="h-0.5 mx-14 bg-gray-400 rounded mt-5"></div>

                                        <div className='items-center mx-28 mt-5 mb-2'>
                                        <input
                                            type="file"
                                            name="image"
                                            className="block cursor-pointer w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                        </div>
                                        <div className=' mx-24 mt-4 mb-2'>
                                        <label className='bg-blue-600 p-1.5 px-6 rounded text-white mx-8'>Save</label>
                                        
                                        <label htmlFor="3" className='bg-gray-600 p-1.5 px-4 rounded text-white'>
                                         Cancel
                                        </label>
                                        </div>
                                </div>
                                </div>
                </div>
              
                
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">{user?.displayName}</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">UI Components Factory</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div className="flex justify-between items-center my-5 px-6">
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-6">Basic Information</h3>
                        <div className="mt-5 w-full flex flex-col overflow-hidden text-sm">

                        <div className='flex justify-between mx-8 items-center'>

                    <h5 className='flex'>Name</h5>
                    {
                    edits===true? 
                    <div>
                        <form action="" onBlur={changeName} >
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
         
            <div className='flex'>
            <button onClick={saveGData} className='bg-blue-500 p-2 rounded text-white'>Save</button>
            <button onClick={cancelGData} className='bg-gray-500 p-2 mx-2 rounded text-white'>Cancel</button>
            </div>
                    </form>
                </div>
                :<h2>{
                    genderData? <h1>{genderData}</h1>: <h2>Not set yet</h2>
                    } </h2>
                }
                {
                    edits===false? <button className='mx-15 text-error'onClick={edit} >Edit</button>:''
                }
                </div>

                            <div className='flex mt-5 border-t justify-between mx-8 items-center'>

                                <h5 className='flex'>Gender</h5>
                               {
                                   edits===true? 
                                   <div>
                                       <form action="">
                                            <select onChange={edited} className="select w-full mb-2 border-0">
                                            <option disabled selected>Pick your Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                            </select>
                                         
                                            <div className='flex'>
                                            <button onClick={saveGData} className='bg-blue-500 p-2 rounded text-white'>Save</button>
                                            <button onClick={cancelGData} className='bg-gray-500 p-2 mx-2 rounded text-white'>Cancel</button>
                                            </div>
                                       </form>
                                   </div>
                                   :<h2>{
                                       genderData? <h1>{gender}</h1>: <h2>Not set yet</h2>
                                       } </h2>
                               }
                                {
                                    edits===false? <button className='mx-15 text-error'onClick={edit} >Edit</button>:''
                                }
                            </div>

                           

                           

                            
                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Added new rank
                                <span className="text-gray-500 text-xs">5 days ago</span>
                            </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            
        </div>
    );
};

export default Profiles;