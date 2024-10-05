import { AlanLogo } from '@components/logos/alan';
import { ArcLogo } from '@components/logos/arc';
import { DescriptLogo } from '@components/logos/descript';
import { LoomLogo } from '@components/logos/loom';
import { MercuryLogo } from '@components/logos/mercury';
import { OpenSeaLogo } from '@components/logos/opensea';
import { PitchLogo } from '@components/logos/pitch';
import { RaycastLogo } from '@components/logos/raycast';
import { RetoolLogo } from '@components/logos/retool';

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-gray-300">
        Join The Wall for a chane to be a part of something great.
      </span>
      <br className="hidden md:block" /> From next-gen startups to established
      enterprises.
    </p>
    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <LoomLogo className="hidden md:block" />
      <DescriptLogo className="hidden md:block" />
      <RaycastLogo />
      <MercuryLogo />
      <RetoolLogo />
      <AlanLogo className="hidden md:block" />
      <ArcLogo className="hidden md:block" />
      <OpenSeaLogo className="hidden md:block" />
      <PitchLogo className="hidden md:block" />
    </div>
  </>
);