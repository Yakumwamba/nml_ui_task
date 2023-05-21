import React from 'react';

export default function QuickLinks() {
  return (
    <div className='flex flex-col gap-2 sm:my-5 sm:items-center  sm:self-center lg:items-start'>
      <p className='font-notoserif mb-3 text-xl font-medium text-white  '>
        Quick Links
      </p>
      <p className=' font-KumbhSans font-normal text-white hover:cursor-pointer sm:text-lg'>
        Privacy Policy
      </p>
      <p className=' font-KumbhSans font-normal text-white hover:cursor-pointer sm:text-lg'>
        Terms and Conditions
      </p>
      <p className=' font-KumbhSans font-normal text-white hover:cursor-pointer sm:text-lg'>
        Contact Us
      </p>
      <p className=' font-KumbhSans font-normal text-white hover:cursor-pointer sm:text-lg'>
        Get involved
      </p>
    </div>
  );
}
