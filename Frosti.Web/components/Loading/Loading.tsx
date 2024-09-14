import { Box, Center, Text } from '@mantine/core';
import ReactLoading from 'react-loading';

interface LoadProps {
  loadMessage: string;
}

export function Loading({ loadMessage }: LoadProps) {
  const getRgb = () => Math.floor(Math.random() * 127) + 128;
  const rgbtoHex = (r: number, g: number, b: number) =>
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    return rgbtoHex(color.r, color.g, color.b);
  };

  return (
    <Box h='75vh'>
      <Center pt='25vh'>
        <ReactLoading type={'bars'} color={'#' + handleGenerate()} height={100} width={100} />
      </Center>

      <Center pt="1.5rem">
        <Text color="#e3e0e0">
          {loadMessage}
        </Text>
      </Center>
    </Box>
  );
}
export default Loading;
