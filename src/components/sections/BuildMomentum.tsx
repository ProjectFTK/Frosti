'use client';

import CyclesImg from '@assets/images/seekers.png';
import { Features } from '@components/Features';

import {
  ConfigurableIcon,
  ScheduledIcon,
} from '../icons/features/buildMomentum';

import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
} from '@components/icons/features/issueTracking';

export const BuildMomentum = () => {
  return (
    <Features color="62,36,118" colorDark="62,36,118">
      <Features.Main
        title={
          <>
            Thoughtful matches,
            <br />
            real opportunities
          </>
        }
        image={CyclesImg}
        imgSize="small"
        text="Looking for your next gig? This isn't just another job board—it’s about finding you the right fit."
      />
      <Features.Grid
        features={[
          {
            icon: AutomatedBacklogIcon,
            title: 'Showcase Yourself.',
            text: 'Highlight career goals, values, work style, and skills.',
          },
          {
            icon: CustomViewsIcon,
            title: 'Thoughtful Applications.',
            text: 'Limited to 3 applies a day—use them wisely.',
          },
          {
            icon: ScheduledIcon,
            title: 'Timely Response.',
            text: 'Employers must reply within 7 days.',
          },
          {
            icon: ConfigurableIcon,
            title: 'Targeted Matches.',
            text: 'Use filters to align your experience with positions.',
          },
          {
            icon: DiscussionIcon,
            title: 'Tailored Introductions.',
            text: 'Send personalized messages when you match with jobs.',
          },
          {
            icon: IssuesIcon,
            title: 'Fit First.',
            text: 'Find jobs that match your values and work style.',
          },
        ]}
      />
    </Features>
  );
};
