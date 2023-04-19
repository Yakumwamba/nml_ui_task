import Link from 'next/link';
import React from 'react';

import Logo from '@/components/icons/Logo';
export default function VerifyNumber() {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex h-full w-full flex-col items-center justify-center bg-[#003D2D] bg-fixed '>
      <Logo width={undefined} height={undefined}></Logo>

      <div className='flex flex-col items-center justify-center py-10 '>
        <p className='text-3xl font-bold text-white '> Verify Phone number</p>
        <p className='text-md font-light text-white '>
          Cheaper bus tickets for everyone
        </p>

        <div className='flex h-auto w-full flex-row items-center justify-center gap-3   pt-10'>
          <div className='flex h-12 w-12 items-center justify-center rounded-sm border-2 border-white bg-green-300'>
            <input
              type='text'
              className='h-full w-full rounded-sm text-center text-lg font-bold text-[#003D2D]'
            />
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-sm border-2 border-white bg-green-300'>
            <input
              type='text'
              className='h-full w-full rounded-sm text-center text-lg font-bold text-[#003D2D]'
            />
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-sm border-2 border-white bg-green-300'>
            <input
              type='text'
              className='h-full w-full rounded-sm text-center text-lg font-bold text-[#003D2D]'
            />
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-sm border-2 border-white bg-green-300'>
            <input
              type='text'
              className='h-full w-full rounded-sm text-center text-lg font-bold text-[#003D2D]'
            />
          </div>
        </div>
        <div className='mx-10 mb-12 mt-12 flex w-56 flex-row items-center justify-center self-start rounded-lg bg-[#199675] bg-opacity-75 hover:cursor-pointer'>
          <Link href='/home'>
            {' '}
            <p className='p-4 text-lg font-semibold text-white'>Verify</p>
          </Link>
        </div>
      </div>

      {/* <LoadingSpinner width={50} height={50}></LoadingSpinner> */}
    </div>
  );
}
