'use client'

import type { FC } from 'react';
import styles from './Object.module.scss';
import project_img from '@images/project.jpg';
import { Avatar, AvatarGroup, Progress } from '@chakra-ui/react';
import { Calendar, Pencil, Trash } from 'lucide-react';
import { Dropdown, type MenuProps } from 'antd';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';
import Link from 'next/link';
import Image from 'next/image';

const ObjectCard: FC = () => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <Pencil size={20} />,
      label: 'Редактировать',
      onClick: () => dispatch(openModal({ key: 'editObject' })),
    },
    {
      key: '2',
      icon: <Trash size={20} />,
      label: 'Удалить',
      onClick: () => dispatch(openModal({ key: 'deleteObject' })),
      danger: true,
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      trigger={['contextMenu']}>
      <li>
        <Link
          href={'/objects/1'}
          className={styles.card}>
          <Image
            className={styles.img}
            src={project_img}
            loading="lazy"
            alt="Проект заголовок"
          />
          <footer className={styles.footer}>
            <p className={styles.title}>Мой объект</p>
            <div className={styles.progressbar}>
              <div>
                <h6>Прогресс</h6>
                <p className={styles.number}>100%</p>
              </div>
              <Progress
                className={styles.progress}
                color="primary-500"
                value={90}
              />
            </div>
            <footer className={styles.down}>
              <p className={styles.date}>
                <Calendar size={20} /> <span>12 Апреля 2023</span>
              </p>
              <AvatarGroup
                max={3}
                size={'xs'}>
                <Avatar name="a" />
                <Avatar name="bss" />
                <Avatar name="caa" />
                <Avatar name="dcc" />
              </AvatarGroup>
            </footer>
          </footer>
        </Link>
      </li>
    </Dropdown>
  );
};

export default ObjectCard;
