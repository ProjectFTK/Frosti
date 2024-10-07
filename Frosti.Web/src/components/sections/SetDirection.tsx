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
    <Features color="62,36,118" colorDark="62,36,118">
      <Features.Main
        title={
          <>
            Transform your
            <br />
            talent search
          </>
        }
        image={RoadmapImg}
        imgSize="small"
        text="Let's connect you with candidates who are as invested in your mission as you are."
      />
      <Features.Grid
        features={[
          {
            icon: MultiTeamIcon,
            title: 'All Access.',
            text: 'Reach candidates within your geographic preference.',
          },
          {
            icon: PreparedIcon,
            title: 'Daily Requests.',
            text: 'Engage with up to 3 candidates each day.',
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
            title: 'Free Early Access.',
            text: 'Enjoy free access as an early user.',
          },
        ]}
      />
    </Features>
  );
};
