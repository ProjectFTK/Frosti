import { Button, Highlight } from '@components/Button';
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero';
import { HeroImage } from '@components/HeroImage';
import { ChevronIcon } from '@components/icons/chevron';

export const HomepageHero = () => (
  <Hero>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Frosti is a better way to 
      <br className="hidden md:block" /> find the right hires
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Make it a relationship-building experience
      <br className="hidden md:block" /> rather than a transactional one.
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