import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <div className='items-center justify-center p-5 flex'>
            <Navbar></Navbar>

            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;