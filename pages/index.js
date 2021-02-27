import Head from 'next/head';
import Snippet from '../components/Snippet';
import useSWR from 'swr';
import Header from '../components/Header';
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
          title='Code Snippets'
          subtitle='Shareable Snippets allows developers to share code snippets easily. Get instant access to thousands of development snippets used daily.'
        />
        {snippets ? (
          snippets.length > 0 &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))
        ) : (
          <div>Loading Snippets...</div>
        )}
      </main>
    </div>
  );
}
