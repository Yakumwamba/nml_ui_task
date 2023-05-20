import React, { useEffect, useMemo, useState } from 'react';

import ArrowLeft from '@/components/icons/ArrowLeftIcon';
import ArrowRight from '@/components/icons/ArrowRightIcon';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = useMemo(
    () => [
      {
        url: '/images/slider-one.png',
      },
      {
        url: '/images/slider-two.png',
      },
      {
        url: '/images/slider-three.png',
      },
    ],
    []
  );

  useEffect(() => {
    // Set the initial active index to the first image
    setActiveIndex(0);
  }, [images]);

  const handlePreviousSlide = () => {
    // If the active index is not the first index, then decrease the active index by 1
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextSlide = () => {
    // If the active index is not the last index, then increase the active index by 1
    if (activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  return (
    <section className='bottom-1 left-0 right-0  top-0 flex flex-col '>
      <div
        style={{ backgroundImage: `url(${images[activeIndex].url})` }}
        className='  flex h-screen  w-full translate-x-0  flex-row bg-no-repeat ease-in-out sm:bg-cover sm:bg-bottom lg:bg-cover    lg:bg-right '
      >
        <div className='absolute left-0 mx-5  flex h-20 w-20 items-center justify-center self-center rounded-full border border-black border-opacity-5 hover:cursor-pointer'>
          <ArrowLeft onClick={handlePreviousSlide} />
        </div>

        <div className='flex  flex-col gap-5 self-center sm:ml-20 sm:scale-75 lg:mx-56 lg:scale-100'>
          <p className='font-poppins text-7xl font-extrabold text-white '>
            Main slide heading
          </p>
          <p className='font-poppins text-3xl font-normal text-white'>
            Main slide subheading
          </p>
          <button className='flex h-16 w-44 items-center justify-center rounded-xl bg-[#00959E]'>
            <p className=' w-28 text-center text-xl font-medium text-white hover:cursor-pointer'>
              Button text
            </p>
          </button>
        </div>
        <div className='absolute right-0 mx-5  flex h-20 w-20 items-center justify-center self-center rounded-full border border-black border-opacity-5 hover:cursor-pointer '>
          <ArrowRight onClick={handleNextSlide} />
        </div>
      </div>
      <div className='flex cursor-pointer flex-row  items-center justify-center gap-2 pt-5 transition duration-200 '>
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-1 w-12 ${
              activeIndex === index ? 'bg-[#FF00C7]' : 'bg-[#FF00C7] opacity-30'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
