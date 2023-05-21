import React from 'react';

import LogoIcon from '@/components/icons/LogoIcon';
const Navbar = () => {
  return (
    <nav className=' sticky top-0 z-10 h-24 w-auto bg-[#11110F]  lg:pl-52 lg:pr-52 '>
      <div className=' flex w-auto flex-row items-center justify-between  p-4 align-middle sm:scale-75 lg:mx-auto lg:scale-100 '>
        <a href='' className=' flex scale-75 items-center justify-center'>
          <LogoIcon />
        </a>
        <div className='flex flex-row items-center gap-16 sm:scale-0 lg:scale-100   '>
          <a className=' font-poppins h-4 w-12 font-normal text-white  duration-300 hover:scale-125 hover:cursor-pointer hover:text-[#FF00C7]'>
            Home
          </a>
          <a className='font-poppins h-4 w-12 font-normal text-white duration-300 hover:scale-125 hover:cursor-pointer hover:text-[#FF00C7]'>
            About
          </a>
          <a className='font-poppins h-4 w-12 font-normal text-white duration-300 hover:scale-125 hover:cursor-pointer hover:text-[#FF00C7]'>
            Services
          </a>
          <a className=' font-poppins h-4 w-12 font-normal  text-white duration-300 hover:scale-125  hover:cursor-pointer hover:text-[#FF00C7]'>
            Contact
          </a>
        </div>
        {/* <div className='w-auto sm:block md:block lg:hidden'>
          <HumburgerMenu onClick={null} />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
