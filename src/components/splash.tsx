import React from 'react';

import LoadingSpinner from '@/components/icons/LoadingSpinner';
import Logo from '@/components/icons/Logo';
export default function SplashScreen() {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex h-full w-full flex-col items-center justify-center bg-[#003D2D] bg-fixed '>
      <Logo width={undefined} height={undefined}></Logo>

      <div className='flex flex-col items-center justify-center py-10 '>
        <p className='text-3xl font-bold text-white '> Intercity Bookings</p>
        <p className='text-md font-light text-white '>
          Cheaper bus tickets for everyone
        </p>
      </div>

      <LoadingSpinner width={50} height={50}></LoadingSpinner>
    </div>
  );
}
