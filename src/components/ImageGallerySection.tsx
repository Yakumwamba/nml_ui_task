import React from 'react';

import ArrowIconGallery from '@/components/icons/ArrowIconGallery';
import ImageGalleryIcon from '@/components/icons/ImageGalleryIcon';

export default function ImageGallerySection() {
  return (
    <section className='flex h-auto w-full flex-col  items-start self-start bg-white'>
      {/* Image Gallery Text */}
      <div className='mr-10 flex w-auto gap-6 pb-24 pt-44 sm:ml-10 sm:scale-95 sm:flex-col sm:items-start lg:mx-52 lg:flex-row lg:items-center'>
        <ImageGalleryIcon />
        <p className=' font-poppins-bold text-5xl font-bold text-black '>
          Image gallery
        </p>
      </div>
      {/* Image Gallery Text */}
      {/* Grid */}
      <div className=' flex h-auto justify-between sm:w-full sm:flex-col lg:w-full lg:flex-row lg:items-center lg:gap-10'>
        <div className=' flex h-auto flex-col  sm:w-full sm:gap-5 lg:w-1/2   lg:gap-10'>
          <div className='flex flex-row justify-between gap-5 sm:w-full lg:w-auto'>
            <div className=' relative flex  h-80 items-end justify-center bg-[url("/images/image-grid.png")]   sm:w-full lg:w-80 '>
              <p className='absolute inset-10 mx-10 mb-2  flex items-end text-white opacity-0 duration-300 hover:cursor-pointer  hover:opacity-100 sm:text-center'>
                Show text on hover
              </p>
              <div className=' absolute bottom-0 right-0 justify-end self-end  p-5 text-white'>
                <ArrowIconGallery />
              </div>
            </div>
            <div className=' bg-green1 relative flex h-80 self-start bg-[url("/images/image-grid.png")] sm:w-full lg:w-80 '>
              <p className='absolute inset-10 mx-10 mb-2  flex items-end text-white opacity-0 duration-300 hover:cursor-pointer  hover:opacity-100 sm:text-center'>
                Show text on hover
              </p>
              <div className=' absolute bottom-0 right-0 justify-end self-end  p-5 text-white'>
                <ArrowIconGallery />
              </div>
            </div>
          </div>

          <div className='flex w-full grid-cols-1 '>
            <div className='bg-green1 relative flex h-80 w-full justify-center  bg-[url("/images/image-grid-one.png")] '>
              <p className='inset-x-30 absolute inset-y-10   mx-10 mb-2 flex items-end self-center text-white opacity-0 duration-300 hover:cursor-pointer  hover:opacity-100 sm:text-center'>
                Show text on hover
              </p>
              <div className=' absolute bottom-0 right-0 justify-end self-end  p-5 text-white'>
                <ArrowIconGallery />
              </div>
            </div>
          </div>
        </div>
        {/* flex h-auto flex-col bg-green-100 sm:w-full sm:gap-5 lg:w-1/2   lg:gap-10 */}

        <div className=' mb-l mb-2 flex h-full scale-100 flex-row sm:mt-5 sm:w-full  sm:gap-5 lg:mt-2 lg:w-1/2   lg:gap-10'>
          <div className='flex flex-col sm:w-full sm:gap-5 lg:w-auto lg:gap-10 lg:first-line:justify-between'>
            <div className='bg-green1 relative  flex h-80 justify-center bg-[url("/images/image-grid-three.png")]   sm:w-auto lg:w-80 '>
              <p className='absolute inset-10 mx-10 mb-2  flex items-end text-white opacity-0 duration-300 hover:cursor-pointer  hover:opacity-100 sm:text-center'>
                Show text on hover
              </p>
              <div className=' absolute bottom-0 right-0 justify-end self-end  p-5 text-white'>
                <ArrowIconGallery />
              </div>
            </div>
            <div className='bg-green1 relative flex h-80   justify-center bg-[url("/images/image-grid.png")] sm:w-auto lg:w-80'>
              <p className='absolute inset-10 mx-10 mb-2  flex items-end text-white opacity-0 duration-300 hover:cursor-pointer  hover:opacity-100 sm:text-center'>
                Show text on hover
              </p>
              <div className=' absolute bottom-0 right-0 justify-end self-end  p-5 text-white'>
                <ArrowIconGallery />
              </div>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='bg-green1 relative h-full w-full justify-center  bg-[url("/images/image-grid-two.png")] '>
              <p className='absolute inset-10 mx-10 mb-2  flex items-end text-white opacity-0 duration-300 hover:cursor-pointer  hover:opacity-100 sm:text-center'>
                Show text on hover
              </p>
              <div className=' absolute bottom-0 right-0 justify-end self-end  p-5 text-white'>
                <ArrowIconGallery />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
    </section>
  );
}
