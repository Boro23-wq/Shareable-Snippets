import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import Link from 'next/link';

import {
  LoginIcon,
  LogoutIcon,
  ShareableSnippetsIcon,
  SnippetsIcon,
} from '../styles/icon';

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className='flex flex-col items-center justify-center'>
      <div className='m-l-20 mb-2 flex justify-center cursor-pointer'>
        <Link href='/'>
          <ShareableSnippetsIcon color='black' boxSize='62px' mb={4} />
        </Link>
      </div>
      <div className='space-x-3 m-x-auto mb-6 justify-center'>
        {user ? (
          <div className='sm:flex'>
            <div className='sm:flex-row '>
              <Link href='/mySnippets'>
                <a className='block text-center text-md text-gray-100 border-2 border-gray-700 bg-gray-900 font-bold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-500 ease-in-out'>
                  My Snippets <SnippetsIcon className='ml-2 mb-1' />
                </a>
              </Link>
            </div>
            <div className='mt-2 sm:flex-row sm:ml-2 sm:mt-0'>
              <Link href='/api/auth/logout'>
                <a className='block text-center text-md text-gray-100 border-2 border-gray-700 bg-gray-900 font-bold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-500 ease-in-out'>
                  Logout -{' '}
                  <span className='text-gray-200 underline'>{user?.name}</span>
                  <LogoutIcon className='ml-2 mb-1' />
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <Link href='/api/auth/login'>
            <a className='text-md text-gray-100 border-2 border-gray-700 bg-gray-900 font-bold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-500 ease-in-out'>
              Login <LoginIcon className='ml-2' />
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}
