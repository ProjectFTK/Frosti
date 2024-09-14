import { useState } from 'react';
import { Box, Button, Center, Grid, Text, TextInput, Image } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleJoinWaitlist = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setIsClicked(true);
    alert('Need to do');
    setIsClicked(false);
  };

  return (
    <Box py={40} px="md" sx={{ backgroundColor: '#1A1B1E', color: 'white', textAlign: 'center' }}>
      <Center>
        <Image src="/imgs/Logo_Long_Green.png" alt="Logo" width={160} mb={20} />
      </Center>
      <Center>
        <Text size="xl" weight={700} mb="lg">
          Make Scrolling Productive
        </Text>
      </Center>
      <Text size="lg" mb="md">
        Discover, interact, and shape the future of startups.
      </Text>
      <Text weight={500} mb={30}>
        Are you an early adopter who thrives on innovation? Join our community and be at the forefront of change.
      </Text>

      <Grid justify="center" align="center" gutter="lg" mx="auto" sx={{ maxWidth: 600 }}>
        <Grid.Col span={8}>
          <TextInput
            radius="sm"
            size="lg"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            sx={{ backgroundColor: 'white', color: 'black' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <Button
            size="lg"
            radius="sm"
            loading={isClicked}
            rightIcon={<IconChevronRight />}
            onClick={handleJoinWaitlist}
            variant="gradient"
            gradient={{ from: 'red', to: 'yellow' }}
          >
            Join the Waitlist
          </Button>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
