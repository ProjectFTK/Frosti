import { Box, Grid, Image, Text, Title, Divider } from '@mantine/core';

interface BodyProps {
  isStart: boolean;
  imgSrc: string;
  title: string;
  content: JSX.Element;
  color?: string;
  line?: boolean;
}

export default function Body({ isStart, imgSrc, title, content, color = 'black', line = false }: BodyProps) {
  return (
    <>
      <Box py="lg">
        <Title order={2} align={isStart ? 'right' : 'left'} color={color} mb="md">
          {title}
        </Title>
        <Grid gutter="lg" align="center">
          {isStart ? (
            <>
              <Grid.Col span={6}>
                <Image src={imgSrc} alt={title} radius="md" maw='25vw' />
              </Grid.Col>
              <Grid.Col span={6}>
                <Text>{content}</Text>
              </Grid.Col>
            </>
          ) : (
            <>
              <Grid.Col span={6}>
                <Text>{content}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Image src={imgSrc} alt={title} radius="md" maw='25vw'  />
              </Grid.Col>
            </>
          )}
        </Grid>
      </Box>
      {line && <Divider color="gray" />}
    </>
  );
}
