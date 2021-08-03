import React from 'react';

const Main = () => {
    return (
        <div className='grid md:grid-cols-2 justify-items-stretch'>
            <div className='col-span-2'>
                <p className='text-blue-600 text-3xl'>Nothing Can</p>
                <div className='flex'>
                <p className='text-red-500 text-3xl'>Stop</p>
                <p className='text-blue-600 text-3xl'>The Run</p>
                </div>
            </div>
            <div className='bg-yellow-300'>
                <div className='bg-yellow-200 rounded-full w-auto h-auto mt-8'>
                <img className='' width='80%' src='images/nike-shoe1.SVG'/>
                </div>
            </div>
        </div>
    );
};

export default Main;