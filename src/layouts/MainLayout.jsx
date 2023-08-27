import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

/**
 * 
 * Website main layout
 */

const MainLayout = () => {
    return (
        <div className='w-[96%] max-w-7xl mx-auto'>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;