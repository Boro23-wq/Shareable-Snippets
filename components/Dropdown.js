import { useState, useRef } from 'react';
import Link from 'next/link';

export const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [language, setLanguage] = useState('');
  const onClick = () => setIsActive(!isActive);

  return (
    <div className='mt-3 flex flex-col relative sm:flex sm:relative sm:justify-center sm:items-center'>
      <button
        onClick={onClick}
        className='hover:bg-gray-300 transition duration-500 ease-in-out block border-2 border-gray-400 bg-gray-200 rounded-md cursor-pointer justify-between items-center py-2 px-4 shadow-sm align-middle sm:ml-auto'
      >
        <span className='text-gray-700 text-sm text-center'>
          Filter Snippets{' '}
          <span className='text-gray-600 font-extralight'>(By Language)</span>
        </span>
      </button>

      <nav
        ref={dropdownRef}
        className={`menu bg-white rounded-md absolute right-0 w-56 shadow-sm opacity-0 invisible -translate-y-5 ${
          isActive ? 'active opacity-100 visible' : 'inactive'
        }`}
      >
        <ul className='list-none p-0 m-0'>
          <li className='border-b-2 border-gray-200'>
            <Link href='/snippets/javascript'>
              <a
                onClick={onClick}
                className='no-underline text-gray-700 py-3 px-5 block hover:bg-gray-100 transition duration-200 ease-in-out'
              >
                Javascript
              </a>
            </Link>
          </li>
          <li className='border-b-2 border-gray-200'>
            <Link href='/snippets/react'>
              <a
                onClick={onClick}
                className='no-underline text-gray-700 py-3 px-5 block hover:bg-gray-100 transition duration-200 ease-in-out'
              >
                React
              </a>
            </Link>
          </li>
          <li className='border-b-2 border-gray-200'>
            <Link href='/snippets/html'>
              <a
                onClick={onClick}
                className='no-underline text-gray-700 py-3 px-5 block hover:bg-gray-100 transition duration-200 ease-in-out'
              >
                HTML
              </a>
            </Link>
          </li>
          <li className='border-b-2 border-gray-200'>
            <Link href='/snippets/css'>
              <a
                onClick={onClick}
                className='no-underline text-gray-700 py-3 px-5 block hover:bg-gray-100 transition duration-200 ease-in-out'
              >
                CSS
              </a>
            </Link>
          </li>
          <li>
            <Link href='/snippets/bash'>
              <a
                onClick={onClick}
                className='no-underline text-gray-700 py-3 px-5 block hover:bg-gray-100 transition duration-200 ease-in-out'
              >
                Bash
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
