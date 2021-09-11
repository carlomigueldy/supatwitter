import { ChakraProvider, Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>SupaTwitter</title>
      </Head>
      <Box p={10}>
        <header>
          <h1>SupaTwitter</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </Box>
    </ChakraProvider>
  );
}

export default CustomApp;
