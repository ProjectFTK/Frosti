import { Button, Highlight } from '@components/Button';
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero';
import { HeroImage } from '@components/HeroImage';
import { ChevronIcon } from '@components/icons/chevron';

export const HomepageHero = () => (
  <Hero>
    <Button
      href="/"
      intent="secondary"
      size="sm"
      className="translate-y-[-1rem] animate-fade-in opacity-0"
    >
      <span>Last Year You Said Next year</span>
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      The right way to buy
      <br className="hidden md:block" />construction materials
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Meet the new standard for construction procurement.
      <br className="hidden md:block" /> Save time and money on your next project in the NYC/NJ Tri-State Area.
    </HeroSubtitle>
    <Button
      href="/"
      intent="primary"
      size="lg"
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
    >
      Get started
      <Highlight>
        <ChevronIcon fill="currentColor" />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);