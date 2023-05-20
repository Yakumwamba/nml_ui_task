import Image from 'next/image';
import React from 'react';

import ArrowIcon from '@/components/icons/ArrowIcon';
import LogoIcon from '@/components/icons/LogoIcon';
export default function FooterSection() {
  return (
    <section className='bottom-0  h-auto w-full bg-[#21202B]'>
      <div className='lg:align-center mt-16 flex h-auto w-auto justify-between sm:mx-12 sm:flex-col sm:items-start lg:ml-56 lg:mr-52 lg:flex-row lg:items-center '>
        <div className='flex flex-col justify-start gap-2 sm:items-center sm:self-center lg:mt-2 lg:items-start lg:self-start'>
          <div className='mb-5 mt-10 flex scale-75'>
            <LogoIcon />
          </div>

          <p className='font-notoserif mb-3 text-xl text-white'>
            Our newsletter
          </p>
          <p className='font-KumbhSans w-56 text-lg text-white  sm:text-center lg:text-start'>
            Sign up to stay informed about what we do
          </p>

          <div className='mb-10 mt-10 flex w-auto flex-row items-center justify-center gap-5 align-middle hover:cursor-pointer  '>
            <p className='text-xl text-[#FF7876]'>Sign up</p>
            <ArrowIcon />
          </div>
        </div>

        <div className='flex flex-col gap-2 sm:my-5 sm:items-center sm:justify-center sm:self-center lg:items-start'>
          <p className='font-notoserif mb-3 text-xl font-medium text-white '>
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

        <div className='flex flex-col gap-2 sm:my-5 sm:items-center  sm:self-center lg:items-start'>
          <p className='font-notoserif mb-3 text-xl font-medium text-white  '>
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

        <div className='item-start relative flex flex-col  sm:mt-20  sm:self-center lg:mt-5 lg:self-end'>
          <div className='absolute -right-1/2  bottom-56 left-3/4   z-10'>
            <Image
              src='/images/signup_arrow.png'
              width={100}
              height={83}
              alt=''
            />
          </div>
          <div className='flex h-56 w-56 flex-col items-center justify-center rounded-xl bg-[#FF7876]  sm:self-center'>
            <p className='text-lg font-medium text-white'>Get</p>
            <p className=' font-KumbhSans text-4xl text-white'>Involved</p>

            <div className=' mt-6 flex h-16  w-auto items-center justify-center rounded-full border-2 border-white hover:cursor-pointer '>
              <p className=' mx-5 p-10 text-base text-white'>Sign up</p>
            </div>
          </div>
          <div className='mt-9 flex flex-row gap-6 sm:self-center'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white hover:cursor-pointer'>
              <Image
                src='/images/facebook.png'
                width={5}
                height={12}
                alt='twitter'
              />
            </div>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-black hover:cursor-pointer'>
              <Image
                src='/images/twitter.png'
                width={16}
                height={13}
                alt='twitter'
              />
            </div>
          </div>
        </div>
      </div>
      {/* <hr className=' mx-56 my-10 h-0.5 border-t-0 bg-neutral-400 opacity-75' /> */}
      {/* Line */}
      {/* Line */}
    </section>
  );
}
