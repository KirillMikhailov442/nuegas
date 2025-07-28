'use client'

import logo from '@images/logo.svg';
import type { FC } from 'react';
import { Folders, Hammer, Users } from 'lucide-react';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar: FC = () => {
  const pathname = usePathname()
  return (
    <aside className={styles.aside}>
      <Link
        href={'/'}
        className={styles.logo}>
        <Image
          src={logo}
          alt="logo"
        />
        <h3>Nuegas</h3>
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            className={clsx(
              styles.link,
              (pathname.includes('/objects') || pathname == '/') &&
                styles.active,
            )}
            href={'/'}>
            {' '}
            <Folders size={24} />
            Объекты
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx(
              styles.link,
              pathname == '/employees' && styles.active,
            )}
            href={'/employees'}>
            {' '}
            <Users size={24} />
            Персонал
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={clsx(styles.link, pathname == '/tools' && styles.active)}
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
