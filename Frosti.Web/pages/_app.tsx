import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, MantineThemeOverride, Box } from '@mantine/core';
import { getCookie, setCookie } from 'cookies-next';
import { NavBar } from '../components/Navbar/NavBar';
import './../components/Landing/components/scss/application.scss';
import Foot from '../components/Landing/sections/foot/foot';
import Loading from '../components/Loading/LoadingTop';
import { useState, useEffect } from 'react';
import { UserProvider } from '../providers/UserContext';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',
  defaultRadius: 'md',

  colors: {
    'dark': ['#ffffff', '#C1C2C5', '#A6A7AB', '#909296', '#5C5F66', '#373A40', '#25262B', '#161618', '#101113']
  },

  shadows: {
    sm: '1px 1px 3px rgba(255, 255, 255, .25)'
  },

  defaultGradient: {
    from: 'cyan',
    to: '#3dc9b0',
    deg: 45,
  },
};

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(getCookie('mantine-color-scheme') as ColorScheme ?? 'dark');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

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
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            ...theme,
            ['colorScheme']: colorScheme,
          }}>
            {isClient && <Loading />}
            {isClient && <Component {...pageProps} />}
            {
              isClient &&
              <Box mt='2rem'>
                <Foot />
              </Box>
            }

          </MantineProvider>
        </ColorSchemeProvider>
      </UserProvider>
    </>
  );
}