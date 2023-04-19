import React from 'react';

import CopyIcon from '@/components/icons/CopyIcon';
import ReferalLink from '@/components/icons/ReferalLink';
import Footer from '@/components/layout/Footer';
export default function referal() {
  return (
    <div className='h-screen  bg-[#E3EDEA]'>
      <ReferalLink width={undefined} height={undefined}></ReferalLink>
      <CopyIcon width={undefined} height={undefined}></CopyIcon>
      <p>Referal Program</p>
      <Footer></Footer>
    </div>
  );
}
