import Image from 'next/image';
import React from 'react';
export default function SocialIcons() {
  return (
    <div className='mt-9 flex flex-row gap-6 sm:self-center'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white hover:cursor-pointer'>
        <Image src='/images/facebook.png' width={5} height={12} alt='twitter' />
      </div>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] hover:cursor-pointer'>
        <Image src='/images/twitter.png' width={16} height={13} alt='twitter' />
      </div>
    </div>
  );
}
