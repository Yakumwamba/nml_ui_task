import Link from 'next/link';
import React from 'react';

export default function landing() {
  return (
    <>
      <section className='flex h-auto w-full flex-col bg-green-300'>
        <h1 className='text-green1 mx-10 pt-10 text-2xl'>
          Book Your Discounted Bus Tickets in Lusaka Now!
        </h1>
        <p className='mx-10 flex self-start text-start text-lg font-normal text-gray-600'>
          We're Your One-Stop Shop for Bus Travel in Zambia
        </p>

        <div className='mx-10 flex w-full flex-row items-center'>
          <input
            type='text'
            placeholder='Mobile number'
            className=' h-16 w-96 rounded-md border-green-500  bg-white font-semibold  text-gray-100'
          />
          <div className='mx-10 mb-12 mt-12 flex w-56 flex-row items-center justify-center self-start rounded-lg bg-[#199675] hover:cursor-pointer'>
            <Link href='/home'>
              {' '}
              <p className='p-4 text-lg font-semibold text-white'>Book now</p>
            </Link>
          </div>
        </div>
      </section>
      <section className='h-56 w-full bg-green-500'>
        <h1>We're Your One-Stop Shop for Bus Travel in Lusaka</h1>
      </section>
      <section className='h-56 w-full bg-green-600'>
        <h1>How to Book Your Bus Tickets in Lusaka in Just a Few Clicks</h1>
      </section>
      <section className='h-56 w-full bg-green-700'>
        <h1>
          Travel with the Best Bus Providers in Lusaka - Safe, Comfortable, and
          Reliable
        </h1>
      </section>
      <section className='h-56 w-full bg-green-800'>
        <h1>
          Stay Up-to-Date with Everything You Need to Know About the Bus
          Terminus in Lusaka
        </h1>
      </section>
      <section className='h-56 w-full bg-green-900'>
        <h1>
          Earn Platform Coins and Redeem Rewards - Get More Out of Your Bus
          Travel in Lusaka
        </h1>
      </section>
      <section className='bg-green1 h-56 w-full'>
        <h1>
          Get in Touch with Us - Follow Us on Social Media for More Updates and
          Deals!"
        </h1>
      </section>
    </>
  );
}
