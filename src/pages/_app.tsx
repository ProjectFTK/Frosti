import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import '@styles/globals.css';
import '@styles/Chat.css';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { UserProvider } from '../providers/UserContext';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Frosti</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <UserProvider>
        <Header />
        <main className="bg-page-gradient pt-nav-height">
          {isClient && <Component {...pageProps} />}
        </main>
        <Footer />
      </UserProvider>
    </>
  );
}