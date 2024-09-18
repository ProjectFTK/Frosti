import Container from './../../components/container/container';
import { IconChevronRight, IconArrowRight } from '@tabler/icons-react';
import { BackgroundImage } from '@mantine/core';
import UserApi from '../../../../apis/user'
import { useState } from 'react';
import {
  Box,
  Image,
  Stack,
} from '@mantine/core';
import { Text, Grid, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import {
  Button,
  TextInput,
} from '@mantine/core';
export default function Intro() {
  const component = 'shift-intro';
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const [email, setEmail] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      handleJoinWaitlist();
    }
  };

  const handleJoinWaitlist = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsClicked(true)
    UserApi.createBetaRequest(email)
      .then((response) => {
        alert('You\'re added!');
        setIsClicked(false)
        setEmail('')
      })
      .catch(() => {
        setIsClicked(false)
        alert('There was a problem with your request.');
      });
  };

  return (
    <div className={component}>
      <BackgroundImage
        src={`/imgs/identity.jpg`}
        radius="xs"
      >
        <div className='shift-black'>
          <Image left={20} top={10} pos={'absolute'} style={{ margin: '0 auto' }} width={160} src={`/imgs/Logo_Long_Green.png`} alt="Logo" />

          <Container componentClass={component} size={'hero'}>
            <div
              className={`${component}__title`} style={{ textAlign: 'center' }}>
              The AI Transforming Project Management
            </div>
            <Text fw={800} align='center' mb='2rem'>
              Let Frosti automate your task management, and keep you organized— so you can focus on getting things done.
            </Text>
            <p style={{ textAlign: 'center', fontWeight: '500' }}>Sign up to try the beta. <p style={{ color: '#90ee90', display: 'inline' }}>5</p> /10 spots.</p>
            <Grid columns={isMobile ? 2 : 20}>
              <Grid.Col span={isMobile ? 2 : 4}></Grid.Col>
              <Grid.Col span={isMobile ? 2 : 10}>
                <TextInput
                  radius='sm'
                  placeholder="Your email"
                  size='lg'
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  onKeyDown={handleKeyDown}
                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 2 : 2}>
                <Button
                  onClick={handleJoinWaitlist}
                  loading={isClicked}
                  variant="gradient"
                  gradient={{ from: 'teal', to: 'teal', deg: 90 }}
                  radius='sm'
                  size='lg' >
                  <p>Try it out</p> <IconChevronRight />
                </Button>

              </Grid.Col>
              <Grid.Col span={isMobile ? 2 : 4}></Grid.Col>
            </Grid>
          </Container>
          <hr color='gray' />
        </div>
      </BackgroundImage>
    </div >
  );
}
