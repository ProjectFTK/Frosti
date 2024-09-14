import React from 'react';

export default function Heading(props) {
  const component = 'shift-heading';

  const { componentClass, title, subtitle, color, align = 'center', titleSize = 'default', soon = false } = props;

  return (
    <>
      {title && (
        <div
          className={`
					${component}
					${component}__${componentClass}
					${component}__align--${align}
				`}
        >
          {title && (
            <>
              <div className={`${component}__title ${component}__title-size--${titleSize}`} style={{ color: `${color}`, display: 'inline' }}>
                {title}
              </div>
              {soon && <sub> Coming Soon</sub>}
            </>
          )}
          {subtitle && (
            <div
              className={`${component}__subtitle`}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></div>
          )}
        </div>
      )}
    </>
  );
}
