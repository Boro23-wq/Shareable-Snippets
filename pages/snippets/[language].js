import Head from 'next/head';
import { getSnippetsByLanguage } from '../../utils/Fauna';
import Snippet from '../../components/Snippet';
import Header from '../../components/Header';
import { Spinner } from '@chakra-ui/react';

export default function SnippetsByLanguage({ language, snippets }) {
  const mainLanguage =
    language === 'html' || language === 'css'
      ? language.toUpperCase()
      : language[0].toUpperCase() + language.substring(1);

  return (
    <>
      <Head>
        <title>Code Snippets for "{mainLanguage}" </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='my-12'>
        <Header title={`${mainLanguage} Snippets`} />

        {snippets ? (
          snippets.length > 0 &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))
        ) : (
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
        {!snippets ||
          (snippets.length === 0 && (
            <p className='text-gray-600'>
              We do not have any {mainLanguage} snippets. Please contribute to
              the first one!
            </p>
          ))}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { language } = context.params;
  const snippets = await getSnippetsByLanguage(language.toLowerCase());
  return {
    props: { language, snippets },
  };
}
