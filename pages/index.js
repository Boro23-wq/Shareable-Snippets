import Head from 'next/head';
import Snippet from '../components/Snippet';
import useSWR from 'swr';
import Header from '../components/Header';
import { Spinner } from '@chakra-ui/react';

export default function Home() {
  const { data: snippets, mutate } = useSWR('/api/snippets');
  return (
    <div>
      <Head>
        <title>Shareable Snippets</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Header
          title='Shareable Snippets'
          subtitle='Shareable Snippets allow developers to share code snippets easily. Get instant access to thousands of development snippets used daily.'
        />
        {snippets ? (
          snippets.length > 0 &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))
        ) : (
          // <p className='text-gray-600'>Loading Snippets...</p>
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
        {snippets && snippets.length === 0 && (
          <p className='text-gray-600'>
            No snippets available. Please register the very first snippet!
          </p>
        )}
      </main>
    </div>
  );
}
