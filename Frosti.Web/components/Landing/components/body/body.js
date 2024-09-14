import Heading from '../heading/heading';
import Container from '../container/container';
import { Center } from '@mantine/core';


export default function Body(props) {
  const component = 'shift-body';
  const {
    isStart,
    imgSrc,
    title,
    content,
    color,
    line,
    soon
  } = props;

  return (
    <>
      {
        isStart &&
        <div className={component}>
          {
            title &&
            <Container componentClass={component} size={'medium'} spacingBottom={'none'}>
              <Heading componentClass={component} title={title} align={'right'} color={color} titleSize={'medium'} soon={soon} />
            </Container>
          }
          {
            content && imgSrc &&
            <Container componentClass={component} size={'medium'} spacingTop={'none'}>
              <div className={`${component}__image`}>
                <img className={`${component}__image-img`} src={imgSrc} />
              </div>
              <div className={`${component}__content`}>
                {content}
              </div>
            </Container>
          }
        </div>
      }

      {
        !isStart &&
        <div className={component}>
          {
            title &&
            <Container componentClass={component} size={'medium'} spacingBottom={'none'}>
              <Heading componentClass={component} title={title} align={'left'} color={color} titleSize={'medium'} soon={soon} />
            </Container>
          }
          {
            content && imgSrc &&
            <Container componentClass={component} size={'medium'} spacingTop={'none'} >
              <div className={`${component}__image-end`}>
                <img className={`${component}__image-img`} src={imgSrc} />
              </div>
              <div className={`${component}__content-end`}>
                {content}
              </div>
            </Container>
          }
        </div>
      }
      {line && <hr color='gray' />}
    </>
  );
}