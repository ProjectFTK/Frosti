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

import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from '@components/icons/features/issueTracking';

export const SetDirection = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Feeling stuck?
            <br />
            Let's change that.
          </>
        }
        image={RoadmapImg}
        imgSize="small"
        text="Explore opportunities within your company so you can grow, learn, and advance your career without missing a beat."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: 'Explore Opportunities',
            text: 'Discover new roles that match your interests and goals.',
          },
          {
            icon: MultiTeamIcon,
            title: 'Cross-Team Connections',
            text: 'Network effortlessly with colleagues across departments.',
          },
          {
            icon: RoadmapsIcon,
            title: 'Career Path Guidance',
            text: 'Receive tailored recommendations for your career journey.',
          },
          {
            icon: AutomatedBacklogIcon,
            title: 'Reenergize Your Career',
            text: 'Find fresh roles that reignite your passion and energy',
          },
          {
            icon: InsightsIcon,
            title: 'Seamless Transition',
            text: 'Advance your career without having to start from scratch.',
          },
          {
            icon: TimelineIcon,
            title: 'Strategic Connects',
            text: 'Limited to 3 connect requests daily—make each one count.',
          },
        ]}
      />
    </Features>
  );
};
