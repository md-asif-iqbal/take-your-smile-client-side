import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import UpdateProfile from './UpdateProfile';

const Dashboard = () => {
    return (
        <div className='flex items-start'>
            <div className=''>
            <Sidebar></Sidebar>
            </div>
           <div className='ml-20'>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;