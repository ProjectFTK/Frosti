'use client';

import CardRoadmapsImg from '@assets/images/card-roadmaps.webp';
import CardUpdatesImg from '@assets/images/Requests.png';
import RoadmapImg from '@assets/images/finder.png';
import { Features } from '@components/Features';

import {
  DocumentsIcon,
  InsightsIcon,
  MultiTeamIcon,
  NotificationsIcon,
  RoadmapsIcon,
  TimelineIcon,
} from '../icons/features/setDirection';

export const SetDirection = () => {
  return (
    <Features color="62,36,118" colorDark="62,36,118">
      <Features.Main
        title={
          <>
            A smarter
            <br />
            way to hire
          </>
        }
        image={RoadmapImg}
        imgSize="large"
        text="Let's connect you with candidates who are as invested in your mission as you are, allowing you to build a team that’s not just qualified—but committed."
      />
      <Features.Grid
        features={[
          {
            icon: MultiTeamIcon,
            title: 'Multi-team projects.',
            text: 'Collaborate across teams and departments.',
          },
          {
            icon: DocumentsIcon,
            title: 'Project documents.',
            text: 'Write project briefs and specs directly in Linear.',
          },
          {
            icon: RoadmapsIcon,
            title: 'Custom roadmaps.',
            text: 'Organize projects across multiple roadmaps.',
          },
          {
            icon: TimelineIcon,
            title: 'Timeline view.',
            text: 'Visualize the product journey ahead.',
          },
          {
            icon: InsightsIcon,
            title: 'Project insights.',
            text: 'Track scope, velocity, and progress over time.',
          },
          {
            icon: NotificationsIcon,
            title: 'Personal notifications.',
            text: 'Stay in the loop on project activity and updates.',
          },
        ]}
      />
    </Features>
  );
};
