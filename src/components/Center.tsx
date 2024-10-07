import clsx from 'clsx';

interface CenterProps {
  children: React.ReactNode;
  className?: string;
}

export const Center = ({ children, className }: CenterProps) => {
  return (
    <div className={clsx('mx-auto flex items-center justify-center', className)}>
      {children}
    </div>
  );
};
