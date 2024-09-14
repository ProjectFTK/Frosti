import Container from './../../components/container/container';

function Foot() {
  const component = 'shift-foot';

  return (
    <div className={component}>
      <Container componentClass={component} spacingBottom={'small'} spacingTop={'none'}>
        <div className={`${component}__columns`}>
          <div className={`${component}__column ${component}__column--left`}>
            <a
              href="mailto: founders@projectftk.com"
              rel="noopener noreferrer"
              className={`${component}__link`}
            >
              Contact Us
            </a>
          </div>
          <div className={`${component}__column ${component}__column--right`}>
            <span className={`${component}__copy`}>{'© Frosti. All rights reserved.'}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Foot;
