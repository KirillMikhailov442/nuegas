'use client'

import { useEffect, useState, type FC } from 'react';
import styles from './Header.module.scss';
import { Plus } from 'lucide-react';
import { Avatar } from '@chakra-ui/react';
import logo_img from '@images/logo.svg';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@UI/Button';

const Header: FC = () => {
  const pathName = usePathname()
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (pathName == '/') {
      setTitle('Объекты');
    } else if (pathName.includes('/objects')) {
      setTitle('Объект какойто');
    } else if (pathName == '/tools') {
      setTitle('Инвентарь');
    } else if (pathName == '/employees') {
      setTitle('Персонал');
    }
  }, [pathName]);
  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <h4 className={styles.title}>{title}</h4>
        <Link
          href={'/'}
          className={styles.logo}>
          <Image
            src={logo_img}
            alt="logo"
          />
          <h4>Nuegas</h4>
        </Link>
        <div className={styles.actions}>
          {(!id || !pathName.includes('/tasks')) && (
            <Button
              className={styles.create}
              onClick={() => {
                if (pathName == '/') {
                  dispatch(openModal({ key: 'createObject' }));
                } else if (pathName.includes('/objects')) {
                  dispatch(openModal({ key: 'createTask' }));
                } else if (pathName == '/employees') {
                  dispatch(openModal({ key: 'createEmployee' }));
                } else if (pathName == '/tools') {
                  dispatch(openModal({ key: 'createTool' }));
                }
              }}>
              <Plus size={20} /> Создать
            </Button>
          )}
          <Avatar
            className={styles.avatar}
            name="fake"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
