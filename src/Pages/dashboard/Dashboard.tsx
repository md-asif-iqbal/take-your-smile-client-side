import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
       
       <div className='mt-20'>
            <NavBar/>
            <div className='flex items-start'>
            
            <div className=''>
            <Sidebar></Sidebar>
            </div>
           <div className='ml-20'>
           <Outlet></Outlet>
           </div>
        </div>
       </div>
    );
};

export default Dashboard;