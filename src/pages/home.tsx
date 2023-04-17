/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';
import React from 'react';

import AvailableDates from '@/components/AvailableDates';
import Search from '@/components/icons/search';
import Layout from '@/components/layout/Layout';
import PassengerTreats from '@/components/PassengerTreats';
import PeopleCounter from '@/components/PeopleCounter';
import Seo from '@/components/Seo';

export default function home() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=' flex h-auto w-full flex-auto flex-col items-center justify-between bg-[#199675]'>
          <div className='flex w-full  flex-row justify-between p-10 '>
            <p className='text-2xl font-bold text-white'>Hi, Kape</p>
            <Image src='/images/profile.png' width={50} height={50} alt='' />
          </div>
          <div className=' relative z-40 mx-10 flex flex-col items-center  justify-center gap-4 pb-10'>
            <input
              type='text'
              id='large-input'
              size={98}
              placeholder='Where are you going?'
              className=' relative z-20 w-full rounded-md border-none bg-white  p-4 font-semibold   text-green-500 focus:border-none  focus:ring-gray-200  sm:text-lg'
            />

            <input
              type='text'
              size={98}
              id='large-input'
              placeholder='Closest bus terminal'
              className=' focus:ring-green1 tsext-gray-100 relative z-20 w-full rounded-md  border-none bg-white   p-4 pr-10 font-semibold  text-gray-100 focus:border-none sm:text-lg'
            />
            <div className='absolute z-30  flex h-12 w-12 items-center justify-center self-end rounded-full bg-white '>
              <Image src='/images/swap.png' width={30} height={30} alt='swap' />
            </div>
          </div>
        </section>

        <section className='flex h-screen w-full flex-col items-center justify-start bg-white'>
          <AvailableDates></AvailableDates>
          <PeopleCounter></PeopleCounter>
          <PassengerTreats></PassengerTreats>

          <div className=' w-full pl-10 pr-10'>
            <div className='mt-12 flex w-full flex-row items-center justify-center self-center rounded-lg bg-[#199675] hover:cursor-pointer'>
              <Search width={50} height={50}></Search>
              <p className='p-4 text-lg font-semibold text-white'>
                Find times and prices
              </p>
            </div>
            <div className='mx-2 flex  flex-row items-center justify-start'>
              <input
                type='checkbox'
                size={50}
                className='border-green2 border-2 bg-white checked:bg-green-400 hover:bg-green-100'
              />
              <p className='text-green1 text-md p-4 font-normal'>
                Find taxi driver nearby?
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className='h-auto w-full pl-10 pr-10'>
            <div className=' flex h-24 w-full flex-col items-center bg-[#BEE0C1] bg-opacity-30 px-10 pl-10 pr-10'>
              <p className=' self-start py-2 text-start text-lg font-bold text-[#199675]'>
                Your trip, your priorities!
              </p>
              <p className='text-md text-start font-light text-gray-500'>
                On a budget? Tight schedule? Book tickets that fit your needs
              </p>
            </div>
            <div className=' my-2 flex  h-24 w-full flex-col items-center bg-[#BEE0C1] bg-opacity-30 px-10  pl-10 pr-10'>
              <p className='  self-start py-2 text-start text-lg font-bold   text-[#199675]'>
                Country wide coverage
              </p>
              <p className='text-md text-start font-light text-gray-500'>
                Save time and compare all your bus travel options in one place!
              </p>
            </div>

            <div className=' my-2 mb-10  flex h-56 w-full flex-col items-center bg-[#BEE0C1] bg-opacity-30 px-10  pl-10 pr-10'>
              <p className='  self-start py-2 text-start text-lg font-bold   text-[#199675]'>
                24/7 Support
              </p>
              <p className='text-md text-start font-light text-gray-500'>
                Our trainned experts are always on standby to help you make a
                good choice depending on your travel needs
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
