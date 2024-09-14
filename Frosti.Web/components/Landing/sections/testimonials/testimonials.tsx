import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Title, Button, Stack, rem, Center, Box, Group } from '@mantine/core';

interface CardProps {
  name: string;
  position: string;
  testimonial: string;
}

function Card({ name, position, testimonial }: CardProps) {
  const component = 'shift-testimonial';

  return (
    <Center
      p="xl"
      bg='radial-gradient(circle, rgba(6,161,133,1) 9%, rgba(0,0,0,1) 80%)'
      h={rem(300)}
      className={component}
    >
      <Stack w='60%' spacing='none'>
        <p className={`${component}__content`}>
          "{testimonial}"
        </p>
        <Text mt={rem(25)} align='center'>
          {name}
        </Text>
        <Text size="xs" inline align='center'>
          {position}
        </Text>
      </Stack>
    </Center>
  );
}

const testimonials = [
  {
    name: 'Drew Goodin',
    position: 'Lead Teacher at Purdue Polytechnic',
    testimonial: 'WHOA!  Jaw dropped when I saw the feature to load the .zip.  Incredible UI & love that clicking the links pulls up the sources right there.',
  },
  {
    name: 'Pamela Garza',
    position: 'Community Manager at Product Hunt (former chemistry teacher)',
    testimonial: 'I can find so many applications for this! I cannot count the times that I would set up a lesson and my students would have a hard time matching examples or finding the answers even though the answers were in the study guide. This is so needed!',
  },
  {
    name: 'Lilia Urmazova',
    position: 'Chief Mentor at Mentorpiece',
    testimonial: 'Your product is really interesting',
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const slides = testimonials.map((item) => (
    <Carousel.Slide key={item.name}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      slideGap="xl"
      align="start"
      loop
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}
export default Testimonials;