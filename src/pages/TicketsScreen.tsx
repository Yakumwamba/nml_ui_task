import React from 'react';

import TicketIllustration from '@/components/icons/TicketIllustration';
import Layout from '@/components/layout/Layout';
export default function tickets() {
  return (
    <Layout>
      <main className='flex flex-col bg-[#E3EDEA] '>
        <div className='mx-10 flex flex-col gap-2 py-10'>
          <div className='flex flex-row items-center  justify-between '>
            <h1 className='text-3xl font-semibold text-[#20463C]'>
              Your tickets
            </h1>
            <TicketIllustration
              width={undefined}
              height={undefined}
              fill={undefined}
            ></TicketIllustration>
          </div>

          <p className='w-96 text-start text-lg font-light text-[#20463C] '>
            Find all your previous tickets, and check if you qualify for Rewards
          </p>
        </div>

        <div className='flex w-full flex-col pb-36'>
          <p className='mx-10 pb-5 text-2xl font-normal text-[#20463C]'>
            History
          </p>
          <div className='flex w-full flex-col gap-2 border-b-2 border-[#199675] pb-10 '>
            {/* Ticket */}
            <div className=' flex w-auto flex-row items-center gap-2'>
              <div className='mx-10 flex h-36 w-56 rounded-lg bg-white bg-[url("/images/qrcode.png")] bg-cover bg-center bg-no-repeat '></div>
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
              <div className='mx-10 flex h-36 w-56 rounded-lg bg-white bg-[url("/images/qrcode.png")] bg-cover bg-center bg-no-repeat'></div>
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
              <div className='mx-10 flex h-36 w-56 rounded-lg bg-white bg-[url("/images/qrcode.png")] bg-cover bg-center bg-no-repeat'></div>
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
            <p className='mx-10 flex cursor-pointer flex-row self-end font-semibold text-[#20463C] underline'>
              View all
            </p>
          </div>

          <div className='flex flex-col pb-20'>
            <p className='mx-10 pt-10 text-2xl font-bold text-[#20463C]'>
              Rewards
            </p>
            <div className='mx-10 flex   scroll-ms-44 flex-row gap-2 overflow-x-visible  overflow-ellipsis'>
              <div className='flex h-36 w-36 flex-col rounded-lg bg-white'></div>
              <div className='h-36 w-36 rounded-lg bg-white'></div>
              <div className='h-36 w-36 rounded-lg bg-white'></div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
