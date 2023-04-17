import React from 'react';

import TimePill from '@/components/TimePill';

export default function AvailableDates() {
  return (
    <div className='flex flex-col justify-around gap-2 border-b-2 border-gray-400 border-opacity-25 py-5'>
      <p className='text-md text-lg font-medium'>Available Dates</p>
      <div className='flex flex-row justify-between'>
        <TimePill time='Today' active={true}></TimePill>
        <TimePill time='Tommorow' active={false}></TimePill>
        <TimePill time='10th' active={false}></TimePill>
        <TimePill time='Other' active={false} other={true}></TimePill>
      </div>
    </div>
  );
}
