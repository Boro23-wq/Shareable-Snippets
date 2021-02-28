import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import Link from 'next/link';

import { FastFeedbackIcon, ShareableSnippetsIcon } from '../styles/icon';

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <nav className='flex flex-col items-center justify-center'>
      {/* <Link href='/' passHref> */}
      {/* <a className='text-3xl mb-2 block text-center text-gray-800 font-black uppercase'>
          Shareable Snippets
        </a> */}
      <div className='m-l-20 mb-2 flex justify-center cursor-pointer'>
        <Link href='/'>
          {/* <FastFeedbackIcon color='black' boxSize='62px' mb={2} /> */}
          <ShareableSnippetsIcon color='black' boxSize='62px' mb={4} />
        </Link>
      </div>
      {/* </Link> */}
      <div className='space-x-3 m-x-auto mb-6 justify-center'>
        {/* <Link href='/snippets/html'>
          <a className='text-red-100 font-bold px-2 border-2 border-red-400 rounded-md hover:border-red-200 transition duration-500 ease-in-out'>
            HTML
          </a>
        </Link>
        <Link href='/snippets/css'>
          <a className='text-red-100 font-bold px-2 border-2 border-red-400 rounded-md hover:border-red-200 transition duration-500 ease-in-out'>
            CSS
          </a>
        </Link>
        <Link href='/snippets/javascript'>
          <a className='text-red-100 font-bold px-2 border-2 border-red-400 rounded-md hover:border-red-200 transition duration-500 ease-in-out'>
            JavaScript
          </a>
        </Link> */}
        {!isLoading && !user && (
          <Link href='/api/auth/login'>
            <a className='text-md text-gray-100 border-2 border-gray-700 bg-gray-900 font-bold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-500 ease-in-out'>
              Login
            </a>
          </Link>
        )}
        {!isLoading && user && (
          <>
            <Link href='/mySnippets'>
              <a className='text-md text-gray-100 border-2 border-gray-700 bg-gray-900 font-bold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-500 ease-in-out'>
                My Snippets
              </a>
            </Link>
            <Link href='/api/auth/logout'>
              <a className='text-md text-gray-100 border-2 border-gray-700 bg-gray-900 font-bold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-500 ease-in-out'>
                Logout -{' '}
                <span className='text-gray-200 underline'>{user?.name}</span>
              </a>
            </Link>
            {/* <div>
              <img
                className='inline-block h-6 w-6 rounded-full ring-2 ring-white'
                src={user.picture}
                alt='profile picture'
              />
            </div> */}
          </>
        )}
      </div>
    </nav>
  );
}
