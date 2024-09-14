import Container from './../../components/container/container';
import Button from './../../components/button/button';
import { Text } from '@mantine/core';

export default function Banner() {
  const component = 'shift-banner';

  return (
    <>
      <div className={component}>
        <Container componentClass={component} size={'medium'} spacingTop={'small'} spacingBottom={'medium'}>
          <div
            className={`
					${component}__align--left
				`}
          >
            <div className={`${component}__title ${component}__title-size--medium`}>
              Limited Free Beta
            </div>
            <div className={`${component}__content`} style={{ marginTop: '10px' }}>
              @Admins! Experience the power of AI customization firsthand by being one of the first organizations to sign up.

            </div>

          </div>

        </Container>

      </div>
      <hr />
    </>
  );
}
