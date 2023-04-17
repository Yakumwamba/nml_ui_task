import Image from 'next/image';
import React from 'react';
export default function PassengerTreats() {
  return (
    <div className='flex w-full flex-col px-10 pt-5'>
      <p className='text-md mx-6 text-lg font-medium'>
        Make your trip much more pleasurable
      </p>
      <div className='mx-6 flex flex-row items-center justify-between  gap-3  py-5'>
        <div className='flex flex-col items-center justify-center  align-baseline'>
          <div className='flex items-center rounded-lg bg-[#E0D0BE] p-2 '>
            <Image src='/images/blankets.png' height={50} width={50} alt='' />
          </div>
          <div>
            <p className='text-sm font-thin'>Blankets</p>
            <p className='text-md text-[#4D9F89] '>K 50.00</p>
          </div>
        </div>
        {/* Treats */}

        <div className='flex flex-col items-center justify-center align-baseline'>
          <div className='flex items-center rounded-lg bg-[#BED8E0] bg-opacity-40 p-2'>
            <Image src='/images/drinks.png' height={50} width={50} alt='' />
          </div>
          <div>
            <p className='text-center text-sm font-thin'>Drinks</p>
            <p className='text-md self-center text-[#4D9F89]'>K 70.00</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center align-baseline'>
          <div className='flex items-center rounded-lg bg-[#BEE0C1] bg-opacity-40 p-2'>
            <Image
              src='/images/sleeping_pod.png'
              height={50}
              width={50}
              alt=''
            />
          </div>
          <div>
            <p className='self-center text-center text-sm font-thin'>
              Sleeping Pods
            </p>
            <p className='text-md text-center text-[#4D9F89] '>K 100.00</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center align-baseline'>
          <div className='flex items-center rounded-lg bg-[#D9E0BE] bg-opacity-40 p-2'>
            <Image src='/images/breakfast.png' height={50} width={50} alt='' />
          </div>
          <div>
            <p className='text-center text-sm font-thin'>Breakfast</p>
            <p className='text-md text-center text-[#4D9F89]'>K 140.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
