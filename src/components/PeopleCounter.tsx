import React from 'react';

import Minus from '@/components/icons/minus';
import People from '@/components/icons/people';
import Plus from '@/components/icons/plus';

export default function PeopleCounter() {
  return (
    <div className=' flex w-full   flex-col justify-center gap-2  px-14'>
      <div className='flex w-auto flex-row justify-between border-b-2 border-gray-400 border-opacity-25  pb-5 pt-5'>
        <div className='flex flex-row items-center justify-around align-baseline'>
          <People width={30} height={30}></People>
          <p className='text-md mx-4 text-center font-light'>1 person</p>
        </div>

        <div className=' items-around flex h-auto  flex-row justify-between rounded-md bg-[#E3EDEA] px-8 py-2'>
          <Minus width={30} height={30}></Minus>
          <div className='mx-5 h-6 w-0.5 self-center bg-gray-300'></div>
          <Plus width={30} height={30}></Plus>
        </div>
      </div>
    </div>
  );
}
