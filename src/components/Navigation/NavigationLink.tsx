'use client';

import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link} from '@/i18n/navigation';
import { cn } from "@/lib/utils"
export default function NavigationLink({
  className,
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'inline-block px-2 py-3 transition-colors',
        isActive?'isActive':"",
        isActive ? 'text-primary' : 'text-black hover:text-white',
        className
      )}
      href={href}
      {...rest}
    />
  );
}


