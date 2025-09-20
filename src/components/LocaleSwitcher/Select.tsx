'use client';

import clsx from 'clsx';
import { ReactNode, useTransition} from 'react';
type Props = {
  children: ReactNode;
  label: string;
};


export default function LocaleSwitcherSelect({
  children,
  label
}: Props) {
  const [isPending] = useTransition();
  return (
    <div
      className={clsx(
        'max-w-screen-xl flex flex-wrap items-center justify-end  p-2 relative ',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className='hidden sm:block' aria-valuetext={label}>Language:</p>
      <ul className="flex flex-row font-medium space-x-4 ml-4">
        {children}
      </ul>
    </div>
  );
}