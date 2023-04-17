import React from 'react';

import Layout from '@/components/layout/Layout';

export default function tickets() {
  return (
    <Layout active={true}>
      <main className='flex flex-col'>
        <div className='mx-10 flex flex-col gap-2 py-10'>
          <h1 className='text-3xl font-semibold text-[#20463C]'>
            Your tickets
          </h1>
          <p className='w-96 text-start font-light text-[#20463C] '>
            Find all your previous tickets, and check if you qualify for Reward
            Tickets
          </p>
        </div>

        <div className='flex flex-col pb-36'>
          <p className='mx-10 pb-5 text-2xl font-bold text-[#20463C]'>Paid</p>
          <div className='flex flex-col gap-2 '>
            {/* Ticket */}
            <div className=' flex w-auto flex-row items-center gap-2'>
              <div className='mx-10 flex h-36 w-56 rounded-lg bg-gray-500'></div>
              <div className='flex w-full flex-col items-start'>
                <p className='flex text-start text-2xl font-bold text-[#20463C]'>
                  346632-INT
                </p>
                <p className='flex text-start text-lg font-semibold text-[#20463C]'>
                  Red Bombers
                </p>
                <p className='flex text-start text-lg font-thin text-[#20463C]'>
                  From Lusaka to Mufulira
                </p>
                <p className='flex text-start text-lg font-thin text-[#20463C]'>
                  30th June, Saturday
                </p>
                <p className='flex text-start text-lg font-semibold text-[#20463C]'>
                  K 210,00
                </p>
              </div>
            </div>
            {/* Ticket */}
            <div className=' flex w-auto flex-row items-center gap-2'>
              <div className='mx-10 flex h-36 w-56 rounded-lg bg-gray-500'></div>
              <div className='flex w-full flex-col items-start'>
                <p className='flex text-start text-2xl font-bold text-[#20463C]'>
                  346632-INT
                </p>
                <p className='flex text-start text-lg font-semibold text-[#20463C]'>
                  Red Bombers
                </p>
                <p className='flex text-start text-lg font-thin text-[#20463C]'>
                  From Lusaka to Mufulira
                </p>
                <p className='flex text-start text-lg font-thin text-[#20463C]'>
                  30th June, Saturday
                </p>
                <p className='flex text-start text-lg font-semibold text-[#20463C]'>
                  K 210,00
                </p>
              </div>
            </div>
            <div className=' flex w-auto flex-row items-center gap-2'>
              <div className='mx-10 flex h-36 w-56 rounded-lg bg-gray-500'></div>
              <div className='flex w-full flex-col items-start'>
                <p className='flex text-start text-2xl font-bold text-[#20463C]'>
                  346632-INT
                </p>
                <p className='flex text-start text-lg font-semibold text-[#20463C]'>
                  Red Bombers
                </p>
                <p className='flex text-start text-lg font-thin text-[#20463C]'>
                  From Lusaka to Mufulira
                </p>
                <p className='flex text-start text-lg font-thin text-[#20463C]'>
                  30th June, Saturday
                </p>
                <p className='flex text-start text-lg font-semibold text-[#20463C]'>
                  K 210,00
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
