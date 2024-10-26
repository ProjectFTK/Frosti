import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import '@styles/globals.css';
import '@styles/Chat.css';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Ladderal | Network internally, and make moves.</title>
        <meta name="description" content="Ladderal is the innovative platform that empowers you to connect with internal roles tailored to your skills, values, and culture fit. Explore new opportunities and advance your career today." />
        <meta name="keywords" content="post a job, for free, job matching, startups, SMB, recruitment, hiring, personalized matches, culture fit" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Ladderal - Network internally, and make moves" />
        <meta property="og:description" content="Ladderal is the innovative platform that empowers you to connect with internal roles tailored to your skills, values, and culture fit. Explore new opportunities and advance your career today." />
        <meta property="og:url" content="https://www.ladderal.com" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <main className="bg-page-gradient pt-nav-height">
        {isClient && <Component {...pageProps} />}
      </main>
      <Footer />
    </>
  );
}