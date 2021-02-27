import React from 'react';
import Code from './code';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { useToast } from '@chakra-ui/react';
import { mutate } from 'swr';

export default function Snippet({ snippet }) {
  const toast = useToast();
  const { user } = useUser();

  const deleteSnippet = async () => {
    try {
      await fetch('/api/deleteSnippet', {
        method: 'DELETE',
        body: JSON.stringify({ id: snippet.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      mutate('/api/deleteSnippet');
      toast({
        title: 'Success!',
        description: "We've deleted your snippet.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='bg-gray-100 p-4 rounded-md my-2 shadow-lg'>
      <div className='flex items-center justify-between mb-2'>
        <h2 className='text-xl text-gray-800 font-bold'>{snippet.data.name}</h2>
        <span className='border-4 border-gray-500 border-opacity-25 font-bold text-xs text-gray-600 px-2 py-1 rounded-lg '>
          {snippet.data.language}
        </span>
      </div>
      <p className='text-gray-900 mb-4'>{snippet.data.description}</p>
      <Code code={snippet.data.code} />
      {user && user.sub === snippet.data.userId && (
        <>
          <Link href={`/edit/${snippet.id}`}>
            <a className='text-xs mr-2 mt-2 px-2 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 ease-in-out'>
              Edit Snippet
            </a>
          </Link>
          {snippet && (
            <button
              className='transition duration-500 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
              type='button'
              onClick={deleteSnippet}
            >
              Delete
            </button>
          )}
        </>
      )}
    </div>
  );
}
