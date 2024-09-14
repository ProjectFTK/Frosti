import { Box } from '@mantine/core';
import Intro from '../components/Landing/sections/intro/intro';
import Panels from '../components/Landing/sections/panels/panels';
import Content from '../components/Landing/sections/content/content';
import Head from 'next/head';

export default function Landing() {
  return (
    <>
      <Head>
        <title> Home | Frosti</title>
      </Head>
      <Box mt={-20}>
        <Intro />
        <Content />
        <Panels />
      </Box>
    </>
  );
}
