import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Sidebar from "./Sidebar";

const Dashboard = () => {

  return (

        <div className='  gap-5'>
            <div className='flex-none min-w-1/5'>

       

            <div className='mt-20'>
                        <NavBar/>
                        <div className='flex items-start'>
                        
                        <div className=''>
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
