'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import Image from "next/image";
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};


export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  return (
    <label
      className={clsx(
        'max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-2 relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p aria-valuetext={label}>Language:</p>
      <ul className="flex flex-row font-medium space-x-4 ml-4">
        {children}
      </ul>
    </label>
  );
}