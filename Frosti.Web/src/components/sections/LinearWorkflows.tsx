'use client';

import { Features } from '@components/Features';
import { ChevronIcon } from '@components/icons/chevron';
import {
  AirbyteIcon,
  FigmaIcon,
  FrontInterZenIcon,
  GitIcon,
  SentryIcon,
  SlackDiscIcon,
} from '@components/icons/features/linearWorkflows';

export const LinearWorkflows = () => {
  return (
    <Features color="0,128,128" colorDark="0,77,77">
      <Features.Main
        title={
          <>
            Optimizing for
            <br /> the right fit
          </>
        }
        text="When you find the right fit, everyone wins. You’re happy, they’re happy, and the whole team works better together."
      />
      <Features.Grid
        features={[
          {
            icon: GitIcon,
            title: 'GitHub and GitLab.',
            text: 'Prs with issues that close automatically.',
          },
          {
            icon: SlackDiscIcon,
            title: 'Slack and Discord.',
            text: 'Create issues and set up alerts.',
          },
          {
            icon: SentryIcon,
            title: 'Sentry.',
            text: 'Automatically create issues from code exceptions.',
          },
          {
            icon: AirbyteIcon,
            title: 'Airbyte.',
            text: 'Sync workspace data to external warehouses and databases.',
          },
          {
            icon: FrontInterZenIcon,
            title: 'Front, Intercom, Zendesk.',
            text: 'Keep a tight loop with your users.',
          },
          {
            icon: FigmaIcon,
            title: 'Figma.',
            text: 'Embed design files in issues and documents.',
          },
        ]}
      />
    </Features>
  );
};
