'use client';

import CardBoardImg from '@assets/images/confidential.png';
import CardViewsImg from '@assets/images/build.png';
import IssuesImg from '@assets/images/engage.png';
import { Features } from '@components/Features';
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from '@components/icons/features/issueTracking';

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Elevated Access,
            <br /> the right way
          </>
        }
        image={IssuesImg}
        text="Request least privilege access by describing your intent, without needing to worry about platform-specific permissions.
"
      />
      <Features.Cards
        features={[
          {
            image: CardBoardImg,
            width: 350,
            title: 'Confidential',
            text: 'Backed by Microsoft\'s built-in security, responses are not available to anyone else and are not used to train any AI models.',
          },
          {
            image: CardViewsImg,
            width: 350,
            title: 'Up-to-date',
            text: 'New roles are added constantly to ensure everything stays current. If you notice something missing, feel free to reach out.',
          },
        ]}
      />
    </Features>
  );
};
