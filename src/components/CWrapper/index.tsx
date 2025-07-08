import React from 'react';
import { cn } from '../../utils';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const CWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-4 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CWrapper;
