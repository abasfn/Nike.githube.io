import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <div className='grid  md:grid-cols-3 relative '>
            <div className='md:col-span-2'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='m-auto md:m-0'>
                <img className='ml-6 mt-4 w-auto' src='images/nike-logo.jPG' />
                </div>
                <ul className='flex mt-4 ml-4 md:justify-end'>
                    <li className='mr-12 text-base text-blue-600 md:text-xl'>Home</li>
                    <li className='mr-12 text-base text-blue-600 md:text-xl'>Boys</li>
                    <li className='mr-12 text-base text-blue-600 md:text-xl'>Girls</li>
                    <li className='text-base text-blue-600 md:text-xl'>customize</li>
                </ul>
                </div>
                <div className='col-span-2 ml-4 mt-16 text-center'>
                <p className='text-blue-600 text-4xl md:text-6xl'><b>Nothing Can</b></p>
                <div className='flex  mt-4 justify-center'>
                    <p className='text-red-500 text-4xl md:text-6xl'><b>Stop</b></p>
                    <p className='text-blue-600 text-4xl md:text-6xl'><b>The Run</b></p>
                </div>
            </div>
            <div className='col-span-2 w-4/5 mt-32 ml-6 mb-8'>
            <img className='m-auto'  src='images/colors switch.svg'/>
            </div>
            </div>
            <div className='bg-yellow-300 col-span-2 h-screen w-full md:col-span-1 w-auto'>
                <div className='flex flex-row-reverse mr-6 mt-4 mb-8'>
                    <img className='rounded-xl' src='images/youtube icon.jPG' />
                    <img className='mr-8 rounded-xl' src='images/instagram icon.jPG' />
                    <img className='mr-8 rounded-xl' src='images/facebookicon.jPG' />
                </div>
                <div className='bg-yellow-200 Circle-response md:h-auto md:w-5/12 '>
                    <img  src='images/nike-shoe1.svg'/>
                </div>
            </div>
        </div>
    );
};

export default Menu;