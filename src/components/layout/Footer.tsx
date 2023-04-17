import Link from 'next/link';
import * as React from 'react';

import Community from '@/components/icons/community';
import Home from '@/components/icons/home';
import Settings from '@/components/icons/Settings';
import Ticket from '@/components/icons/ticket';

export default function Footer() {
  const [active, setactive] = React.useState(false);

  return (
    <footer className=' fixed   bottom-0  left-0 flex h-32 w-full flex-row items-center justify-around border-t-2 border-gray-50 bg-white pb-10 pt-2'>
      <div className='flex flex-col items-center justify-center  hover:cursor-pointer'>
        <Link
          href='/home'
          onClick={() => {
            console.log('clicked');
            setactive(true);
          }}
        >
          <Home
            width={50}
            height={50}
            fill={active ? '#199675' : 'gray'}
          ></Home>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center hover:cursor-pointer '>
        <Link
          href='/tickets'
          onClick={() => {
            console.log('clicked');
            setactive(true);
          }}
        >
          <Ticket width={50} height={50} fill='none'></Ticket>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center hover:cursor-pointer '>
        <Link
          href='/referal'
          onClick={() => {
            console.log('clicked');
            setactive(true);
          }}
        >
          <Community width={50} height={50} fill='none'></Community>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center hover:cursor-pointer '>
        {/* <Image src='/images/settings.svg' width={50} height={50} alt='asd' /> */}
        <Link
          href='/settings'
          onClick={() => {
            console.log('clicked');
            setactive(true);
          }}
        >
          <Settings width={50} height={50} fill='none'></Settings>
        </Link>
      </div>
    </footer>
  );
}

// <header className='sticky top-0 z-50 bg-white'>
//   <div className='layout flex h-14 items-center justify-between'>
//     <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
//       Home
//     </UnstyledLink>
//     <nav>
//       <ul className='flex items-center justify-between space-x-4'>
//         {links.map(({ href, label }) => (
//           <li key={`${href}${label}`}>
//             <UnstyledLink href={href} className='hover:text-gray-600'>
//               {label}
//             </UnstyledLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   </div>
// </header>
