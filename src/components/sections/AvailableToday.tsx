import AppImg from '@assets/images/logoFace.png';
import { Button, Highlight } from '@components/Button';
import { Container } from '@components/Container';
import { ChevronIcon } from '@components/icons/chevron';
import Image from 'next/image';

export const AvailableToday = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-10 pb-16 text-center">
        <Image
          src={AppImg}
          alt="Frosti app icon"
          className="h-[12.8rem] w-[12.8rem]"
        />
        <h1 className="text-gradient text-5xl md:text-8xl">
          Built for the future.
          <br />
          Available 11/01.
        </h1>
        <div className="flex gap-[1.6rem]">
          <Button
            href="/beta"
            intent="primary"
            size="lg"
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          >
            Join the Wall
            <Highlight>
              <ChevronIcon fill="currentColor" />
            </Highlight>
          </Button>
        </div>
      </div>
    </Container>
  );
};
