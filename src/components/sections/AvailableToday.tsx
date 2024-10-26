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
          alt="Ladderal app icon"
          className="h-[12.8rem] w-[12.8rem]"
        />
        <h1 className="text-gradient text-5xl md:text-8xl">
          Made for fulfillment.
          <br />
          Coming soon.
        </h1>
        <div className="flex gap-[1.6rem]">
          <Button
            href="/wall"
            intent="primary"
            size="lg"
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          >
            Join the Beta
            <Highlight>
              <ChevronIcon fill="currentColor" />
            </Highlight>
          </Button>
        </div>
      </div>
    </Container>
  );
};
