import Head from 'next/head';
import Snippet from '../components/Snippet';
import useSWR from 'swr';
import Header from '../components/Header';

import { getSnippets } from '../utils/Fauna';

export async function getStaticProps() {
  const snippets = await getSnippets();

  return {
    props: {
      allSnippets: snippets,
    },
    revalidate: 1,
  };
}

export default function Home({ allSnippets }) {
  return (
    <div>
      <Head>
        <title>Shareable Snippets</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Header
          title='Code Snippets'
          subtitle='Shareable Snippets allow developers to share code snippets easily. Get instant access to thousands of development snippets used daily.'
        />
        {allSnippets ? (
          allSnippets.length > 0 &&
          allSnippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))
        ) : (
          <div>Loading Snippets...</div>
        )}
      </main>
    </div>
  );
}
