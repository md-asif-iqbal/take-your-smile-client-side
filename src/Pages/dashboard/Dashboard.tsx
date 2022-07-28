import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className='flex min-w-full gap-5'>
            <div className='flex-none min-w-1/5'>
            <Sidebar></Sidebar>
            </div>
           <div className='flex-auto ml-20 min-w-4/5'>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;