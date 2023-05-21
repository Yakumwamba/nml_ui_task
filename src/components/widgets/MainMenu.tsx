import React from 'react';

export default function MainMenu() {
  return (
    <div className='flex flex-col gap-2 sm:my-5 sm:items-center sm:justify-center sm:self-center lg:items-start'>
      <p className='font-notoserif mb-3 text-xl font-medium text-white '>
        Main Menu
      </p>
      <p className=' font-KumbhSans text-lg font-normal text-white  hover:cursor-pointer'>
        Home
      </p>
      <p className=' font-KumbhSans text-lg font-normal text-white hover:cursor-pointer '>
        About Us
      </p>
      <p className=' font-KumbhSans text-lg font-normal text-white hover:cursor-pointer'>
        Service
      </p>
      <p className=' font-KumbhSans text-lg font-normal text-white hover:cursor-pointer'>
        Contact
      </p>
    </div>
  );
}
