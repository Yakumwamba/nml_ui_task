import React from 'react';

import Calender from '@/components/icons/calendar';
export default function TimePill({ time, active, other }) {
  return (
    <div
      className={
        (active ? ' border-[#BAD7CF] ' : 'border-[#E3EDEA] ') +
        'border-1 mx-2 flex  border-spacing-0 items-center justify-center rounded-full border-2 px-2 py-2 hover:cursor-pointer'
      }
    >
      {other ? <Calender width={50} height={50}></Calender> : ''}
      <p
        className={
          active
            ? 'text-green-600'
            : ' font-light text-gray-600' +
              ' mx-2 w-auto self-auto font-semibold '
        }
      >
        {time}
      </p>
    </div>
  );
}
