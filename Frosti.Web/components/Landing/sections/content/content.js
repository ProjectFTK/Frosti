import Body from './../../components/body/body';
import { List } from '@mantine/core';

export default function Content() {

  return (
    <>
      <Body
        isStart={false}
        line={true}
        imgSrc='/imgs/student.png'
        title='Reduced Fatigue'
        content=
        {
          <p>
            Frosti collects your updates async, and creates a high level rundown so everyone stays up to date without the hassle of standups.
          </p>
        }
      />
      <Body
        isStart={true}
        line={true}
        imgSrc='/imgs/blonde.png'
        title='More Honesty'
        content=
        {
          <p>
            Sometimes, team members might not feel comfortable voicing certain issues. With Frosti, they can report issues in a less pressurized environment.
          </p>
        }
      />
      <Body
        isStart={false}
        line={true}
        imgSrc='/imgs/versions.png'
        title='Intelligent'
        soon
        content=
        {
          <p>
            Frosti can auto update tasks and follow up on blockers, ensuring that progress continues smoothly without needing to chase people for updates.
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
            If Frosti fits your team's needs, we’re happy to integrate with platforms like Teams, Slack, and more for seamless collaboration.
          </p>
        }
      />
      <Body
        isStart={false}
        line={true}
        imgSrc='/imgs/educators.png'
        title='Data-Driven'
        soon
        content=
        {
          <p>
            Frosti learns over time, providing insights into completion, recurring blockers, and other patterns. This can be valuable for optimizing workflows.
          </p>
        }
      />
    </>
  );
}
