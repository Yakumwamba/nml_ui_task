import Image from 'next/image';
import React from 'react';

import SignUpButton from '@/components/buttons/SignUpButton';
import SocialIcons from '@/components/widgets/SocialIcons';
export default function GetInvolved() {
  return (
    <div className='item-start relative flex flex-col  sm:mt-20  sm:self-center lg:mt-5 lg:self-end'>
      <div className='absolute -right-1/2  bottom-56 left-3/4   z-10'>
        <Image src='/images/signup_arrow.png' width={100} height={83} alt='' />
      </div>
      <div className='flex h-56 w-56 flex-col items-center justify-center rounded-xl bg-[#FF7876]  sm:self-center'>
        <p className='text-lg font-medium text-white'>Get</p>
        <p className=' font-KumbhSans text-4xl text-white'>Involved</p>

        <SignUpButton />
      </div>
      <SocialIcons />
    </div>
  );
}
