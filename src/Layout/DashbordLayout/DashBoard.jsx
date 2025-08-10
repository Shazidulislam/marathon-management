import React from 'react';
import {  Outlet } from 'react-router';
import Sidebar from '../../Component/DashBoardComponent/Sidebar/Sidebar';
import bgblack from '../../assets/marathon-img/bg-black-2.jpeg'

const Dashboard = () => {
    return (
        <div>
        
            <main>
                <div className='grid grid-cols-13   gap-5 ' style={{backgroundImage:`url(${bgblack})`}}>
                    <div className=' col-span-13 md:col-span-3 text-sm py-8  shadow shadow-lime-50  font-medium  '>
                        <Sidebar></Sidebar>
                    </div>
                    
                    <div className= '  col-span-13 md:col-span-10'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
       
        </div>
    );
};

export default Dashboard;