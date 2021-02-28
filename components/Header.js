import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link';
import { CreateIcon, LoginIcon } from '../styles/icon';

export default function Header({ title, subtitle = '' }) {
  const { user, isLoading } = useUser();

  return (
    <header className='my-10'>
      <h1 className='text-gray-800 text-2xl mb-2 sm:text-3xl sm:mb-0 font-bold'>
        {title}
      </h1>
      <p className='text-gray-800 font-md'>
        <span className='underline font-bold'>Shareable Snippets</span> allow
        developers to{' '}
        <span className='bg-gradient-to-r from-blue-300 to-indigo-500 text-white px-1 sm:px-1 sm:py-1 rounded-sm'>
          share code
        </span>{' '}
        snippets easily. Get instant access to thousands of development snippets
        used daily.
      </p>
      {!isLoading && user && (
        <Link href='/new'>
          <a className='transition duration-500 ease-in-out mt-3 block text-center sm:inline-block border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Create a snippet <CreateIcon className='ml-2' />
          </a>
        </Link>
      )}
      {!isLoading && !user && (
        <Link href='/api/auth/login'>
          <a className='border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out mt-3 block sm:inline-block text-sm text-center sm:text-base'>
            Login to create snippets <LoginIcon className='ml-2' />
          </a>
        </Link>
      )}
    </header>
  );
}
