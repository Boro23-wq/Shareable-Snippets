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
        <Link href='/snippets/html'>
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
        </Link>
        {/* {!isLoading && !user && (
          <Link href='/api/auth/login'>
            <a className='text-red-100 font-bold hover:underline'>Login</a>
          </Link>
        )} */}
        {!isLoading && user && (
          <>
            <Link href='/mySnippets'>
              <a className='text-red-100 hover:underline'>My Snippets</a>
            </Link>
            <Link href='/api/auth/logout'>
              <a className='text-red-100 hover:underline'>Logout</a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
