import Head from 'next/head';
import SnippetForm from '../components/SnippetForm';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function New() {
  return (
    <div>
      <Head>
        <title>Create New Snippet</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='max-w-lg mx-auto'>
        <h1 className='text-gray-800 text-2xl mb-4 font-semibold'>
          Create New Snippet
        </h1>
        <SnippetForm />
      </main>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired();
