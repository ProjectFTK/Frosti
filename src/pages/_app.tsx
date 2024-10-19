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
        <title>Frosti | A job so good, you won’t use us twice.</title>
        <meta name="description" content="Frosti is the job search platform that connects you with roles tailored to your skills, values, and culture fit. Find your perfect job today, effortlessly." />
        <meta name="keywords" content="post a job, for free, job matching, startups, SMB, recruitment, hiring, personalized matches, culture fit" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Frosti - A job so good, you won’t use us twice" />
        <meta property="og:description" content="Frosti is the job search platform that connects you with roles tailored to your skills, values, and culture fit. Find your perfect job today, effortlessly." />
        <meta property="og:url" content="https://www.frosti.com" />
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