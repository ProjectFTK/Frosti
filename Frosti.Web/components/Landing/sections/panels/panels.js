import Heading from '../../components/heading/heading';
import Container from '../../components/container/container';
import Faq from 'react-faq-component';
import { useMantineColorScheme } from '@mantine/core';

export default function Panels() {
  const component = 'panels';
  const { colorScheme } = useMantineColorScheme();

  const data = {
    rows: [
      {
        title: 'What is Frosti?',
        content: (
          <>
            <p>
            Frosti is an AI standup assistant that lets you skip daily status meetings and update your team asynchronously. You can share what you’re working on without interrupting your workflow, and Frosti will take care of summarizing and syncing with the rest of your team.
            </p>
          </>
        ),
      },
      {
        title: "Why should I use Frosti?",
        content:
          (
            <p>
              If you dread daily standups or find them disruptive, Frosti is for you. It allows you to update your team on your own time, keeps your tasks and progress in check, and reduces unnecessary meetings. Whether you’re working remotely, across time zones, or just hate status meetings, Frosti helps you stay productive without the meeting fatigue.
            </p>
          ),
      },
    ],
  };

  const styles = {
    rowContentColor: `${colorScheme == 'light' ? 'var(--global-colors-elephant)' : 'light'}`,
    arrowColor: 'var(--global-colors-cape)',
    bgColor: `${colorScheme == 'light' ? '' : 'dark'}`,
    rowTitleColor: `${colorScheme == 'light' ? '' : 'light'}`,
    rowContentPaddingTop: '20px',
    rowContentPaddingBottom: '30px',
    rowContentPaddingLeft: '40px',
    rowContentPaddingRight: '40px',
    titleTextSize: '0px',
    rowTitleTextSize: '22px',
    rowContentTextSize: '18px',
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <div className={component}>
      <Container componentClass={component} size={'small'} spacingBottom={'small'}>
        <Heading componentClass={component} title={'Frequently Asked Questions'} titleSize={'medium'} />
        <div style={{ marginTop: '1rem' }}>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </Container>
    </div>
  );
}
