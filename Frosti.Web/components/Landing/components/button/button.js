export default function Button(props) {
  const component = 'shift-button';

  const { componentClass, label, href, target, size = 'default', color = 'default' } = props;

  return (
    <a
      className={`
				${component}
				${component}__size--${size}
				${component}__color--${color}
				${component}__${componentClass}
			`}
      href={href}
      target={target}
    >
      {label}
    </a>
  );
}
