import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <nav>
      <Link href='/'>
        <a className='text-3xl mb-2 block text-center text-red-100 font-black uppercase'>
          Shareable Snippets
        </a>
      </Link>
      <div className='space-x-3 m-x-auto mb-6 flex justify-center'>
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
        {/* {!isLoading && !user && (
          <Link href='/api/auth/login'>
            <a className='text-red-100 font-bold hover:underline'>Login</a>
          </Link>
        )} */}
        {!isLoading && user && (
          <>
            <Link href='/mySnippets'>
              <a className='text-sm text-gray-800 bg-gray-100 font-bold px-2 border-2 rounded-md hover:bg-gray-300 transition duration-500 ease-in-out'>
                My Snippets
              </a>
            </Link>
            <Link href='/api/auth/logout'>
              <a className='text-sm text-gray-800 bg-gray-100 font-bold px-2 border-2 rounded-md hover:bg-gray-300 transition duration-500 ease-in-out'>
                Logout - {user?.name}
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
