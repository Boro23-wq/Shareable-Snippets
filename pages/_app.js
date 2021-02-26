import Navbar from '../components/Navbar';
import '../styles/global.css';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <div className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 w-full p-10 min-h-screen'>
        <Navbar />
        <div className='max-w-2xl mx-auto'>
          <Component {...pageProps} />
        </div>
      </div>
    </UserProvider>
  );
}

export default MyApp;
