import { Button, Highlight } from '@components/Button';
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero';
import { HeroImage } from '@components/HeroImage';
import { ChevronIcon } from '@components/icons/chevron';

export const HomepageHero = () => (
  <Hero>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      No spam, no AI, no ghost jobs,
      <br className="hidden md:block" /> connect with intention.
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Welcome to the online career fair, find the
      <br className="hidden md:block" /> the right company or right candidate.
    </HeroSubtitle>
    <Button
      href="/wall"
      intent="primary"
      size="lg"
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
    >
      Join the Wall
      <Highlight>
        <ChevronIcon fill="currentColor" />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);