import React from 'react';

import ArrowIcon from '@/components/icons/ArrowIcon';
import LogoIcon from '@/components/icons/LogoIcon';

export default function OurNewsletter() {
  return (
    <div className='flex flex-col justify-start gap-2 sm:items-center sm:self-center lg:mt-2 lg:items-start lg:self-start'>
      <div className='mb-5 mt-10 flex scale-75 hover:cursor-pointer'>
        <LogoIcon />
      </div>

      <p className='font-notoserif mb-3 text-xl text-white'>Our newsletter</p>
      <p className='font-KumbhSans w-56 text-lg text-white  sm:text-center lg:text-start'>
        Sign up to stay informed about what we do
      </p>

      <div className=' mb-10 mt-10 flex w-auto flex-row items-center justify-center gap-5 align-middle hover:cursor-pointer  '>
        <p className='hover:scale-115 text-xl text-[#FF7876] '>Sign up</p>
        <ArrowIcon />
      </div>
    </div>
  );
}
