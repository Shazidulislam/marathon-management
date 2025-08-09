import React from 'react';
import {  Outlet } from 'react-router';
import Sidebar from '../../Component/DashBoardComponent/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
        
            <main>
                <div className='grid grid-cols-12  bg-[#333446] text-white '>
                    <div className=' col-span-12  md:col-span-2 text-sm py-8  bg-[#333446] font-medium  shadow-xl'>
                        <Sidebar></Sidebar>
                    </div>
                    
                    <div className= '  col-span-12 md:col-span-10'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
       
        </div>
    );
};

export default Dashboard;