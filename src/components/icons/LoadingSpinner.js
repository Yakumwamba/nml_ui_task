import React from 'react';

export default function LoadingSpinner({ width, height }) {
  return (
    <div className='  animate-spin'>
      <svg
        width='58'
        height='58'
        viewBox='0 0 58 58'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='29' cy='29' r='29' fill='#D9D9D9' />
        <circle cx='29' cy='29' r='29' fill='white' />
        <path
          d='M58 29C58 22.2907 55.6736 15.789 51.4173 10.6026C47.161 5.41623 41.238 1.86615 34.6576 0.557227C28.0772 -0.751693 21.2466 0.261539 15.3295 3.42428C9.41242 6.58703 4.77503 11.7036 2.20749 17.9022C-0.360045 24.1008 -0.698878 30.9979 1.24873 37.4183C3.19634 43.8387 7.30988 49.3851 12.8885 53.1126C18.467 56.8401 25.1655 58.518 31.8425 57.8604C38.5195 57.2027 44.7619 54.2503 49.5061 49.5061L29 29L58 29Z'
          fill='#199675'
          fill-opacity='0.56'
        />
        <circle cx='29' cy='29' r='19' fill='#199675' />
      </svg>
    </div>
  );
}
