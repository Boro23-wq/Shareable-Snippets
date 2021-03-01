import Link from 'next/link';

import { useUser } from '@auth0/nextjs-auth0';
import { CreateIcon, LoginIcon } from '../styles/icon';

import { DropdownMenu } from './Dropdown';

export default function Header({ title, subtitle = '' }) {
  const { user, isLoading } = useUser();

  return (
    <header className='my-10'>
      <h1 className='text-gray-800 text-2xl mb-2 sm:text-3xl sm:mb-0 font-bold'>
        {title}
      </h1>

      <p className='text-gray-800 font-md'>
        Hi 👋 <span className='font-semibold underline'>{user?.name}</span>.
        Below you will find the list of snippets associated with this account.
        Please do consider creating a new snippet if you haven't already.
      </p>

      <div className='flex flex-col sm:flex sm:flex-row'>
        {!isLoading && user && (
          <Link href='/new'>
            <a className='border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:mr-2 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out mt-3 block sm:inline-block text-sm text-center sm:text-base'>
              Create a snippet <CreateIcon className='ml-2' />
            </a>
          </Link>
        )}

        {!isLoading && !user && (
          <Link href='/api/auth/login'>
            <a className='border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:mr-2 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out mt-3 block sm:inline-block text-sm text-center sm:text-base'>
              Login to create snippets <LoginIcon className='ml-2' />
            </a>
          </Link>
        )}

        {/* DROPDOWN COMPONENT */}
        <DropdownMenu />
      </div>
    </header>
  );
}
