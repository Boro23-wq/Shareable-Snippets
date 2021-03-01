import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Header from '../components/Header';
import React from 'react';
import Snippet from '../components/Snippet';
import useSWR from 'swr';

export default function MySnippets() {
  const { data: snippets, mutate } = useSWR('/api/mySnippets');
  const { user } = useUser();

  return (
    <div>
      <Head>
        <title>My Snippets</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='my-12'>
        <div className='flex justify-center items-center flex-col'>
          <Avatar size='2xl' name='Avatar' src={user?.picture} />
          <p className='text-gray-700 mt-2 font-semibold'>{user?.name}</p>
          <p className='text-gray-600 text-sm'>@{user?.nickname}</p>
        </div>

        <Header title='My Snippets' />

        {snippets ? (
          snippets.length > 0 &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))
        ) : (
          // <p className='text-gray-700'>Loading Snippets...</p>
          <div className='flex justify-center'>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='gray.800'
              size='lg'
            />
          </div>
        )}
        {/* {snippets &&
          snippets.length > 0 &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))} */}
        {!snippets ||
          (snippets.length === 0 && (
            <p className='text-gray-600'>
              There are no snippets yet. Please create a snippet first!
            </p>
          ))}
      </main>
    </div>
  );
}

//TODO: Server props, require authentication
export const getServerSideProps = withPageAuthRequired();
