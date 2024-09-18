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
              Frosti is an AI-powered project management tool designed to simplify how you and your team organize, track, and complete tasks. With real-time automated project updates, Frosti takes the manual work out of managing projects. It's built to help individuals stay on top of their work and teams stay in sync, making collaboration seamless and efficient.
            </p>
          </>
        ),
      },
      {
        title: "Why should my team use Frosti?",
        content:
          (
            <p>
              Your team should use Frosti because it saves time and reduces the complexity of managing projects. Frosti automates task assignment, tracks progress, and provides AI-generated insights that highlight bottlenecks and risks before they become issues. By getting instant project overviews and personalized recommendations, your team can focus more on completing work and less on organizing it.
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
