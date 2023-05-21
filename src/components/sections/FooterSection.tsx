import React from 'react';

import GetInvolved from '@/components/widgets/GetInvolved';
import MainMenu from '@/components/widgets/MainMenu';
import OurNewsletter from '@/components/widgets/OurNewsletter';
import QuickLinks from '@/components/widgets/QuickLinks';
export default function FooterSection() {
  return (
    <section className='bottom-0  h-auto w-full bg-[#21202B]'>
      <div className='lg:align-center mt-16 flex  h-auto w-auto justify-between sm:mx-12 sm:flex-col sm:items-center lg:ml-56 lg:mr-52 lg:flex-row lg:items-center lg:self-center '>
        <OurNewsletter />
        <MainMenu />
        <QuickLinks />
        <GetInvolved />
      </div>

      <hr className=' mx-56 mt-10 h-[1px] border-t-0 bg-[#2B2A3A] opacity-75' />
      <p className=' font-KumbhSans flex justify-center self-center py-10 text-lg font-normal text-white opacity-70'>
        Copyright ©2023 A Company. All Rights Reserved.
      </p>
      {/* Line */}
      {/* Line */}
    </section>
  );
}
