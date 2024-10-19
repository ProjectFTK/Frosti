'use client';

import RoadmapImg from '@assets/images/finder.png';
import { Features } from '@components/Features';

import {
  InsightsIcon,
  MultiTeamIcon,
  NotificationsIcon,
  RoadmapsIcon,
  TimelineIcon,
} from '../icons/features/setDirection';

import {
  PreparedIcon,
} from '../icons/features/buildMomentum';

export const SetDirection = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Recruiting made
            <br />
            fun and meaningful
          </>
        }
        image={RoadmapImg}
        imgSize="small"
        text="No inbox flooding—each candidate gets just 3 connect requests a day ensuring each one is deliberate and meaningful."
      />
      <Features.Grid
        features={[
          {
            icon: MultiTeamIcon,
            title: 'All Access.',
            text: 'Reach all candidates within your geographic preference.',
          },
          {
            icon: PreparedIcon,
            title: 'Unlimited Connects.',
            text: 'Candidates are limited to 3 per day, but recruiters are not.',
          },
          {
            icon: RoadmapsIcon,
            title: 'Culture Alignment.',
            text: 'Ensure a cultural fit from the first interaction.',
          },
          {
            icon: TimelineIcon,
            title: 'Excite Candidates.',
            text: 'Send personalized messages to spark genuine interest.',
          },
          {
            icon: InsightsIcon,
            title: 'Quality Candidates.',
            text: 'Engage with pre-filtered candidates who meet your criteria.',
          },
          {
            icon: NotificationsIcon,
            title: 'Pay-Per-Hire.',
            text: 'Only pay when you successfully fill the role.',
          },
        ]}
      />
    </Features>
  );
};
