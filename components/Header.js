import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link';

export default function Header({ title, subtitle = '' }) {
  const { user, isLoading } = useUser();

  return (
    <header className='my-10'>
      <h1 className='text-gray-800 text-3xl font-bold'>{title}</h1>
      <p className='text-gray-800 font-md'>
        <span className='underline font-bold'>Shareable Snippets</span> allow
        developers to{' '}
        <span className='bg-gradient-to-r from-blue-300 to-indigo-500 text-white px-1 py-1 rounded-sm'>
          share code
        </span>{' '}
        snippets easily. Get instant access to thousands of development snippets
        used daily.
      </p>
      {!isLoading && user && (
        <Link href='/new'>
          <a className='transition duration-500 ease-in-out mt-3 inline-block border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Create a snippet
          </a>
        </Link>
      )}
      {!isLoading && !user && (
        <Link href='/api/auth/login'>
          <a className='transition duration-500 ease-in-out mt-3 inline-block border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Login to create snippets
          </a>
        </Link>
      )}
    </header>
  );
}
