'use client';

import logo from '@images/logo.svg';
import type { FC } from 'react';
import { Folders, Hammer, Users } from 'lucide-react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar: FC = () => {
  const pathname = usePathname();
  return (
    <aside className="w-[250px] p-8 bg-[var(--primary-0)] h-[100dvh] fixed top-0 left-0 max-md:hidden">
      <Link href={'/'} className="flex items-center gap-2">
        <Image src={logo} alt="logo" />
        <h3>Nuegas</h3>
      </Link>
      <ul className="!mt-15">
        <li className="mb-4">
          <Link
            className={clsx(
              'flex items-center gap-3 px-5 py-3 !text-[var(--secondary-300)] rounded-lg font-semibold transition duraction-400 ease hover:!text-[var(--secondary-500)]',
              (pathname.includes('/objects') || pathname == '/') &&
                '!text-[var(--secondary-500)] !bg-[var(--secondary-200)]',
            )}
            href={'/'}>
            {' '}
            <Folders size={24} />
            Объекты
          </Link>
        </li>
        <li className="mb-4">
          <Link
            className={clsx(
              'flex items-center gap-3 px-5 py-3 !text-[var(--secondary-300)] rounded-lg font-semibold transition duraction-400 ease hover:!text-[var(--secondary-500)]',
              pathname == '/employees' &&
                '!text-[var(--secondary-500)] !bg-[var(--secondary-200)]',
            )}
            href={'/employees'}>
            {' '}
            <Users size={24} />
            Персонал
          </Link>
        </li>
        <li className="mb-4">
          <Link
            className={clsx(
              'flex items-center gap-3 px-5 py-3 !text-[var(--secondary-300)] rounded-lg font-semibold transition duraction-400 ease hover:!text-[var(--secondary-500)]',
              pathname == '/tools' &&
                '!text-[var(--secondary-500)] !bg-[var(--secondary-200)]',
            )}
            href={'/tools'}>
            {' '}
            <Hammer size={24} />
            Инвентарь
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
