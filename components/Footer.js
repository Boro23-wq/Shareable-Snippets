import React from 'react';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='mt-8'>
      <p className='text-gray-600 text-center text-sm sm:text-xs font-semibold'>
        Developed by @<span className='underline'>Boro</span>. Report an issue
        or a bug @
        <span className='underline text-gray-700'>
          <Link href='https://github.com/Boro23-wq/Shareable-Snippets/issues'>
            <a>issues</a>
          </Link>
        </span>
        .
      </p>
      <div className='mt-2 flex justify-center cursor-pointer'>
        <Link href='https://github.com/Boro23-wq'>
          <a>
            <FaGithub className='transition duration-500 ease-in-out text-gray-600 hover:text-gray-800' />
          </a>
        </Link>
      </div>
    </footer>
  );
}
