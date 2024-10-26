'use client';

import CyclesImg from '@assets/images/seekers.png';
import { Features } from '@components/Features';

import {
  ConfigurableIcon,
  ScheduledIcon,
  DelaysIcon,
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
            Employee attrition?
            <br />
            Never heard of it.
          </>
        }
        image={CyclesImg}
        imgSize="small"
        text="Keep employees engaged by promoting internal movement, and reduce the costly impact of turnover."
      />
      <Features.Grid
        features={[
          {
            icon: DelaysIcon,
            title: 'Cut Hiring Costs.',
            text: 'Fill roles internally to save up to 4x the annual salary of the hire.',
          },
          {
            icon: AutomatedBacklogIcon,
            title: 'Protect Productivity.',
            text: 'Fill roles with internal candidates who know the processes.',
          },
          {
            icon: CustomViewsIcon,
            title: 'Prevent Burnout.',
            text: 'Empower employees to take on exciting roles to avoid burnout.',
          },
          {
            icon: DiscussionIcon,
            title: 'Retain Knowledge.',
            text: 'Foster internal mobility to keep valuable expertise.',
          },
          {
            icon: ScheduledIcon,
            title: 'Streamline Onboarding.',
            text: 'Internal hires reduce onboarding time and enhance cohesion.',
          },
          {
            icon: IssuesIcon,
            title: 'Minimize Mis-Hire Risks.',
            text: 'Promote proven employees into suitable roles to reduce risks.',
          },
        ]}
      />
    </Features>
  );
};
