import '../styles/global.css';
import 'nprogress/nprogress.css';

import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import NProgress from 'nprogress';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start);
    Router.events.on('routeChangeComplete', NProgress.done);
    Router.events.on('routeChangeError', NProgress.done);
    return () => {
      Router.events.off('routeChangeStart', NProgress.start);
      Router.events.off('routeChangeComplete', NProgress.done);
      Router.events.off('routeChangeError', NProgress.done);
    };
  }, []);

  return (
    <ChakraProvider>
      <UserProvider>
        <div className='w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-700' />
        <div className='bg-blue-100 w-full p-10 min-h-screen'>
          <Navbar />
          <div className='max-w-2xl mx-auto'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
