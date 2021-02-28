import React from 'react';
import Code from './Code';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { Spinner } from '@chakra-ui/react';

// import { useToast } from '@chakra-ui/react';
// import { mutate } from 'swr';

export default function Snippet({ snippet }) {
  // const toast = useToast();
  const { user } = useUser();

  // const deleteSnippet = async () => {
  //   try {
  //     await fetch('/api/deleteSnippet', {
  //       method: 'DELETE',
  //       body: JSON.stringify({ id: snippet.id }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     mutate('/api/snippets', async (data) => {}, true);
  //     toast({
  //       title: 'Deleted!',
  //       description: "We've deleted your snippet.",
  //       status: 'error',
  //       duration: 2000,
  //       isClosable: true,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return snippet ? (
    <div className='bg-gray-100 p-4 rounded-md my-2 shadow-lg'>
      <div className='flex items-center justify-between mb-2'>
        <h2 className='text-xl text-gray-800 font-bold'>{snippet.data.name}</h2>
        <span className='border-2 bg-gray-300 border-opacity-25 font-semibold text-xs text-gray-800 px-2 py-1 rounded-lg '>
          {snippet.data.language}
        </span>
      </div>
      <p className='text-gray-900 mb-4'>{snippet.data.description}</p>
      <Code code={snippet.data.code} />
      {user && user.sub === snippet.data.userId && (
        <>
          <Link href={`/edit/${snippet.id}`}>
            <a className='text-xs mr-2 mt-2 px-2 py-1 border-2 border-gray-500 text-gray-800 rounded-md hover:border-gray-700 transition duration-200 ease-in-out'>
              Edit Snippet
            </a>
          </Link>
          {/* {snippet && (
            <button
              className='text-xs mr-2 mt-2 px-2 py-1 border-2 border-red-500 text-gray-800 rounded-md hover:border-red-800 transition duration-200 ease-in-out'
              type='button'
              onClick={deleteSnippet}
            >
              Delete Snippet
            </button>
          )} */}
        </>
      )}
    </div>
  ) : (
    // <p className='text-red-800'>Loading Snippets...</p>
    <div className='flex justify-center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='gray.800'
        size='lg'
      />
    </div>
  );
}
