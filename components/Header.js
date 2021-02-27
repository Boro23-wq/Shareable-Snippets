import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useToast } from '@chakra-ui/react';

import Link from 'next/link';

export default function Header({ title, subtitle = '' }) {
  const { user, isLoading } = useUser();

  return (
    <header className='my-12'>
      <h1 className='text-red-100 text-2xl font-black'>👨‍💻 {title}</h1>
      <p className='text-red-200 font-bold'>{subtitle}</p>
      {!isLoading && user && (
          <Link href='/new'>
            <a className='transition duration-500 ease-in-out mt-3 inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Create a snippet
            </a>
          </Link>
      )}
      {!isLoading && !user && (
        <Link href='/api/auth/login'>
          <a className='transition duration-500 ease-in-out mt-3 inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Login to create snippets
          </a>
        </Link>
      )}
    </header>
  );
}
