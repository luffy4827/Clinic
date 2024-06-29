import React from 'react';
import camp1 from '../assets/Camp Photos/10.jpg'
import camp2 from '../assets/Camp Photos/12.jpg'
import camp3 from '../assets/Camp Photos/7.jpg'

const Camp = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-5xl font-bold text-blue-500'>Health Camp</h3>
        <p className='pt-4 text-xl'>
          Successfully conducted the health camp. 
        </p>
        <button className="mt-5 btn btn-outline btn-info">Learn More</button>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src={camp1}
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src={camp2}
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src={camp3}
          alt='/'
        />
      </div>
    </div>
  );
};

export default Camp;
