import Body from './../../components/body/body';
import { List } from '@mantine/core';

export default function Content() {

  return (
    <>
      <Body
        isStart={false}
        line={true}
        imgSrc='/imgs/versions.png'
        title='Natural Language'
        content=
        {
          <p>
            Quickly describe your goals or updates in plain English, and Frosti will convert these into the appropriate task action.
          </p>
        }
      />
      <Body
        isStart={true}
        line={true}
        imgSrc='/imgs/lightning.png'
        title=' Instant Overview'
        content=
        {
          <p>
            Ask Frosti for a quick snapshot of a project, milestone, or task. Instantly know  what's done, what's on track, and what's at risk.
          </p>
        }
      />
      <Body
        isStart={false}
        line={true}
        imgSrc='/imgs/blonde.png'
        title='Personalized Insights'
        content=
        {
          <p>
            Frosti learns from your individual and team habits. See how you're spending your time, where the bottlenecks are, and how to optimize it.
          </p>
        }
      />
      <Body
        isStart={true}
        line={true}
        imgSrc='/imgs/confidential.png'
        title='Confidential'
        content=
        {
          <p>
            Frosti is run on Microsoft Azure's OpenAI, so your data is proected by enterprise grade security.
          </p>
        }
      />
      <Body
        isStart={false}
        line={true}
        imgSrc='/imgs/build.png'
        title='Intelligent'
        soon
        content=
        {
          <p>
            Frosti can follow up on blockers, ensuring that progress continues smoothly without needing to chase people for updates.
          </p>
        }
      />
      <Body
        isStart={true}
        line={true}
        imgSrc='/imgs/integrated.png'
        title='Integrated'
        soon
        content=
        {
          <p>
            Chat with Frosti right from Teams, Slack and more.
          </p>
        }
      />
    </>
  );
}
