
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import PageTitle from "../shared/PageTitle/PageTitle";
import Sidebar from "./Sidebar";

const Dashboard = () => {

  return (


        <div className=' bg-gray-400 gap-5'>
        <PageTitle title="Deshboard" />

            <div className=''>

       

            <div className=''>
                        <NavBar/>
                        <div className='flex items-start'>
                        
                        <div className='mt-40'>
                        <Sidebar></Sidebar>
                        </div>
                        <div className='w-11/12 mx-auto'>
                        <Outlet></Outlet>
                        </div>
                    </div>
                </div>

       </div>
       </div>

       
  );
};

export default Dashboard;
