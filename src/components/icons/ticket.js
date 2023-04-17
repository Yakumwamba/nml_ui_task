import React from 'react';

export default function Ticket({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      s
    >
      <g opacity='0.3'>
        <path
          d='M6.23233 14.3536L6.23235 14.3536L18.3031 2.28284C18.5374 2.04853 18.9173 2.04853 19.1516 2.28284L20.7678 3.899C20.9742 4.10538 20.9742 4.43999 20.7678 4.64637C20.0501 5.36407 20.0501 6.5146 20.7678 7.23229C21.4855 7.94999 22.636 7.94999 23.3537 7.23229C23.5601 7.02591 23.8947 7.02591 24.1011 7.23229L25.7173 8.84845C25.9516 9.08277 25.9516 9.46267 25.7173 9.69698L13.6465 21.7677L13.6465 21.7678C13.44 21.9741 13.1053 21.9741 12.8989 21.7677L11.2323 20.101C11.2322 20.101 11.2322 20.101 11.2322 20.101C11.0258 19.8946 11.0258 19.56 11.2322 19.3536L6.23233 14.3536ZM6.23233 14.3536L5.92951 14.6566C5.96848 14.6176 6.03168 14.6176 6.07065 14.6566L6.00009 14.7271M6.23233 14.3536L6.00009 14.7271M6.00009 14.7271L5.99994 14.7273L5.99969 14.7275L5.92916 14.7979C5.92925 14.798 5.92933 14.7981 5.92942 14.7982L7.89893 16.7677C7.89893 16.7677 7.89894 16.7677 7.89894 16.7677C8.1053 16.9741 8.43996 16.9741 8.64631 16.7677C9.364 16.05 10.5145 16.0502 11.2322 16.7677C11.9499 17.4854 11.9499 18.6359 11.2323 19.3536L6.00009 14.7271ZM7.28286 14.7981L7.28278 14.7981C7.28281 14.798 7.28284 14.798 7.28287 14.798L7.28554 14.7953C7.28467 14.7963 7.28377 14.7972 7.28286 14.7981ZM8.13794 15.5118L7.35349 14.7274L14.6567 7.42414C14.8129 7.26793 15.0662 7.26793 15.2224 7.42414L20.5759 12.7777C20.7321 12.9339 20.7321 13.1871 20.5759 13.3433L13.5556 20.3637C13.3994 20.5199 13.1461 20.5199 12.9899 20.3636L12.5523 19.926C12.415 19.7887 12.3954 19.5647 12.4928 19.3763C13.053 18.2927 12.8879 16.9282 11.9797 16.0201C11.0469 15.0873 9.62808 14.9342 8.53012 15.5504C8.39694 15.6252 8.23598 15.6098 8.13794 15.5118ZM15.9699 6.11094L18.4447 3.63616C18.6009 3.47995 18.8542 3.47995 19.0104 3.63616L19.4432 4.06902C19.5806 4.20634 19.6002 4.43036 19.5029 4.6189C18.9434 5.70354 19.1125 7.07177 20.0204 7.97966C20.9284 8.88768 22.293 9.05276 23.3766 8.49264C23.565 8.39526 23.789 8.41489 23.9263 8.55221L24.3639 8.98986C24.5201 9.14607 24.5201 9.39934 24.3639 9.55555L21.8892 12.0303C21.733 12.1865 21.4797 12.1865 21.3235 12.0303L15.9699 6.67662C15.8137 6.52041 15.8137 6.26714 15.9699 6.11094Z'
          fill='black'
          stroke='black'
          stroke-width='0.2'
        />
        <path
          d='M0.544297 28.67H2.7243V35H3.7043V28.67H5.8743V27.77H0.544297V28.67ZM7.15953 28.95C7.49953 28.95 7.77953 28.67 7.77953 28.33C7.77953 27.98 7.49953 27.71 7.15953 27.71C6.81953 27.71 6.53953 27.98 6.53953 28.33C6.53953 28.67 6.81953 28.95 7.15953 28.95ZM6.69953 35H7.63953V30.11H6.69953V35ZM8.68422 32.56C8.68422 34.1 9.63422 35.12 11.0742 35.12C12.2542 35.12 13.1642 34.41 13.3542 33.35H12.4142C12.2442 33.93 11.7442 34.28 11.0742 34.28C10.1842 34.28 9.61422 33.6 9.61422 32.55C9.61422 31.49 10.2242 30.81 11.1142 30.81C11.7442 30.81 12.2442 31.14 12.4042 31.76H13.3442C13.1742 30.67 12.3142 29.97 11.0842 29.97C9.65422 29.97 8.68422 31.03 8.68422 32.56ZM15.306 35V33.61L16.136 32.74L17.566 35H18.646L16.786 32.06L18.656 30.11H17.476L15.306 32.41V27.64H14.366V35H15.306ZM21.3486 35.12C22.5586 35.12 23.3786 34.53 23.6186 33.48H22.7386C22.5786 34.04 22.0986 34.34 21.3686 34.34C20.4386 34.34 19.8986 33.77 19.8286 32.74L23.6086 32.73V32.38C23.6086 30.93 22.6986 29.97 21.3086 29.97C19.8886 29.97 18.9186 31.03 18.9186 32.56C18.9186 34.08 19.9086 35.12 21.3486 35.12ZM21.3086 30.76C22.1386 30.76 22.6686 31.3 22.6686 32.11H19.8486C19.9686 31.25 20.4886 30.76 21.3086 30.76ZM25.9897 35V30.9H26.9497V30.11H25.9897V28.58H25.0497V30.11H24.0897V30.9H25.0497V35H25.9897ZM27.3933 33.58C27.3933 34.51 28.1233 35.12 29.2733 35.12C30.4333 35.12 31.2333 34.53 31.2333 33.6C31.2333 32.87 30.8233 32.49 29.9933 32.29L29.1333 32.08C28.6533 31.96 28.4133 31.74 28.4133 31.41C28.4133 30.96 28.7433 30.7 29.3333 30.7C29.9033 30.7 30.2333 31.01 30.2533 31.5H31.1533C31.1333 30.57 30.4333 29.97 29.3633 29.97C28.2833 29.97 27.5233 30.54 27.5233 31.44C27.5233 32.16 27.9333 32.59 28.8033 32.8L29.6633 33C30.1733 33.13 30.3333 33.33 30.3333 33.66C30.3333 34.11 29.9533 34.38 29.2933 34.38C28.6733 34.38 28.2933 34.08 28.2933 33.58H27.3933Z'
          fill='black'
        />
      </g>
    </svg>
  );
}
