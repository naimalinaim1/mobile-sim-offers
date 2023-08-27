import React from 'react';
import banner from '../../../assets/banner/banner.jpg'

const Banner = () => {

    return (
        <div>
            <div style={{backgroundImage: `url(${banner})`}} className="w-full h-[280px] sm:h-[420px] md:h-[530px] lg:h-[640px] bg-cover bg-center flex items-center rounded">
                <div className='sm:w-[60%] lg:w-[50%] px-5'>
                    <h1 className='text-4xl sm:text-6xl md:text-5xl md:leading-[60px]  lg:text-6xl lg:leading-[75px] text-gray-200 font-bold'>Great discount on SIM recharge in Bangladesh</h1>
                    <p className='text-gray-400 text-lg md:text-xl lg:text-2xl my-3 sm:mt-6 sm:mb-10'>Many variations of the passage from Lorem Epsum are available, but most have undergone changes...</p>
                    <div className='space-x-5'>
                        <button className='btn lg:btn-secondary px-10'>Offers</button>
                        <button className="btn md:btn-outline btn-secondary">About us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;