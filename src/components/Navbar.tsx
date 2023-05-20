import React from 'react';

import HumburgerMenu from '@/components/icons/HumburgerMenu';
import LogoIcon from '@/components/icons/LogoIcon';
const Navbar = () => {
  return (
    <nav className=' sticky top-0 z-10 h-24 bg-[#11110F]   lg:pl-52 lg:pr-52 '>
      <div className='mx-auto flex max-w-screen-xl flex-row items-center justify-between p-4 align-middle sm:scale-75 lg:scale-100 '>
        <a href='' className='flex scale-75 items-center justify-center'>
          <LogoIcon />
        </a>
        <div className='flex flex-row items-center gap-16 sm:scale-0 lg:scale-100   '>
          <a className='font-poppins h-4 w-12 font-normal text-white hover:cursor-pointer'>
            Home
          </a>
          <a className='font-poppins h-4 w-12 font-normal text-white hover:cursor-pointer'>
            About
          </a>
          <a className='font-poppins h-4 w-12 font-normal text-white hover:cursor-pointer'>
            Services
          </a>
          <a className='font-poppins h-4 w-12  font-normal text-white hover:cursor-pointer'>
            Contact
          </a>
        </div>
        <div className='sm:block lg:hidden'>
          <HumburgerMenu onClick={null} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
