import React from 'react';

import ArrowIcon from '@/components/icons/ArrowIcon';
import LogoIcon from '@/components/icons/LogoIcon';

export default function FooterSection() {
  return (
    <section className='bottom-0 h-full w-full bg-[#21202B]'>
      <div className='flex w-auto justify-between pt-32 sm:mx-12 sm:flex-col sm:items-start lg:ml-56 lg:mr-52 lg:flex-row lg:items-center '>
        <div className='flex flex-col justify-start gap-2 sm:items-center sm:self-center lg:items-start'>
          <div className='flex pb-12'>
            <LogoIcon />
          </div>

          <p className='font-notoserif pb-10 text-xl text-white'>
            Our newsletter
          </p>
          <p className='font-KumbhSans w-56 text-lg text-white  sm:text-center lg:text-start'>
            Sign up to stay informed about what we do
          </p>

          <div className='flex w-auto flex-row items-center gap-1 pb-10 pt-10 hover:cursor-pointer  '>
            <p className='text-xl text-[#FF7876]'>Sign up</p>
            <ArrowIcon />
          </div>
        </div>

        <div className='flex flex-col gap-2 sm:my-5 sm:items-center sm:justify-center sm:self-center'>
          <p className='font-notoserif pb-8 text-xl font-medium text-white '>
            Main Menu
          </p>
          <p className=' font-KumbhSans text-lg font-normal  text-white'>
            Home
          </p>
          <p className=' font-KumbhSans text-lg font-normal text-white '>
            About Us
          </p>
          <p className=' font-KumbhSans text-lg font-normal text-white'>
            Service
          </p>
          <p className=' font-KumbhSans text-lg font-normal text-white'>
            Contact
          </p>
        </div>

        <div className='flex flex-col gap-2 sm:my-5  sm:items-center sm:self-center'>
          <p className='font-notoserif pb-8 text-xl font-medium text-white  '>
            Quick Links
          </p>
          <p className=' font-KumbhSans font-normal text-white sm:text-lg'>
            Privacy Policy
          </p>
          <p className=' font-KumbhSans font-normal text-white sm:text-lg'>
            Terms and Conditions
          </p>
          <p className=' font-KumbhSans font-normal text-white sm:text-lg'>
            Contact Us
          </p>
          <p className=' font-KumbhSans font-normal text-white sm:text-lg'>
            Get involved
          </p>
        </div>

        <div className='flex h-56 w-56 flex-col items-center justify-center rounded-xl bg-[#FF7876] sm:my-20 sm:self-center'>
          <p className='text-lg font-medium text-white'>Get</p>
          <p className=' font-KumbhSans text-3xl text-white'>Involved</p>

          <div className=' mt-6 flex h-16  w-auto items-center justify-center rounded-full border-2 border-white hover:cursor-pointer '>
            <p className=' mx-5 p-10 text-base text-white'>Sign up</p>
          </div>
        </div>
      </div>
      {/* <hr className=' mx-56 my-10 h-0.5 border-t-0 bg-neutral-400 opacity-75' /> */}
      {/* Line */}
      {/* Line */}
    </section>
  );
}
