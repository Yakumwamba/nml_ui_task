import React from 'react';

// @ts-ignore
export default function HumburgerMenu({ onClick }) {
  return (
    <svg
      width='74'
      height='36'
      viewBox='0 0 74 36'
      fill='none'
      opacity={0.7}
      className='scale-75 hover:cursor-pointer'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='73.3333' height='6.66667' rx='3.33333' fill='#FF00C7' />
      <rect
        y='14.6667'
        width='73.3333'
        height='6.66667'
        rx='3.33333'
        fill='#FF00C7'
      />
      <rect
        y='29.3333'
        width='73.3333'
        height='6.66667'
        rx='3.33333'
        fill='#FF00C7'
      />
    </svg>
  );
}
