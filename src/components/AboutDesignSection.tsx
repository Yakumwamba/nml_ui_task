import React from 'react';

import UnionIcon from '@/components/icons/UnionIcon';

export default function AboutDesignSection() {
  return (
    <section className='flex h-auto  w-full flex-col bg-white pt-44 lg:items-start'>
      {/* About design */}
      <div className=' mr-10 flex w-auto gap-6 pb-20 sm:ml-10 sm:scale-95 sm:flex-col sm:items-start lg:mx-52 lg:flex-row lg:items-center'>
        <UnionIcon />
        <p className=' font-poppins-bold text-5xl font-bold text-black '>
          About design
        </p>
      </div>

      <div className='flex  justify-around pb-[90px] pt-6 sm:ml-16 sm:mr-10 sm:scale-110 sm:flex-col sm:items-start  sm:gap-5 lg:mx-56 lg:w-auto  lg:scale-100 lg:flex-row  lg:items-center'>
        {/* Powerful */}
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold'>Powerful</p>
          <p className='w-auto pt-10 text-start text-base  font-normal'>
            Design is about finding novel solutions for complex problems. Our
            tools shape the solutions we are able to explore, so Figma needs to
            be powerful to allow our users to express any idea they have.
          </p>
        </div>
        {/* Precise */}
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold'>Precise</p>
          <p className='w-auto pt-10 text-start text-base  font-normal'>
            Figma is a tool for experts and professionals for which accuracy is
            critical; we need to allow people to be accurate and precise in
            everything they do.
          </p>
        </div>
        {/* Systematic */}
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold'>Systematic</p>
          <p className='w-auto pt-10 text-start text-base font-normal'>
            One of the key pillars of building software is the possibility to
            leverage reusable blocks to build something new and more complex.
            Computers do the heavy lifting so you can focus on the concept.
          </p>
        </div>
      </div>
    </section>
  );
}
